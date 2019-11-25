import React, { Suspense, useEffect } from "react"
import { Canvas } from "react-three-fiber"
import styled from "styled-components"
import { Controls } from "../components/3d/controls"
import { SlotMachine } from "../components/3d/slotmachine/slotmachine"
import { useWheels } from "../components/3d/wheel/useWheel"
import { Wheel } from "../components/3d/wheel/wheel"
import { Hud } from "../components/hud/hud"
import { useGame } from "../features/game/hook"

const CanvasWrapper = styled.div`
  height: 100vh;
  overflow: hidden;
  margin: 0;
  padding: 0;
`

const IndexPage = () => {
  const wheels = useWheels({
    0: 0,
    1: 0,
    2: 0,
  } as const)
  const { bind, goTo } = wheels
  const { rolls } = useGame()
  useEffect(() => {
    rolls.forEach((roll, index) => {
      goTo(index as any)({
        numberOfTurn: roll.turn,
        value: roll.value,
      })
    })
    //   goTo(0)({ numberOfTurn: 1, value: 0 })
    //   goTo(1)({ numberOfTurn: 6, value: 5 })
    //   goTo(2)({ numberOfTurn: 7, value: 2 })
  }, [rolls])
  return (
    <CanvasWrapper>
      <Canvas camera={{ fov: 45, position: [0, 0, 300], near: 1, far: 1000 }}>
        <Suspense fallback={null}>
          <Wheel {...bind(0)} />
          <Wheel {...bind(1)} />
          <Wheel {...bind(2)} />
          <SlotMachine />
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
      <Hud />
    </CanvasWrapper>
  )
}

export default IndexPage
