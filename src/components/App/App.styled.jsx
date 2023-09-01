import styled from '@emotion/styled';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const MainTitle = styled.h1`
  margin-bottom: 30px;
  text-transform: uppercase;
  color: #3498db;
`;

const SecondTitle = styled.h2`
  margin-bottom: 30px;
  text-transform: uppercase;
  color: #3498db;
`;

const OvalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-40px, -40px);
`;

export { AppContainer, MainTitle, SecondTitle, OvalWrapper };
