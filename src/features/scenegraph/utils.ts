import * as either from "fp-ts/lib/Either"
import * as THREE from "three"
import { MainSceneAssetKey } from "./sceneGraph"

export const getAsset = (scene: THREE.Scene) => {
  return (key: MainSceneAssetKey) =>
    either.fromNullable(new Error(`No asset for ${key}`))(
      scene.getObjectByName(key)
    )
}
export function screenXY({
  position3D,
  camera,
}: {
  position3D: THREE.Vector3
  camera: THREE.Camera
}) {
  const vector = position3D.clone()
  const windowWidth = window.innerWidth


  const widthHalf = windowWidth / 2
  const heightHalf = window.innerHeight / 2

  vector.project(camera)

  vector.x = vector.x * widthHalf + widthHalf
  vector.y = -(vector.y * heightHalf) + heightHalf
  vector.z = 0

  return vector
}
