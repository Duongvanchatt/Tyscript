import React, { Component, useEffect, useState } from "react";
import {Link} from "react-router-dom";
import { deleteBook, getBooks } from "../../api/book";
export type BOOK_TYPE = {
    id: number | string,
    name: string,
    price: number,
    cat_id: number
};

function BookList(){

    const [books, setBooks] = useState<BOOK_TYPE[]>([]);
    

    const handleGetBook = async () => {
        const response = await getBooks();
        setBooks(response.data);
    };

    const handleDelete = async (id: number|string) =>{
        const response = await deleteBook(id);
        console.log(response);
        if(response.status === 200){
            handleGetBook();
        }
        
    };

    console.log(books);

    useEffect(() => {
        handleGetBook();
    }, []);

    return (
        <div >
            <div className="">
                <Link to={'/admin/book/create'}>
                    <button>Tao moi</button>
                </Link>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>PRICE</th>
                        <th>Cat_ID</th>
                        <th>XL</th>
                    </tr>
                </thead>
                <tbody>
                {
                books.map(book => 
                    <tr key={book.id}>
                        <td>{book.id}</td>
                        <td>{book.name}</td>
                        <td>{book.price}</td>
                        <td>{book.cat_id}</td>
                        <td>
                            <button onClick={() => handleDelete(book.id)}>Xoa</button>
                            <button><Link to={`/admin/book/${book.id}/edit`}>Chinh sua</Link></button>
                        </td>
                    </tr>
                )
              }
                </tbody>
            </table>
           
        </div>
    );
};

export default BookList;