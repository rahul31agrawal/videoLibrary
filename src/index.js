import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { LikeProvider } from "./context/LikeContext";
import { HistoryProvider } from "./context/historyContext";
import { WatchLaterProvider } from "./context/watchLaterContext";
import { AuthContextProvider } from "./context/authContext";
import { PlaylistProvider } from "./context/PlaylistContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthContextProvider>
        <PlaylistProvider>
          <WatchLaterProvider>
            <LikeProvider>
              <HistoryProvider>
                <App />
              </HistoryProvider>
            </LikeProvider>
          </WatchLaterProvider>
        </PlaylistProvider>
      </AuthContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
