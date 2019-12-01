import * as either from "fp-ts/lib/Either"
import * as option from "fp-ts/lib/Option"
import { pipe } from "fp-ts/lib/pipeable"
import { createContext, useContext, useEffect, useMemo, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useThree } from "react-three-fiber"
import * as THREE from "three"
import { init } from "./actions"
import {
  MainSceneAssetKey,
  SceneGraphState,
  unProjectedPositionChange,
} from "./sceneGraph"
import { screenXY } from "./utils"

export const SceneGraphContext = createContext<{
  [key: string]: either.Either<Error, THREE.Object3D>
}>({})

export const useSceneGraph = () => {
  const { loaded, loading } = useSelector(
    (state: { scene: SceneGraphState }) => ({
      loaded: state.scene.init,
      loading: state.scene.firstLoading,
    })
  )
  return {
    loaded,
    loading,
  }
}
export const useInitSceneGraph = (onLoaded: (scene: THREE.Scene) => void) => {
  const dispatch = useDispatch()
  return () => {
    dispatch(init(onLoaded)())
  }
}

export const trackUnprojectedPosition = (key: MainSceneAssetKey) => {
  const dispatch = useDispatch()
  const { getObject } = useObjects3d()
  const { camera, viewport } = useThree()
  const position = useRef<option.Option<THREE.Vector3>>(option.none)
  const getX = pipe(
    position.current,
    option.fold(() => 0, p => p.x)
  )
  const getY = pipe(
    position.current,
    option.fold(() => 0, p => p.y)
  )
  const updatePosition = () =>
    pipe(
      position.current,
      option.fold(
        () => {},
        p => {
          dispatch(
            unProjectedPositionChange({
              key,
              position: pipe(
                screenXY({ position3D: p, camera }),
                v => ({ x: v.x, y: v.y })
              ),
            })
          )
        }
      )
    )
  useEffect(() => {
    pipe(
      getObject(key),
      option.fold(
        () => {},
        m => {
          position.current = option.some(m.position)
          updatePosition()
        }
      )
    )
  }, [option.isSome(getObject(key))])
  useEffect(() => {
    updatePosition()
  }, [getX, getY])
  useEffect(() => {
    updatePosition()
  }, [viewport.height, viewport.width])
}

export const useObjects3d = () => {
  const objects = useContext(SceneGraphContext)
  const getObject = useMemo(
    () => (key: MainSceneAssetKey) => {
      return pipe(
        option.fromNullable(objects[key]),
        option.chain(ob => option.fromEither(ob))
      )
    },
    [objects]
  )
  return {
    getObject,
  }
}

interface UseObject3DPositionProps {
  key: MainSceneAssetKey
  mapPosition?: ({ x, y }: { x: number; y: number }) => { x: number; y: number }
}
export const useObject3DPosition = ({
  key,
  mapPosition = p => p,
}: UseObject3DPositionProps) => {
  const { positions } = useSelector((state: { scene: SceneGraphState }) => ({
    positions: state.scene.unprojectedPosition,
  }))
  const getPosition = pipe(option.fromNullable(positions[key]))
  return {
    getPosition,
    style: () =>
      pipe(
        getPosition,
        option.map(position => ({ top: position.y, left: position.x }))
      ),
    css: pipe(
      getPosition,
      option.map(mapPosition),
      option.fold(
        () => ``,
        position => `
      position: absolute;
      top: ${position.y}px;
      left: ${position.x}px;
      z-index: 99999;
    `
      )
    ),
  }
}

export const use3DPopper = ({
  key,
  height,
  width,
  mapPosition = p => p,
}: UseObject3DPositionProps & { height: number; width: number }) => {
  const { getPosition, css } = useObject3DPosition({
    key,
    mapPosition: p =>
      pipe(
        p,
        p2 => ({ x: p2.x - width / 2, y: p2.y - height / 2 }),
        mapPosition
      ),
  })
  return {
    getPosition,
    css: pipe(
      css,
      base => `
        ${base}
        height: ${height}px;
        width: ${width}px;
      `
    ),
  }
}
