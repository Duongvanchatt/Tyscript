import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import { getProduct } from "../../api/product";
import { PRODUCT_TYPE } from "./product";
function ProductDetail(){
    const {id} = useParams();
    const [product, setProduct] = useState<PRODUCT_TYPE>();
    const handleGetProductDetail =async () => {
        const response = await getProduct(id);
        setProduct(response.data);
    }
        useEffect (() =>{
              handleGetProductDetail();
        }, []);
    return (
    <div className="">
        Product Detail
        <p>ID: {product?.id}</p>
        <p>NAME: {product?.name}</p>
        <p>PRICE: {product?.price}</p>
    </div>
    )
};

export default ProductDetail;