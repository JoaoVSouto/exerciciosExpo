import React from 'react';
import { createDrawerNavigator } from 'react-navigation';

import Simples from './components/Simples';
import OddOrEven from './components/OddOrEven';
import Reverse, { Lottery } from './components/Multi';
import Counter from './components/Counter';

export default createDrawerNavigator({
    Counter: {
        screen: () => <Counter startNumber={100} />
    },
    Lottery: {
        screen: Lottery,
        navigationOptions: { title: 'Lottery' }
    },
    Reverse: {
        screen: () => <Reverse text='React Native!' />
    },
    OddOrEven: {
        screen: () => <OddOrEven number={30} />,
        navigationOptions: { title: 'Odd or Even' }
    },
    Simples: {
        screen: () => <Simples text={'Flexible'} />
    }
}, { drawerWidth: 250 });
