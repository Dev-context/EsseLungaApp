import React from 'react';
import {
  MainContainer,
  HeaderListImage,
  HeaderListTitle,
  CartContainer,
  BtnCart,
  TitleItensContainer,
  ImageContainer,
} from './styled';
import CartIcon from '@components/icon';
import {ThemeIcon} from '@components/icon/ThemeIcons';

export default function HeaderList() {
  return (
    <MainContainer>
      <CartContainer>
        <ImageContainer>
          <HeaderListImage source={require('@assets/imgs/logoEsselunga.jpg')} />
        </ImageContainer>
        <BtnCart>
          <CartIcon
            color={ThemeIcon.color}
            name={ThemeIcon.name}
            Iconsize={ThemeIcon.size.extraLarge}
          />
        </BtnCart>
      </CartContainer>
      <TitleItensContainer>
        <HeaderListTitle>Item</HeaderListTitle>
        <HeaderListTitle>Price</HeaderListTitle>
      </TitleItensContainer>
    </MainContainer>
  );
}
