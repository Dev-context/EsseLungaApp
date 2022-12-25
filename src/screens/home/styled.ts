import {FlatList} from 'react-native';
import styled from 'styled-components/native';
import {Icesta} from '@components/item';

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.backgroud};
  flex: 1;
  width: 100%;
  height: 100%;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.fontColor};
  font-family: ${({theme}) => theme.fonts.title.font};
  font-size: ${({theme}) => theme.fonts.title.size};
`;

export const List = styled(FlatList as new () => FlatList<Icesta>)``;
