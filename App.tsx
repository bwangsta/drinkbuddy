import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { RootStackParamList } from "./types"
import DrinkInfoScreen from "./screens/DrinkInfoScreen"
import HomeScreen from "./screens/HomeScreen"

const Stack = createNativeStackNavigator<RootStackParamList>()

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="DrinkInfo" component={DrinkInfoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
