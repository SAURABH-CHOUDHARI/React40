
const Cart = ({ cart, updateQuantity, removeFromCart }) => {
    return (
        <>
            
            {cart.length === 0 ? (
                <p className="text-gray-600">Your cart is empty.</p>
            ) : (
                cart.map((item) => (
                    <div
                        key={item.id}
                        className="w-52   flex  my-2 flex-col justify-between items-center pb-1 border-b hover:scale-105"
                    >
                        {/* image */}
                        <div className="  rounded-lg h-36 overflow-hidden">
                            <img className="w-full object-cover h-full " src={item.image} alt="" />
                        </div>
                        {/*  text and buttons */}
                        <div className="flex items-center">
                            {/* content */}
                            <div className="">
                                <h3 className="font-semibold line-clamp-1">{item.title}</h3>
                                <p>${item.price}</p>
                                <p>Quantity: {item.quantity}</p>
                            </div>
                            {/* buttons */}
                            <div>
                                <button
                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                    className="px-2 bg-gray-200 rounded ml-4 active:scale-90 active:bg-red-500 duration-150 "
                                >
                                    -
                                </button>
                                <button
                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                    className="px-2 bg-gray-200 rounded ml-2 mb-2 active:scale-90 active:bg-green-500 duration-150 "
                                >
                                    +
                                </button>
                                <button
                                    onClick={() => removeFromCart(item.id)
                                        
                                    }
                                    className="px-4 bg-red-500 text-white rounded "
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    </div>
                ))
            )}
        </>
    );
};

export default Cart;