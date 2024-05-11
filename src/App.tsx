import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import NotFound from "./Pages/NotFound/NotFound";
import About from "./Pages/About/About";
import Settings from "./Pages/Settings/Settings";
import Nav from "./components/Nav/Nav";
import UserList from "./Pages/UserList/UserList";
import { User } from "./Pages/User/User";
// import { PostList } from "./components/PostList/PostList";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/userList" element={<UserList />} />
        <Route path="/userList/:userID" element={<User />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <PostList /> */}
    </div>
  );
}

export default App;
