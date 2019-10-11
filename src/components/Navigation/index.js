import {createSwitchNavigator, createAppContainer} from 'react-navigation'
import Initial from '../Screens/Initial';
import AuthNavigation from './AuthNavigation';
import AppNavigation from './AppNavigation';

const AppNavigator = createSwitchNavigator(
    {
        Initial : Initial,
        AuthNavigation : AuthNavigation,
        AppNavigation : AppNavigation,

    },
    {
        initialRouteName:  'Initial'
    }
)

const AppContainer  = createAppContainer(AppNavigator)
export default AppContainer
