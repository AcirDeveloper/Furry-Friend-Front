import { authStyles } from '@/app/(auth)/Auth.style'
import { View, Text } from 'react-native'
import { IconButton } from '../Inputs/buttons/IconButton'
const SocialAuth = () => {
	return (
		<>
			<View style={authStyles.containerLine}>
				<View style={authStyles.line}></View>
				<Text style={{ color: '#444', fontSize: 12 }}>O continua con</Text>
				<View style={authStyles.line}></View>
			</View>
			<View style={authStyles.containerCreateAccount}>
				<View style={authStyles.containerIconsSocial}>
					<IconButton icon='google' onClick={() => {}} />
					<IconButton icon='facebook' onClick={() => {}} />
					<IconButton icon='apple' onClick={() => {}} />
				</View>
			</View>
		</>
	)
}
export default SocialAuth
