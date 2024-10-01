import styled from 'styled-components';

const FooterDefaultStyled = styled.footer`
  width: 100%;
  height: 10vh;
  background-color: ${props => props.theme.colors.primary};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default FooterDefaultStyled;
