import {Stack} from "expo-router"
import {products} from "@/store/products.store";

const StackLayout = () => {


    //Funcion para poner el titulo del producto en la cabecera
    //Se le pasa la ruta del producto y devuelve el titulo
    const tituloProducto = (ruta: any):string => {

        //Coge los parametros de la ruta, mas en concreto el id
        //Esto caputra el id de la ruta /products/[id]
        const id = ruta.params.id;

        const productoNombre = products.find(p => p.id === id);
        if (!productoNombre || productoNombre.title === "") {
            return "Producto";
        } else {
            return productoNombre.title;
        }

    }


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

            {/*route es un objeto de Expo Router que te da informacion de la nav actual
              este objeto tiene una propiedad params que contiene los parametros de la ruta actual
            */}

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

            {/*en el name, que es la ruta, [id] es el parametro de la ruta*/}
            <Stack.Screen name="products/[id]"
                          //Coge la ruta, que en este caso es el id del producto
                          options={({route}) => ({
                              //Se le pasa la ruta a la funcion para que saque el titulo del producto
                              title: tituloProducto(route),
                              animation: "fade"
                          })}/>
        </Stack>


    )
}

export default StackLayout