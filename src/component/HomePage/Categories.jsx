import getAllCategories from '@/utils/getAllCategories';
import React from 'react';
import SingleCategory from './SingleCategory';

const Categories = async () => {
    const Categories = await getAllCategories();
    return (
        <div>
            <h1 className='text-4xl font-bold'>Categories</h1>
            <div className='container mx-auto'>
                {
                    Categories.map(category => <SingleCategory
                        key={category.id}
                        category={category}
                    ></SingleCategory>)
                }
            </div>
        </div>
    );
};

export default Categories;