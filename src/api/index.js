import axiosInstance from "./axiosClient"


export const updateSession = () => axiosInstance.patch('/sessions')
export const getUser = () => axiosInstance.get('/users')
export const authUser = (credentials) => axiosInstance.post('/sessions', { user: credentials })

//staff actions
export const getStaffActions = (params) => axiosInstance.get('/dashboard/staff_actions', { params })