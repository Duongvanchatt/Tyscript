import React, { useEffect } from "react";
import {SubmitHandler, useForm} from 'react-hook-form';
import { createPost, getPost, updatePost } from "../../api/Post";
import { useNavigate, useParams } from 'react-router-dom';
import { createBook, getBook, updateBook } from "../../api/book";
export type BOOK_TYPE = {name: string, price: string, cat_id: number}

function BookForm(){
const navigate = useNavigate();
const {id} = useParams();
const {register, handleSubmit, formState: {errors}, reset} = useForm({
defaultValues: {
name: '',
price: '',
cat_id: 0
}
});
const onSubmit : SubmitHandler<BOOK_TYPE> = (data)=>{
    console.log(data);
    if(id){
        return handleUpdateBook(data);
    }
    handleSCreateBook(data);
    };
  const handleSCreateBook =async (data:BOOK_TYPE) => {
      const response = await createBook(data);

      if (response.status === 201) {
        navigate('/admin/book');
    }
  }
const handleGetBook = async (id: string) =>{
    const response = await getBook(id);
    if(response.status === 200){
        reset(response.data);
    }
    
}

const handleUpdateBook =async (data: BOOK_TYPE) => {
    const response = await updateBook(id, data);

    if(response.status === 200){
        navigate('/admin/book');
    }
}


    useEffect(()=>{
       if(id){
         handleGetBook(id);  
       }
    }, [id]);
    return(
    <div className="">
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="">
                <input type="text" placeholder="name" {...register('name', {required: true,})} />
            </div>

            <div className="">
                <input type="text" placeholder="price" {...register('price', {required: true,})} />

            </div>

            <div className="">
                <input type="radio" placeholder="cat_id" {...register('cat_id')} value={1} />
                <input type="radio" placeholder="Cat_id" {...register('cat_id')} value={2} />
            </div>


            <button>Submit</button>
        </form>
    </div>
    )
    };

    export default BookForm;