import axios from "axios";
import React, { useEffect, useState } from "react";

const Blog = () => {
  const [featureName, setFeatureName] = useState("Welcome to Blog App");
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  function callApi() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then((res) => {
        // successful res
        console.log(res);
        setPosts(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        // catch the error
        console.log(err);
        setIsLoading(false);
        setIsError(true);
      })
      .finally(() => {
        console.log("It is over!");
      });
  }

  useEffect(() => {
    document.title = featureName;
    // ideal place for you to make api calls
    callApi();
  }, [featureName]); // second arg is dependency
  // if the dependency is changed any any means, useEffect will be called.
  // by default useEffect will be called once automatically
  // check the app title before and after removing dependency

  if (isLoading) {
    return <div className="spinner-border text-success" role="status"></div>
  }

  if (isError) {
    return (
      <div className="alert alert-danger">
        Some error occurred! Try again later!
      </div>
    );
  }

  return (
    <div>
      <h1>Blog App</h1>
      <p>{featureName}</p>
      <input
        type="text"
        value={featureName}
        onChange={(event) => setFeatureName(event.target.value)}
      />

      {posts?.length > 0 ? (
        <div>
          <h2>Total Posts: {posts.length}</h2>
          <div>TODO: Display all post here in bootstrap card</div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Blog;
