import { Routes, Route } from "react-router-dom";

import { ScreenWrapper } from "Components/ScreenWrapper";
import { CreateACcount, Home, WalletConnect, ArtistRankings } from "./LazyLoad";

const HomeScreen = () => (
  <ScreenWrapper>
    <Home />
  </ScreenWrapper>
);
const CreateAccountScreen = () => (
  <ScreenWrapper>
    <CreateACcount />
  </ScreenWrapper>
);
const WalletConnectScreen = () => (
  <ScreenWrapper>
    <WalletConnect />
  </ScreenWrapper>
);
const ArtistRankingScreen = () => (
  <ScreenWrapper>
    <ArtistRankings />
  </ScreenWrapper>
);

export function MainRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/create-account" element={<CreateAccountScreen />} />
        <Route path="/connect-wallet" element={<WalletConnectScreen />} />
        <Route path="/rankings" element={<ArtistRankingScreen />} />

        {/* <Route Component={NotFoundRoute} /> */}
      </Routes>
    </>
  );
}
