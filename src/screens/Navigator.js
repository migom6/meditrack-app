import {
    TabNavigator,
  } from 'react-navigation';
 
import Screen1 from './screen1';
import Screen2 from './screen2';


export const Navigator = TabNavigator({
    Screen1: {
        screen: Screen1,
        navigationOptions: {
            title: 'Screen1',
          },
    },
    Screen2: {
        screen: Screen2,
        navigationOptions: {
            title: 'Screen2',
          },
    },
});