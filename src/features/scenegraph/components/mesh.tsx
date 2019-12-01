import * as option from "fp-ts/lib/Option"
import { pipe } from "fp-ts/lib/pipeable"
import React from "react"
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
  return pipe(
    getObject(objectKey),
    option.fold(
      () => null,
      b => (
        <mesh {...rest}>
          <primitive object={b} />
        </mesh>
      )
    )
  )
}
