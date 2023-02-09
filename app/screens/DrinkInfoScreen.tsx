import { useState, useEffect } from "react"
import { Text, View, Image, ScrollView, TouchableOpacity } from "react-native"
import { StatusBar } from "expo-status-bar"
import { ScreenNavigationProps, DrinkInfo } from "../types"
import Ionicons from "@expo/vector-icons/Ionicons"

function DrinkInfoScreen({ navigation, route }: ScreenNavigationProps) {
  const [drinkInfo, setDrinkInfo] = useState<DrinkInfo>({
    idDrink: "",
    strDrink: "",
    strCategory: "",
    strAlcoholic: "",
    strInstructions: "",
    strDrinkThumb: "a",
    strIngredient1: null,
    strIngredient2: null,
    strIngredient3: null,
    strIngredient4: null,
    strIngredient5: null,
    strIngredient6: null,
    strIngredient7: null,
    strIngredient8: null,
    strIngredient9: null,
    strIngredient10: null,
    strIngredient11: null,
    strIngredient12: null,
    strIngredient13: null,
    strIngredient14: null,
    strIngredient15: null,
    strMeasure1: null,
    strMeasure2: null,
    strMeasure3: null,
    strMeasure4: null,
    strMeasure5: null,
    strMeasure6: null,
    strMeasure7: null,
    strMeasure8: null,
    strMeasure9: null,
    strMeasure10: null,
    strMeasure11: null,
    strMeasure12: null,
    strMeasure13: null,
    strMeasure14: null,
    strMeasure15: null,
  })

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })

    async function fetchDrinkInfo() {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${route.params?.id}`
        )
        const data = await response.json()
        setDrinkInfo(data.drinks[0])
        // setDrinkInfo(testData)
      } catch (error) {
        console.error(error)
      }
    }
    fetchDrinkInfo()
  }, [])

  function getIngredients(numOfIngredients: number = 15) {
    const ingredients = []
    for (let i = 1; i < numOfIngredients + 1; i++) {
      const measure = drinkInfo[`strMeasure${i}` as keyof DrinkInfo]
      const ingredient = drinkInfo[`strIngredient${i}` as keyof DrinkInfo]
      // Make sure there is an ingredient provided
      // Sometimes measure is not provided since saying 1 Orange Juice is redundant
      // to saying Orange Juice so we want to keep the ingredient
      if (ingredient !== null) {
        if (measure === null) {
          ingredients.push(
            <Text key={ingredient}>&#x2022; {`${ingredient}`}</Text>
          )
        } else {
          ingredients.push(
            <Text key={ingredient}>&#x2022; {`${measure} ${ingredient}`}</Text>
          )
        }
      }
    }
    return ingredients
  }

  return (
    <ScrollView>
      <StatusBar style="light" />
      <View className="relative bg-black">
        <TouchableOpacity
          className="absolute top-14 left-4 z-10 rounded-full bg-slate-200"
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={36}></Ionicons>
        </TouchableOpacity>
        <Image
          className="h-96 w-full opacity-70"
          source={{ uri: drinkInfo.strDrinkThumb }}
        />
      </View>
      <View className="flex gap-3 p-4">
        <Text className="text-4xl">{drinkInfo.strDrink}</Text>
        <View className="flex flex-row justify-between">
          <Text>{drinkInfo.strCategory}</Text>
          <Text>{drinkInfo.strAlcoholic}</Text>
        </View>
        <View>
          <Text className="text-xl">Instructions:</Text>
          <Text>{drinkInfo.strInstructions}</Text>
        </View>
        <View>
          <Text className="text-xl">Ingredients</Text>
          {getIngredients()}
        </View>
      </View>
    </ScrollView>
  )
}

export default DrinkInfoScreen
