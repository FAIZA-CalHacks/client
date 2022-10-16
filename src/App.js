import "./App.css";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import PostQuestion from "./pages/postQuestion";
import Profile from "./pages/profile";
import { Route, Routes } from "react-router-dom";
import EnlargedPost from "./pages/enlargedPost";
import Login from "./pages/login";
import Landing from "./pages/landing";

function App() {
  return (
    <div>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/post-question" element={<PostQuestion />}></Route>
          {/* <Route path="/view-profile" element={<Profile />}></Route> */}
          <Route path="/login" element={<Login />}></Route>
          <Route path="/post/:postID" element={<EnlargedPost />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
