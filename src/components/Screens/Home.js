import React from 'react';
import {Text, View} from 'react-native';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs'
import {createAppContainer} from 'react-navigation';

const ViewHome1 = () => <Text>View Home1</Text>
const ViewHome2 = () => <Text>View Home2</Text>
const Home = createMaterialTopTabNavigator(
    {
        ViewHome1:{screen: ViewHome1},
        ViewHome2:{screen: ViewHome2},
    },
    {
        initialRouteName: 'ViewHome1'
    }

)

export default createAppContainer(Home);