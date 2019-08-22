import React from "react";
import GetRepos from "./getAllRepos";
import { Grid, Card, Loader } from "semantic-ui-react";
import Repo from "../repo";

const Repos: React.FC<{}> = () => {
  const user = "alinagoaga";
  const token = "";
  const service = GetRepos({ user, token });

  return (
    <>
      {service.status === "loading" && <Loader />}
      {service.status === "loaded" && (
        <Grid container={true} centered={true} padded={"vertically"}>
          {service.payload.map(repo => (
            <Grid.Column key={repo.id} mobile={12} tablet={8} computer={5}>
              <Card>
                <Card.Content>
                  <Card.Header>{repo.name}</Card.Header>
                  <Card.Meta>{repo.language}</Card.Meta>
                  <Card.Description>
                    <Repo description={repo.description} url={repo.html_url} />
                  </Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
          ))}
        </Grid>
      )}
      {service.status === "error" && <div>Something went wrong.</div>}
    </>
  );
};

export default Repos;
