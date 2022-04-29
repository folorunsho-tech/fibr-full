import React from "react";
import ImageDropZone from "./ImageDropZone";
import { Container, Modal } from "@mantine/core";
import { Tabs } from "@mantine/core";
import { Photo, Upload } from "tabler-icons-react";
const AssetsModal = ({ setOpened, opened, setFeaturedImg, featuredImg }) => {
  return (
    <Modal
      centered
      opened={opened}
      onClose={() => setOpened(false)}
      size={700}
      title="Manage Your Images"
    >
      <Tabs
        orientation="vertical"
        grow
        position="apart"
        tabPadding="lg"
        color="violet"
      >
        <Tabs.Tab label="Upload" icon={<Upload size={14} />}>
          <Container
            sx={(theme) => ({
              height: "55vh",
            })}
          >
            <ImageDropZone
              setFeaturedImg={setFeaturedImg}
              featuredImg={featuredImg}
            />
          </Container>
        </Tabs.Tab>
        <Tabs.Tab label="Images" icon={<Photo size={14} />}>
          <Container
            sx={(theme) => ({
              height: "55vh",
            })}
          ></Container>
        </Tabs.Tab>
      </Tabs>
    </Modal>
  );
};

export default AssetsModal;
