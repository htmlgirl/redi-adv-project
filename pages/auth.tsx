import axios from "axios";
import Input from "../components/input";
import {useCallback, useState} from "react";
import {signIn} from "next-auth/react";

import {FcGoogle} from "react-icons/fc";
import {FaGithub} from "react-icons/fa";

const Auth = () => {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [option, setOptions] = useState('');

    const toggleOptions = useCallback(() => {
        setOptions((currentOption) => currentOption === "login" ? "register" : "login");
    }, [])

    const login = useCallback(async () => {
        try {
            await signIn('credentials', {
                email,
                password,
                callbackUrl: '/profiles',
            });
        } catch (error) {
            console.log(error);
        }
    }, [email, password]);

    const register = useCallback(async () => {
        try {
            await axios.post("./api/register", {
                name,
                email,
                password,
            });
            login();
        } catch (error) {
            console.log(error);
        }
    }, [name, email, password, login]);

    return (
        <div className= {"relative h-full w-full"}>
            <div className= {"bg-slate-800 lg:bg-opacity-50 h-full w-full"}>
                <nav className= {"bg-transparent p-12 "}>
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
                        <button onClick={option === 'login' ? login : register} className={"transition w-full text-xl px-3 py-3 flex justify-center mt-5 text-violet-200 rounded-md bg-violet-800 hover:bg-violet-600 focus:outline-none"}>
                            {option === "login" ? "Login" : "Sing in"}
                        </button>
                        <div className={"flex flex-row items-center justify-center gap-4 mt-8"}>
                            <div
                                onClick={() => signIn('google', {callbackUrl: '/profiles'} )}
                                className={"flex items-center justify-center w-10 h-10 bg-white rounded-full cursor-pointer hover:opacity-80 transition"}>
                                <FcGoogle size={30}></FcGoogle>
                            </div>
                            <div
                                onClick={() => signIn('github', {callbackUrl: '/profiles'} )}
                                className={"flex items-center justify-center w-10 h-10 bg-white rounded-full cursor-pointer hover:opacity-80 transition"}>
                                <FaGithub size={30}></FaGithub>
                            </div>
                        </div>
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

export default Auth;
