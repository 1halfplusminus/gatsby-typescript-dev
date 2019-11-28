import React, { useEffect, useRef, useState } from "react"
import { useFrame } from "react-three-fiber"
import { GLTF, GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

interface WheelProps {
  index: number
  goTo:
  | {
    numberOfTurn: number
    value: number
  }
  | false
  size?: number
  value?: number
  onFinish?: (value: number) => void
}

export const useModel = () => {
  const ref = useRef<GLTF | null>(null)
  const slotMachineRef = useRef<THREE.Object3D | null>(null)
  const backgroundRef = useRef<THREE.Object3D | null>(null)
  const rowsRef = useRef<
    [THREE.Object3D, THREE.Object3D, THREE.Object3D] | THREE.Object3D[]
  >([])
  const { current: glft } = ref
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    new GLTFLoader().load(require("./slotscene.glb"), loadedAsset => {
      ref.current = loadedAsset
      slotMachineRef.current = loadedAsset.scene.getObjectByName("SlotMachine")!
      backgroundRef.current = loadedAsset.scene.getObjectByName("Background")!
      rowsRef.current = [
        loadedAsset.scene.getObjectByName("Row1")!,
        loadedAsset.scene.getObjectByName("Row2")!,
        loadedAsset.scene.getObjectByName("Row3")!,
      ]
      setLoaded(true)
    })
  }, [])
  return {
    glft,
    slotMachine: slotMachineRef.current,
    background: backgroundRef.current,
    rows: rowsRef.current!,
  }
}

export type GoTo = {
  numberOfTurn: number
  value: number
} | false
type UseRowProps = {
  row: THREE.Object3D,
  goTo: GoTo
} & WheelProps

const useRow = ({ row, goTo, value }: UseRowProps) => {
  const symbols = [-1.49799, -1.74799, -1.998, -2.248, -2.508, -2.728, -2.968, -3.228]
  const translation = useRef<number>(0)
  const { current: speed } = useRef<number>((Math.random() * 0.0076) + 0.0075)
  const lastSymbol = () => {
    return symbols[symbols.length - 1];
  }
  const [turn, setTurn] = useState(0);
  const [symbol, setSymbol] = useState(value || 0);
  const firstSymbol = () => {
    return symbols[0];
  }
  const calculeTransalation = () => {
    if (goTo) {
      if (goTo.numberOfTurn === 0 && goTo.value === 0) {
        return 0;
      }
      return (
        ((lastSymbol() - firstSymbol()) * goTo.numberOfTurn) + symbols[goTo.value]
      )
    }
    return 0
  }
  useFrame(() => {
    if (row && goTo && translation && translation.current < 0) {
      if (turn === goTo.numberOfTurn && symbol === goTo.value) {
        row.position.y = Math.max(row.position.y - 0.006, symbols[goTo.value])
        setSymbol(goTo.value);
        return;
      }
      row.position.y -= speed
      translation.current += speed
      if (row.position.y <= symbols[symbols.length - 1]) {
        row.position.y = symbols[0]
        setTurn(turn + 1);
        setSymbol(0);
        return;
      }
      if (row.position.y <= symbols[symbol] && row.position.y >= symbols[symbol + 1]) {
        setSymbol(symbol + 1);
      }

    }
  })
  useEffect(() => {
    if (goTo) {
      setTurn(0);
      setSymbol(0);
      translation.current = calculeTransalation()
    }
  }, [goTo])
  useEffect(() => {
    if (row && value) {
      row.position.y = symbols[value]
    }
  }, [value, row])
}

export interface SlotMachineProps {
  wheels: WheelProps[]
}
export const SlotMachineGL = ({ wheels }: SlotMachineProps) => {
  const { slotMachine, background, rows } = useModel()
  useRow({ row: rows[0], ...wheels[0] })
  useRow({ row: rows[1], ...wheels[1] })
  useRow({ row: rows[2], ...wheels[2] })
  return (
    slotMachine && (
      <group>
        <mesh>
          <primitive object={background} />
        </mesh>
        <mesh>
          <primitive object={slotMachine} />
        </mesh>
        {rows.map((row, i) => (
          <primitive key={i} object={row} />
        ))}
      </group>
    )
  )
}
