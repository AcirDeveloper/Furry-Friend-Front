import { Pressable, View } from "react-native"
import { MyIcon } from "./myicon/MyIcon";

interface Props{
    icon: string;//facebook, google, apple, back
    onClick:()=>void;
}

export const IconButton = ({icon, onClick}:Props) => {
    return(
        <Pressable onPress={onClick}>
            <View>
                <MyIcon icon={icon}/>
            </View>
        </Pressable>
    )
}