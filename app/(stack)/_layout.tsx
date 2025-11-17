import {Stack} from "expo-router"

const StackLayout = () => {


    //Esto es para la cabecera de arriba, que nos deja tirar para atras
    return (
        <Stack screenOptions={{
            headerShown: true, //Se muestra en la cabecera al ir a un enlace
            headerShadowVisible: true, //El stack tiene sombra
            headerStyle: {
                backgroundColor: "pink",
            },
            contentStyle: {
                backgroundColor: "white" //Fondo de la zona de enlaces
            }

        }}>
            {/*Aqui viene cada pantalla de la app, para que se conecte entre todos */}

            <Stack.Screen name="home/index" //Localizacion del fichero a renderizar
                          options={{
                              title: "Home Screen", animation: "fade" // Titulo que se asocia al fichero
                          }}/>


            <Stack.Screen name="products/index"
                          options={{
                              title: "Productos", animation: "fade"
                          }}/>

            <Stack.Screen name="profile/index"
                          options={{
                              title: "Usuario"
                          }}/>

            <Stack.Screen name="settings/index"
                          options={{
                              title: "Ajustes"
                          }}/>
        </Stack>


    )
}

export default StackLayout