import React from "react";
import { useState } from "react";
import { Modal, Header, Button, Icon } from "semantic-ui-react";

export interface IProps {
  name: string;
  description: string;
  url: string;
}

const Repo: React.FC<IProps> = ({ name, description, url }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Modal
        open={modalOpen}
        trigger={<Button onClick={() => setModalOpen(true)}>{name}</Button>}
        basic
        size="small"
      >
        <Header
          icon="browser"
          content={description || "No description available"}
        />
        <Modal.Content>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {url}
          </a>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={() => setModalOpen(false)} inverted>
            <Icon name="checkmark" /> Close
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  );
};

export default Repo;
