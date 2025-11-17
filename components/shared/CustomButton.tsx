import React from 'react';
import {Pressable, PressableProps, Text} from 'react-native';


interface Props extends PressableProps {

    children: string;
    //Propoedad para definir el color del boton
    color: "primary" | "secondary" | "tertiary";

    //Propiedad para definir el tipo de boton
    variant?: "contained" | "text-only";

    className?: string; 


}

const CustomButton = ({children, color = 'primary', onPress, onLongPress, variant='contained', 
                        className}: Props) => {

    

    const btnColor = {
        primary: "bg-primary",
        secondary: "bg-secondary",
        tertiary: "bg-tertiary"
    }[color];

    /*Estilo para el texto solo texto*/
    const textColor = {
        primary: 'text-primary',
        secondary: 'text-secondary',
        tertiary: 'text-tertiary',
    }[color];





    //Comprobar si el boton es de tipo texto
    if (variant == 'text-only') {
        return (
            <Pressable
                className={`p-3 ${className}`}
                onPress={onPress}
                onLongPress={onLongPress}
            >
                <Text className={"text-center"}>{children} </Text>
            </Pressable>
        )
    }


    return (
        <Pressable
            className={`p-3 m-1 rounded-md ${btnColor} active:opacity ${className}`} onPress={onPress}
            onLongPress={onLongPress}
        >
            <Text className={`text-center text-white font-work-medium`}>{children}</Text>
        </Pressable>
    );
}

export default CustomButton;