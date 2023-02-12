import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { RootStackParamList } from "./app/types"
import HomeScreen from "./app/screens/HomeScreen"
import DrinkInfoScreen from "./app/screens/DrinkInfoScreen"
import DrinkCategoryScreen from "./app/screens/DrinkCategoryScreen"

const RootStack = createNativeStackNavigator<RootStackParamList>()

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootStack.Navigator initialRouteName="Home">
          <RootStack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <RootStack.Screen
            name="DrinkInfo"
            component={DrinkInfoScreen}
            options={{ headerShown: false }}
          />
          <RootStack.Screen
            name="DrinkCategory"
            component={DrinkCategoryScreen}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default App
