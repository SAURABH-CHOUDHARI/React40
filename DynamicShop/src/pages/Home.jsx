import { useEffect } from "react";
import ProductCart from "../components/ProductCart"
import { useDispatch, useSelector } from "react-redux";
import { asynGetProducts } from "../store/actions/ProductAction"


const Home = () => {
    const dispatch = useDispatch();
    const { product } = useSelector((state) => state.product)


    useEffect(() => {
        dispatch(asynGetProducts());
    }, );

    return (
        <div className="mt-10">

            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
                {product.map((product, key) =>
                    <ProductCart key={key} data={product} />
                )}
            </div>
        </div>
    )
}

export default Home