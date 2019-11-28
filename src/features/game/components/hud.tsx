import React, { PropsWithChildren } from "react"
import { Hud } from "../../../components/hud/hud"
import { useGame } from "../hook"

export const ConnectedHud = (props: PropsWithChildren<{}>) => {
  const { start } = useGame()
  return <Hud {...props} start={start} />
}
