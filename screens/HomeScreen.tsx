import { ScrollView, SafeAreaView } from "react-native"
import { useEffect, useState } from "react"
import cocktailData from "../data/cocktailData"
import beerData from "../data/beerData"
import shotData from "../data/shotData"
import liquorData from "../data/liquorData"
import DrinkCard from "../components/DrinkCard"
import DrinksRow from "../components/DrinksRow"

function HomeScreen({ navigation }) {
  const [cocktails] = useState(cocktailData.drinks)
  const [beers] = useState(beerData.drinks)
  const [shots] = useState(shotData.drinks)
  const [liquors] = useState(liquorData.drinks)

  // Used for getting random drinks everytime the Home screen renders
  // Gets random numbers and stores and returns a set to make sure there are no duplicates
  function getRandomDrinkIndices(totalDrinks: number, numOfDrinks: number = 10) {
    const indices: Set<number> = new Set()
    for (let i = 0; i < numOfDrinks; i++) {
      indices.add(Math.floor(Math.random() * totalDrinks))
    }
    return indices
  }

  // Creates a DrinkCard depending on the type of drink
  function drinkCards(drinkType) {
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

  // Fetch the API and get information about the drink when the drink 
  // card is pressed
  function handleCardPress(id: string) {
    navigation.navigate("DrinkInfo", { id: id })
  }

  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <DrinksRow type="Cocktails" children={drinkCards(cocktails)} />
        <DrinksRow type="Beer" children={drinkCards(beers)} />
        <DrinksRow type="Shot" children={drinkCards(shots)} />
        <DrinksRow type="Homemade Liquor" children={drinkCards(liquors)} />
      </ScrollView>
    </SafeAreaView >
  )
}

export default HomeScreen