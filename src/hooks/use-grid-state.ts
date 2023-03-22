import { create } from 'zustand'

export interface GridState {
  gridWidth: number
  gridHeight: number
  isPlaying: boolean
}

export interface GridActions {
  setGridWidth: (size: number) => void
  setGridHeight: (size: number) => void
  setIsPlaying: (isPlaying: boolean) => void
  reset: () => void
}

const initialState: GridState = {
  gridWidth: 5,
  gridHeight: 5,
  isPlaying: false,
}

export const useGridState = create<GridState & GridActions>((set) => ({
  ...initialState,
  setGridWidth: (size: number) => set({ gridWidth: size }),
  setGridHeight: (size: number) => set({ gridHeight: size }),
  setIsPlaying: (isPlaying: boolean) => set({ isPlaying }),
  reset: () => set(initialState),
}))
