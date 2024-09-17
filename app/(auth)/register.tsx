import { useState } from "react";
import { authStyles } from "./Auth.style";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { Input } from "@/components/input/Input";
import { CheckBox } from "@/components/CheckBox";
import { Button } from "@/components/Button";
import { IconButton } from "@/components/IconButton";

interface RegisterState {
    user: string;
    email: string;
    password: string;
    isChecked: boolean;
}

export const RegisterScreen = () => {
    const [loginState, setLoginState] = useState<RegisterState>({
        user: '',
        email: '',
        password: '',
        isChecked: false
    })
    const { user,email, password, isChecked } = loginState

    const onChangeUser = (user:string) => {
		setLoginState({...loginState, user})
	}

	const onChangeEmail = (email:string) => {
		setLoginState({...loginState, email})
	}

	const onChangePassword = (password:string) => {
		setLoginState({...loginState, password})
	}

    const onClickChecked = () => {
        setLoginState({...loginState, isChecked: !isChecked})
    }
    
    const onLoginClick = () => {
        console.log('Usuario correcto')
    }


    return (
        <View style={styles.container}>
            <View style={{position:'absolute', zIndex:99, top:64, left:22}}>
                <IconButton icon="back" onClick={()=>{}}/>
            </View>
            <ScrollView style={{zIndex:1}}>
                <View style={authStyles.containerLogo}>
					<Image source={require('@/assets/images/loginBanner.png')} 
					style={authStyles.image}/>
					<View style={{...authStyles.circle, backgroundColor:'#B9A0F4'}}>
                        <Image source={require('@/assets/images/logoTemp.png')} />
                    </View>
				</View>
                <View style={authStyles.containerInputs}>
                    <Input placeholder="Nombre o Usuario" value={user} onChangeValue={onChangeUser} icon="user" type="text"/>
                    <Input placeholder="Correo Electrónico" value={email} onChangeValue={onChangeEmail} icon="email" type="text"/>
                    <Input placeholder="Contraseña" value={password} onChangeValue={onChangePassword} icon="lock" />
                </View>
                <View style={authStyles.containerCheck}>
                    <CheckBox isChecked={isChecked} label="Acepto los Términos y condiciones" onClick={onClickChecked}/>
                </View>
                <View style={authStyles.containerButton}>
                    <Button text="Inicia sesión" onClick={onLoginClick}/>
                </View>
                <View style={authStyles.containerLine}>
                    <View style={authStyles.line}></View>
                    <Text style={{color:'#444', fontSize:12}}>O continua con</Text>
                    <View style={authStyles.line}></View>
                </View>
                <View style={authStyles.containerCreateAccount}>
                    <View style={authStyles.containerIconsSocial}>
                        <IconButton icon="google" onClick={()=>{}}/>
                        <IconButton icon="facebook" onClick={()=>{}}/>
                        <IconButton icon="apple"onClick={()=>{}}/>
                    </View>
                </View>
            </ScrollView>
        </View>

        
    )

    
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        paddingBottom: 25,
        position: 'relative',
    }
})