/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    StatusBar,
    YellowBox
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Navigation from './src/components/Navigation';
import 'react-native-gesture-handler';
import Firebase,{FirebaseProvider} from './src/config/FireBase';

YellowBox.ignoreWarnings([
    'Warning: componentWillMount is deprecated',
    'Warning: componentWillReceiveProps has been renamed',
    'Module RCTImageLoader requires',
    '`-[RCTRootView cancelTouches]` is deprecated and will be deleted soon',
]);
const App: () => React$Node = () => {
    return (
        <FirebaseProvider value={Firebase}>
            <StatusBar barStyle="dark-content"/>
            <SafeAreaView style={{flex:1}}>
                    <View style={[{flex: 1}, styles.content]}>
                        <Navigation/>
                    </View>
            </SafeAreaView>

        </FirebaseProvider>
    );
};

const styles = StyleSheet.create({
    header: {
      height:50,
      display: 'flex',
      justifyContent: 'center',
    },
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    content: {
    },
});

export default App;
