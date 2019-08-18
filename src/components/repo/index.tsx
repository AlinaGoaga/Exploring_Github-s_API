import React from "react";
import GetRepo from "./getIndividualRepo";
import { Modal, Header, Button } from "semantic-ui-react";

export interface Props {
  url: string;
  token: string;
}

const Repo: React.FC<Props> = ({ url, token }) => {
  const link = url;
  const service = GetRepo({ url: link, token: token });

  return (
    <>
      {service.status === "loading" && <div>Loading</div>}
      {service.status === "loaded" && (
        <Modal
          trigger={<Button>{service.payload.name}</Button>}
          basic
          size="small"
        >
          <Header content={service.payload.id} />
          <Modal.Content>{service.payload.name}</Modal.Content>
        </Modal>
      )}
      {service.status === "error" && <div>Something went wrong.</div>}
    </>
  );
};

export default Repo;
