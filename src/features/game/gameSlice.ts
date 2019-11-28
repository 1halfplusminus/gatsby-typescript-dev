import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { WheelValue } from "../../components/3d/wheel/wheel"

export interface GameRoll {
  turn: number
  value: WheelValue
}

interface GameState {
  rolls: readonly [GameRoll, GameRoll, GameRoll] | readonly []
  playing: boolean
  loading: boolean
  error: string | null
}

const initialState: GameState = {
  rolls: [] as const,
  playing: false,
  loading: false,
  error: null,
}

export const game = createSlice({
  name: "game",
  initialState,
  reducers: {
    startGame(state) {
      if (!state.loading) {
        state.playing = true
        state.loading = true
        state.rolls = [
          { turn: 1, value: 6 },
          { turn: 2, value: 5 },
          { turn: 3, value: 0 },
        ]
      }
    },
    rollDice(state, action: PayloadAction<[GameRoll, GameRoll, GameRoll]>) {
      state.rolls = action.payload
      state.loading = false
    },
  },
})

export const { startGame, rollDice } = game.actions

export default game.reducer
