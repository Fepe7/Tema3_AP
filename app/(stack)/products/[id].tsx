import React from 'react'
import {View, Text} from "react-native";
import {Redirect, useLocalSearchParams} from "expo-router";
import {products} from "@/store/products.store";

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
            <Text className={"font-work-black text-2xl"}>{product.title}</Text>
            <Text className={""}>{product.description}</Text>
            <Text className={"font-work-black text-2xl"}>{product.price}</Text>
        </View>
    )
}

export default ProductoScreen;
