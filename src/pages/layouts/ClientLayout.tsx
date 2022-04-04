import React from "react";
import {Outlet} from 'react-router-dom';
import HomePage from "../homePage";
import Footer from "../homePage/footer";
import Main from "../homePage/main";
import Slider from "../homePage/sidebar";
type PropsType ={};

function ClientLayout(props: PropsType){
return(
<div>
    <HomePage />
    <Slider/>
    <main>
        <Outlet />
    </main>
    <Footer />
</div>
);
};
export default ClientLayout;