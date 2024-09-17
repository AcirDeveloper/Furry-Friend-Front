import Ionicons from '@expo/vector-icons/Ionicons';
import { IconApple } from "./IconApple"
import { IconFacebook } from "./IconFacebook"
import { IconGoogle } from "./IconGoogle"

interface Props{
    icon: string;//facebook, google, apple, back
    height?: number;
    width?: number;
}

export const MyIcon = ({icon}:Props) =>{

    return (
        <>
            {icon === 'google' && <IconGoogle height={24} width={24}/>}
            {icon === 'facebook' && <IconFacebook height={24} width={24}/>}
            {icon === 'apple' && <IconApple height={24} width={24}/>}
            {icon === 'back' && <Ionicons name="chevron-back-outline" size={24} color="black" />}
        </>
    )
}