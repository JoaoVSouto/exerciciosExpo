import React from 'react';
import { createDrawerNavigator } from 'react-navigation';

import Simples from './components/Simples';
import OddOrEven from './components/OddOrEven';
import Reverse, { Lottery } from './components/Multi';
import Counter from './components/Counter';
import Platforms from './components/Platforms';
import PropsValidate from './components/PropsValidate';
import Event from './components/Event';
import Grandfather from './components/DirectCommunication';
import SyncedText from './components/IndirectCommunication';
import FlexList from './components/FlexList';
import Flex from './components/Flex';

export default createDrawerNavigator({
    Flex: {
        screen: Flex
    },
    FlexList: {
        screen: FlexList,
        navigationOptions: { title: 'Flex List' }
    },
    SyncedText: {
        screen: SyncedText,
        navigationOptions: { title: 'Indirect Communication' }
    },
    Grandfather: {
        screen: () => <Grandfather name='John' surname='Johnson' />,
        navigationOptions: { title: 'Direct Communication' }
    },
    Event: {
        screen: Event
    },
    PropsValidate: {
        screen: () => <PropsValidate year={19} />,
        navigationOptions: { title: 'Props Validation' }
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
