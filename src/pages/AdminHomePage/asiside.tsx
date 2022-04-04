import React from 'react';
import { Link, Route } from 'react-router-dom';
import Product from '../product/product';

function Aside() {
    return (
        <div className='flex justify-items-center'>
             <aside>
             <div className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1" id="menu">
                <nav>
                    <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
                        <li><a className="inline-block no-underline hover:text-black hover:underline py-2 px-4" href="#">Shop</a></li>
                        <li><a className="inline-block no-underline hover:text-black hover:underline py-2 px-4" href="#">About</a></li>
                    </ul>
                </nav>
            </div>
            </aside>
    </div>
    );
}

export default Aside;