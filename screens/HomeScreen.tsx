import { ScrollView, SafeAreaView } from "react-native"
import { useEffect, useState } from "react"
import { Ionicons } from "@expo/vector-icons"
import { Fontisto } from "@expo/vector-icons"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { DrinkInfoScreenProps, Drink } from "../types"
import cocktailData from "../data/cocktailData"
import beerData from "../data/beerData"
import shotData from "../data/shotData"
import liquorData from "../data/liquorData"
import DrinkCard from "../components/DrinkCard"
import DrinksRow from "../components/DrinksRow"
import SearchBar from "../components/Searchbar"

type HomeScreenProps = {
  navigation: DrinkInfoScreenProps["navigation"]
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
          image={strDrinkThumb}
          name={strDrink}
          handleCardPress={handleCardPress}
        />
      )
    }
    return drinks
  }

  // Go to drinks info screen
  function handleCardPress(id: string) {
    navigation.navigate("DrinkInfo", { id: id })
  }

  return (
    <SafeAreaView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginHorizontal: 16,
          paddingTop: 48,
        }}
      >
        <SearchBar navigation={navigation} />
        <DrinksRow
          type="Cocktails"
          icon={<Fontisto name="cocktail" size={20} color="black" />}
          children={drinkCards(cocktails)}
        />
        <DrinksRow
          type="Beer"
          icon={<Ionicons name="beer" size={20} color="black" />}
          children={drinkCards(beers)}
        />
        <DrinksRow
          type="Shot"
          icon={<MaterialCommunityIcons name="cup" size={20} color="black" />}
          children={drinkCards(shots)}
        />
        <DrinksRow
          type="Homemade Liquor"
          icon={
            <MaterialCommunityIcons name="liquor" size={20} color="black" />
          }
          children={drinkCards(liquors)}
        />
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen
