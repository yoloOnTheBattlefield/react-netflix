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
  width: 75%;
  height: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: red;
  z-index: 9999;
  display: flex;
  flex-direction: column;
`;
export const  ModalHeader = styled.div`
  height: 75px;

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
