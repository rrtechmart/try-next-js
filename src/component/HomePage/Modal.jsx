import { forwardRef, useRef } from "react";


const Modal = ({ closeModal, updateData, handleSubmit}, ref) => {
    const formRef = useRef(null);
    return (
        <dialog ref={ref} className="w-[98%] max-w-[500px] rounded-md">
            <div className="text-right mb-4">
                <button onClick={() => {
                    closeModal()
                    formRef.current.reset();
                }}>Close</button>

            </div>
            <form onSubmit={handleSubmit} ref={formRef} className="m-2">
                <input
                    className="w-full mb-2 p-2  focus: outline-none border border-blue-600"
                    type="text"
                    placeholder="title"
                    name="title"
                    defaultValue={updateData?.title}
                />
                <input
                    className="w-full mb-2 p-2  focus: outline-none border border-blue-600"
                    type="number"
                    placeholder="price"
                    name="price"
                    defaultValue={updateData?.price}
                />

                <button className="text-white py-1 px-2 bg-blue-600">
                    Submit
                </button>
            </form>

        </dialog>
    );
};

export default forwardRef(Modal);