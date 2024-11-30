import { NextPageContext } from "next";
import { getSession } from "next-auth/react";
import useCurrentUser from "@/hooks/useCurrentUser";
import { useRouter } from "next/router";

export async function getServerSideProps(context: NextPageContext) {
    const session = await getSession(context);

    if (!session) {
        return {
            redirect: {
                destination: "/auth",
                permanent: false,
            },
        };
    }
    return {
        props: {},
    };
}

const Profiles = () => {
    const router = useRouter();
    const { data: user } = useCurrentUser();

    return (
        <div className="flex items-center justify-center min-h-screen bg-slate-900">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-white mb-8">Who is here?</h1>
                <div className="flex justify-center">
                    <div
                        className="group cursor-pointer"
                        onClick={() => {
                            router.push("/");
                        }}
                    >
                        <div className="flex flex-col items-center space-y-4 p-6 bg-slate-800 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:bg-slate-700">
                            <div className="w-24 h-24">
                                <img
                                    src={"/images/user.png"}
                                    alt={"Profile"}
                                    className="w-full h-full rounded-full border-4 border-slate-700 group-hover:border-slate-500"
                                />
                            </div>
                            <div className="text-lg text-white font-medium group-hover:text-slate-300">
                                {user?.name || "Guest"}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profiles;
