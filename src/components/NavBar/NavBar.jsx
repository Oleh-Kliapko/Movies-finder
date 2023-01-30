import { Header, NavBarItem } from './NavBar.styled';
import { Outlet } from 'react-router-dom';

export const NavBar = () => {
  return (
    <>
      <Header>
        <NavBarItem to="/">Home</NavBarItem>
        <NavBarItem to="/movies">Movies</NavBarItem>
      </Header>
      <Outlet />
    </>
  );
};
