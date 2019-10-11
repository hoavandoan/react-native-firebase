import React, {useEffect} from 'react';
import {View} from 'react-native';
import {withFirebaseHOC} from '../../config/FireBase';

const Initial = ({firebase, navigation}) => {
    const checkAuth = async () => {
        try {
            await firebase.checkAuthUser(user => {
                if (user) {
                    navigation.navigate('AppNavigation');
                } else {
                    navigation.navigate('AuthNavigation');
                }
            });
        } catch (e) {
            console.log(e)
        }
    };
    useEffect( () => {
        checkAuth();
    }, []);
    return (
        <View>

        </View>
    );
};

export default withFirebaseHOC(Initial);
