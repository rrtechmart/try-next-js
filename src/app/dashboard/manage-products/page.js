import getAllProducts from '@/utils/getAllProducts';
import React from 'react';
import ManageProducts from './ManageProducts';

const ManageProductsPage = async () => {
    const products = await getAllProducts();
    console.log(products);
    return (
        <div className='w-full mt-10'>
            <h1 className='text-2xl font-semibold my-4'> product are managed from here</h1>
            <ManageProducts products={products}></ManageProducts>
        </div>
    );
};

export default ManageProductsPage;