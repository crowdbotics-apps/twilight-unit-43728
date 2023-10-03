import axios from "axios"
import { TIKTOK_APIS_SERVICES_TOKEN } from "react-native-dotenv"
const tiktokAPI = axios.create({
  baseURL: "https://open-api.tiktok.com",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${TIKTOK_APIS_SERVICES_TOKEN}`
  }
})
function tiktokapi_get_v2_user_info_list(payload) {
  return tiktokAPI.get(`/v2/user/info/`, { params: { fields: payload.fields } })
}
function tiktokapi_post_v2_video_list_create(payload) {
  return tiktokAPI.post(`/v2/video/list/`, payload)
}
export const apiService = {
  tiktokapi_get_v2_user_info_list,
  tiktokapi_post_v2_video_list_create
}
