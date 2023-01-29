import { Header, NavBarItem } from './NavBar.styled';

export const NavBar = () => {
  return (
    <Header>
      <NavBarItem to="/">Home</NavBarItem>
      <NavBarItem to="/movies">Movies</NavBarItem>
    </Header>
  );
};
