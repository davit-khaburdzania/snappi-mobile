import { StackNavigator } from 'react-navigation'
import LoginScreen from './Login/Screen'
import SignupScreen from './Signup/Screen'
import AttachmentsScreen from './Attachments/Screen'
import AttachmentScreen from './Attachment/Screen'
import AttachmentInfoScreen from './AttachmentInfo/Screen'
import FavoritesScreen from './Favorites/Screen'

const Routes = {
  Login: { screen: LoginScreen },
  Signup: { screen: SignupScreen },
  Attachments: { screen: AttachmentsScreen },
  Attachment: { screen: AttachmentScreen },
  AttachmentInfo: { screen: AttachmentInfoScreen },
  Favorites: { screen: FavoritesScreen }
}

const Navigation = StackNavigator(Routes, {
  initialRouteName: 'Login',
  headerMode: 'screen'
})

export default Navigation
