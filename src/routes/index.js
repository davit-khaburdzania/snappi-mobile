import { StackNavigator } from 'react-navigation'
import LoginScreen from './Login/Screen'
import SignupScreen from './Signup/Screen'
import UploadsScreen from './Uploads/Screen'
import AttachmentScreen from './Attachment/Screen'
import AttachmentInfoScreen from './AttachmentInfo/Screen'

const Routes = {
  Login: { screen: LoginScreen },
  Signup: { screen: SignupScreen },
  Uploads: { screen: UploadsScreen },
  Attachment: { screen: AttachmentScreen },
  AttachmentInfo: { screen: AttachmentInfoScreen }
}

const Navigation = StackNavigator(Routes, {
  initialRouteName: 'Login',
  headerMode: 'screen'
})

export default Navigation
