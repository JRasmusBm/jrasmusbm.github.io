import * as React from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
const arrow = require("./arrow.png");

const Open = keyframes`
  0% { 
    max-height: 0; 
  }
  100% { 
    max-height: 300px;
  }
`;

const Close = keyframes`
  0% { 
    max-height: 300px;
  }
  100% { 
    max-height: 0; 
  }
`;

interface MenuProps {
  open: boolean;
}

const Menu = styled.div`
  background: #262626;
  overflow: hidden;
  animation-name: ${(props: MenuProps) => (props.open ? Open : Close)};
  animation-duration: 1s;
  max-height: ${(props: MenuProps) => (props.open ? "300px" : 0)};
  display: flex;
  flex-direction: column;
`;

const MenuItem = styled(Link)`
  background: #262626;
  color: white;
  padding: 5px;
  text-decoration: none;
  &: hover {
    color: black;
    background: #e6e6e6;
    cursor: pointer;
  }
`;

const Icon = styled.div`
  float: right;
  background: #262626;
  height: 50px;
  width: 50px;
  border-radius: 0 0 100% 100%;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
  }
`;

const PointDown = keyframes`
  0% { 
    transform: rotateX(0deg);
  }
  100% { 
    transform: rotateX(180deg);
  }
`;

const PointUp = keyframes`
  0% { 
    transform: rotateX(180deg);
  }
  100% { 
    transform: rotateX(0deg);
  }
`;

const Image = styled.img`
  transform: rotateX(${(props: MenuProps) => (props.open ? "180deg" : "0deg")});
  animation-name: ${(props: MenuProps) => (props.open ? PointDown : PointUp)};
  animation-duration: 1s;
  width: 80%;
`;

interface Props {}

interface State {
  open: boolean;
  hasBeenOpened: boolean;
}

class Header extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasBeenOpened: false, open: false };
  }

  render() {
    const { hasBeenOpened, open } = this.state;
    if (!hasBeenOpened) {
      return (
        <Icon
          key={1}
          onClick={() => this.setState({ hasBeenOpened: true, open: !open })}
        >
          <Image open={open} src={arrow} />
        </Icon>
      );
    }
    return [
      <Menu open={open} key={0}>
        <MenuItem to="/">Home</MenuItem>
        <MenuItem to="/details">Details</MenuItem>
      </Menu>,
      <Icon key={1} onClick={() => this.setState({ open: !open })}>
        <Image open={open} src={arrow} />
      </Icon>,
    ];
  }
}

export default Header;
