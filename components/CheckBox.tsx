import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

interface Props{
  isChecked: boolean;
  label: string;
  onClick: ()=>void;
}

export const CheckBox = ({isChecked, label, onClick}:Props) => {

    return(
        <Pressable onPress={()=>onClick()}>
            <View style={checkboxStyles.wrapper}>
                <View style={checkboxStyles.check}>
                    {isChecked && <MaterialCommunityIcons name="check-bold" size={12} color="black" />}
                </View>
                <Text style={checkboxStyles.label}>
                    {label}
                </Text>
            </View>
        </Pressable>
    )
}

const checkboxStyles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
      },
      check: {
        width: 18,
        height: 18,
        borderRadius: 4,
        backgroundColor: '#F7F7F7',
        borderColor: '#555555',
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
      },
      label: {
        fontSize: 12,
        color: '#444444',
      }
})