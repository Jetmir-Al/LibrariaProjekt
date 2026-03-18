import {api} from "./api";


export const borrowBook = async ({
    id,
    BorrowDate,
    ReturnDate,
    CardholderName,
    CardNumber
}) => {
    const res = await api.post(`/BorrowApi/create/${id}`, {
        BorrowDate,
        ReturnDate,
        CardholderName,
        CardNumber
    }, { withCredentials: true });
    return res.data;
}


export const getUserBorrows = async (userId) => {
    const res = await api.get(`/BorrowApi/user/${userId}`, { withCredentials: true });
    return res.data;
}