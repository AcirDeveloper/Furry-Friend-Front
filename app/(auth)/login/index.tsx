import { useState } from 'react'
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated'
import { authStyles } from '../Auth.style'
import { CheckBox } from '@/components/CheckBox'
import { Button } from '@/components/Button'
import { Input } from '@/components/input/Input'
import { IconButton } from '@/components/IconButton'

interface LoginState {
	user: string
	email: string
	password: string
	isChecked: boolean
}

export const LoginScreen = () => {
	const [loginState, setLoginState] = useState<LoginState>({
		user: '',
		email: '',
		password: '',
		isChecked: false,
	})
	const height = useSharedValue(0)
	const { user, email, password, isChecked } = loginState

	const onChangeUser = (user: string) => {
		setLoginState({ ...loginState, user })
	}

	const onChangeEmail = (email: string) => {
		setLoginState({ ...loginState, email })
	}

	const onChangePassword = (password: string) => {
		setLoginState({ ...loginState, password })
	}

	const onClickChecked = () => {
		setLoginState({ ...loginState, isChecked: !isChecked })
	}

	const onLoginClick = () => {
		if (user === 'admin' && password === 'admin') {
			console.log('Usuario correcto')
		} else {
			height.value = withTiming(214, { duration: 700 })
		}
	}

	const onCloseMessage = () => {
		height.value = withTiming(0, { duration: 700 })
	}

	const animatedStyle = useAnimatedStyle(() => {
		return {
			height: height.value,
		}
	})

	return (
		<View style={styles.container}>
			<ScrollView style={{ zIndex: 1 }}>
				<View style={authStyles.containerLogo}>
					<Image source={require('@/assets/images/loginBanner.png')} style={authStyles.image} />
					<View style={{ ...authStyles.circle, backgroundColor: '#B9A0F4' }}>
						<Image source={require('@/assets/images/logoTemp.png')} />
					</View>
				</View>
				<View style={authStyles.containerInputs}>
					<Input
						placeholder='Nombre o Usuario'
						value={user}
						onChangeValue={onChangeUser}
						icon='user'
						type='text'
					/>
					{/* <Input placeholder="Correo Electrónico" value={email} onChangeValue={onChangeEmail} icon="email" type="text"/> */}
					<Input
						placeholder='Contraseña'
						value={password}
						onChangeValue={onChangePassword}
						icon='lock'
					/>
				</View>
				<View style={authStyles.containerCheck}>
					<CheckBox isChecked={isChecked} label='Recordarme' onClick={onClickChecked} />
					<Text style={authStyles.forgotPassword}>¿Olvidaste tu contraseña?</Text>
				</View>
				<View style={authStyles.containerButton}>
					<Button text='Inicia sesión' onClick={onLoginClick} />
				</View>
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
					<Text style={{ color: '#444', fontSize: 12 }}>¿No tienes cuenta? Crea uno aquí</Text>
				</View>
			</ScrollView>
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
						<Text style={{ fontSize: 14, color: '#DD5562' }}>Usuario o contraseña incorrectos</Text>
						<Text style={{ fontSize: 14, color: '#DD5562' }}>Por favor, intenta de nuevo</Text>
					</View>
					<Pressable
						onPress={onCloseMessage}
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
