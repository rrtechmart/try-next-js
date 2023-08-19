import getAllProducts from '@/utils/getAllProducts';
import React from 'react';
import SingleProduct from './SingleProduct';

const productsPage = async ({searchParams}) => {
    const products = await getAllProducts(searchParams.categoryId);
    console.log(products);
    return (
        <div>
            {
                products.map(product => <SingleProduct
                key={product.id}
                product={product}
                ></SingleProduct>)
            }
            
        </div>
    );
};

export default productsPage;