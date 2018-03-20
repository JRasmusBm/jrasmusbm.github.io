import * as React from 'react';
import styled from 'styled-components';

const rasmus = require('./rasmus.jpg');
import Header from './Header';

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
        </View>
      ),
    ];
  }
}

export default Home;
