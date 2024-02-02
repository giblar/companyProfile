const Navbar = () => {
    return (
        <nav className=" p-2 mt-3 w-full fixed text-xl z-10"> 
            <div className="container mx-auto flex flex-wrap items-center">
                <div className="flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold">
                    <a className="text-white no-underline hover:text-white hover:no-underline" href="#">
                        <img src="/image/logo.png" alt="Logo" />
                    </a>
                </div>
                <div className="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end">
                    <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
                        <li className="mr-3">
                            <a className="inline-block py-2 px-4 text-white no-underline" href="#">Home</a>
                        </li>
                        <li className="mr-3">
                            <a className="inline-block text-white no-underline hover:text-green-500 hover:text-underline py-2 px-4" href="#">About Us</a>
                        </li>
                        <li className="mr-3">
                            <a className="inline-block text-white no-underline hover:text-green-500 hover:text-underline py-2 px-4" href="#">Portfolio</a>
                        </li>
                        <li className="mr-3">
                            <a className="inline-block text-white no-underline hover:text-green-500 hover:text-underline py-2 px-4" href="#">Blogs</a>
                        </li>
                        <li className="mr-3">
                            <a className="inline-block text-white no-underline hover:text-green-500 hover:text-underline py-2 px-4" href="#">Services</a>
                        </li>
                        <li className="mr-3">
                            <a className="inline-block text-white no-underline hover:text-green-500 hover:text-underline py-2 px-4" href="#">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
