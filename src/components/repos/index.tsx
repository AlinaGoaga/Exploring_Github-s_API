import React from "react";
import GetRepos from "./getAllRepos";
import Repo from "../repo";

const Repos: React.FC<{}> = () => {
  const user = "alinagoaga";
  const service = GetRepos({ user: user });

  return (
    <>
      {service.status === "loading" && <div>Loading</div>}
      {service.status === "loaded" &&
        service.payload.map(repo => <Repo url={repo.url} />)}
      {service.status === "error" && <div>Something went wrong.</div>}
    </>
  );
};

export default Repos;
