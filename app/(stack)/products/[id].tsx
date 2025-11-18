import React from 'react'
import {View, Text, Image} from "react-native";
import {Redirect, useLocalSearchParams} from "expo-router";
import {products} from "@/store/products.store";

//Importo la funcion para cargar la imagen de products/index para usarla para cargar la imagen del producto
import { cargarImagen } from '@/app/(stack)/products/index';

export const ProductoScreen = () => {


    //Coge el id del producto de products.store
    const {id} = useLocalSearchParams();

    //Filtra por id
    const product = products.find(p => p.id === id);

    //Si no se encuentra tira para atras
    if (!product) {
        return <Redirect href='/(stack)/products/'/>
    }


    return (
        <View className={"px-5 mt-2"}>
            <View className={"flex h-auto flex-row justify-center mb-4"}>
                {/*Si no se pone lo estilos bien no cargan las imagenes de los productos*/}
                <Image style={{height:300, width:"100%"}} resizeMode="cover" source={cargarImagen(product)}></Image>
            </View>
            <View className={"flex flex-row  mb-4"}>
                <Text className={"font-work-black text-2xl flex-1 "}>{product.title}</Text>
                <Text className={"font-work-black text-2xl p-1 pl-3 pr-3 bg-black text-white rounded-3xl"}>{product.price}€</Text>
            </View>
            <Text className={""}>{product.description}</Text>
        </View>
    )
}

export default ProductoScreen;
