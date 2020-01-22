import styled from 'styled-components';

export const Component = styled.article`
  border-radius: 3px;
  background: #ededed;
  width: 250px;
  height: 350px;
  position: relative;
  box-sizing: border-box;
`;

export const Header = styled.header`
  position: relative;
  box-sizing: border-box;
`;

export const ImageWrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  height: 200px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
`;

export const CardName = styled.h1`
  text-align: center;
  font-size: 1.365em;
  line-height: 1;
  font-weight: normal;
  margin: 0;
`;
