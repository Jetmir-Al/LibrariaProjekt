import { api } from "./api";


export const submitReview = async ({
    id,
    Rating,
    Comment
}) => {
    const res = await api.post(`/ReviewApi/create/${id}`, { Rating, Comment }, { withCredentials: true });

    return res.data;
}

export const getReviews = async (id) => {
    const res = await api.get(`/ReviewApi/book/${id}`, { withCredentials: true });
    return res.data;
}