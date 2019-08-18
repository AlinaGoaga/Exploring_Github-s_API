import React from "react";
import GetRepos from "./getAllRepos";

const Repos: React.FC<{}> = () => {
  const service = GetRepos();

  return (
    <>
      {service.status === "loading" && <div>Loading</div>}
      {service.status === "loaded" &&
        service.payload.map(repo => <div>{repo.name}</div>)}
      {service.status === "error" && <div>Something went wrong.</div>}
    </>
  );
};

export default Repos;
