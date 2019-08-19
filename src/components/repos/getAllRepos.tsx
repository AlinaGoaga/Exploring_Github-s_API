import { useEffect, useState } from "react";
import { Repo } from "./repoInterface";
import { Service } from "./serviceInterface";

const GetRepos = ({ user = "", token = "" }) => {
  const [result, setResult] = useState<Service<Array<Repo>>>({
    status: "loading"
  });
  let headers = {};
  if (token !== "") {
    headers = { Authorization: `token ${token}` };
  }

  useEffect(() => {
    fetch(`https://api.github.com/users/${user}/repos`, {
      headers: headers
    })
      .then(response => response.json())
      .then(response => setResult({ status: "loaded", payload: response }))
      .catch(error => setResult({ status: "error", error }));
  }, []);

  return result;
};

export default GetRepos;
