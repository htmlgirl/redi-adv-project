import Input from "../components/input";
import {useCallback, useState} from "react";

const Authorization = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [option, setOptions] = useState('');

    const toggleOptions = useCallback(() => {
        setOptions((currentOption) => currentOption === "login" ? "register" : "login");
    }, [])

    return (
        <div className= {"relative h-full w-full bg-no-repeat bd-cover bg-center bg-[url('/images/tree.jpg')]"}>
            <div className= {"bg-slate-900 lg:bg-opacity-50 h-full w-full"}>
                <nav className= {"bg-transparent py-15 px-12 "}>
                    <img className= {"h-22"} src= "/images/videoland.png" alt="videoland-logo"/>
                </nav>
                <div className={"flex justify-center"}>
                    <div className={"bg-slate-900 mt-2 lg:bg-opacity-80 px-14 py-14 lg:w-2/5 lg:max-w-md rounded-md w-full"}>
                        <h2 className={" text-3xl font-arial mb-8 text-slate-300 text-center"}>
                            {option === "login" ? "Sing in" : "Register"}
                        </h2>
                        <div className={"flex flex-col items-center justify-center"}>
                            {option === "register" && (
                            <Input
                                id={"name"}
                                type={"text"}
                                value={name}
                                label={"Username"}
                                onChange={(event: any)=>{setName(event.target.value)}}
                            />
                            )}
                            <Input
                                id={"email"}
                                type={"email"}
                                value={email}
                                label={"Email"}
                                onChange={(event: any)=>{setEmail(event.target.value)}}
                            />
                            <Input
                                id={"password"}
                                type={"password"}
                                value={password}
                                label={"Password"}
                                onChange={(event: any)=>{setPassword(event.target.value)}}
                            />
                        </div>
                        <button className={"transition w-full text-xl px-3 py-3 flex justify-center mt-5 text-violet-200 rounded-md bg-violet-800 hover:bg-violet-600 focus:outline-none"}>
                            {option === "login" ? "Login" : "Sing in"}
                        </button>
                        <div className={"text-base mt-5 text-slate-300 "}>
                            {option === "login" ? "Are you still not registered??" : "Have you registered yet?"}
                            <div onClick={toggleOptions} className={"text-violet-600 cursor-pointer hover:underline"}>
                                {option === "login" ? "Create an account" : "Login"}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Authorization;
