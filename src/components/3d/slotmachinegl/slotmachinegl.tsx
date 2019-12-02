import * as option from "fp-ts/lib/Option"
import { pipe } from "fp-ts/lib/pipeable"
import React, { useEffect, useMemo, useState } from "react"
import { useFrame } from "react-three-fiber"
import { Mesh } from "../../../features/scenegraph/components/mesh"
export interface WheelProps {
  index: number
  goTo: {
    numberOfTurn: number
    value: number
  }
  size?: number
  value?: number
  onFinish?: (value: number) => void
  finished: boolean
  rolling: boolean
  loading: boolean
}
export type GoTo =
  | {
    numberOfTurn: number
    value: number
  }
  | false
type UseRowProps = {
  row: option.Option<THREE.Object3D>
  goTo: GoTo
  rolling: boolean
  loading: boolean
} & WheelProps

const useRow = ({
  row: someRow,
  goTo,
  value,
  onFinish,
  rolling,
  loading,
}: UseRowProps) => {
  const symbols = [
    1.16785,
    0.90785,
    0.60785,
    0.30785,
    0.02785,
    -0.27215,
    -0.54215,
    -0.85215,
  ]
  const lastSymbol = () => {
    return symbols[symbols.length - 1]
  }
  const [turn, setTurn] = useState(0)
  const [symbol, setSymbol] = useState(0)
  const [finished, setFinished] = useState(false)
  useFrame((context, delta) => {
    pipe(
      someRow,
      option.fold(
        () => { },
        row => {
          const speed = 2 * delta;
          const updateOnce = () => {
            if (row.position.y <= lastSymbol()) {
              row.position.y = symbols[0]
              setTurn(turn + 1)
              setSymbol(0)
            }
            if (row.position.y <= symbols[symbol + 1]) {
              row.position.y = symbols[symbol + 1]
              setSymbol(symbol + 1)
            }
            row.position.y -= speed
          }
          if (loading || rolling) {
            updateOnce()
          }
          if (
            turn === goTo.numberOfTurn &&
            symbol === goTo.value &&
            goTo.numberOfTurn !== 0 &&
            rolling
          ) {
            setFinished(true)
          }
          if (finished) {
            if (onFinish) {
              onFinish(goTo.value)
            }
            setTurn(0)
            setSymbol(0)
            setFinished(false)

          }

        }
      )
    )
  })
  useEffect(() => {
    if (rolling || loading) {
      setTurn(0)
      setSymbol(0)
    }
  }, [rolling, loading])
  const position = useMemo(
    () =>
      pipe(
        someRow,
        option.fold(
          () => [0, 0, 0],
          row => {
            return [row.position.x, symbols[value ? value : 0], row.position.z]
          }
        )
      ),
    [loading, rolling, value, option.isSome(someRow)]
  )
  return {
    position,
  }
}

export interface SlotMachineProps {
  wheels: WheelProps[]
  rows: Array<option.Option<THREE.Object3D>>
}
export const SlotMachineGL = ({ wheels, rows }: SlotMachineProps) => {
  /*   useRow({ row: rows[1], ...wheels[1] }) */
  /*   useRow({ row: rows[2], ...wheels[2] }) */
  return (
    <>
      <group>
        <Mesh objectKey="Background" />
        <Mesh objectKey="SlotMachine" />
        <Mesh objectKey="Row1" {...useRow({ row: rows[0], ...wheels[0] })} />
        <Mesh objectKey="Row2" {...useRow({ row: rows[1], ...wheels[1] })} />
        <Mesh objectKey="Row3" {...useRow({ row: rows[2], ...wheels[2] })} />
      </group>
    </>
  )
}
