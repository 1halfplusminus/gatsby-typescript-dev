import React, { Suspense, useEffect } from "react"
import { Canvas } from "react-three-fiber"
import styled from "styled-components"
import { Controls } from "../components/3d/controls"
import { SlotMachineGL } from "../components/3d/slotmachinegl/slotmachinegl"
import { useWheels } from "../components/3d/wheel/useWheel"
import { ConnectedHud } from "../features/game/components/hud"
import { useGame } from "../features/game/hook"

const CanvasWrapper = styled.div`
  height: 100vh;
  overflow: hidden;
  margin: 0;
  padding: 0;
`

const IndexPage = () => {
  const { rolls, rollFinished } = useGame()
  const wheels = useWheels({
    wheels: {
      0: 0,
      1: 3,
      2: 4,
    },
    onRollFinish: () => {
      rollFinished()
    }
  })
  const { bind, goTo } = wheels

  useEffect(() => {
    rolls.forEach((roll, index) => {
      setTimeout(() => {
        goTo(index)({
          numberOfTurn: roll.turn,
          value: roll.value,
        })
      }, index * 1000)
    })
  }, [rolls])
  return (
    <CanvasWrapper>
      <Canvas
        onCreated={({ gl }) => {
          gl.localClippingEnabled = true
        }}
        camera={{ fov: 45, position: [0, 0, 3], near: 1, far: 1000 }}
      >
        <Suspense fallback={null}>
          <SlotMachineGL wheels={[bind(0), bind(1), bind(2)]} />
          {/* <Wheel {...bind(0)} /> */}

          {/* <Wheel {...bind(1)} />
          <Wheel {...bind(2)} /> */}
          {/* <SlotMachine /> */}
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
      <ConnectedHud />
    </CanvasWrapper>
  )
}

export default IndexPage
