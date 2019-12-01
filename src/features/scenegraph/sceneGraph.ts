import { Action, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ThunkAction } from "redux-thunk"
export type MainSceneAssetKey =
  | "SlotMachine"
  | "Background"
  | "Row1"
  | "Row2"
  | "Row3"
  | "Empty"

export interface SceneGraphState {
  init: boolean
  firstLoading: boolean
  unprojectedPosition: {
    [key: string]: { x: number; y: number }
  }
}

const initialState: SceneGraphState = {
  init: false,
  firstLoading: false,
  unprojectedPosition: {},
}

export const sceneGraph = createSlice({
  name: "scene",
  initialState,
  reducers: {
    initSceneGraph: state => {
      state.firstLoading = true
    },
    mainSceneLoaded: state => {
      state.init = true
      state.firstLoading = false
    },
    unProjectedPositionChange: (
      state,
      {
        payload: { key, position },
      }: PayloadAction<{ key: string; position: { x: number; y: number } }>
    ) => {
      state.unprojectedPosition[key] = position
    },
  },
})

export const {
  initSceneGraph,
  mainSceneLoaded,
  unProjectedPositionChange,
} = sceneGraph.actions

export type SceneThunk = ThunkAction<
  void,
  SceneGraphState,
  null,
  Action<string>
>

export default sceneGraph.reducer
