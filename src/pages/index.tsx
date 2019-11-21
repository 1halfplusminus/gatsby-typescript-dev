import React, { Suspense, useEffect, useMemo, useRef, useState } from "react"
import {
  Canvas,
  ReactThreeFiber,
  useFrame,
  useRender,
  useThree,
} from "react-three-fiber"
import styled from "styled-components"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"
import { useBlogPostsQuery } from "../blogs/hooks/useBlogPostsQuery"
import slotMachine from "./slot_texture.png"

const Controls = (props: Partial<OrbitControls>) => {
  const { gl, camera } = useThree()
  const ref = useRef(
    Object.assign(new OrbitControls(camera, gl.domElement), props)
  )
  useRender(() => ref.current.update(), false)
  return <> </>
}
type WheelValue = 0 | 1 | 2 | 3 | 4 | 5 | 6
const Wheel = ({
  index,
  goTo = false,
  size = 20,
  value = 0,
  onFinish,
}: {
  index: number
  goTo:
    | {
        numberOfTurn: number
        value: WheelValue
      }
    | false
  size?: number
  value?: WheelValue
  onFinish?: (value: WheelValue) => void
}) => {
  const texture = useMemo(() => new THREE.TextureLoader().load(slotMachine), [
    slotMachine,
  ])
  texture.wrapS = THREE.RepeatWrapping
  texture.wrapT = THREE.RepeatWrapping
  const numberOfFace = 6
  const degPerFace = 51.4285714286
  const rotationPerFace = THREE.Math.degToRad(-degPerFace)
  const ref = useRef<THREE.Mesh>()
  const getAngleForValue = (v: number) => {
    return rotationPerFace * v
  }
  const rotation = useRef<number>(0)
  const rotationPerFrame = THREE.Math.degToRad(5)
  const calculeRotation = () => {
    if (goTo) {
      if (goTo.numberOfTurn === 0) {
        return -rotationPerFace * goTo.value
      }
      return (
        (goTo.numberOfTurn - 1) * (rotationPerFace * numberOfFace) +
        getAngleForValue(goTo.value + numberOfFace - value + goTo.numberOfTurn)
      )
    }
    return 0
  }
  const [finished, setFinished] = useState(false)
  useFrame(() => {
    if (rotation.current !== 0) {
      ref.current.rotation.x -= rotationPerFrame
      rotation.current = Math.min(rotation.current + rotationPerFrame, 0)
      if (rotation.current === 0) {
        if (goTo && onFinish && !finished) {
          setFinished(true)
          onFinish(goTo.value)
        }
      }
    }
  })
  useEffect(() => {
    if (goTo) {
      rotation.current = calculeRotation()
    }
  }, [goTo])

  return (
    <mesh
      ref={ref}
      position={[(size + 5) * index - 30, 0, 0]}
      rotation={[getAngleForValue(value), 0, Math.PI / 2]}
    >
      <cylinderBufferGeometry
        attach="geometry"
        args={[size, size, size, 28, 1, false, -rotationPerFace / 2]}
      />
      <meshBasicMaterial attach="material" map={texture} />
    </mesh>
  )
}

const Plane = () => {
  const ref = useRef<ReactThreeFiber.Object3DNode<THREE.Mesh, any>>()
  return (
    <mesh ref={ref} position={[0, -15, 0]} rotation={[-0.5 * Math.PI, 0, 0]}>
      <planeBufferGeometry attach="geometry" args={[150, 150]} />
      <meshLambertMaterial attach="material" color={"#b8edff"} />
    </mesh>
  )
}

const CanvasWrapper = styled.div`
  height: 100vh;
`

const useWheel = (
  { value: defaultValue }: { value?: WheelValue } = { value: 0 }
) => {
  const [value, setValue] = useState<WheelValue>(defaultValue)
  const [{ numberOfTurn, value: goToValue }, setGo] = useState<{
    numberOfTurn: number
    value: WheelValue
  }>({
    numberOfTurn: 0,
    value: 0,
  })

  useEffect(() => {
    setValue(defaultValue)
  }, [defaultValue])
  return {
    numberOfTurn,
    goToValue,
    value,
    goTo: ({
      value: sgoToValue,
      numberOfTurn: shadowNumberOfTurn,
    }: {
      value: WheelValue
      numberOfTurn: number
    }) => {
      setGo({
        numberOfTurn: shadowNumberOfTurn,
        value: sgoToValue,
      })
      setValue(goToValue)
    },
    handleFinish: () => () => {
      setValue(goToValue)
    },
  }
}

function useWheels<T extends { [key: number]: WheelValue }>(wheels: T) {
  const states = Object.values(wheels).reduce(
    (p, c, index) => {
      p[index] = useWheel({ value: c })
      return p
    },
    {} as { [K in keyof T]: ReturnType<typeof useWheel> }
  )
  return {
    ...states,
    goTo: (p: keyof typeof states) => {
      return states[p].goTo
    },
    get: (p: keyof typeof states) => {
      return states[p]
    },
    bind: (p: keyof typeof states) => {
      return {
        index: p,
        goTo: {
          value: states[p].goToValue,
          numberOfTurn: states[p].numberOfTurn,
        },
        value: states[p].value,
      }
    },
  }
}

const IndexPage = () => {
  const data = useBlogPostsQuery()
  const wheels = useWheels({
    0: 0,
    1: 0,
    2: 0,
  } as const)
  const { bind, goTo } = wheels
  useEffect(() => {
    goTo(0)({ numberOfTurn: 5, value: 1 })
    goTo(1)({ numberOfTurn: 5, value: 5 })
    goTo(2)({ numberOfTurn: 5, value: 2 })
  }, [])
  return (
    <CanvasWrapper>
      <Canvas camera={{ fov: 45, position: [0, 0, 300], near: 1, far: 1000 }}>
        <Suspense fallback={null}>
          <Wheel {...bind(0)} />
          <Wheel {...bind(1)} />
          <Wheel {...bind(2)} />
        </Suspense>
        <spotLight
          args={["0xffffff"]}
          position={[20, 50, 100]}
          castShadow={true}
        />
        <Controls
          autoRotate={false}
          enablePan={true}
          enableZoom={true}
          enableDamping={true}
          enableRotate={true}
          dampingFactor={0.5}
          rotateSpeed={1}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </CanvasWrapper>
  )
}

export default IndexPage
