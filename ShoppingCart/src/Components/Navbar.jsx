import 'remixicon/fonts/remixicon.css'
const Navbar = ({toggle}) => {
    return (
        <nav className="flex justify-between items-center py-2 px-28 text-black  border-t-2 border-zinc-700">
            <h1 className='text-4xl '>VANVIHAR.com</h1>
            <button 
            className='text-2xl outline-none border-2 shadow-xl active:scale-95 py-2 px-6 rounded-2xl text-black'
            onClick={toggle}
            ><i className="ri-shopping-cart-2-fill"></i></button>
        </nav>
    );
};

export default Navbar;