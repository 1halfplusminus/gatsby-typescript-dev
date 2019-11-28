import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { WheelValue } from "../../components/3d/wheel/wheel"

export interface GameRoll {
  turn: number
  value: WheelValue | number
}

interface GameState {
  rolls: [GameRoll, GameRoll, GameRoll] | []
  playing: boolean
  loading: boolean
  error: string | null
  rolling: boolean;
}

const initialState: GameState = {
  rolls: [],
  playing: false,
  loading: false,
  rolling: false,
  error: null,
}

export const game = createSlice({
  name: "game",
  initialState,
  reducers: {
    startGame(state) {
      if (!state.loading && !state.rolling) {
        state.playing = true
        state.loading = true
        state.rolls = [
          { turn: 1, value: Math.floor(Math.random() * 6) + 1 },
          { turn: 2, value: Math.floor(Math.random() * 6) + 1 },
          { turn: 3, value: Math.floor(Math.random() * 6) + 1 },
        ]
      }
    },
    rollDice(state, action: PayloadAction<[GameRoll, GameRoll, GameRoll]>) {
      state.rolls = action.payload
      state.loading = false
    },
    rollFinished(state) {
      state.rolling = false;
      state.loading = false;
      state.rolls = [];
    }
  },
})

export const { startGame, rollDice, rollFinished } = game.actions

export default game.reducer
