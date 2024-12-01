import { useState, useCallback } from "react";
import NavbarItem from "./navbarItem";
import { BsBell, BsChevronDown, BsSearch } from "react-icons/bs";
import MobileMenu from "./mobileMenu";
import AccountMenu from "./accountMenu";

const Navbar = () => {
    const [isOpenMobMenu, setIsOpenMobMenu] = useState(false);
    const toggleMobileMenu = useCallback(() => {
        setIsOpenMobMenu((current) => !current);
    }, []);

    const [isOpenAccMenu, setIsOpenAccMenu] = useState(false);
    const toggleAccMenu = useCallback(() => {
        setIsOpenAccMenu((current) => !current);
    }, []);

    return (
        <nav className="bg-slate-900 text-slate-100 shadow-md">
            <div className="container mx-auto flex items-center justify-between py-4 px-6">
                {/* Logo Section */}
                <div className="flex items-center">
                    <img className="h-14 mr-8" src="/images/videoland.png" alt="videoland-logo" />

                    {/* Desktop Menu Items */}
                    <div className="hidden md:flex space-x-6">
                        <NavbarItem label="Home" />
                        <NavbarItem label="My List" />
                        <NavbarItem label="Button" />
                        <NavbarItem label="Button" />
                        <NavbarItem label="Button" />
                        <NavbarItem label="Button" />
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden flex items-center space-x-2 cursor-pointer" onClick={toggleMobileMenu}>
                        <span className="text-slate-100">Browse</span>
                        <BsChevronDown className={`text-slate-100 transition ${isOpenMobMenu ? 'rotate-180' : ''}`} />
                        <MobileMenu visible={isOpenMobMenu} />
                    </div>
                </div>

                {/* Right Section */}
                <div className="flex items-center space-x-6">
                    <BsSearch className="text-slate-100 text-xl cursor-pointer hover:text-violet-600 transition" />
                    <BsBell className="text-slate-100 text-xl cursor-pointer hover:text-violet-600 transition" />

                    {/* Account Menu */}
                    <div className="flex items-center space-x-2 cursor-pointer" onClick={toggleAccMenu}>
                        <img className="h-8 w-8 rounded-full border-2 border-violet-600" src="/images/user.png" alt="user" />
                        <BsChevronDown className={`text-slate-100 transition ${isOpenAccMenu ? 'rotate-180' : ''}`} />
                        <AccountMenu visible={isOpenAccMenu} />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

