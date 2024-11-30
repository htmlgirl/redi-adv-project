import {NextPageContext} from "next";
import {getSession} from "next-auth/react";
import Navbar from "../components/navbar"


export async function getServerSideProps(context: NextPageContext) {
    const session = await getSession(context);
    if (!session) {
        return {
            redirect: {
                permanent: false,
                destination: "/auth",
            }
        }
    }
    return {
        props: {}
    }
}

export default function Home() {


  return (
    <>
      <Navbar />
    </>
  );
}
