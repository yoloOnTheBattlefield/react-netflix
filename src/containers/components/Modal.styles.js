import styled from 'styled-components';

export const ModalContainer = styled.div`
  display: ${ props => props.showModal ? 'block' : 'none' };
  position: fixed !important;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.8);
  top: 0 ;
  left: 0;
  z-index: 99;
`;

export const Trigger = ModalContainer.extend`
  background: '';
`;

export const  ModalWrapper= styled.div`
  width: 90%;
  max-width: 900px;
  height: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  z-index: 9999;
  display: flex;
  flex-direction: column;
`;

export const  ModalHeader = styled.div`
  height: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
`;

export const  ModalContent = styled.div`
  display: flex;
`;

export const  ModalDescription = styled.div`
  width: 50%;
  margin: 0 auto;
`;

export const  Rating = styled.div`

`;
export const  Review = styled.div`

`;

export const  Paragraph = styled.div`

`;

export const  ReleaseDate = styled.div`

`;

export const ButtonGroup = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

export const Button = styled.div`
  width: 33%;
  height: 50px;
  background: ${props => props.background ? props.background : 'white'};
  color: ${props => props.color ? props.color : 'black'};
  text-align: center;
  align-items: center;
  line-height: 50px;
  cursor: pointer;
  letter-spacing: 2px;
  padding: 0 5px;
`;
