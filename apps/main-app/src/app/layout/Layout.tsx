import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import {
  AppShell,
  Navbar,
  Text,
  Header,
  MediaQuery,
  Burger,
  useMantineTheme,
} from '@mantine/core';
import { useState } from 'react';

const sideMenu: { path: string; name: string }[] = [
  {
    path: '/',
    name: 'Home',
  },
  {
    path: '/payments',
    name: 'Payments',
  },
  {
    path: '/orders',
    name: 'Orders',
  },
];

export default function Layout() {
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();
  return (
    <>
      <AppShell
        // navbarOffsetBreakpoint controls when navbar should no longer be offset with padding-left
        navbarOffsetBreakpoint="sm"
        // fixed prop on AppShell will be automatically added to Header and Navbar
        fixed
        navbar={
          <Navbar
            padding="md"
            // Breakpoint at which navbar will be hidden if hidden prop is true
            hiddenBreakpoint="sm"
            // Hides navbar when viewport size is less than value specified in hiddenBreakpoint
            hidden={!opened}
            // when viewport size is less than theme.breakpoints.sm navbar width is 100%
            // viewport size > theme.breakpoints.sm – width is 300px
            // viewport size > theme.breakpoints.lg – width is 400px
            width={{ sm: 300, lg: 400 }}
          >
            {sideMenu.map((menuItem) => {
              return (
                <Navbar.Section sx={{ padding: '6px' }} key={menuItem.name}>
                  <Link to={menuItem.path}>{menuItem.name}</Link>
                </Navbar.Section>
              );
            })}
          </Navbar>
        }
        header={
          <Header height={70} padding="md">
            {/* Handle other responsive styles with MediaQuery component or createStyles function */}
            <div
              style={{ display: 'flex', alignItems: 'center', height: '100%' }}
            >
              <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                <Burger
                  opened={opened}
                  onClick={() => setOpened((prev) => !prev)}
                  size="sm"
                  color={theme.colors.gray[6]}
                  mr="xl"
                />
              </MediaQuery>

              <Text sx={{ padding: '6px' }}>Application header</Text>
            </div>
          </Header>
        }
      >
        <Outlet />
      </AppShell>
    </>
  );
}

const StyledApp = styled.div`
  // Your style here
`;
