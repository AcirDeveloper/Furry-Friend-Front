import { authStyles } from '@/app/(auth)/Auth.style'
import { View, Text, Image } from 'react-native'
const LogoAuth = () => {
	return (
		<View style={authStyles.containerLogo}>
			<Image source={require('@/assets/images/loginBanner.png')} style={authStyles.image} />
			<View style={{ ...authStyles.circle, backgroundColor: '#B9A0F4' }}>
				<Image source={require('@/assets/images/logoTemp.png')} />
			</View>
		</View>
	)
}
export default LogoAuth
