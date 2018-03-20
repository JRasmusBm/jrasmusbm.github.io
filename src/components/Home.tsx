import * as React from 'react';
import styled from 'styled-components';

const rasmus = require('./rasmus.jpg');
import Header from './Header';
import Card from './Card';

const View = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
`;

const TextHeader = styled.div`
  padding: 10px;
  font-weight: 500;
`;

const Image = styled.img`
  width: 300px;
  border-radius: 50%;
`;

class Home extends React.Component {
  render() {
    return [ 
      <Header key={0}/>,
      (
        <View key={1}>
          <Image src={rasmus} />
          <TextHeader>Rasmus Bergström</TextHeader>
          <Card title="Title 1">Description 1</Card>
          <Card title="Title 2">Description 2</Card>
          <Card title="Title 3">Description 3</Card>
        </View>
      ),
    ];
  }
}

export default Home;
