import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Books() {
  return (
    <section className="books">
      <Book></Book>
      <Book></Book>
      <Book></Book>
      <Book></Book>
      <Book></Book>
    </section>
  );
}

const Book = () => {
  return (
    <article className="book ass tada">
      <CoverImage />
      <Title />
      <Author />
    </article>
  );
};

const CoverImage = () => (
  <img src="https://source.unsplash.com/random/400x300" alt="" />
);

const Title = () => (
  <h1 style={{ fontSize: "2rem", color: "red" }}>Some title</h1>
);

const authorStyle = {
  letterSpacing: "10px",
  color: "green"
};

const Author = () => <p style={authorStyle}>by some dude</p>;

ReactDOM.render(<Books></Books>, document.getElementById("root"));
