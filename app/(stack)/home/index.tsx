import CustomButton from "@/components/shared/CustomButton"
import { Link, router } from "expo-router"
import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const HomeScreen = () => {
    const menuItems = [
        { id: 1, label: "Prouctos", path: "/products" },
        { id: 2, label: "Perfil", path: "/profile" },
        { id: 3, label: "Ajustes", path: "/settings" },

    ]

    return (
        <SafeAreaView>
            <View className="px-10">
                <Text className="text-5xl text-primary">Home</Text>



                {/*Esto se podria hacer con un Custom button directamente pero me gusta mas asi */}

                {
                    /*<CustomButton onPress={() => router.push('/products')} color='primary'>
                        Productos
                    </CustomButton>*/
                }



                <Link href={"/products"} asChild>
                    <CustomButton  color='primary'>Perfil</CustomButton>
                </Link>


                <Link href={"/profile"} asChild>
                    <CustomButton className="mb-10" color='secondary'>Perfil</CustomButton>
                </Link>

                <Link href={"/settings"} asChild>
                    <CustomButton className="mb-10" color='tertiary'>Ajustes</CustomButton>
                </Link>


                {/*Boton variante texto only */}
                <Link href={"/settings"} asChild>
                    <CustomButton className="mb-10" variant="text-only" color="primary" >Ajustes variante</CustomButton>
                </Link>


            </View>
        </SafeAreaView>
    )
}

export default HomeScreen