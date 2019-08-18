import { useEffect, useState } from "react";
import { Repo } from "./repoInterface";
import { Service } from "./serviceInterface";

const GetRepos = () => {
  const [result, setResult] = useState<Service<Array<Repo>>>({
    status: "loading"
  });

  useEffect(() => {
    fetch("https://api.github.com/users/alinagoaga/repos")
      .then(response => response.json())
      .then(response => setResult({ status: "loaded", payload: response }))
      .catch(error => setResult({ status: "error", error }));
  }, []);

  return result;
};

export default GetRepos;
