import * as React from 'react';
import styled from 'styled-components';

import {cards} from '../content/cards';
import Header from './Header';
import Card from './Card';

interface Content {
  key: number;
  title: string;
  description: string;
}

const View = styled.div`
  width: 100%;
  height: 100%;
  background: #f6f6f6;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 200px);
  justify-content: center;
  grid-auto-rows: 200px;
  grid-gap: 10px;
  width: 100%;
`;

class Details extends React.Component {
  render() {
    return (
      <View>
        <Header />
        <Grid>
          {cards.map((content: Content) => {
            return <Card key={content.key} content={content} />;
          })}
        </Grid>
      </View>
    );
  }
}

export default Details;
