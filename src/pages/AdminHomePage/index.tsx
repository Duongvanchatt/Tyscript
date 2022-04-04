import React from 'react';
import { Link } from 'react-router-dom';
function AdminHomePage() {
    return (
        <div className='mx-auto bg-grey-lightest'>
            <header className="bg-red-400">
            <div className="flex justify-between">
                <div className="p-1 mx-3 inline-flex items-center">
                    <i className="fas fa-bars pr-2 text-white"></i>
                    <h1 className="text-white p-2">Logo</h1>
                </div>
                <nav>
                    <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
                        <li><a className="inline-block no-underline hover:text-black hover:underline py-2 px-4 text-white" ><Link to={'/admin/product'}>Products</Link></a></li>
                        <li><a className="inline-block no-underline hover:text-black hover:underline py-2 px-4 text-white"><Link to={'/admin/category'}>Categories</Link></a></li>
                    </ul>
                </nav>
                <div className="p-1 flex flex-row items-center">
                    <a href="#" className="text-white p-2 no-underline hidden md:block lg:block">Dương Văn Chất</a>
                </div>
            </div>
        </header>
    </div>
    );
}

export default AdminHomePage;