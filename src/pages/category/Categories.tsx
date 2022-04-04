import React , { Component, useEffect, useState }  from "react";
import { Link } from "react-router-dom";
import { deleteCategories, getCategories } from "../../api/categories";


export type CATEGORY_TYPE = {
    id: number | string,
    name: string
};

   
function Categories(){

    const [categories, setCategories] = useState<CATEGORY_TYPE[]>([]);
    

    const handleGetCategories = async () => {
        const response = await getCategories();
        setCategories(response.data);
    };

    const handleDelete = async (id: number|string) =>{
        const response = await deleteCategories(id);
        console.log(response);
        if(response.status === 200){
            handleGetCategories();
        }
        
    };

    console.log(categories);

    useEffect(() => {
        handleGetCategories();
    }, []);
    return (
        <div className="">
    <div className="">
        <Link to={'/admin/category/create'}>
                    <button>Tao moi</button>
        </Link>
    </div>

    <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                    </tr>
                </thead>
                <tbody>
                {
                categories.map(cate => 
                    <tr key={cate.id}>
                        <td>{cate.id}</td>
                        <td>{cate.name}</td>
                        <td>
                            <button onClick={() => handleDelete(cate.id)}>Xoa</button>
                            <button><Link to={`/admin/category/${cate.id}/edit`}>Chinh sua</Link></button>
                        </td>
                    </tr>
                )
              }
                </tbody>
            </table>
           
    </div>
    );
};

export default Categories;