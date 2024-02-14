import Home from "./pages/home/Home.jsx";
import Login from "./pages/login/Login.jsx";
import New from "./pages/new/New.jsx";
import List from "./pages/list/List.jsx";
import Single from "./pages/single/Single.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="user">
            <Route index element={<List />} />
            <Route path=":userId" element={<Single />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
