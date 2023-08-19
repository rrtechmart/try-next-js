'use client'
import Modal from "@/component/HomePage/Modal";
import ManageSingleProduct from "../manage-products/ManageSingleProduct";
import { useRef, useState } from "react";
import useProducts from "@/hooks/useProducts";


const AllProducts = () => {
    const { products, isLoading, mutate, isValidating } = useProducts();
    const modalRef = useRef(null);
    const [updateData, setUpdateData] = useState(null);

    const openModal = (product) => {
        setUpdateData(product);
        modalRef.current.showModal();
    }
    const closeModal = () => {
        setUpdateData(null);
        modalRef.current.close();
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const price = form.price.value;
        const data = { title, price }
        if (title && price) {
            try {
                const res = await fetch(`http://localhost:5000/products/${updateData?.id}`, {
                    method: "PATCH",
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify(data)
                })
                const result = await res.json();
                console.log(result);
                mutate();
                form.reset();
                closeModal();

            }
            catch (error) {
                console.log(error);
            }
        }
    }

    const handleDelete = async (id) => {
        try {
            const res = await fetch(`http://localhost:5000/products/${id}`, {
                method: "DELETE",
            })
            const result = await res.json();
            console.log(result);
            mutate();
        }
        catch (error) {
            console.log(error);
        }
    }


    return (
        <>
            {isLoading && (
                <h1 className="text-2xl font-semibold text-center">Loading...</h1>
            )}

            {!isLoading && (
                <table className={`border-collapse w-full ${isValidating ? "opacity-50" : "opacity-100"}`}>
                    <thead>
                        <tr>
                            <th className='border border-slate-400'> Title </th>
                            <th className='border border-slate-400'> Price </th>
                            <th className='border border-slate-400'> Update </th>
                            <th className='border border-slate-400'> Delete </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product) => <ManageSingleProduct
                                key={product.id}
                                product={product}
                                handleDelete={handleDelete}
                                openModal={openModal}
                            ></ManageSingleProduct>)
                        }
                    </tbody>
                </table>)}
            <Modal ref={modalRef} closeModal={closeModal} updateData={updateData} handleSubmit={handleSubmit} />

        </>
    );
};

export default AllProducts;