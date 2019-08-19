import React from "react";
import GetRepos from "./getAllRepos";
import { List } from "semantic-ui-react";
import Repo from "../repo";

const Repos: React.FC<{}> = () => {
  const user = "alinagoaga";
  const token = "";
  const service = GetRepos({ user , token });

  return (
    <>
      {service.status === "loading" && <div>Loading</div>}
      {service.status === "loaded" && (
        <List>
          {service.payload.map(repo => (
            <List.Item>
              <Repo
                name={repo.name}
                description={repo.description}
                url={repo.html_url}
              />
            </List.Item>
          ))}
        </List>
      )}
      {service.status === "error" && <div>Something went wrong.</div>}
    </>
  );
};

export default Repos;
