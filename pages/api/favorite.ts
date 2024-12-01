import {NextApiRequest, NextApiResponse } from "next";
import prismadb from "@/lib/prismadb";
import serverAuth from "@/lib/serverAuth";
import {without} from "lodash";
import {mockSession} from "next-auth/client/__tests__/helpers/mocks";
import user = mockSession.user;


export default async function handler (req: NextApiRequest, res: NextApiResponse){
    try {
        if(req.method === "POST"){
            const {currentUser} = await serverAuth(req);
            const {movieID} = req.body;
            const existingMovie = await prismadb.movie.findUnique({
                where: {
                    id: movieID,
                }
            });
            if (!existingMovie) {
                throw new Error("Not logged in");
            }
            const user = await prismadb.user.update({
                where: {
                    email: currentUser.user.email || "",
                },
                data: {
                    favoriteIds: {
                        push: movieID,
                    }
                }
            })
            res.status(200).json({user});
        }
        if (req.method === "DELETE") {
            const {movieID} = req.body;
            const {currentUser} = await serverAuth(req);
            const existingMovie = await prismadb.movie.findUnique({
                where: {
                    id: movieID,
                }
            });
            if (!existingMovie) {
                throw new Error("Invalid id");
            }

            const updateFavoriteIds = without(currentUser.favoriteIds, movieID);

            const updateUser = await prismadb.user.update({
                where: {
                    email: currentUser.email || '',
                },
                data: {
                    favoriteIds: updateFavoriteIds,
                }
            })
            return res.status(200).json({updateUser});
        }
        return res.status(405).end();
    } catch (error) {
        console.log(error);
        return res.status(400).end();
    }
}