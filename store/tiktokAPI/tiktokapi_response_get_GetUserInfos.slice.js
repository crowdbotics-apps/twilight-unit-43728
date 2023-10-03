import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const tiktokapi_get_v2_user_info_list = createAsyncThunk(
  "tiktokapi_response_get_GetUserInfos/tiktokapi_get_v2_user_info_list",
  async payload => {
    const response = await apiService.tiktokapi_get_v2_user_info_list(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const tiktokapi_response_get_GetUserInfosSlice = createSlice({
  name: "tiktokapi_response_get_GetUserInfos",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(tiktokapi_get_v2_user_info_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(tiktokapi_get_v2_user_info_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(tiktokapi_get_v2_user_info_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  tiktokapi_get_v2_user_info_list,
  slice: tiktokapi_response_get_GetUserInfosSlice
}
