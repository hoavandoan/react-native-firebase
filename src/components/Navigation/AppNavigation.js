import * as React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {createAppContainer} from 'react-navigation';
import Home from '../Screens/Home';
import Orders from '../Screens/Orders';
import Help from '../Screens/Help';
import Account from '../Screens/Account';
import {View} from 'react-native';

Icon.loadFont();

const TabNavigator = createMaterialBottomTabNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: {
                labeled:false,
                tabBarIcon: ({tintColor}) => (
                    <View>
                        <Icon style={[{color: tintColor}]} size={25} name={'ios-home'}/>
                    </View>),
            },
        },
        Orders: {
            screen: Orders,
            navigationOptions: {
                labeled:false,
                tabBarIcon: ({tintColor}) => (
                    <View>
                        <Icon style={[{color: tintColor}]} size={25} name={'ios-cart'}/>
                    </View>),
            },
        },
        Help: {
            screen: Help,
            navigationOptions: {
                labeled:false,
                tabBarIcon: ({tintColor}) => (
                    <View>
                        <Icon style={[{color: tintColor}]} size={25} name={'ios-help'}/>
                    </View>),
            },
        },
        Account: {
            screen: Account,
            navigationOptions: {
                labeled:false,
                tabBarIcon: ({tintColor}) => (
                    <View>
                        <Icon style={[{color: tintColor}]} size={25} name={'ios-person'}/>
                    </View>),
            },
        },
    },
    {
        initialRouteName: 'Home',
        activeColor: '#f0edf6',
        inactiveColor: '#226557',
        barStyle: {backgroundColor: '#3BAD87'},
    },
);

export default createAppContainer(TabNavigator);
