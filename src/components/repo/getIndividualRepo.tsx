import { useEffect, useState } from "react";
import { Repo } from "../repos/repoInterface";
import { Service } from "../repos/serviceInterface";

const GetRepo = ({ url = "" }) => {
  const [result, setResult] = useState<Service<Repo>>({
    status: "loading"
  });

  useEffect(() => {
    fetch(`${url}`)
      .then(response => response.json())
      .then(response => setResult({ status: "loaded", payload: response }))
      .catch(error => setResult({ status: "error", error }));
  }, []);

  return result;
};

export default GetRepo;
