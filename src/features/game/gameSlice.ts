import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface GameRoll {
  turn: number
  value: number
}

interface GameState {
  rolls: GameRoll[]
  playing: boolean
  loading: boolean
  error: string | null
}

const initialState: GameState = {
  rolls: [],
  playing: false,
  loading: false,
  error: null,
}

export const game = createSlice({
  name: "game",
  initialState,
  reducers: {
    start(state) {
      state.playing = true
      state.loading = true
    },
    rollDice(state, action: PayloadAction<GameRoll[]>) {
      state.rolls = action.payload
      state.loading = false
    },
  },
})

export const { start, rollDice } = game.actions

export default game.reducer
