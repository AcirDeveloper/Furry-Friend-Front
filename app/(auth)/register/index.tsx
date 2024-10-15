import { useCallback, useState } from 'react'
import { authStyles } from '../Auth.style'
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import { CheckBox } from '@/presentation/components/Inputs/checkboxes/CheckBox'
import { IconButton } from '@/presentation/components/Inputs/buttons/IconButton'
import { MyButton } from '@/presentation/components/Inputs/buttons/MyButton'
import { Input } from '@/presentation/components/Inputs/inputs/Input'
import { router } from 'expo-router'
import SocialAuth from '@/presentation/components/Screens/SocialAuth'
import LogoAuth from '@/presentation/components/Screens/LogoAuth'

interface RegisterState {
	user: string
	email: string
	password: string
	isChecked: boolean
}

export const RegisterScreen = () => {
	const [loginState, setLoginState] = useState<RegisterState>({
		user: '',
		email: '',
		password: '',
		isChecked: false,
	})
	const { user, email, password, isChecked } = loginState

	const handleChange = useCallback((name: keyof RegisterState, value: string | boolean) => {
		setLoginState(prevState => ({ ...prevState, [name]: value }))
	}, [])

	const onLoginClick = () => {
		console.log('Usuario correcto')
	}

	return (
		<View style={styles.container}>
			<View style={{ position: 'absolute', zIndex: 99, top: 64, left: 22 }}>
				<IconButton icon='back' onClick={() => router.push('/login')} />
			</View>
			<ScrollView style={{ zIndex: 1 }}>
				{/* Logo */}
				<LogoAuth />
				{/* Inputs */}
				<View style={authStyles.containerInputs}>
					<Input
						placeholder='Nombre o Usuario'
						value={user}
						onChangeValue={value => handleChange('user', value)}
						icon='user'
						type='text'
					/>
					<Input
						placeholder='Correo Electrónico'
						value={email}
						onChangeValue={value => handleChange('email', value)}
						icon='email'
						type='text'
					/>
					<Input
						placeholder='Contraseña'
						value={password}
						onChangeValue={value => handleChange('password', value)}
						icon='lock'
					/>
				</View>
				<View style={authStyles.containerCheck}>
					<CheckBox
						isChecked={isChecked}
						label='Acepto los Términos y condiciones'
						onClick={() => handleChange('isChecked', !isChecked)}
					/>
				</View>
				<View className='mt-5 bg-slate-400' style={authStyles.containerButton}>
					<MyButton text='Registrarse' onClick={onLoginClick} />
				</View>
				{/* Iniciar o registrarse con redes */}
				<SocialAuth />
			</ScrollView>
		</View>
	)
}

export default RegisterScreen

const styles = StyleSheet.create({
	container: {
		height: '100%',
		paddingBottom: 25,
		position: 'relative',
	},
})
