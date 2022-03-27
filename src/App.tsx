import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from "./components/screens/Login";
import { Mypage } from "./components/screens/Mypage";
import SignUp from './SignUp'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={`/Mypage/`} element={<Mypage />} />
          <Route path={`/`} element={<Login />} />
          <Route path={`/signup/`} element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
