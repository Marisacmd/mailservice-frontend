import React from "react";
import { Routes, Route } from "react-router-dom";
import MainScreen from "./pages/MainScreen/MainScreen";

class AppRouter extends React.Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<MainScreen />} />
      </Routes>
    );
  }
}

export default AppRouter;
