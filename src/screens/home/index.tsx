import React from 'react';
import {FlatList, ListRenderItemInfo, SafeAreaView} from 'react-native';
import {Textomocks} from '@mocks/textoMocks';
import {Container} from './styled';
import Item, {Icesta} from '@components/item';
import HeaderList from '@screens/headerlista';

export default function Home() {
  const renderItem = ({item}: ListRenderItemInfo<Icesta>) => <Item {...item} />;

  return (
    <Container>
      <SafeAreaView>
        <FlatList
          ListHeaderComponent={<HeaderList />}
          data={Textomocks}
          keyExtractor={(item: Icesta) => item.nome}
          renderItem={renderItem}
        />
      </SafeAreaView>
    </Container>
  );
}
