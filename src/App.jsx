import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import AddPost from "./pages/AddPost.jsx";
import { useState } from "react";

function App() {
  const [posts, setPosts] = useState([
    {
      title: "Understanding React Hooks",
      content: "A deep dive into the world of React Hooks and how they can simplify your code.",
    },
    {
      title: "JavaScript ES2021 Features",
      content: "An overview of the latest features introduced in JavaScript ES2021.",
    },
    {
      title: "CSS Grid Layout",
      content: "Learn how to create complex layouts easily with CSS Grid.",
    },
  ]);

  const addPost = (post) => {
    setPosts([post, ...posts]);
  };

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index posts={posts} />} />
        <Route path="/add-post" element={<AddPost addPost={addPost} />} />
      </Routes>
    </Router>
  );
}

export default App;
