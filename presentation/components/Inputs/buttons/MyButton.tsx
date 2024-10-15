import { globalComponentsStyles } from '@/shared/styles/global-components-styles'
import { Text, TouchableOpacity, View } from 'react-native'

interface Props {
	text: string
	bgColor?: string
	colorText?: string
	onClick?: () => void
}

export const MyButton = ({ text, bgColor = 'orange', colorText = '#444', onClick }: Props) => {
	return (
		<View className='flex-1 justify-center items-center '>
			<TouchableOpacity
				style={{ ...globalComponentsStyles.button, backgroundColor: bgColor }}
				onPress={onClick}
			>
				<Text className={`text-base ${colorText}`}>{text}</Text>
			</TouchableOpacity>
		</View>
	)
}
