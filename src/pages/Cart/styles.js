import styled from 'styled-components/native';
import Logo from '../../assets/Logo.png';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #eee;
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  padding: 20px;
  background: #eee;
`;

export const LogoImg = styled.Image.attrs({
  source: Logo,
  resizeMode: 'cover',
})`
  width: 185px;
  height: 24px;
`;
