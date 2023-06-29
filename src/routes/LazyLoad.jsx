import { lazy } from "react";

export const Home = lazy(() => import("Containers/Home"));
export const CreateACcount = lazy(() => import("Containers/CreateACcount"));
export const WalletConnect = lazy(() => import("Containers/WalletConnect"));
export const ArtistRankings = lazy(() => import("Containers/Rankings"));
