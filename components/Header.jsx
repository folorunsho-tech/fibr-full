import { useRouter } from "next/router";
import React from "react";
import {
  Header,
  Group,
  Text,
  MediaQuery,
  Burger,
  ActionIcon,
  useMantineColorScheme,
} from "@mantine/core";
import { Sun, MoonStars } from "tabler-icons-react";
import User from "./User";
import { NextLink } from "@mantine/next";

const TopNav = ({ opened, setOpened }) => {
  const { route } = useRouter();

  // Update User Dynamically to change profile OR Pass data from server directly to the User component Below
  const data = {
    name: "Jane Spoonfighter",
    email: "janspoon@fighter.dev",
    image:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80",
  };
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <Header
      height={60}
      p="md"
      zIndex={40}
      fixed
      style={{
        display: "flex",
        alignItems: "center",
        height: "100%",
        justifyContent: "space-between",
        visibility:
          route === "/auth/login" || route === "/auth/signup"
            ? "hidden"
            : "visible",
      }}
      sx={(theme) => ({
        color:
          theme.colorScheme === "dark"
            ? theme.colors.gray[1]
            : theme.colors.gray[8],
      })}
    >
      <MediaQuery largerThan="md" styles={{ display: "none" }}>
        <Burger
          opened={opened}
          onClick={() => setOpened(!opened)}
          size="sm"
          sx={(theme) => ({
            color: theme.colors.gray[6],
          })}
        />
      </MediaQuery>
      <Text
        component="h2"
        sx={(theme) => ({
          [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            visibility: "hidden",
          },
          [`@media (max-width: ${theme.breakpoints.md}px)`]: {
            marginLeft: "-20rem",
          },
        })}
      >
        <NextLink href="/">DevFolio</NextLink>
      </Text>
      <Group>
        <MediaQuery smallerThan="lg">
          <User {...data} />
        </MediaQuery>

        <Group position="right" spacing="sm">
          <Text
            style={{ textTransform: "capitalize" }}
            sx={(theme) => ({
              [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
                display: "none",
              },
            })}
          >
            {colorScheme} theme
          </Text>
          <ActionIcon
            variant="filled"
            radius={10}
            color={dark ? "violet" : "violet"}
            onClick={() => toggleColorScheme()}
            title="Toggle color scheme"
          >
            {dark ? <Sun size={24} /> : <MoonStars size={24} />}
          </ActionIcon>
        </Group>
      </Group>
    </Header>
  );
};

export default TopNav;
