import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { RootStackParamList } from "./app/types"
import DrinkInfoScreen from "./app/screens/DrinkInfoScreen"
import HomeScreen from "./app/screens/HomeScreen"
import DrinkCategoryScreen from "./app/screens/DrinkCategoryScreen"

const Stack = createNativeStackNavigator<RootStackParamList>()

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="DrinkInfo" component={DrinkInfoScreen} />
          <Stack.Screen name="DrinkCategory" component={DrinkCategoryScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default App
