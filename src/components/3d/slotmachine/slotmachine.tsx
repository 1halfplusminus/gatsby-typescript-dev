import React, { useRef } from "react"
import * as THREE from "three"
import create from "./crate.gif"

const useTexture = () => {
  const { current: texture } = useRef<THREE.Texture>(
    new THREE.TextureLoader().load(create)
  )

  return {
    texture,
  }
}
const useMesh = () => {
  const ref = useRef<THREE.Mesh>()
  const { current: mesh } = ref
  return {
    mesh,
    bind: (current: THREE.Mesh) => {
      ref.current = current
    },
  }
}
export const SlotMachine = () => {
  const { texture } = useTexture()
  const { mesh, bind } = useMesh()
  return (
    <mesh ref={bind} position={[-10, 0, 0]}>
      <boxBufferGeometry attach="geometry" args={[100, 100, 10]} />
      <meshBasicMaterial attach="material" map={texture} />
    </mesh>
  )
}
