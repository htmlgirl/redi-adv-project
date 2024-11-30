import React from "react";

interface NavbarItemProps {
    label: string;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ label }) => {
    return (
        <div className="text-slate-100 text-sm lg:text-base font-medium px-3 py-2 cursor-pointer hover:text-violet-600 transition">
            {label}
        </div>
    );
};

export default NavbarItem;
