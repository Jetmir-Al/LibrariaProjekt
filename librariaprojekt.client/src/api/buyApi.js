import {api} from "./api";

export const buyBook = async ({
    bookId,
    CardholderName,
    CardNumber,
    Quantity
}) => {
    const res = await api.post(`/PurchaseApi/create/${bookId}`, {
        CardholderName,
        CardNumber,
        Quantity
    }, { withCredentials: true });
    return res.data;
}

export const getUserPurchases = async (userId) => {
    const res = await api.get(`/PurchaseApi/user/${userId}`, { withCredentials: true });
    return res.data;
}