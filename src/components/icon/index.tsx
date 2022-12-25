import React from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
export interface propIcon {
  Iconsize: number;
  name: string;
  color: string;
}

export default function CartIcon({color, name, Iconsize}: propIcon) {
  return <MaterialIcon name={name} color={color} size={Iconsize} />;
}
