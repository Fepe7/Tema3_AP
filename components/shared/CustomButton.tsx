import React from 'react';
import {Pressable, PressableProps, Text} from 'react-native';


interface Props extends PressableProps {

    children: string;

    //Propoedad para definir el color del boton
    color: "primary" | "secondary" | "tertiary";

    //Propiedad para definir el tipo de boton
    variant?: "contained" | "text-only";

    //Propiedad para clases adicionales si las queremos
    className?: string;
}



const CustomButton = ({children, color = 'primary', onPress, onLongPress, variant='contained', 
                        className}: Props) => {

    //Variables que almacena un color de fondo segun la propieda color que se inserte
    const btnColor = {
        primary: "bg-primary",
        secondary: "bg-secondary",
        tertiary: "bg-tertiary"
    }[color];

    //Variables de color de texto
    const textColor = {
        primary: 'text-primary',
        secondary: 'text-secondary',
        tertiary: 'text-tertiary',
    }[color];





    //Comprobar si el boton es de tipo texto
    if (variant == 'text-only') {
        //Si es solo texto, se le aplica un estilo concreto
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



    //Si no es un tipo texto se le aplica este estilo de pressable
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