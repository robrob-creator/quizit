import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import Multiplayer from "./pages/multiPlayer/Multiplayer";
import EasySingle from "./pages/singlePlayer/EasySingle";
import HardSingle from "./pages/singlePlayer/HardSingle";
import ModerateSingle from "./pages/singlePlayer/ModerateSingle";
import Singleplayer from "./pages/singlePlayer/Singleplayer";
import Welcome from "./pages/Welcome";

function Routes() {
  return (
    <Switch>
      <Route path="/multi-player" exact={true}>
        <Multiplayer />
      </Route>
      <Route path="/single-player" exact={true}>
        <Singleplayer />
      </Route>
      <Route path="/welcome" exact={true}>
        <Welcome />
      </Route>
      <Route path="/" exact={true}>
        <Welcome />
      </Route>
      <Route path="/single-player/easy" exact={true}>
        <EasySingle />
      </Route>
      <Route path="/single-player/moderate" exact={true}>
        <ModerateSingle />
      </Route>
      <Route path="/single-player/hard" exact={true}>
        <HardSingle />
      </Route>
    </Switch>
  );
}

export default Routes;
