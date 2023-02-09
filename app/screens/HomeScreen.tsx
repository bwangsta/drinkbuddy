import { ScrollView } from "react-native"
import { useEffect, useState } from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { StatusBar } from "expo-status-bar"
import { Ionicons } from "@expo/vector-icons"
import { Fontisto } from "@expo/vector-icons"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { ScreenNavigationProps, Drink } from "../types"
import cocktailData from "../data/cocktailData"
import beerData from "../data/beerData"
import shotData from "../data/shotData"
import liquorData from "../data/liquorData"
import DrinkCard from "../components/DrinkCard"
import DrinksRow from "../components/DrinksRow"
import SearchBar from "../components/Searchbar"

type HomeScreenProps = {
  navigation: ScreenNavigationProps["navigation"]
}

function HomeScreen({ navigation }: HomeScreenProps) {
  const [cocktails] = useState(cocktailData.drinks)
  const [beers] = useState(beerData.drinks)
  const [shots] = useState(shotData.drinks)
  const [liquors] = useState(liquorData.drinks)

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  })

  // Used for getting random drinks everytime the Home screen renders
  // Gets random numbers and stores and returns a set to make sure there are no duplicates
  function getRandomDrinkIndices(
    totalDrinks: number,
    numOfDrinks: number = 10
  ) {
    const indices: Set<number> = new Set()
    for (let i = 0; i < numOfDrinks; i++) {
      indices.add(Math.floor(Math.random() * totalDrinks))
    }
    return indices
  }

  // Creates a DrinkCard depending on the type of drink
  function drinkCards(drinkType: Drink[]) {
    const drinks = []
    const indices = getRandomDrinkIndices(drinkType.length)

    for (let i of indices) {
      const { idDrink, strDrinkThumb, strDrink } = drinkType[i]
      drinks.push(
        <DrinkCard
          key={idDrink}
          id={idDrink}
          name={strDrink}
          image={strDrinkThumb}
          size="large"
          navigation={navigation}
        />
      )
    }
    return drinks
  }

  return (
    <SafeAreaView className="p-4">
      <StatusBar style="dark" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <SearchBar navigation={navigation} />
        <DrinksRow
          type="Cocktail"
          icon={<Fontisto name="cocktail" size={20} color="black" />}
          children={drinkCards(cocktails)}
          navigation={navigation}
        />
        <DrinksRow
          type="Beer"
          icon={<Ionicons name="beer" size={20} color="black" />}
          children={drinkCards(beers)}
          navigation={navigation}
        />
        <DrinksRow
          type="Shot"
          icon={<MaterialCommunityIcons name="cup" size={20} color="black" />}
          children={drinkCards(shots)}
          navigation={navigation}
        />
        <DrinksRow
          type="Homemade Liquor"
          icon={
            <MaterialCommunityIcons name="liquor" size={20} color="black" />
          }
          children={drinkCards(liquors)}
          navigation={navigation}
        />
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen
