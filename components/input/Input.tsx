import AntDesign from '@expo/vector-icons/AntDesign'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { StyleSheet, TouchableOpacity, View } from "react-native"
import { InputBase } from "./InputBase"
import { useState } from "react"

interface Props{
    value:string
    placeholder?:string
    disabled?:boolean
    type?:string
    icon?: 'email' | 'user' | 'lock' | ''
    onChangeValue:(value:string)=>void
}

export const Input = ({
    value,
    placeholder = '',
    disabled,
    type,
    icon='',
    onChangeValue
}:Props)=>{
    const [showPassword, setShowPassword] = useState(icon==='lock');

    return (
        <View style={styles.container}>
            <View style={styles.containerIcon}>
                {icon==='email' && <MaterialCommunityIcons name="email-outline" size={24}  />}
                {icon==='user' && <AntDesign size={24} name="user"/>}
                {icon==='lock' && <MaterialIcons name="lock-outline" size={24} />}
                {/* <AntDesign size={24} name="user"/>
                <AntDesign size={24} name="lock"/>
                <MaterialCommunityIcons name="email-outline" size={24} color="black" /> */}
            </View>
            <InputBase
                type={type}
                value={value}
                placeholder={placeholder}
                onChangeValue={onChangeValue}
                disabled={disabled}
                showPassword={showPassword}
            />
            {
                icon === 'lock' && (
                    <View style={styles.iconEyes}>
                        <TouchableOpacity
                            style={{ width: 24 }}
                            onPress={() => setShowPassword(!showPassword)}
                        >
                            {!showPassword ? (
                                <FontAwesome5 name="eye-slash" size={18} color="black" />
                            ) : (
                                <FontAwesome5 name="eye" size={18} color="black" />
                            )}
                        </TouchableOpacity>
                    </View>
                )
            }
        </View>
    )
}

const styles = StyleSheet.create({
	container: {
        display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		gap: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#222222',
        paddingLeft: 16,
        paddingRight: 8,
        paddingBottom: 8,
        paddingTop: 8,
        position: 'relative'
	},
    containerIcon:{
        display: 'flex',
        width: 24,
        height: 24,
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconEyes:{
        position: 'absolute',
        display: 'flex',
        width: 24,
        height: 24,
        alignItems: 'center',
        justifyContent: 'center',
        right: 8
    }
})