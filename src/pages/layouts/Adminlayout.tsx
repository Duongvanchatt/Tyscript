import React from "react";
import {Outlet} from 'react-router-dom';
import AdminHomePage from "../AdminHomePage";
type PropsType ={};

function AdminLayout(props: PropsType){
    return(
        <div>
            <AdminHomePage />
                <div className="">
                    <main>
                        <Outlet/>
                    </main>
                </div>
            </div>
    );
};
export default AdminLayout;