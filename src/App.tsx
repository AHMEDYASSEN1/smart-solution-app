import "./App.css";
import { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Website from "./pages/Website";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";


function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}>
            <Route path="/" element={<Website />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
