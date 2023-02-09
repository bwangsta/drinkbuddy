import { View, TextInput } from "react-native"
import { useState, useEffect } from "react"
import { Ionicons } from "@expo/vector-icons"
import { DrinkInfoScreenProps, Status, Drink } from "../types"
import SearchResults from "./SearchResults"

import searchData from "../data/searchData"

type SearchbarProps = {
  navigation: DrinkInfoScreenProps["navigation"]
}

function Searchbar({ navigation }: SearchbarProps) {
  const [query, setQuery] = useState("")
  const [status, setStatus] = useState<Status>("empty")
  const [searchResults, setSearchResults] = useState<Drink[]>([])

  useEffect(() => {
    async function fetchCocktail() {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`
        )
        const data = await response.json()
        setSearchResults(data.drinks.slice(0, 5))
        // setSearchResults(searchData.drinks.slice(0, 5))
      } catch (error) {
        console.error(error)
      }
    }
    fetchCocktail()
  }, [query])

  // Gets the first search result when submitting
  function handleSearchSubmit() {
    setStatus("submitting")
    setQuery("")
    navigation.navigate("DrinkInfo", { id: searchResults[0].idDrink })
  }

  function handleInputChange(changedText: string) {
    setQuery(changedText)
    setStatus("typing")
  }

  return (
    <View className="relative flex flex-row items-center rounded-full border p-2">
      <Ionicons name="search" size={20} color="black" />
      <TextInput
        className="ml-2 w-full"
        placeholder="Search..."
        value={query}
        onChangeText={(changedText) => handleInputChange(changedText)}
        onSubmitEditing={handleSearchSubmit}
      ></TextInput>
      <SearchResults
        searchResults={searchResults}
        status={status}
        navigation={navigation}
        setQuery={setQuery}
        setStatus={setStatus}
      />
    </View>
  )
}

export default Searchbar
