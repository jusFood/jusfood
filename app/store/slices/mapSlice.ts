import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { mapState } from "@/app/types/slices/map";
import { CafeLocation } from "@/app/types/slices/map";

const initialState: mapState = {
  markers: [],
};

const mapSlice = createSlice({
  name: "map",
  initialState,
  reducers: {
    setMarkers: (state, action: PayloadAction<CafeLocation[]>) => {
      state.markers = action.payload;
    },
  },
});

export const { setMarkers } = mapSlice.actions;

export default mapSlice.reducer;
