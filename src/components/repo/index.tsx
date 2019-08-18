import React from "react";
import GetRepo from "./getIndividualRepo";

export interface Props {
  url: string;
}

const Repo: React.FC<Props> = ({ url }) => {
  const service = GetRepo({ url });

  return (
    <>
      {service.status === "loading" && <div>Loading</div>}
      {service.status === "loaded" && <div>{service.payload.name}</div>}
      {service.status === "error" && <div>Something went wrong.</div>}
    </>
  );
};

export default Repo;
