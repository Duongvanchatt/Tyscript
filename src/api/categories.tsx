import api from './axios';

//ds pr
export const getCategories = () => {
    return api.get('/categories');
};
//lay 1 pr
export const getCategory = (id:undefined | string) => {
    return api.get(`/categories/${id}`);
};

//them pr
export const createCategories = (data :any) =>{
    return api.post('/categories', data);
};
//xoa pr
export const deleteCategories = (id: number|string) =>{
    return api.delete(`/categories/${id}`);
};

export const updateCategories = (id:string|undefined, data :any) => {
    return api.put(`/categories/${id}`, data);
};