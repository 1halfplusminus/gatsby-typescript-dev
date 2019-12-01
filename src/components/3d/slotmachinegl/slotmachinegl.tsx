import * as option from "fp-ts/lib/Option"
import { pipe } from "fp-ts/lib/pipeable"
import { once } from "lodash"
import React, { useEffect, useRef, useState } from "react"
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
  const { current: speed } = useRef<number>(0.025)
  const lastSymbol = () => {
    return symbols[symbols.length - 1]
  }
  const [turn, setTurn] = useState(0)
  const [symbol, setSymbol] = useState(0)
  const { current: update } = useRef(
    once((row: any) => {
      row.position.y = value ? symbols[value] : symbols[0]
    })
  )
  const [finished, setFinished] = useState(false)
  useFrame(() => {
    pipe(
      someRow,
      option.fold(
        () => {},
        row => {
          const updateOnce = once(() => {
            if (row.position.y - speed <= lastSymbol()) {
              row.position.y = symbols[0]
              setTurn(turn + 1)
              setSymbol(0)
              return
            }
            if (row.position.y - speed <= symbols[symbol + 1]) {
              setSymbol(symbol + 1)
              row.position.y = symbols[symbol + 1]
              return
            }
            row.position.y -= speed
          })
          if (!rolling && !loading) {
            update(row)
            return
          }
          if (loading) {
            updateOnce()
            return
          }
          if (rolling && !finished) {
            if (turn >= goTo.numberOfTurn && symbol === goTo.value) {
              if (!finished) {
                if (onFinish) {
                  console.log(
                    "finish",
                    goTo.numberOfTurn,
                    turn,
                    goTo.value,
                    symbol
                  )
                  onFinish(goTo.value)
                }

                setFinished(true)
                return
              }
            }
            updateOnce()
          }
        }
      )
    )
  })
  useEffect(() => {
    setFinished(false)
    setTurn(0)
    setSymbol(0)
  }, [rolling, loading])
  /*  useEffect(() => {
    if (value) {
      pipe(
        someRow,
        option.fold(
          () => {},
          row => {
            console.log("update value")
            row.po
            row.position.y = symbols[value]
          }
        )
      )
    }
  }, [option.isSome(someRow), value])  */
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
