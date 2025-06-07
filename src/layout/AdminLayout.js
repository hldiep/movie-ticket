import React from 'react';
import { Outlet } from 'react-router-dom';
import Dashboard from '../components/ManageFilm/Dashboard';
import HeaderManage from '../components/ManageFilm/HeaderManage';

const AdminLayout = () => {
    return (
        <>
            <Dashboard />
            <HeaderManage />
            <div>
                <Outlet />
            </div>
        </>
    );
};

export default AdminLayout;
