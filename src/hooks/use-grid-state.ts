import { create } from 'zustand'
import { Coord } from './use-get-grid'

export interface GridState {
  gridWidth: number | ''
  gridHeight: number | ''
  isPlaying: boolean
  livingCells: Coord[]
}

export interface GridActions {
  setGridWidth: (size: number | '') => void
  setGridHeight: (size: number | '') => void
  toggleIsPlaying: () => void
  setLivingCells: (cells: Coord[]) => void
  reset: () => void
}

const initialState: GridState = {
  gridWidth: 5,
  gridHeight: 5,
  isPlaying: false,
  livingCells: [],
}

export const useGridState = create<GridState & GridActions>((set) => ({
  ...initialState,
  setGridWidth: (size: number | '') => set({ gridWidth: size }),
  setGridHeight: (size: number | '') => set({ gridHeight: size }),
  toggleIsPlaying: () => set((state) => ({ isPlaying: !state.isPlaying })),
  setLivingCells: (cells: Coord[]) => set({ livingCells: cells }),
  reset: () => set(initialState),
}))
