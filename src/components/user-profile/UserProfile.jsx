import React from "react";

import withData from "../../withData";

const UserProfile = ({ data, name, email }) => (
  <div className="container">
    <h1>{name}</h1>
    <h2>{email}</h2>
    Posts:
    {data.map((post) => (
      <div className="post">
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
    ))}
  </div>
);

export default withData(UserProfile);
