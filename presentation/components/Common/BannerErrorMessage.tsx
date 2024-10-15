import { useEffect } from 'react'
import { View, Text, Pressable, Image } from 'react-native'
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'

interface Props {
	textPrincipal: string
	textSecondary?: string
	show: boolean
	onClose: () => void
}

const BannerErrorMessage = ({ show, onClose, textPrincipal, textSecondary }: Props) => {
	const height = useSharedValue(0)

	useEffect(() => {
		height.value = show ? withTiming(214, { duration: 300 }) : withTiming(0, { duration: 300 })
	}, [show])

	const animatedStyle = useAnimatedStyle(() => {
		return {
			height: height.value,
		}
	})

	return (
		<Animated.View
			style={[
				{ position: 'absolute', bottom: 0, width: '100%', zIndex: 2, overflow: 'hidden' },
				animatedStyle,
			]}
		>
			<View style={{ position: 'relative', width: '100%', height: '100%' }}>
				<Image
					style={{ position: 'absolute', width: '100%', bottom: 0, resizeMode: 'stretch' }}
					source={require('@/assets/images/bannerErrorMessage.png')}
				/>
				{/* <SvgError/> */}
				<View
					style={{
						width: '100%',
						height: '100%',
						display: 'flex',
						justifyContent: 'flex-end',
						alignItems: 'center',
						paddingBottom: 50,
					}}
				>
					<Text style={{ fontSize: 14, color: '#DD5562' }}>{textPrincipal}</Text>
					<Text style={{ fontSize: 14, color: '#DD5562' }}>{textSecondary}</Text>
				</View>
				<Pressable
					onPress={onClose}
					style={{
						position: 'absolute',
						top: 20,
						right: 50,
						width: 24,
						height: 24,
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						backgroundColor: '#DCD0FA',
					}}
				>
					<Text style={{ fontSize: 14, color: '#444' }}>X</Text>
				</Pressable>
			</View>
		</Animated.View>
	)
}
export default BannerErrorMessage
