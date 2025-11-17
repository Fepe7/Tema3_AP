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
                <CustomButton onPress={() => router.push('/products')} color='primary'>Productos</CustomButton>
                <Link href="/profile" asChild>
                    <CustomButton color='primary'>Perfil</CustomButton>
                </Link>
                <Link href="/settings" asChild>
                    <CustomButton color='primary'>Ajustes</CustomButton>
                </Link>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen