import api from './axios';

//ds pr
export const getProducts = () => {
    return api.get('/products');
};
//lay 1 pr
export const getProduct = (id:undefined | string) => {
    return api.get(`/products/${id}`);
};

//them pr
export const createProduct = (data :any) =>{
    return api.post('/products', data);
};
//xoa pr
export const deleteProduct = (id: number|string) =>{
    return api.delete(`/products/${id}`);
};