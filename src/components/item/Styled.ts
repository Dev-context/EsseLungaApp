import styled from 'styled-components/native';

export const ContainerItens = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  border-radius: 12px;
`;
export const ContainerTextItem = styled.View`
  flex: 2;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 7px;
  padding: 15px;
`;

export const Textitem = styled.Text`
  color: ${({theme}) => theme.colors.fontColor};
  font-family: ${({theme}) => theme.fonts.title.font};
  font-size: ${({theme}) => theme.fonts.subtitle.size};
`;

export const ItemImage = styled.Image`
  width: 70px;
  height: 70px;
`;
