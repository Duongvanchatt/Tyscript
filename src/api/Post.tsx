import api from './axios';

//ds pr
export const getPosts = () => {
    return api.get('/post');
};
//lay 1 pr
export const getPost = (id:undefined | string) => {
    return api.get(`/post/${id}`);
};

//them pr
export const createPost = (data :any) =>{
    return api.post('/post', data);
};
//xoa pr
export const deletePost = (id: number|string) =>{
    return api.delete(`/post'/${id}`);
};

export const updatePost = (id:string|undefined, data :any) => {
    return api.put(`/post/${id}`, data);
};