import styled from 'styled-components/native';
import Logo from '../../assets/Logo.png';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #eee;
`;

export const HeaderContainer = styled.View`
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

export const PruductDescription = styled.View`
  height: 100px;
  width: 210px;
  justify-content: flex-end;
`;

export const Product = styled.View`
  background: #fff;
  padding: 20px;
  margin: 15px;
  border-radius: 4px;
  height: 450px;
  width: 250px;
`;

export const ProductImage = styled.Image`
  margin-top: 20px;
  margin-bottom: 30px;
  height: 210px;
  width: 190px;
`;

export const ProductTitle = styled.Text`
  font-size: 16px;
`;

export const ProductPrice = styled.Text`
  margin: 14px 0px;
  font-size: 25px;
  margin-bottom: 14px;
  font-weight: bold;
`;

export const AddButton = styled.TouchableOpacity`
  background: #454777;
  flex-direction: row;
  align-items: center;
  border-radius: 4px;
  margin-top: auto;
`;

export const ProductAmount = styled.View`
  padding: 12px;
  background: #ffbb00;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  flex-direction: row;
  align-items: center;
`;

export const ProductAmountText = styled.Text`
  color: #454777;
  font-weight: bold;
  margin: 0px 4px 0px 10px;
`;

export const AddButtonText = styled.Text`
  flex: 1;
  text-align: center;
  font-weight: bold;
  color: #fff;
`;
