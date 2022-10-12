import "./app.scss";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import Home from "./components/Home/Home";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
export default function App() {
  return (
    <div className="App">
      <h1>Toolkit</h1>
      <BrowserRouter>
        <Header></Header>
        <switch>
          <Routes>
            <Route path="/" exact component={Home} />
            <Route path="/movie/:imdbID" component={MovieDetail} />
            <Route component={PageNotFound} />
          </Routes>
        </switch>

        <Footer />
      </BrowserRouter>
    </div>
  );
}
