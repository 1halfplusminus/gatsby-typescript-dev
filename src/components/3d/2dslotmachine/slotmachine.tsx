import React, { useRef } from "react"
import * as THREE from "three"
import machine from "./texture.png"

export const useTexture = () => {
  const { current: texture } = useRef<THREE.Texture>(
    new THREE.TextureLoader().load(machine)
  )

  return {
    texture,
  }
}

export const SlotMachine = () => {
  const { texture } = useTexture()
  const ref = useRef<THREE.Sprite>()
  return (
    <group>
      <sprite
        scale={[1147 / 10, 1384 / 10, 1]}
        ref={ref}
        position={[-32, -150, -0]}
        rotation={[0, 0, 0]}
      >
        <vector2 attach="center" args={[0, -0.5]} />
        <spriteMaterial attach="material" map={texture} />
      </sprite>
    </group>
  )
}
