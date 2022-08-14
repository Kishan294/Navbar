import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Container>
      <NavBarWrapped>
        <Logo>Add Your Logo Here</Logo>
        <NavBarItems>
          <NavItems>
            <a href="/">Home</a>
          </NavItems>
          <NavItems>
            <Collections>
              <a href="/">Collections</a>{" "}
              <img src="Assets/chevron-down.png" alt="" />
              <SubMenu>
                <a href="/">Summer Collections</a>
                <a href="/">Sale 40% Off</a>
                <a href="/">Ceramics</a>
                <a href="/">Melamina</a>
              </SubMenu>
            </Collections>
          </NavItems>
          <NavItems>
            <a href="/">About</a>
          </NavItems>
          <NavItems>
            <a href="/">Contact</a>
          </NavItems>
          <NavItems>
            <a href="/">Shop</a>
          </NavItems>
        </NavBarItems>
      </NavBarWrapped>
    </Container>
  );
};

const Container = styled.div`
  background-color: #e2cebc;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavBarWrapped = styled.div`
  background-color: #ede3da;
  width: 1368px;
  height: 88px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 100px 80px rgba(0, 0, 0, 0.07),
    0px 50.0488px 41.2345px rgba(0, 0, 0, 0.0532233),
    0px 30.1471px 24.8353px rgba(0, 0, 0, 0.0456112),
    0px 19.3198px 15.522px rgba(0, 0, 0, 0.0399626),
    0px 12.5216px 9.63909px rgba(0, 0, 0, 0.035),
    0px 7.88218px 5.72858px rgba(0, 0, 0, 0.0300374),
    0px 4.5288px 3.06551px rgba(0, 0, 0, 0.0243888),
    0px 1.99324px 1.24005px rgba(0, 0, 0, 0.0167767);
`;

const Logo = styled.div`
  margin-left: 80px;
`;

const NavBarItems = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 80px;
`;

const NavItems = styled.div`
  margin: 0 30px;
  text-decoration: none;
  font-size: 14px;
  font-weight: 400;
  position: relative;
  z-index: 3;

  &:hover::before {
    background: #e2cebc;
    content: "";
    position: absolute;
    width: 140%;
    height: 36px;
    left: 0;
    right: 0;
    bottom: -7px;
    z-index: -1;
    transform: translateX(-15%);
    border-radius: 4px;
  }

  a {
    text-decoration: none;
    color: #3c3a36;
  }
`;

const SubMenu = styled.div`
  width: 240px;
  height: 160px;
  position: absolute;
  background-color: #ede3da;
  bottom: -160px;
  border-radius: 5px;
  box-shadow: 0px 100px 80px rgba(0, 0, 0, 0.07),
    0px 50.0488px 41.2345px rgba(0, 0, 0, 0.0532233),
    0px 30.1471px 24.8353px rgba(0, 0, 0, 0.0456112),
    0px 19.3198px 15.522px rgba(0, 0, 0, 0.0399626),
    0px 12.5216px 9.63909px rgba(0, 0, 0, 0.035),
    0px 7.88218px 5.72858px rgba(0, 0, 0, 0.0300374),
    0px 4.5288px 3.06551px rgba(0, 0, 0, 0.0243888),
    0px 1.99324px 1.24005px rgba(0, 0, 0, 0.0167767);
  padding: 30px;
  display: none;
  transition-duration: 167ms;

  a {
    text-transform: none;
    border-bottom: 1px solid rgba(60, 58, 54, 0.35);
    width: 100%;
    margin: 5px 0;
  }
`;

const Collections = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &:hover {
    ${SubMenu} {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
    }
  }
`;

export default Navbar;
