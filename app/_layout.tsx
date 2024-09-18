import { Slot, SplashScreen } from 'expo-router'
import { View } from 'react-native'
import { useFonts } from 'expo-font'

import '../assets/styles/global.css'
import { useEffect } from 'react'

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
	const [fontsLoaded, error] = useFonts({
		'WorkSans-Black': require('../assets/fonts/WorkSans-Black.ttf'),
		'WorkSans-Light': require('../assets/fonts/WorkSans-Light.ttf'),
		'WorkSans-Medium': require('../assets/fonts/WorkSans-Medium.ttf'),
	})

	useEffect(() => {
		if (error) throw error

		if (fontsLoaded) SplashScreen.hideAsync()
	}, [fontsLoaded, error])

	if (!fontsLoaded && !error) return null
	return (
		<View className='font-work-light'>
			<Slot />
		</View>
	)
}
