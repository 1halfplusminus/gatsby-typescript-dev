import React, { useEffect, useMemo, useRef, useState } from "react"
import { useFrame } from "react-three-fiber"
import * as THREE from "three"
import slotMachine from "./slot_texture.png"

export type WheelValue = 0 | 1 | 2 | 3 | 4 | 5 | 6
export const Wheel = ({
  index,
  goTo = false,
  size = 20,
  value = 0,
  onFinish,
}: {
  index: number
  goTo:
    | {
        numberOfTurn: number
        value: WheelValue
      }
    | false
  size?: number
  value?: WheelValue
  onFinish?: (value: WheelValue) => void
}) => {
  const texture = useMemo(() => new THREE.TextureLoader().load(slotMachine), [
    slotMachine,
  ])
  texture.wrapS = THREE.RepeatWrapping
  texture.wrapT = THREE.RepeatWrapping
  const numberOfFace = 6
  const degPerFace = 51.4285714286
  const rotationPerFace = THREE.Math.degToRad(-degPerFace)
  const ref = useRef<THREE.Mesh>()
  const getAngleForValue = (v: number) => {
    return rotationPerFace * v
  }
  const rotation = useRef<number>(0)
  const rotationPerFrame = THREE.Math.degToRad(5)
  const calculeRotation = () => {
    if (goTo) {
      if (goTo.numberOfTurn === 0) {
        return -rotationPerFace * goTo.value
      }
      return (
        (goTo.numberOfTurn - 1) * (rotationPerFace * numberOfFace) +
        getAngleForValue(goTo.value + numberOfFace - value + goTo.numberOfTurn)
      )
    }
    return 0
  }
  const [finished, setFinished] = useState(false)
  useFrame(() => {
    if (rotation.current !== 0) {
      ref.current.rotation.x -= rotationPerFrame
      rotation.current = Math.min(rotation.current + rotationPerFrame, 0)
      if (rotation.current === 0) {
        if (goTo && onFinish && !finished) {
          setFinished(true)
          onFinish(goTo.value)
        }
      }
    }
  })
  useEffect(() => {
    if (goTo) {
      rotation.current = calculeRotation()
    }
  }, [goTo])
  return (
    <mesh
      ref={ref}
      position={[(size + 5) * index - 30, 0, 0]}
      rotation={[getAngleForValue(value), 0, Math.PI / 2]}
    >
      <cylinderBufferGeometry
        attach="geometry"
        args={[size, size, size, 28, 1, false, -rotationPerFace / 2]}
      />
      <meshBasicMaterial attach="material" map={texture} />
    </mesh>
  )
}
