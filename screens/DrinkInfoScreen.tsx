import { useState, useEffect } from "react"
import { Text, View, Image, ScrollView, TouchableOpacity } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons';

type Drink = {
  idDrink: string,
  strDrink: string,
  strCategory: string,
  strAlcoholic: string,
  strInstructions: string,
  strDrinkThumb: string,
  strIngredient1: string | null,
  strIngredient2: string | null,
  strIngredient3: string | null,
  strIngredient4: string | null,
  strIngredient5: string | null,
  strIngredient6: string | null,
  strIngredient7: string | null,
  strIngredient8: string | null,
  strIngredient9: string | null,
  strIngredient10: string | null,
  strIngredient11: string | null,
  strIngredient12: string | null,
  strIngredient13: string | null,
  strIngredient14: string | null,
  strIngredient15: string | null,
  strMeasure1: string | null,
  strMeasure2: string | null,
  strMeasure3: string | null,
  strMeasure4: string | null,
  strMeasure5: string | null,
  strMeasure6: string | null,
  strMeasure7: string | null,
  strMeasure8: string | null,
  strMeasure9: string | null,
  strMeasure10: string | null,
  strMeasure11: string | null,
  strMeasure12: string | null,
  strMeasure13: string | null,
  strMeasure14: string | null,
  strMeasure15: string | null,
}

const testData = {
  "idDrink": "11008",
  "strDrink": "Manhattan",
  "strDrinkAlternate": null,
  "strTags": "IBA,Classic,Alcoholic",
  "strVideo": "https://www.youtube.com/watch?v=TFWPtkNoF4Y",
  "strCategory": "Cocktail",
  "strIBA": "Unforgettables",
  "strAlcoholic": "Alcoholic",
  "strGlass": "Cocktail glass",
  "strInstructions": "Stirred over ice, strained into a chilled glass, garnished, and served up.",
  "strInstructionsES": null,
  "strInstructionsDE": "Über Eis gerührt, in ein gekühltes Glas geseiht, garniert und serviert.",
  "strInstructionsFR": null,
  "strInstructionsIT": "Mescolate su ghiaccio, filtrate in un bicchiere freddo, guarnite e servite.",
  "strInstructionsZH-HANS": null,
  "strInstructionsZH-HANT": null,
  "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/yk70e31606771240.jpg",
  "strIngredient1": "Sweet Vermouth",
  "strIngredient2": "Bourbon",
  "strIngredient3": "Angostura bitters",
  "strIngredient4": "Ice",
  "strIngredient5": "Maraschino cherry",
  "strIngredient6": "Orange peel",
  "strIngredient7": null,
  "strIngredient8": null,
  "strIngredient9": null,
  "strIngredient10": null,
  "strIngredient11": null,
  "strIngredient12": null,
  "strIngredient13": null,
  "strIngredient14": null,
  "strIngredient15": null,
  "strMeasure1": "3/4 oz ",
  "strMeasure2": "2 1/2 oz Blended ",
  "strMeasure3": "dash ",
  "strMeasure4": "2 or 3 ",
  "strMeasure5": "1 ",
  "strMeasure6": "1 twist of ",
  "strMeasure7": null,
  "strMeasure8": null,
  "strMeasure9": null,
  "strMeasure10": null,
  "strMeasure11": null,
  "strMeasure12": null,
  "strMeasure13": null,
  "strMeasure14": null,
  "strMeasure15": null,
  "strImageSource": "https://commons.wikimedia.org/wiki/File:Oak_Fired_Manhattan_-_Stierch_1.jpg",
  "strImageAttribution": "Sarah Stierch (CC BY 4.0)",
  "strCreativeCommonsConfirmed": "Yes",
  "dateModified": "2017-09-02 12:07:09"
}

function DrinkInfoScreen({ navigation, route }) {
  const [drinkInfo, setDrinkInfo] = useState<Drink>({
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

  const { id } = route.params

  function getIngredients(numOfIngredients: number = 15) {
    const ingredients = []
    for (let i = 1; i < numOfIngredients + 1; i++) {
      const measure = drinkInfo[`strMeasure${i}`]
      const ingredient = drinkInfo[`strIngredient${i}`]
      if (measure !== null && ingredient !== null)
        ingredients.push(<Text key={ingredient}>&#x2022; {`${measure} ${ingredient}`}</Text>)
    }
    return ingredients
  }

  useEffect(() => {
    navigation.setOptions({
      headerShown: false
    })

    async function fetchDrinkInfo() {
      try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        const data = await response.json()
        setDrinkInfo(data.drinks[0])
        // setDrinkInfo(testData)
      }
      catch (error) {
        console.error(error)
      }
    }
    fetchDrinkInfo()
  }, [])

  return (
    <ScrollView>
      <View className="bg-black relative">
        <TouchableOpacity
          className="bg-slate-200 absolute top-14 left-4 z-10 rounded-full"
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={36}></Ionicons>
        </TouchableOpacity>
        <Image
          className="w-full h-96 opacity-70"
          source={{ uri: drinkInfo.strDrinkThumb }}
        />
      </View>
      <View className="p-4 flex gap-3">
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