import * as React from 'react';
import styled from 'styled-components';

import Item from './Item';

const View = styled.div`
  display: grid;
  background: white;
  width: 80%;
  padding: 3px;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);

`;

interface Content {
  title: string;
  description: string;
}

interface CardProps {
  content: Content[];
}

const Card = (props: CardProps) => {
  return (
    <View>
      {props.content.map(({title, description}, index) => 
        <Item key={index} title={title} description={description} /> 
      )}
    </View>
  );
};

export default Card;
