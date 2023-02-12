import { useState, useEffect } from "react"
import { View, ActivityIndicator, FlatList } from "react-native"
import { Drink, DrinkCategoryNavigationProps } from "../types"
import DrinkCard from "../components/DrinkCard"

function DrinkCategoryScreen({
  navigation,
  route,
}: DrinkCategoryNavigationProps) {
  const [drinks, setDrinks] = useState<Drink[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const { category } = route.params

  useEffect(() => {
    navigation.setOptions({
      title: category,
    })

    async function fetchDrinks() {
      setIsLoading(true)
      const formattedCategory = formatCategory()
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${formattedCategory}`
        )
        const data = await response.json()
        setDrinks(data.drinks)
      } catch (error) {
        console.error(error)
      }
      setIsLoading(false)
    }
    fetchDrinks()
  }, [])

  // Formats category name to fit the API format
  function formatCategory() {
    if (category === "Homemade Liquor") {
      return "Homemade_Liqueur"
    }
    return category
  }

  // Loading indicator to show that data is being fetched
  if (isLoading) {
    return (
      <ActivityIndicator
        className="flex-1 justify-center align-middle"
        size="large"
      />
    )
  }

  return (
    <View>
      <FlatList
        contentContainerStyle={{
          padding: 8,
          alignItems: "center",
        }}
        numColumns={3}
        horizontal={false}
        initialNumToRender={10}
        data={drinks}
        renderItem={({ item }) => (
          <DrinkCard
            id={item.idDrink}
            name={item.strDrink}
            image={item.strDrinkThumb}
            size="small"
            navigation={navigation}
          />
        )}
      />
    </View>
  )
}

export default DrinkCategoryScreen
