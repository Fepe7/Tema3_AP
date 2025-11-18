import {products} from '@/store/products.store';
import {Link} from 'expo-router';
import {FlatList, Text, View, Image} from 'react-native';

//Se importa la imagen de mario como cuboMario
import cuboMario from "@/assets/images/cuboMario.jpeg";


//Carga la imagen del producto, si no tiene imagen asignada pone la de mario
export const cargarImagen = (item: typeof products[0]) => {
    try {
        //Verifica si la imagen existe
        if (item.image && item.image !== "") {
            return {uri: item.image};
        } else{
            return cuboMario
        }
    }catch (e) {
        //Si no existe la imagen, asigna la de mario
        return cuboMario;
    }
}
const ProductsScreen = () => {

    return (

        <View className="flex flex-1 px-4">
            <FlatList
                data={products}
                ListEmptyComponent={<Text>NO hay productos</Text>}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (

                    <View className="mt-3 flex-row ">

                        {/*Se pone la imagen del producto */}
                        <View className={"mr-4"}>
                            <Image className={"w-16 h-16 rounded-xl"} resizeMode={"cover"} style={{height: 50, width: 50}} source={cargarImagen(item)}/>
                        </View>

                        {/*Informacion del proucto*/}
                        <View className="flex-1">
                            <Text className="text-2xl font-work-black" numberOfLines={1}>{item.title}</Text>
                            {/*number of lines indica la cantidad de lineas que hay como max, si no se pone ...*/}
                            <Text numberOfLines={2}> {item.description}</Text>
                            <View className={"flex flex-row justify-between mt-1"}>
                                <Text className={"font-work-black "}>{item.price}€</Text>
                                <Link href={`/(stack)/products/${item.id}`}
                                      className={"text-primary underline"}>
                                    Ver detalles
                                </Link>
                            </View>
                        </View>
                    </View>
                )}
            />
        </View>
    );
};


export default ProductsScreen;
