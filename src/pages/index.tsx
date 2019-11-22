import React, { Suspense, useEffect, useRef } from "react"
import { Canvas, ReactThreeFiber, useRender, useThree } from "react-three-fiber"
import styled from "styled-components"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"
import { useWheels } from "../components/wheel/useWheel"
import { Wheel } from "../components/wheel/wheel"

const Controls = (props: Partial<OrbitControls>) => {
  const { gl, camera } = useThree()
  const ref = useRef(
    Object.assign(new OrbitControls(camera, gl.domElement), props)
  )
  useRender(() => ref.current.update(), false)
  return <> </>
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

const IndexPage = () => {
  const wheels = useWheels({
    0: 0,
    1: 0,
    2: 0,
  } as const)
  const { bind, goTo } = wheels
  useEffect(() => {
    goTo(0)({ numberOfTurn: 1, value: 0 })
    goTo(1)({ numberOfTurn: 6, value: 5 })
    goTo(2)({ numberOfTurn: 7, value: 2 })
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
