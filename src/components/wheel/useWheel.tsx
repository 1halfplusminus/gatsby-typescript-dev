import { useEffect, useState } from "react"
import { WheelValue } from "./wheel"

const useWheel = (
  {
    value: defaultValue,
  }: {
    value?: WheelValue
  } = { value: 0 }
) => {
  const [value, setValue] = useState<WheelValue>(defaultValue)
  const [{ numberOfTurn, value: goToValue }, setGo] = useState<{
    numberOfTurn: number
    value: WheelValue
  }>({
    numberOfTurn: 0,
    value: 0,
  })
  useEffect(() => {
    setValue(defaultValue)
  }, [defaultValue])
  return {
    numberOfTurn,
    goToValue,
    value,
    goTo: ({
      value: sgoToValue,
      numberOfTurn: shadowNumberOfTurn,
    }: {
      value: WheelValue
      numberOfTurn: number
    }) => {
      setGo({
        numberOfTurn: shadowNumberOfTurn,
        value: sgoToValue,
      })
      setValue(goToValue)
    },
    handleFinish: () => () => {
      setValue(goToValue)
    },
  }
}
export function useWheels<
  T extends {
    [key: number]: WheelValue
  }
>(wheels: T) {
  const states = Object.values(wheels).reduce(
    (p, c, index) => {
      p[index] = useWheel({ value: c })
      return p
    },
    {} as {
      [K in keyof T]: ReturnType<typeof useWheel>
    }
  )
  return {
    ...states,
    goTo: (p: keyof typeof states) => {
      return states[p].goTo
    },
    get: (p: keyof typeof states) => {
      return states[p]
    },
    bind: (p: keyof typeof states) => {
      return {
        index: p,
        goTo: {
          value: states[p].goToValue,
          numberOfTurn: states[p].numberOfTurn,
        },
        value: states[p].value,
      }
    },
  }
}
