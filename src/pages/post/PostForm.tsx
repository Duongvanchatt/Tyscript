import React, { useEffect } from "react";
import {SubmitHandler, useForm} from 'react-hook-form';
import { createPost, getPost, updatePost } from "../../api/Post";
import { useNavigate, useParams } from 'react-router-dom';
export type POST_TYPE = {title: string, desc: string, author: string, category: string, thumbnail: string,status: number}

function PostForm(){
const navigate = useNavigate();
const {id} = useParams();
const {register, handleSubmit, formState: {errors}, reset} = useForm({
defaultValues: {
title: '',
desc: '',
author: '',
category: '',
thumbnail: '',
status: 0
}
});
const onSubmit : SubmitHandler<POST_TYPE> = (data)=>{
    console.log(data);
    if(id){
        return handleUpdatePost(data);
    }
    handleSCreatetPost(data);
    };
  const handleSCreatetPost =async (data:POST_TYPE) => {
      const response = await createPost(data);

      if (response.status === 201) {
        navigate('/posts');
    }
  }
const handleGetPost = async (id: string) =>{
    const response = await getPost(id);
    if(response.status === 200){
        reset(response.data);
    }
    
}

const handleUpdatePost =async (data: POST_TYPE) => {
    const response = await updatePost(id, data);

    if(response.status === 200){
        navigate('/posts');
    }
}


    useEffect(()=>{
       if(id){
         handleGetPost(id);  
       }
    }, [id]);
    return(
    <div className="">
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="">
                <input type="text" placeholder="title" {...register('title', {required: true,})} />
            </div>

            <div className="">
                <input type="text" placeholder="desc" {...register('desc', {required: true,})} />

            </div>

            <div className="">
                <input type="text" placeholder="author" {...register('author', {required: true,})} />
            </div>

            <div className="">
                <input type="text" placeholder="category" {...register('category', {required: true,})} />
            </div>

            <div className="">
                <input type="text" placeholder="thumbnail" {...register('thumbnail', {required: true,})} />
            </div>

            <div className="">
                <input type="radio" placeholder="stt" {...register('status')} value={0} />Khong kich hoat
                <input type="radio" placeholder="stt" {...register('status')} value={1} />Kich hoat
            </div>


            <button>Submit</button>
        </form>
    </div>
    )
    };

    export default PostForm;