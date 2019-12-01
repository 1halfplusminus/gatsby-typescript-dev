import { combineReducers } from "@reduxjs/toolkit"
import gameReducer from "../features/game/gameSlice"
import sceneGraph from "./../features/scenegraph/sceneGraph"

const rootReducer = combineReducers({
  game: gameReducer,
  scene: sceneGraph,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
