import { api } from "./api";


export const status = async () => {
    const res = await api.get("/UserApi/status", { withCredencials: true });
    return res.data;
}

export const logoutFunc = async () => {
    const res = await api.post("/UserApi/logout", {}, { withCredencials: true });
    return res.data;
}

export const loginAdmin = async ({ Email, Password }) => {
    const res = await api.post("/AdminApi/loginAdmin", { Email, Password });
    return res.data;
}

export const loginUser = async ({ Email, Password }) => {
    const res = await api.post("/UserApi/login", { Email, Password }, { withCredencials: true });
    return res.data;
}

export const registerUser = async ({ Name, Email, Password }) => {
    const res = await api.post("/UserApi/createUser", { Name, Email, Password });
    return res.data;
}