import { useDispatch, useSelector } from "react-redux"
import { RootState } from "./../../app/rootReducer"
import { rollFinished, startGame } from "./gameSlice"

export const useGame = () => {
  const { rolls } = useSelector((state: RootState) => ({
    rolls: state.game.rolls,
  }))
  const dispatcher = useDispatch()
  return {
    rolls,
    start: () => {
      dispatcher(startGame())
    },
    rollFinished: () => {
      dispatcher(rollFinished());
    }
  }
}
