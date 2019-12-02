import * as option from "fp-ts/lib/Option"
import { pipe } from "fp-ts/lib/pipeable"
import React, { useRef } from "react"
import { ReactThreeFiber } from "react-three-fiber"
import * as THREE from "three"
import { useObjects3d } from "../hook"
import { MainSceneAssetKey } from "../sceneGraph"
export type MeshProps = {
  objectKey: MainSceneAssetKey
  trackUnProjectPosition?: boolean
} & ReactThreeFiber.Object3DNode<THREE.Mesh, typeof THREE.Mesh>

export const Mesh = ({ objectKey, ...rest }: MeshProps) => {
  const { getObject } = useObjects3d()
  const ref = useRef<THREE.Object3D>()
  return pipe(
    getObject(objectKey),
    option.map(o => {
      ref.current = o
      return o
    }),
    option.fold(() => null, b => <primitive {...rest} object={b} />)
  )
}
