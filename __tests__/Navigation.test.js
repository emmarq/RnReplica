import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Button, View } from 'react-native';
import { render } from '@testing-library/react-native';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

it('just succeed', () => {
  expect(true).toBe(true);
});

const ScreenFactory =
  buttonText =>
  ({ navigation }) => {
    return (
      <View>
        <Button
          title={buttonText}
          onPress={() => {
            navigation.navigate(screenName);
          }}
        />
      </View>
    );
  };

const ScreenA = ScreenFactory('Go to Screen B');
const ScreenB = ScreenFactory('Go to Screen A');

const { Navigator, Screen } = createMaterialTopTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen component={ScreenA} name="ScreenA" />
        <Screen component={ScreenB} name="ScreenB" />
      </Navigator>
    </NavigationContainer>
  );
};

describe('Navigation Container', () => {
  it('makes assertion with a top tab bar navigator', () => {
    const { toJSON } = render(<App />);

    expect(toJSON()).toMatchSnapshot();
  });
});
