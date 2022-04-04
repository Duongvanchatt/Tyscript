import React, { Component, useEffect, useState } from "react";
import { deleteProduct, getProducts } from "../../api/product";
import {Link} from "react-router-dom";
export type PRODUCT_TYPE = {
    id: number | string,
    name: string,
    price: number
};

function Product(){

    const [products, setProducts] = useState<PRODUCT_TYPE[]>([]);
    

    const handleGetProducts = async () => {
        const response = await getProducts();
        setProducts(response.data);
    };

    const handleDelete = async (id: number|string) =>{
        const response = await deleteProduct(id);
        console.log(response);
        if(response.status === 200){
            handleGetProducts();
        }
        
    };

    console.log(products);

    useEffect(() => {
        handleGetProducts();
    }, []);

    return (
        <div className="col-10">
        <div className="min-h-screen flex flex-col">
            <main className="bg-white-500 flex-1 p-3 overflow-hidden">

<div className="flex flex-col">
    <div className="flex flex-1  flex-col md:flex-row lg:flex-row mx-2">
        <div className="mb-2 border-solid border-gray-300 rounded border shadow-sm w-full">
        <div>
            
              
            
            <div className="bg-gray-200 px-2 py-3 border-solid border-gray-200 border-b">
                Full Table
            </div>
            <div className="p-3">
                <table className="table-responsive w-full rounded">
                    <thead>
                      <tr>
                        <th className="border w-1/4 px-4 py-2">Name</th>
                        <th className="border w-1/6 px-4 py-2">Price</th>
                        <th className="border w-1/5 px-4 py-2">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(product =>
                                <tr key={product.id}>
                                <td className="border px-4 py-2">{product.name}</td>
                                <td className="border px-4 py-2">{product.price}</td>
                                <td className="border px-4 py-2">
                                    <a  className="bg-teal-300 cursor-pointer rounded p-1 mx-1 text-white">
                                            Sửa</a>
                                    <a onClick={() => handleDelete(product.id)} className="bg-teal-300 cursor-pointer rounded p-1 mx-1 text-white">
                                            Xóa</a>
                                    
                                </td>
                            </tr>
                                )
                        }
                        </tbody>
                </table>
                <a className="bg-red-400 cursor-pointer rounded p-1 mx-1 text-white flex justify-start w-12 mt-5">
                                    <Link to={'/admin/product/create'}>Thêm</Link></a>
            </div>
        </div>
    </div>
</div>
</div>
</main>
</div>
</div>
    );
};

export default Product;