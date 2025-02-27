import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";



console.log(blogData);

function App() {
  const{name,image,about, posts} = blogData

  return (
    <div className="App">
      You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck!
      {/* You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck! */}
      <Header Name = {name} />
      <About image={image} about={about} />
      <ArticleList posts={posts} />

    </div>
  );
} 

export default App ;