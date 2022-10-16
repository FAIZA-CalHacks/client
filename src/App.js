import "./App.css";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import PostQuestion from "./pages/postQuestion";
import Profile from "./pages/profile";
import { Route, Routes } from "react-router-dom";
import EnlargedPost from "./pages/enlargedPost";
import Login from "./pages/login";

function App() {
  return (
    <div style={{ background: "black" }} id="main">
      {/* <Navbar /> */}

      <div>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/post-question" element={<PostQuestion />}></Route>
          <Route path="/view-profile" element={<Profile />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/post/:postID" element={<EnlargedPost />}></Route>
        </Routes>
      </div>
      <div
      // style={{
      //   backgroundColor: "black",
      //   width: "100px",
      //   height: "1000px",
      // }}
      />
    </div>
  );
}

export default App;
