import React from "react";

interface MobileMenuProps {
    visible?: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ visible }) => {
    if (!visible) {
        return null;
    }

    return (
        <div className="absolute top-20 mt-2 left-0 w-full bg-slate-800 text-slate-100 shadow-lg z-50">
            <div className="flex flex-col space-y-4 py-4 px-6">
                <div className="cursor-pointer hover:text-violet-600 transition">Home</div>
                <div className="cursor-pointer hover:text-violet-600 transition">Series</div>
                <div className="cursor-pointer hover:text-violet-600 transition">Films</div>
                <div className="cursor-pointer hover:text-violet-600 transition">New and Popular</div>
                <div className="cursor-pointer hover:text-violet-600 transition">My List</div>
                <div className="cursor-pointer hover:text-violet-600 transition">Browse by Languages</div>
            </div>
        </div>
    );
};

export default MobileMenu;
