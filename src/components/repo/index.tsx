import React from "react";
import { useState } from "react";
import { Modal, Header, Icon, Button } from "semantic-ui-react";

export interface IProps {
  description: string;
  url: string;
}

const Repo: React.FC<IProps> = ({ description, url }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Modal
        open={modalOpen}
        trigger={<Button onClick={() => setModalOpen(true)}>Find out more!</Button>}
        basic
        size="small"
      >
        <Header
          icon="folder"
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
