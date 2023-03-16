import { $authHost, $host } from "../lib/axios"
import jwt_decode from "jwt-decode"

export const login = async (email, password) => {
  const {data} = await $host.post("/user/login", {
    email
  })
  localStorage.setItem("token", data.token)
  return jwt_decode(data.token)
}

export const checkAuthQuery = async () => {
  const {data} = await $authHost.post("/user/checkAuth")
  localStorage.setItem("token", data.token)
  return jwt_decode(data.token)
}