import {Stack} from "expo-router"

const StackLayout = () => {
    return (
        <Stack screenOptions={{
            headerShown: true, //Se muestra en la cabecera al ir a un enlace
            headerShadowVisible: true, //El stack tiene sombra
            headerStyle: {
                backgroundColor: "pink",
            },
            contentStyle:{
                backgroundColor: "white" //Fondo de la zona de enlaces
            }

        }}>
            <Stack.Screen name="home/index" //Localizacion del fichero a renderizar
                          options={{
                              title: "Home Screen", animation: "fade" // Titulo que se asocia al fichero
                          }}/>


            <Stack.Screen name="products/index" //Localizacion del fichero a renderizar
                          options={{
                              title: "Productos",  animation: "fade" // Titulo que se asocia al fichero
                          }}/>

            <Stack.Screen name="profile/index" //Localizacion del fichero a renderizar
                          options={{
                              title: "Usuario" // Titulo que se asocia al fichero
                          }}/>

            <Stack.Screen name="settings/index" //Localizacion del fichero a renderizar
                          options={{
                              title: "Ajustes" // Titulo que se asocia al fichero
                          }}/>
        </Stack>


    )
}

export default StackLayout