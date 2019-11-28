import { useEffect, useState } from "react"
import { WheelValue } from "./wheel"

const useWheel = (
  {
    value: defaultValue,
  }: {
    value: WheelValue | number
  } = { value: 0 }
) => {
  const [value, setValue] = useState<WheelValue | number>(defaultValue)
  const [finished, setFinished] = useState(true)
  const [{ numberOfTurn, value: goToValue }, setGo] = useState<{
    numberOfTurn: number
    value: WheelValue | number
  }>({
    numberOfTurn: 0,
    value: 0,
  })
  useEffect(() => {
    setValue(defaultValue)
  }, [defaultValue])
  return {
    finished,
    numberOfTurn,
    goToValue,
    value,
    goTo: ({
      value: sgoToValue,
      numberOfTurn: shadowNumberOfTurn,
    }: {
      value: WheelValue | number
      numberOfTurn: number
    }) => {
      if (finished) {
        setFinished(false);
        setGo({
          numberOfTurn: shadowNumberOfTurn,
          value: sgoToValue,
        })
        setValue(goToValue)
      }

    },
    handleFinish: () => {
      setFinished(true);
      setValue(goToValue)
    },
  }
}
interface UseWeelsProps<
  G extends WheelValue | number = number,
  T extends {
    [key: number]: G
  } = {
    [key: number]: G
  },
  > {
  onRollFinish: () => void
  wheels: T
}
export function useWheels({ wheels, onRollFinish }: UseWeelsProps) {
  const [finished, setFinished] = useState(true)
  const [touched, setTouched] = useState(false)
  const states = Object.values(wheels).reduce(
    (p, c, index) => {
      p[index] = useWheel({ value: c })
      return p
    },
    {} as {
      [key: number]: ReturnType<typeof useWheel>
    }
  )
  return {
    ...states,
    goTo: (p: keyof typeof states | number) => {
      setTouched(true);
      return states[p].goTo
    },
    get: (p: keyof typeof states | number) => {
      return states[p]
    },
    bind: (p: keyof typeof states | number) => {
      return {
        index: p,
        goTo: {
          value: states[p].goToValue,
          numberOfTurn: states[p].numberOfTurn,
        },
        value: states[p].value,
        onFinish: () => {
          states[p].handleFinish()
          const arrayStates = Object.values(states);
          const checkAll = arrayStates.slice(0, arrayStates.length - 1).map((s) => s.finished).every((v) => v)
          setFinished(checkAll)
          if (checkAll) {
            onRollFinish();
          }
        },
        finished: states[p].finished
      }
    },
    finished,
    touched
  }
}
