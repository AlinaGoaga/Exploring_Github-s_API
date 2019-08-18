import { useEffect, useState } from "react";
import { Repo } from "./repoInterface";
import { Service } from "./serviceInterface";

const GetRepos = ({user = ""}) => {
  const [result, setResult] = useState<Service<Array<Repo>>>({
    status: "loading"
  });

  useEffect(() => {
    fetch(`https://api.github.com/users/${user}/repos`)
      .then(response => response.json())
      .then(response => setResult({ status: "loaded", payload: response }))
      .catch(error => setResult({ status: "error", error }));
  }, []);

  return result;
};

export default GetRepos;
