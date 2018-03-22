import * as React from 'react';
import styled from 'styled-components';

const View = styled.div`
  display: grid;
  
`;

const Title = styled.div`
  font-size: 1.1em;
  font-weight: 600;
`;

const Description = styled.div`
  font-size: 1em;
`;

interface ItemProps {
  title: string;
  description: string;
}

const Item = (props: ItemProps) => {
    return (
      <View>
        <Title>
          {props.title}
        </Title>
        <Description>
          {props.description}
        </Description>
      </View>
    );
};

export default Item;
