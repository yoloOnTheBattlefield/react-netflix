import styled from 'styled-components';

import { navHeight, black, fastTransition, Wrapper } from '../theme/styles';

export const Content = styled.div`
  padding-top: ${navHeight}px;
`;

export const Container = Wrapper.extend`
  min-height: 60vh;
  position: relative;
`;
