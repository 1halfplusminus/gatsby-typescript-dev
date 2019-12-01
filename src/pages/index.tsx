import React, { Suspense } from "react"
import { Provider } from "react-redux"
import { Canvas } from "react-three-fiber"
import styled, { createGlobalStyle } from "styled-components"
import store from "../app/store"
import { useWheels } from "../components/3d/wheel/useWheel"
import { ConnectedHud } from "../features/game/components/hud"
import { useGame } from "../features/game/hook"
import { SceneGraphProvider } from "../features/scenegraph/components/provider"
import SlotMachine from "../features/scenegraph/components/slotmachine"

const GlobalStyle = createGlobalStyle`
  html,body {
    margin: 0;
    overflow: hidden;
  }
`

const CanvasWrapper = styled.div`
  height: 100vh;
  overflow: hidden;
  margin: 0;
  padding: 0;
`

const IndexPage = () => {
  const { rolls, rollFinished, rolling, loading } = useGame()
  const wheels = useWheels({
    wheels: {
      0: 7,
      1: 7,
      2: 7,
    },
    onRollFinish: () => {
      rollFinished()
    },
    rolls,
    rolling,
    loading,
  })
  const { bind } = wheels

  return (
    <CanvasWrapper>
      <GlobalStyle />
      <Canvas
        onCreated={({ gl }) => {
          gl.localClippingEnabled = true
        }}
        camera={{ fov: 45, position: [0, 0, 3], near: 1, far: 1000 }}
      >
        <Suspense fallback={null}>
          <Provider store={store}>
            <SceneGraphProvider>
              <SlotMachine wheels={[bind(0), bind(1), bind(2)]} />
            </SceneGraphProvider>
          </Provider>
        </Suspense>
        <spotLight
          args={["0xffffff"]}
          position={[20, 50, 100]}
          castShadow={true}
        />
        {/*         <Controls
          autoRotate={false}
          enablePan={true}
          enableZoom={true}
          enableDamping={true}
          enableRotate={true}
          dampingFactor={0.5}
          rotateSpeed={1}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        /> */}
      </Canvas>
      <ConnectedHud />
    </CanvasWrapper>
  )
}

export default IndexPage
