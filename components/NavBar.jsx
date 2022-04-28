import { Navbar, createStyles, Text, MediaQuery } from "@mantine/core";
import MainLinks from "./MainLinks";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { NextLink } from "@mantine/next";
import {
  Home,
  Books,
  Folders,
  Tags,
  Logout,
  Server2,
  Settings,
} from "tabler-icons-react";

const useStyles = createStyles((theme, _params, getRef) => {
  const icon = getRef("icon");
  return {
    // header: {
    //   paddingBottom: theme.spacing.md,
    //   marginBottom: theme.spacing.md * 1.5,
    //   borderBottom: `1px solid ${
    //     theme.colorScheme === "dark"
    //       ? theme.colors.dark[4]
    //       : theme.colors.gray[2]
    //   }`,
    //   display: "flex",
    //   justifyContent: "space-between",
    // },

    // footer: {
    //   paddingTop: theme.spacing.md,
    //   marginTop: theme.spacing.md,
    //   borderTop: `1px solid ${
    //     theme.colorScheme === "dark"
    //       ? theme.colors.dark[4]
    //       : theme.colors.gray[2]
    //   }`,
    // },

    link: {
      ...theme.fn.focusStyles(),
      display: "flex",
      alignItems: "center",
      textDecoration: "none",
      fontSize: theme.fontSizes.sm,
      color:
        theme.colorScheme === "dark"
          ? theme.colors.dark[1]
          : theme.colors.gray[7],
      padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
      borderRadius: theme.radius.sm,
      fontWeight: 500,

      "&:hover": {
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.fn.rgba(theme.colors.violet[8], 0.25)
            : theme.fn.rgba(theme.colors.violet[8], 0.2),
        color: theme.colorScheme === "dark" ? theme.white : theme.black,

        [`& .${icon}`]: {
          color: theme.colorScheme === "dark" ? theme.white : theme.black,
        },
      },
    },

    linkIcon: {
      ref: icon,
      color:
        theme.colorScheme === "dark"
          ? theme.colors.dark[2]
          : theme.colors.gray[6],
      marginRight: theme.spacing.sm,
    },

    linkActive: {
      "&, &:hover": {
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.violet[9]
            : theme.colors.violet[9],
        color: theme.colorScheme === "dark" ? theme.white : theme.white,
        [`& .${icon}`]: {
          color: theme.white,
        },
      },
    },
  };
});

const data = [
  { link: "/", label: "Home", icon: Home },
  { link: "/projects", label: "Projects", icon: Books },
  { link: "/categories", label: "Categories", icon: Folders },
  { link: "/platforms", label: "Platforms", icon: Server2 },
  { link: "/techs", label: "Techs", icon: Tags },
  { link: "/settings", label: "Settings", icon: Settings },
];

const Nav = ({ hidden }) => {
  const { route } = useRouter();
  const { classes, cx } = useStyles();
  const [active, setActive] = useState("Home");
  const first = route.split("/")[1].slice(1);
  const second = route.split("/")[1].slice(0, 1).toUpperCase();
  const finalRoute = second.concat(first);

  useEffect(() => {
    if (first === "") {
      setActive("Home");
    } else {
      setActive(finalRoute);
    }

    // return () => {
    //   second
    // }
  }, [finalRoute]);

  const links = data.map((item) => (
    <MainLinks
      item={item}
      key={item.label}
      cx={cx}
      classes={classes}
      active={active}
      setActive={setActive}
    />
  ));
  return (
    <Navbar
      height={"95vh"}
      p="md"
      pb={40}
      zIndex={20}
      style={{
        visibility:
          route === "/auth/login" || route === "/auth/signup"
            ? "hidden"
            : "visible",
      }}
      fixed
      position={{ top: 0, left: 0 }}
      hiddenBreakpoint="md"
      hidden={hidden}
      width={{ sm: 200, lg: 250 }}
    >
      <Navbar.Section grow>{links}</Navbar.Section>
      <Navbar.Section className={classes.footer}>
        <NextLink href="/auth/logout" className={classes.link}>
          <Logout className={classes.linkIcon} color="red" />
          <Text sx={(theme) => ({ color: "red" })}>Logout</Text>
        </NextLink>
      </Navbar.Section>
    </Navbar>
  );
};

export default Nav;
