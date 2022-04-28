import { useState } from "react";
import {
  UnstyledButton,
  Group,
  Avatar,
  Text,
  createStyles,
  Menu,
  MediaQuery,
} from "@mantine/core";
import { ChevronDown, Logout, User as UserIcon } from "tabler-icons-react";
import { NextLink } from "@mantine/next";

const useStyles = createStyles((theme) => ({
  user: {
    display: "block",
    width: "100%",
    padding: theme.spacing.md,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.dark[8],

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[8]
          : theme.colors.gray[0],
    },
  },
}));

export function User({ image, name, email, icon, styles }) {
  const { classes, theme, cx } = useStyles();
  const [userMenuOpened, setUserMenuOpened] = useState(false);
  return (
    <MediaQuery>
      <Menu
        size={260}
        placement="end"
        transition="pop-top-right"
        className={classes.userMenu}
        onClose={() => setUserMenuOpened(false)}
        onOpen={() => setUserMenuOpened(true)}
        control={
          <UnstyledButton
            className={cx(classes.user, {
              [classes.userActive]: userMenuOpened,
            })}
          >
            <Group spacing={7}>
              <Avatar src={image} alt={name} radius="xl" size={20} />
              <Text weight={500} size="sm" sx={{ lineHeight: 1 }} mr={3}>
                {name}
              </Text>
              <ChevronDown size={12} />
            </Group>
          </UnstyledButton>
        }
      >
        <NextLink href="/settings">
          <Menu.Item icon={<UserIcon size={14} />}>Profile</Menu.Item>
        </NextLink>
        <NextLink href="/auth/logout">
          <Menu.Item
            sx={(theme) => ({ color: theme.colors.red })}
            icon={<Logout size={14} />}
          >
            Logout
          </Menu.Item>
        </NextLink>
      </Menu>
    </MediaQuery>
  );
}
export default User;
