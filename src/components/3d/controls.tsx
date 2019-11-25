import React, { useRef } from "react"
import { useRender, useThree } from "react-three-fiber"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"
export const Controls = (props: Partial<OrbitControls>) => {
  const { gl, camera } = useThree()
  const ref = useRef(
    Object.assign(new OrbitControls(camera, gl.domElement), props)
  )
  useRender(() => ref.current.update(), false)
  return <> </>
}
