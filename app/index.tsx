import { Link } from 'expo-router'
import { View, Text, SafeAreaView } from 'react-native'
const App = () => {
	return (
		<SafeAreaView>
			<View className='mt-10 mx-5'>
				<Text className='text-title text-3xl'>Hola mundo</Text>
				<Text className='text-secondary text-2xl '>Hola mundo</Text>
				<Text className='text-secondary-200 text-xl'>Hola mundo</Text>
				<Link href={'/(auth)/login'}> Login</Link>
				<Link href={'/(auth)/register'}> Register</Link>
			</View>
		</SafeAreaView>
	)
}
export default App
