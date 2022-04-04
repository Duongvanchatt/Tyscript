import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';
import {createProduct} from '../../api/product';
function ProductForm(){
    const navigate = useNavigate();
    //satge luu 2 gt cua inp, dc cap nhat khi inp onchange
    const [nameValue, setNameValue] = useState<string>('');
    const [priceValue,setPriceValue] = useState<string>('');
    const [messages, setMessages] = useState<string []>([]);

    const onValidate = (data: {name: string, price: number})=>{
        const validateMessages = [];
         if(!data.name){
            validateMessages.push('Ten khong duoc de trong');
         }else if(data.name.length < 6){
             validateMessages.push('Ten >= 6 ki tu');
         }
         if(!data.price){
             validateMessages.push('Gia khum duoc de trong');
         }else if(data.price <1){
             validateMessages.push('Gia khong duowc <=0');
         }

         return validateMessages;
    }
    const handleSubmit = async () =>{
        //validate: bat buoc nhap , ten sp >= 6 kid tu, gia >=1 
        const submitData = {
            name: nameValue,
            price: +priceValue
        };
        const validate =  onValidate(submitData);
        if(validate.length === 0){
            messages.length && setMessages([]);

            const response = await createProduct (submitData);
            if(response.status === 201){
                navigate('/admin/product')
            }
        }else{
            setMessages(validate);
        }
        console.log(submitData);
        
    };
    return (
        <div className="">
            <h1>Them moi</h1>
            <div>
                <form action="">
                    <div>
                        <label htmlFor="name">Ten sp</label>
                        <input type="text" id="name" onChange={(event)=> setNameValue(event.target.value)} />
                    </div>

                    <div>
                        <label htmlFor="price">Gia sp</label>
                        <input type="number" id="price" onChange={(event)=> setPriceValue(event.target.value)} />
                    </div>

                    <div>
                        <button onClick={()=> handleSubmit()} type="button">Submit</button>
                    </div>
                </form>
            </div>
            {
                messages.length > 0 
                ? <ul>
                    {
                        messages.map((messages, index) =>(
                            <li key={index}>{messages}</li>
                        ))
                    }
                </ul>
                :null
            }
        </div>
    
    );
};
export default ProductForm;