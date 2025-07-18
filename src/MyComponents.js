import React, { useState, useEffect } from "react";
import axios from "axios";

const MyComponents = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        setData(response.data);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchData();
  }, []);

  if (error) return <div style={{ color: "red" }}>Error: {error}</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Posts</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {data.map((post) => (
          <li key={post.id} style={{ marginBottom: "20px", borderBottom: "1px solid #ccc", paddingBottom: "10px" }}>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyComponents;
