import { api } from "./api"

export const getLatestBooks = async () => {
    const res = await api.get("/BookApi/latest");
    return res.data;
}

export const getFeaturedBooks = async () => {
    const res = await api.get("/BookApi/featured");
    return res.data;
}

export const getBooks = async () => {
    const res = await api.get("/BookApi/books");
    return res.data;
}

export const getBookById = async (id) => {
    const res = await api.get(`/BookApi/books/${id}`);
    return res.data;
}

export const getImageUrl = (filename) => {
    return `${import.meta.env.VITE_API_URL}/${filename}`;
}

export const getBooksAdvanced = async ({ params  }) => {
    const res = await api.get("/BookApi/advanced", {
        params: {
            page: params.page,
            pageSize: params.pageSize,
            search: params.search || undefined,
            categories: params.categories || undefined,
            sort: params.sort || undefined
        }
    });
    return res.data;
}