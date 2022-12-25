import styled from 'styled-components/native';

export const MainContainer = styled.View`
  flex: 2;
  flex-direction: column;
`;

export const ImageContainer = styled.View`
  flex: 2;
  align-items: center;
  padding-left: 37px;
`;
export const HeaderListImage = styled.Image``;
export const HeaderListTitle = styled.Text`
  font-size: ${({theme}) => theme.fonts.title.size};
  color: ${({theme}) => theme.colors.fontColor};
`;

export const TitleItensContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  background-color: #fbbf24;
  padding-left: 20px;
  padding-right: 20px;
`;

export const CartContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(250, 212, 10);
`;

export const BtnCart = styled.TouchableOpacity`
  background-color: aliceblue;
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  align-self: flex-start;
  border: dotted 3px #e5e7eb;
  margin-top: 10px;
  margin-right: 7px;
`;
