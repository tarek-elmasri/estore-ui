import React from "react";
import useUserProfile from "../../api/services/useUserProfile";
import { useQueryClient } from "react-query";
import Navbar from "../../components/Navbar";

const Home = () => {
  const client = useQueryClient();
  const { user, isLoading, context } = useUserProfile();

  if (isLoading) return "Loading ...";
  return (
    <div>
      <h1>{user ? user.first_name : "no user"}</h1>
      <h1>test</h1>
      <button onClick={() => client.resetQueries(["users"])}>reload!</button>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>

      <h1>test</h1>
      <h1>test</h1>

      <h1>END</h1>
    </div>
  );
};

export default Home;
