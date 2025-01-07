import { useState, useEffect } from "react";
import Product from "./components/Product.jsx";
import Cart from "./components/Cart.jsx";
import Navbar from "./components/Navbar.jsx";
import axios from "axios";


const App = () => {
  // const products = [
  //   {
  //     id: 1,
  //     name: "Wireless Earbuds",
  //     img: "https://images.unsplash.com/photo-1648447272271-1c2292144c50?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     disc: "High-quality wireless earbuds with noise cancellation and long battery life.",
  //     price: 4999,
  //   },
  //   {
  //     id: 2,
  //     name: "Smartwatch",
  //     img: "https://images.unsplash.com/photo-1517502474097-f9b30659dadb?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     disc: "Feature-rich smartwatch with fitness tracking, heart rate monitoring, and GPS.",
  //     price: 12999,
  //   },
  //   {
  //     id: 3,
  //     name: "Bluetooth Speaker",
  //     img: "https://images.unsplash.com/photo-1517502474097-f9b30659dadb?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     disc: "Portable Bluetooth speaker with powerful sound and water resistance.",
  //     price: 3999,
  //   },
  //   {
  //     id: 4,
  //     name: "Gaming Mouse",
  //     img: "https://images.unsplash.com/photo-1703052399541-34d3bfa12e9c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     disc: "Ergonomic gaming mouse with customizable RGB lighting and high-precision sensor.",
  //     price: 2499,
  //   },
  //   {
  //     id: 5,
  //     name: "Laptop Stand",
  //     img: "https://images.unsplash.com/photo-1623251606108-512c7c4a3507?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     disc: "Adjustable laptop stand for improved ergonomics and better airflow.",
  //     price: 1999,
  //   },
  // ];
  const [openClose, setOpenClose] = useState(false)
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([])


  const toggleCart = () => {
    setOpenClose(!openClose)
  }

  const getProducts = async () => {
    let response = await axios.get('https://fakestoreapi.in/api/products')
    setProducts(response.data.products)
  }
  useEffect(() => {
    getProducts();
  }, []);


  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      setOpenClose(true)




      if (existingProduct) {

        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {

        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
    setProducts(prevProducts =>
      prevProducts.map(prod =>
        prod.id === product.id
          ? { ...prod, isInCart: true }
          : prod
      )
    );

  };


  const updateQuantity = (id, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(quantity, 1) } : item
      )
    );
  };


  const  removeFromCart = async (id) => {
    
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    setProducts((prevProducts) =>
      prevProducts.map((prod) =>
        prod.id === id
          ? { ...prod, isInCart: false }
          : prod
      )
    );
  };


  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>



      <Navbar toggle={toggleCart} />
      <div className="w-screen px-10  flex ">
        <div className="w-screen md:h-[90vh] overflow-y-scroll scrollbar  mr-2">

          {/* <h1 className="text-4xl font-bold mb-4 text-slate-800 w-full text-center ">SHOP</h1> */}
          <Product products={products} addToCart={addToCart} />
        </div>
  
        {openClose ? 
        <div className="h-[90vh] overflow-y-scroll scrollbar w-80 flex items-center flex-col border-2 border-zinc-700">
          <h2 className="text-4xl font-bold  w-full text-center">Cart</h2>
          <h2 className="text-xl font-semibold  border-b-2 border-zinc-700 w-full text-center">Total Price: ₹{totalPrice.toFixed(2)}</h2>
          <Cart
            cart={cart}
            updateQuantity={updateQuantity}
            removeFromCart={removeFromCart}
            />
            </div> 
          : ''}


      </div>
    </>
  );
};

export default App;