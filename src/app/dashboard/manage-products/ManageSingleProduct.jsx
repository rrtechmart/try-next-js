import React from 'react';

const ManageSingleProduct = ({ product, openModal, handleDelete }) => {
    const { id, title, price } = product;
    return (
        <div>
            <tr className='text-center w-full'>
                <td className='border border-slate-400'> {title} </td>
                <td className='border border-slate-400'> {price} </td>
                <td className='border border-slate-400'>
                    <button onClick={()=> openModal(product)} className='bg-blue-600 text-white'>Update</button>
                </td>
                <td className='border border-slate-400'>
                    <button onClick={()=>handleDelete(id)} className='bg-blue-600 text-white'>Delete</button>
                </td>
            </tr>
        </div>
    );
};

export default ManageSingleProduct;