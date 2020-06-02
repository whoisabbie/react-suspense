import React from "react";
import { fetchData } from "../api";

const resource = fetchData();

const ProfilePosts = () => {
  const posts = resource.posts.read();
  return (
    <ul className="list-group">
      <li className="list-group-item">
        <strong>Latest Posts</strong>
      </li>
      {posts.map((post) => (
        <li className="list-group-item" key={post.id}>
          {post.title}
        </li>
      ))}
    </ul>
  );
};

export default ProfilePosts;
