import React, { useEffect, useState } from "react";
import {SubmitHandler, useForm } from "react-hook-form";
import {useNavigate, useParams} from 'react-router-dom';
import { createCategories, getCategories, getCategory, updateCategories } from "../../api/categories";
export type CATE_TYPE = {name: string}
function CategorieForm(){
    const navigate = useNavigate();
    const {id} = useParams();
    const {register, handleSubmit, formState: {errors}, reset} = useForm({
        defaultValues: {name: ''}
        });


        const onSubmit : SubmitHandler<CATE_TYPE> = (data)=>{
            console.log(data);
            if(id){
                return handelupdateCategories(data);
            }
            handleSCreateCategories(data);
            };
          const handleSCreateCategories =async (data:CATE_TYPE) => {
              const response = await createCategories(data);
        
              if (response.status === 201) {
                navigate('/admin/category');
            }
          }
        const handleGetCategories = async (id: string) =>{
            const response = await getCategory(id);
            if(response.status === 200){
                reset(response.data);
            }
            
        }
        
        const handelupdateCategories =async (data: CATE_TYPE) => {
            const response = await updateCategories(id, data);
        
            if(response.status === 200){
                navigate('/admin/category');
            }
        }
        
        
            useEffect(()=>{
               if(id){
                 handleGetCategories(id);  
               }
            }, [id]);
    //satge luu 2 gt cua inp, dc cap nhat khi inp onchange

    return (
        <div className="">
            <h1>Them moi</h1>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div>
                        <label htmlFor="name">Ten danh mục</label>
                        <input type="text" id="name" {...register('name', {required: true,})}/>
                    </div>

                    <div>
                        <button >Submit</button>
                    </div>
                </form>
            </div>
        </div>
    
    );
   
};

export default CategorieForm;