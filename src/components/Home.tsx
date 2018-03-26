import * as React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

const rasmus = require('./rasmus.jpg');
import Header from './Header';

const View = styled.div`
  width: 100%;
  height: 100%;
  background: #f6f6f6;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  background: #f6f6f6;
`;

const TextHeader = styled.div`
  padding: 40px;
  font-size: 1.2em;
  font-weight: 500;
`;

const Image = styled.img`
  width: 300px;
  border-radius: 50%;
`;

const Button = styled.div`
  width: minmax(200px, 50%);
  background: darkgreen;
  color: white;
  padding: 20px;
  border-radius: 5px;
  &:hover {
    background: green;
    cursor: pointer;
  }
`;

const Link = styled(NavLink)`
  text-decoration: none;
  color: inherit;
`;

class Home extends React.Component {
  render() {
    return (
      <View>
        <Header key={0} />
        <Content key={1}>
          <Image src={rasmus} />
          <TextHeader>Hi, I'm Rasmus!</TextHeader>
          <Link to="/details">
            <Button>About me</Button>
          </Link>
        </Content>
      </View>
    );
  }
}

export default Home;
