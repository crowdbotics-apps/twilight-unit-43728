import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const tiktokapi_post_v2_video_list_create = createAsyncThunk(
  "tiktokapi_response_post_ListVideos/tiktokapi_post_v2_video_list_create",
  async payload => {
    const response = await apiService.tiktokapi_post_v2_video_list_create(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const tiktokapi_response_post_ListVideosSlice = createSlice({
  name: "tiktokapi_response_post_ListVideos",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(tiktokapi_post_v2_video_list_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(
        tiktokapi_post_v2_video_list_create.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities.push(action.payload)
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        tiktokapi_post_v2_video_list_create.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
  }
})
export default {
  tiktokapi_post_v2_video_list_create,
  slice: tiktokapi_response_post_ListVideosSlice
}
