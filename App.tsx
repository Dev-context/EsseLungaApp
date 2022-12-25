/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {View} from 'react-native';
import {ThemeProvider} from 'styled-components';
import Home from '@screens/home';
import {themes} from '@style/index';

export default function app() {
  return (
    <ThemeProvider theme={themes.lightTheme}>
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          flex: 1,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          alignContent: 'center',
        }}>
        <Home />
      </View>
    </ThemeProvider>
  );
}
