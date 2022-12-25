import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Textitem, ContainerItens, ContainerTextItem, ItemImage} from './Styled';

export interface Icesta {
  nome: string;
  calorias: string;
  proteína: string;
  carboidratos: string;
  fibra: string;
  gordura: string;
  porção: string;
  photo: string;
  price: string;
}

export default function Item({nome, photo, price}: Icesta) {
  return (
    <ContainerItens>
      <ContainerTextItem>
        <Textitem>{nome}</Textitem>
        <TouchableOpacity
          onPress={() => {
            console.log('Click');
          }}>
          <Textitem>{price}</Textitem>
        </TouchableOpacity>
      </ContainerTextItem>
    </ContainerItens>
  );
}
