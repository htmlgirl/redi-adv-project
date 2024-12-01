import {NextPageContext} from "next";
import {getSession} from "next-auth/react";
import Navbar from "../components/navbar"
import MovieList from "../components/movieList"
import useMovieList from "@/hooks/useMovieList";
import useFavorites from "@/hooks/useFavorits";

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

    const {data: movies = []} = useMovieList()
    const {data:favorites = []} = useFavorites()

  return (
    <>
      <Navbar />
        <div>
            <MovieList title="Trending Now" data={movies}/>
            <MovieList title="My List" data={favorites}/>
        </div>

    </>
  );
}
