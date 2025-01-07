import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { products } from "../Product";
import { useDispatch } from 'react-redux';
import { addToCart } from "../store/reducers/CartSlice";

const Details = () => {
    const { slug } = useParams();
    const [detail, setDetail] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    useEffect(() => {
        const findDetails = products.filter(product => product.slug === slug);
        if (findDetails.length > 0) {
            setDetail(findDetails[0]);
        } else {
            window.location.href = '/';
        }
    }, [slug])
    const handleMinusQuantity = () => {
        setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
    }
    const handlePlusQuantity = () => {
        setQuantity(quantity + 1);
    }
    const handleAddToCart = () => {
        dispatch(addToCart({
            productId: detail.id,
            quantity: quantity,
        }))
    }
    return (
        <div>
            <h2 className="text-3xl text-center text-zinc-200">PRODUCT DETAIL</h2>
            <div className="grid sm:grid-cols-2  gap-5 mt-5">
                <div >
                    <img src={detail.image} alt="" className="max-sm:w-3/4 mx-auto"/>
                </div>
                <div className="flex flex-col gap-5 text-zinc-200">
                    <h1 className="text-3xl max-md:text-center sm:text-4xl uppercase font-bold">{detail.name}</h1>
                    <p className="max-sm:text-center font-bold text-3xl">
                        ${detail.price}
                    </p>
                    <div className="flex flex-col gap-5">
                        <div className="flex gap-2 max-sm:justify-center items-center h-10 ">
                            <button className="bg-gray-100 h-full w-10 font-bold rounded-xl flex justify-center items-center text-zinc-800"
                                onClick={handleMinusQuantity}
                            >-</button>
                            <span className="bg-gray-100 h-full w-10 font-bold rounded-xl flex justify-center items-center text-zinc-800">{quantity}</span>
                            <button className="bg-gray-100 h-full w-10 font-bold rounded-xl flex justify-center items-center text-zinc-800"
                                onClick={handlePlusQuantity}
                            >+</button>
                        </div>
                        <button className="bg-gray-200 text-zinc-800 px-7 py-3 w-40 max-sm:mx-auto rounded-xl shadow-2xl"
                        onClick={handleAddToCart}
                        >
                            Add To Cart
                        </button>
                    </div>
                    <p className="max-sm:text-center">
                        {detail.description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Details