import { Stack } from "expo-router"

const StackLayout = () => {
  return (
    <Stack>
        <Stack.Screen name="home/index" //Localizacion del fichero a renderizar
        options={{
            title: "Home Screen" // Titulo que se asocia al fichero
        }}/>
        





    </Stack>






  )
}

export default StackLayout