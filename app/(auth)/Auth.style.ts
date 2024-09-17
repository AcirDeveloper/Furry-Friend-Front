import { StyleSheet } from "react-native";

export const authStyles = StyleSheet.create({
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
    containerLogo:{
        display: 'flex',
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'flex-end',
        width: '100%',
        paddingBottom: 12,
        height: 387,
        zIndex: 1
    },
    image:{
        position: 'absolute',
        width: '100%',
        objectFit: 'fill'
    },
    circle:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width:267,
        height:267,
        borderRadius: 144,
        bottom:8
    },
    containerInputs:{
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 32
    },
    containerCheck:{
        paddingLeft: 30,
        paddingRight: 30,
        marginTop:13,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    forgotPassword:{
        color: '#444444',
        fontSize: 12
    },
    containerButton:{
        paddingLeft: 16,
        paddingRight: 16,
        marginTop:34,
        marginBottom:21
    },
    containerLine:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        paddingLeft: 16,
        paddingRight: 16,
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: '#444444',
    },
    containerCreateAccount:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 15,
        paddingLeft: 16,
        paddingRight: 16,
        marginTop: 27
    },
    containerIconsSocial:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 10
    }
})