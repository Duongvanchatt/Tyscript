import api from './axios';

//ds pr
export const getBooks = () => {
    return api.get('/book');
};
//lay 1 pr
export const getBook = (id:undefined | string) => {
    return api.get(`/book/${id}`);
};

//them pr
export const createBook = (data :any) =>{
    return api.post('/book', data);
};
//xoa pr
export const deleteBook = (id: number|string) =>{
    return api.delete(`/book/${id}`);
};

export const updateBook = (id:string|undefined, data :any) => {
    return api.put(`/book/${id}`, data);
};