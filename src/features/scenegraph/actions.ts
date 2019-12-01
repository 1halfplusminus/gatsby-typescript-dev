import * as either from "fp-ts/lib/Either"
import { pipe } from "fp-ts/lib/pipeable"
import * as taskeither from "fp-ts/lib/TaskEither"
import { once } from 'lodash'
import * as THREE from "three"
import { GLTF, GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { initSceneGraph, mainSceneLoaded, SceneThunk } from "./sceneGraph"

const loadMainScene = () =>
  taskeither.tryCatch<Error, GLTF>(
    () => {
      return new Promise(resolve => {
        new GLTFLoader().load(
          require("./assets/slotscene.glb"),
          loadedAsset => {
            resolve(loadedAsset)
          }
        )
      })
    },
    (e: any) => new Error(`Unable to load main scene: ${e.message}`)
  )

export const init = (
  onLoaded: (scene: THREE.Scene) => void
) => (): SceneThunk => async (dispatch, getState) => {
  dispatch(initSceneGraph())
  pipe(
    once(loadMainScene()),
    taskeither.map(gltf => {
      return gltf.scene
    })
  )().then(
    pipe(
      either.fold(
        e => {
          console.log(e)
        },
        scene => {
          dispatch(mainSceneLoaded())
          onLoaded(scene)
        }
      )
    )
  )
}
