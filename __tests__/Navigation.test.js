import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, View } from 'react-native';
import { act, fireEvent, render } from '@testing-library/react-native';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

it('just succeed', () => {
  expect(true).toBe(true);
});

const ScreenFactory =
  screenName =>
  ({ navigation }) => {
    return (
      <View>
        <Button
          title={`Go to ${screenName}`}
          onPress={() => {
            navigation.navigate(screenName);
          }}
        />
      </View>
    );
  };

const ScreenA = ScreenFactory('Screen B');
const ScreenB = ScreenFactory('Screen A');

const { Screen, Navigator } = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen component={ScreenA} name="Screen A" />
        <Screen component={ScreenB} name="Screen B" />
      </Navigator>
    </NavigationContainer>
  );
};

jest.useFakeTimers();

describe('Navigation Container', () => {
  it('run test without importing a file after it', async () => {
    const { getByText } = render(<App />);
    act(() => jest.runAllTimers());

    getByText('Go to Screen B');
  });
});
