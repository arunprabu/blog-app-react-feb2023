import React, { useEffect, useState } from "react";

const Posts = () => {
  // URL: https://jsonplaceholder.typicode.com/posts?_limit=5
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then((res) => {
        return res.json();
      })
      .then((resInJson) => {
        setPostList(resInJson);
      })
      .catch((err) => {});
  }, []);

  return (
    <div>
      <h4>Posts | Jest Spy Demo</h4>
      {postList.map((post) => {
        return (
          <div className="card" key={post.id}>
            <div className="card-body">
              <h5 className="card-title">{post.title}</h5>
              <p className="card-text">{post.body}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
