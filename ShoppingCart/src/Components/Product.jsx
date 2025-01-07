
const product = ({ products, addToCart,  }) => {
    
    return (
        <div className="flex flex-wrap justify-center gap-6 ">
            {products.map((product, index) => (
                <div 
                    key={index}
                    className="w-80 max-sm:w-52 mt-5 bg-white border border-gray-300 rounded-lg shadow-lg transition-all hover:shadow-xl hover:scale-105 transform duration-300 flex-col flex justify-between relative"
                >
                    <button className="absolute left-3 top-2 bg-white rounded-2xl px-2 shadow-lg font-semibold">{product.category}</button>
                    <img
                        className="rounded-t-lg w-full  object-cover"
                        src={product.image}
                        alt={product.title}
                    />
                    <div className="p-6">
                        <h5 className="text-2xl font-semibold text-gray-800 hover:text-blue-600 transition duration-300 line-clamp-2">
                            {product.title}
                        </h5>
                        <p className="mt-2 text-gray-600 text-sm line-clamp-2">{product.description}</p>
                        <div className="flex items-center justify-between mt-4">
                            <span className="text-2xl font-bold text-green-600">
                            ₹{product.price}
                            </span>
                            <button onClick={() => addToCart(product)} className={`px-5 py-3 text-white font-semibold rounded-lg hover:bg-green-500 ${product.isInCart ? 'bg-green-500' : 'bg-blue-600' } focus:outline-none transition duration-300 active:scale-90 active:bg-green-500`}>
                                {product.isInCart ? 'Added':'Add to Cart'}
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default product