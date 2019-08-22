import { useEffect, useState } from "react";
import { IRepo } from "./repoInterface";
import { IService } from "./serviceInterface";

const GetRepos = ({ user = "", token = "" }) => {
  const [result, setResult] = useState<IService<Array<IRepo>>>({
    status: "loading"
  });
  let headers = {};
  if (token !== "") {
    headers = { Authorization: `token ${token}` };
  }

  useEffect(() => {
    fetch(`https://api.github.com/users/${user}/repos`, {
      headers
    })
      .then(response => response.json())
      .then(response => setResult({ status: "loaded", payload: response }))
      .catch(error => setResult({ status: "error", error }));
  }, []);

  return result;
};

export default GetRepos;
