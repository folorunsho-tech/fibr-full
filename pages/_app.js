import { useState } from "react";
import "../styles/globals.css";
import { useColorScheme } from "@mantine/hooks";
import TopNav from "../components/Header";
import Nav from "../components/NavBar";
import { Provider } from "react-redux";
import { store } from "../store";
import { MantineProvider, ColorSchemeProvider, AppShell } from "@mantine/core";
function MyApp({ Component, pageProps }) {
  const preferredColorScheme = useColorScheme();
  const [colorScheme, setColorScheme] = useState(preferredColorScheme);
  const [opened, setOpened] = useState(false);
  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
  return (
    <Provider store={store}>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          theme={{
            colorScheme,
          }}
        >
          <AppShell
            padding="md"
            navbar={<Nav hidden={!opened} />}
            header={<TopNav opened={opened} setOpened={setOpened} />}
            navbarOffsetBreakpoint="md"
            styles={(theme) => ({
              main: {
                backgroundColor:
                  theme.colorScheme === "dark"
                    ? theme.colors.dark[8]
                    : theme.colors.gray[0],
                color:
                  theme.colorScheme === "dark"
                    ? theme.colors.gray[1]
                    : theme.colors.gray[8],
              },
            })}
          >
            <Component {...pageProps} />
          </AppShell>
        </MantineProvider>
      </ColorSchemeProvider>
    </Provider>
  );
}

export default MyApp;
