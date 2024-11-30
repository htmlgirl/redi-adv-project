import React from "react";
import { signOut } from "next-auth/react";

interface AccountMenuProps {
    visible?: boolean;
}

const AccountMenu: React.FC<AccountMenuProps> = ({ visible }) => {
    if (!visible) {
        return null;
    }

    return (
        <div className="absolute top-20 right-0 w-48 mt-2 bg-slate-900 text-slate-100 shadow-lg rounded-md z-50">
            <div className="flex flex-col py-4 px-4 space-y-3">
                {/* User Info */}
                <div className="flex items-center space-x-3">
                    <img
                        src="/images/user.png"
                        alt="user"
                        className="w-10 h-10 rounded-full border-2 border-violet-600"
                    />
                    <div className="text-slate-100 font-medium">Username</div>
                </div>
                {/* Sign Out */}
                <div
                    onClick={() => signOut()}
                    className="cursor-pointer text-sm text-slate-100 hover:text-violet-600 transition"
                >
                    Sign out of Videoland
                </div>
            </div>
        </div>
    );
};

export default AccountMenu;
