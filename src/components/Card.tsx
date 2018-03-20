import * as React from 'react';
import styled from 'styled-components';

const View = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: space-between;
`;

const Title = styled.div`
  font-weight: 600;
`;

const Description = styled.div`

`;

interface CardProps {
  title: string;
  children: string;
}

const Card = (props: CardProps) => {
    return (
      <View>
        <Title>
          {props.title}
        </Title>
        <Description>
          {props.children}
        </Description>
      </View>
    );
};

export default Card;
