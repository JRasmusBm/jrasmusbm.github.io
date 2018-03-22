import * as React from 'react';
import styled from 'styled-components';

const rasmus = require('./rasmus.jpg');
import Header from './Header';
import Card from './Card';

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

const content = [ 
  { 
    key: 1, 
    title: 'Software developer', 
    description: 'Experience with JavaScript and TypeScript as it relates to the React Ecosystem' 
  },
];

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
    return ( 
      <View>
        <Header key={0}/>
        <Content key={1}>
          <Image src={rasmus} />
          <TextHeader>Rasmus Bergström</TextHeader>
          <Card content={content} />
        </Content>
      </View>
    );
  }
}

export default Home;
