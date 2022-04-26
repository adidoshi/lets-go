import React from "react";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const { userId } = useParams();
  //   const userId = params.userId;
  return <div>User details page {userId}</div>;
};

export default UserDetails;
