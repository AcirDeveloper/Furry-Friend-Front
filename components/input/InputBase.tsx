import { StyleSheet, TextInput } from "react-native";
import { getKeyboardType } from "./utils/getKeyboardType";

interface Props{
    type?:string; // 'text' | 'email' | 'password'
    value:string;
    placeholder:string;
    disabled?:boolean;
    showPassword?:boolean;
    onChangeValue: (value: string) => void
}

export const InputBase=(
    {
        type="text",
        value,
        placeholder,
        disabled=false,
        showPassword=true,
        onChangeValue
    }:Props
)=>{

    const keyboardType = getKeyboardType(type)
    return(
        <TextInput
            style={styles.input}
            placeholder={placeholder}
            value={value}
            keyboardType={keyboardType}
            secureTextEntry={showPassword}
            editable={!disabled}
            selectionColor="#444444"
            onChangeText={(e)=>onChangeValue(e)}
        />
    )
}

const styles = StyleSheet.create({
	input: {
        fontSize: 16,
        color: '#555'
	}
})