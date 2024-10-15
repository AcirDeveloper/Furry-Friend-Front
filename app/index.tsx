import { Link, Redirect } from 'expo-router'
import { View, Text, SafeAreaView } from 'react-native'
const App = () => {
	return (
		<SafeAreaView>
			<View className='mt-10 mx-5'>
				<Redirect href='/login' />
			</View>
		</SafeAreaView>
	)
}
export default App
