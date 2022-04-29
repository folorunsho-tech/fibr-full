import {
  Button,
  Container,
  Group,
  MediaQuery,
  Paper,
  Text,
} from "@mantine/core";
import React from "react";

const ProjectAside = ({ status, buttonData }) => {
  return (
    <MediaQuery smallerThan="lg" styles={{ display: "none" }}>
      <Container style={{ paddingRight: 10, position: "relative" }}>
        <Paper
          withBorder
          sx={(theme) => ({
            position: "fixed",
            minHeight: "88vh",
            padding: 16,
            marginLeft: "-1rem",
            marginTop: "4rem",
            width: "18rem",
          })}
        >
          <Text style={{ width: "100%", textAlign: "left" }}>
            status:
            <span style={{ color: "green", fontWeight: 500 }}> published</span>
          </Text>
          <Group
            sx={(theme) => ({
              paddingTop: theme.spacing.md,
            })}
          >
            <Button
              sx={(theme) => ({
                backgroundColor: theme.colors.violet[9],
                "&:hover": {
                  backgroundColor: theme.colors.violet[7],
                },
              })}
            >
              {buttonData.save}
            </Button>
            <Button
              sx={(theme) => ({
                backgroundColor: theme.colors.violet[9],

                "&:hover": {
                  backgroundColor: theme.colors.violet[7],
                },
              })}
            >
              {buttonData.publish}
            </Button>
          </Group>
        </Paper>
      </Container>
    </MediaQuery>
  );
};

export default ProjectAside;
