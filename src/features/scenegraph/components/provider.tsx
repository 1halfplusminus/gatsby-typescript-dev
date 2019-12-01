import * as either from "fp-ts/lib/Either"
import React, { PropsWithChildren, useContext, useEffect, useState } from "react"
import * as THREE from "three"
import { SceneGraphContext, useInitSceneGraph } from "../hook"
import { getAsset } from "../utils"

export const SceneGraphProvider = ({ children }: PropsWithChildren<{}>) => {
  const contextObject3D = useContext(SceneGraphContext);
  const [object3D, setObject3D] = useState<{
    [key: string]: either.Either<Error, THREE.Object3D>
  }>(contextObject3D)
  const init = useInitSceneGraph(scene => {
    setObject3D(scene.children.reduce<{
      [key: string]: either.Either<Error, THREE.Object3D>
    }>((acc, value) => {
      acc[value.name] = getAsset(scene)(value.name as any)
      return acc;
    }, {}))
  })
  useEffect(() => {
    init()
  }, [])
  return (
    <SceneGraphContext.Provider value={object3D}>
      {children}
    </SceneGraphContext.Provider>
  )
}
/* object3d: {
    Background: getAsset(scene)("Background"),
    SlotMachine: getAsset(scene)("SlotMachine"),
    Row1: getAsset(scene)("Row1"),
    Row2: getAsset(scene)("Row2"),
    Row3: getAsset(scene)("Row3"),
  }, */
