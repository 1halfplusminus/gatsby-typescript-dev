import React from "react"
import { SlotMachineGL, WheelProps } from "../../../components/3d/slotmachinegl/slotmachinegl"
import { trackUnprojectedPosition, useObjects3d } from "../hook"

export interface SlotMachineProps {
  wheels: WheelProps[]
}
export const SlotMachine = ({ wheels }: SlotMachineProps) => {
  const { getObject } = useObjects3d()
  trackUnprojectedPosition("Empty");
  return (
    <SlotMachineGL
      rows={[getObject("Row1"), getObject("Row2"), getObject("Row3")]}
      wheels={wheels}
    />
  )
}

export default SlotMachine
