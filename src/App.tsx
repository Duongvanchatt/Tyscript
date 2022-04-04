import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './pages/login';
import {USER_LOGIN as LOGIN_USER} from './pages/login';
import {Routes, Route, Link} from 'react-router-dom';
import ClientLayout from './pages/layouts/ClientLayout';
import Product from './pages/product/product';
import AdminLayout from './pages/layouts/Adminlayout';
import HomePage from './pages/homePage';
import AdminHomePage from './pages/AdminHomePage';
import ProductDetail from './pages/product/productDetail';
import ProductForm from './pages/product/productForm';
import PostList from './pages/post/PostList';
import PostDetail from './pages/post/PostDetail';
import PostForm from './pages/post/PostForm';
import Categories from './pages/category/Categories';
import CategoriesDetail from './pages/category/CategoriesDetail';
import CategorieForm from './pages/category/CategoriesForm';
import BookList from './pages/Book/BookList';
import BookForm from './pages/Book/BookForm';
import Main from './pages/homePage/main';

// import HomePage from './pages/homePage';
// import AdminHomePage from './pages/AdminHomePage';
function App() {
  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>('');
  //stage trang thai hien thi bang
  const [isShowTable, setShowTable] = useState<boolean>(true);
  const headCell = [
    {
      label: 'Ten',
      key: 'name'
    },
    {
      label: 'Tuoi',
      key: 'age'
    },
    {
      label: 'Dia chi',
      key: 'address'
    }
  ]
  const students =[
    {
      name: 'dvchat1',
      age: 10,
      address: 'BG'
    }
  ];
  return (
    <div className="App">
       {/* <div className="flex pl-4 text-sm">
          <ul>
          <li className="mr-2"><Link  to={'/admin/product'} >Admin Product</Link></li>
          <li className="mr-2"><Link  to={'/admin/posts'} >Admin Post</Link></li>
          <li className="mr-2"><Link  to={'/admin/category'} >Admin Category</Link></li>
          <li className="mr-2"><Link  to={'/admin/book'} >Admin Book</Link></li>
        </ul>
        </div> */}

      <Routes>
        <Route path='/' element={<ClientLayout />}>
            <Route index element={<Main />} />
        </Route>

        <Route path='admin' element={<AdminLayout />}>
            <Route index element={<AdminHomePage />} />

            <Route path='product'>
              <Route index element={<Product />} />
              <Route path=':id' element={<ProductDetail />} />
              <Route path='create' element={<ProductForm />} />
              <Route path=':id/edit' element={<ProductForm />} />
            </Route>

            <Route path={'posts'}>
              <Route index element={<PostList />} />
              <Route path=':id' element={<PostDetail />} />
              <Route path={'create'} element={<PostForm />} />
              <Route path=':id/edit' element={<PostForm />} />
            </Route>

            <Route path={'category'}>
              <Route index element={<Categories />} />
              <Route path=':id' element={<CategoriesDetail />} />
              <Route path={'create'} element={<CategorieForm />} />
              <Route path=':id/edit' element={<CategorieForm />} />
            </Route>

            
            <Route path={'book'}>
              <Route index element={<BookList />} />
              <Route path={'create'} element={<BookForm />} />
              <Route path=':id/edit' element={<BookForm />} />
            </Route>
        </Route>
      </Routes>
    </div>
  
  );
}

export default App;
