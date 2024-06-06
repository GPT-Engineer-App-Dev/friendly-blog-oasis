import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import AddPost from "./pages/AddPost.jsx";
import { useState, useEffect } from "react";
import { Box, Button, useColorMode } from "@chakra-ui/react";

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

  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme && savedTheme !== colorMode) {
      toggleColorMode();
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", colorMode);
  }, [colorMode]);

  return (
    <Router>
      <Box p={4}>
        <Button onClick={toggleColorMode} mb={4}>
          Toggle {colorMode === "light" ? "Dark" : "Light"}
        </Button>
        <Routes>
          <Route exact path="/" element={<Index posts={posts} />} />
          <Route path="/add-post" element={<AddPost addPost={addPost} />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;