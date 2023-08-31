import React, { useContext } from 'react';

import { FavoritesContext } from '../../services/favourites/favourites.context';

import { Text } from '../components/typography/text.component';

import * as S from './favourites.style';

export const FavouritesScreen = () => {
  const { favorites } = useContext(FavoritesContext);

  return favorites.length ? (
    <>
      <S.Container />
    </>
  ) : (
    <>
      <S.Container>
        <Text>No favorites yet</Text>
      </S.Container>
    </>
  );
};
