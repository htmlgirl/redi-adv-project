import React from "react";

const Header = () => {
    return (
        <div>
            <h1 className="bg-blue-400 text-white text-4xl text-center py-6 shadow-lg">Movie wishlist</h1>
            <div className="flex items-center space-x-2 text-blue-500 p-2 text-2xl max-w-[1800px] w-full">
                <a href="./" className="hover:underline">
                    Home
                </a>
                <span className="text-blue-500">/</span>
                <a href="./aboutUs" className="hover:underline">
                    About Us
                </a>
            </div>

        </div>
    )
}
export default Header;