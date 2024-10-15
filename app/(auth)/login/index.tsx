import { useState } from 'react'

import { router } from 'expo-router'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { authStyles } from '../Auth.style'

import { CheckBox } from '@/presentation/components/Inputs/checkboxes/CheckBox'
import { MyButton } from '@/presentation/components/Inputs/buttons/MyButton'
import { Input } from '@/presentation/components/Inputs/inputs/Input'
import SocialAuth from '@/presentation/components/Screens/SocialAuth'
import BannerErrorMessage from '@/presentation/components/Common/BannerErrorMessage'
import LogoAuth from '@/presentation/components/Screens/LogoAuth'

interface LoginState {
	email: string
	password: string
	isChecked: boolean
}

const initialState: LoginState = {
	email: '',
	password: '',
	isChecked: false,
}

export const LoginScreen = () => {
	const [loginState, setLoginState] = useState<LoginState>(initialState)
	const [showErrorBanner, setShowErrorBanner] = useState(false)

	const handleInputChange = (field: keyof LoginState, value: string | boolean) => {
		setLoginState(prevState => ({ ...prevState, [field]: value }))
	}

	const validateCredentials = (user: string, password: string) => {
		return user === 'admin' && password === 'admin'
	}

	const onLoginClick = () => {
		const { email, password } = loginState
		if (validateCredentials(email, password)) {
			setShowErrorBanner(false)
		} else {
			setShowErrorBanner(true)
		}
	}

	const onCloseBanner = () => setShowErrorBanner(false)

	return (
		<View style={styles.container}>
			<ScrollView style={{ zIndex: 1 }}>
				{/* Logo */}
				<LogoAuth />
				{/* Inputs */}
				<View style={authStyles.containerInputs}>
					<Input
						placeholder='Email'
						value={loginState.email}
						onChangeValue={value => handleInputChange('email', value)}
						icon='user'
						type='email'
					/>
					<Input
						placeholder='Contraseña'
						value={loginState.password}
						type='password'
						onChangeValue={value => handleInputChange('password', value)}
						icon='lock'
					/>
				</View>
				<View style={authStyles.containerCheck}>
					<CheckBox
						isChecked={loginState.isChecked}
						label='Recordarme'
						onClick={() => handleInputChange('isChecked', !loginState.isChecked)}
					/>
					<Text style={authStyles.forgotPassword}>¿Olvidaste tu contraseña?</Text>
				</View>
				<View className='mt-5' style={authStyles.containerButton}>
					<MyButton text='Inicia sesión' onClick={onLoginClick} />
				</View>
				{/* Inicio o registro con redes */}
				<SocialAuth />
				<View className='flex items-center justify-center mt-5'>
					<TouchableOpacity onPress={() => router.push('/register')}>
						<Text style={{ color: '#444', fontSize: 12 }}>
							¿No tienes cuenta?{' '}
							<Text className='font-bold text-white underline-offset-1'>Crea uno aquí</Text>
						</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
			{/* Banner Error Message */}
			<BannerErrorMessage
				show={showErrorBanner}
				onClose={onCloseBanner}
				textPrincipal='Credenciales incorrectas'
				textSecondary='Revise sus credenciales'
			/>
		</View>
	)
}

export default LoginScreen

const styles = StyleSheet.create({
	container: {
		height: '100%',
		paddingBottom: 25,
		position: 'relative',
	},
})
