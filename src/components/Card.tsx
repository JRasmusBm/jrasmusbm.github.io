import * as React from 'react';
import styled from 'styled-components';

interface FlipProps {
  flip: boolean;
}

const colors = [
  '#0074D9',
  '#0be881',
  '#ef5777',
  '#ffa801',
  '#3D9970',
  '#39CCCC',
  '#FFDC00',
  '#85144b',
  '#7FDBFF',
  '#F012BE',
  '#01FF70',
  '#ff5e57',
  '#FF851B',
  '#2ECC40',
  '#FF4136',
  '#B10DC9',
];

const View = styled.div`
  perspective: 1000px;
  &:hover {
    cursor: pointer;
  }
  
`;

const Flipper = styled.div`
  transition: 0.6s;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  ${(props: FlipProps) => 
    props.flip ? 'transform: rotateY(180deg);' : ''}
`;

interface Content {
  key: number;
  title: string;
  description: string;
}

interface Props {
  content: Content;
}

interface State {
  hovered: boolean;
  pinned: boolean;
  color: string;
}

const Face = styled.div`
  backface-visibility: hidden;
  background-color: white;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
`;

const Front = Face.extend`
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotateY(0deg);
`;

const Back = Face.extend`
  transform: rotateY(180deg);
`;

const BlockText = styled.div`
  padding: 10px;
`;

class Card extends React.Component<Props, State> {

  state = {
    hovered: false,
    pinned: false,
    color: colors[this.props.content.key % colors.length],
  };

  render() {
    const { hovered, pinned } = this.state;
    const { title, description } = this.props.content;
    const flip = hovered || pinned;
    return (
      <View 
        onMouseEnter={() => this.setState({ hovered: true })}
        onMouseLeave={() => this.setState({ hovered: false })} 
        onClick={() => this.setState({ pinned: !pinned })} 
      >
       <Flipper flip={flip}>
         <Back style={{background: this.state.color}}>
           <BlockText>
             {description}
           </BlockText>
         </Back>
          <Front style={{background: this.state.color}}>{title}</Front>
        </Flipper>
      </View>
    );
  }
}

export default Card;
