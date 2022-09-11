import axiosInstance from "./axiosClient"

export const updateSession = () => axiosInstance.patch('/sessions')
export const getUser = () => axiosInstance.get('/users')