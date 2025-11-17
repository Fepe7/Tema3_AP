import { products } from '@/store/products.store';
import {Link} from 'expo-router';
import { FlatList, Text, View } from 'react-native';



const ProductsScreen = () => {

    return (


        <View className="flex flex-1 px-4">
            <FlatList
                data={products}
                ListEmptyComponent={<Text>NO hay productos</Text>}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <View className="mt-1">
                        <Text className="text-2xl font-work-black">{item.title}</Text>
                        <Text className="">{item.description}</Text>
                        <View className={"flex flex-row justify-between mt-1"}>
                            <Text className={"font-work-black"}>{item.price}€</Text>
                            <Link href={`/(stack)/products/${item.id}`}
                                  className={"text-primary"}>
                                Ver detalles
                            </Link>
                        </View>
                    </View>
                )}
            />
        </View>
    )
        ;
};


export default ProductsScreen;