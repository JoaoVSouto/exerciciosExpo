import React from 'react';
import { createDrawerNavigator } from 'react-navigation';

import Simples from './components/Simples';
import OddOrEven from './components/OddOrEven';
import Reverse, { Lottery } from './components/Multi';
import Counter from './components/Counter';
import Platforms from './components/Platforms';
import PropsValidate from './components/PropsValidate';

export default createDrawerNavigator({
    PropsValidate: {
        screen: () => <PropsValidate year={19} />
    },
    Platforms: {
        screen: Platforms
    },
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
