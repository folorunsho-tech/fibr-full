import { NextLink } from "@mantine/next";

function MainLinks({ item, cx, classes, active, setActive }) {
  return (
    <NextLink
      className={cx(classes.link, {
        [classes.linkActive]: item.label === active,
      })}
      href={item.link}
      onClick={(event) => {
        setActive(item.label);
      }}
    >
      <item.icon className={classes.linkIcon} />
      <span>{item.label}</span>
    </NextLink>
  );
}

export default MainLinks;
