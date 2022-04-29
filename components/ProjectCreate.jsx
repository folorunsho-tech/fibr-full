import React, { useState } from "react";
import {
  TextInput,
  Textarea,
  InputWrapper,
  Text,
  Switch,
  Box,
  MultiSelect,
  MediaQuery,
  Group,
  Button,
} from "@mantine/core";
import Image from "next/image";
import AssetsModal from "./AssetsModal";
import RTE from "./RTE";
const ProjectCreate = () => {
  const [featuredImg, setFeaturedImg] = useState({
    url: "",
    name: "",
  });
  const [opened, setOpened] = useState(false);
  const data = [
    { value: "react", label: "React" },
    { value: "ng", label: "Angular" },
    { value: "svelte", label: "Svelte" },
    { value: "vue", label: "Vue" },
    { value: "riot", label: "Riot" },
    { value: "next", label: "Next.js" },
    { value: "blitz", label: "Blitz.js" },
  ];
  return (
    <>
      <TextInput
        placeholder="Project Title or Name"
        label="Project Name"
        required
      />
      <Textarea
        placeholder="Short Description"
        label="Project Short Description"
        required
        minRows={4}
        maxRows={4}
      />
      <InputWrapper label="Project Long Description">
        <RTE
          sx={{
            minHeight: "20rem",
          }}
        />
      </InputWrapper>
      <InputWrapper label="Featured Image">
        {/* {(featuredImg.url && featuredImg.name) !== "" ? (
          <Group>
            <Image
              src={featuredImg.url}
              height={400}
              width={400}
              alt={featuredImg.name}
            />
          </Group>
        ) : null} */}
        <Group>
          <Button
            onClick={() => {
              setOpened(true);
            }}
          >
            Select Featured Image
          </Button>
          <AssetsModal
            opened={opened}
            setOpened={setOpened}
            featuredImg={featuredImg}
            setFeaturedImg={setFeaturedImg}
          />
        </Group>
      </InputWrapper>
      <Text>Project MetaData</Text>
      <Box
        sx={{
          display: "flex",
          gap: "2rem",
          flexDirection: "column",
        }}
      >
        <Switch label="Featured" color="violet" size="md" mt={10} />
        <MultiSelect
          label="Technologies Used"
          placeholder="Pick all techs used"
          searchable
          clearable
          allowDeselect
          required
          shadow="MantineShadow"
          nothingFound="No options"
          data={data}
        />
        <MultiSelect
          label="Platforms Used"
          placeholder="Pick all platforms used"
          searchable
          clearable
          allowDeselect
          required
          shadow="MantineShadow"
          nothingFound="No options"
          data={data}
        />
      </Box>
    </>
  );
};

export default ProjectCreate;
