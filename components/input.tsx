import React from "react";

interface InputInterface {
    id: string;
    value: string;
    label: string;
    type: string;
    onChange: any;
}

const Input: React.FC<InputInterface> = ({ id, value, label, type, onChange }) => {
    return (
        <div className={"w-full mb-5 relative "}>
            <input
                id={id}
                value={value}
                type={type}
                onChange={onChange}
                className={"w-full block border border-slate-800 rounded-md bg-slate-300 text-slate-800 text-md appearance-none focus:outline-none focus:ring-2 pt-6 pb-1 px-6 peer"}
                placeholder={""}

            />
            <label htmlFor={id}
                className={"absolute text-md duration-150 transform -translate-y-3 text-slate-500 scale-75 top-4 z-10 origin-[0] left-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"}>
                {label}
            </label>
        </div>
    )
}

export default Input;