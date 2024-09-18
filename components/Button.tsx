import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

interface Props{
    text:string
    bgColor?:string
    colorText?:string
    onClick?:()=>void
}

export const Button = ({text, bgColor='orange', colorText='#444', onClick}:Props) => {
    // si se necesita mas colores se pueden agregar mas opciones
    const styleBg = {
        orange: '#FFDA6A'
    }[bgColor]

    return(
        <View style={styles.container}>
            <TouchableOpacity style={{...styles.button, backgroundColor:styleBg}} onPress={onClick}>
                <Text style={{...styles.text, color:colorText}}>{text}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button:{
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:24,
        paddingRight:24,
        borderRadius:100
    },
    text:{
        fontSize:14
    }
})