import { View } from "react-native"
import { ScreenNavigationProps, Drink, Status } from "../types"
import SearchResult from "./SearchResult"

type SearchResultsProps = {
  searchResults: Drink[]
  status: Status
  navigation: ScreenNavigationProps["navigation"]
  setQuery: React.Dispatch<React.SetStateAction<string>>
  setStatus: React.Dispatch<React.SetStateAction<Status>>
}

function SearchResults({
  searchResults,
  status,
  navigation,
  setQuery,
  setStatus,
}: SearchResultsProps) {
  function handleResultPress(result: Drink) {
    setQuery("")
    setStatus("submitting")
    navigation.navigate("DrinkInfo", { id: result.idDrink })
  }

  const results = searchResults.map((result) => {
    return (
      <SearchResult
        key={result.idDrink}
        result={result}
        handleResultPress={handleResultPress}
      />
    )
  })

  return (
    <View className="absolute top-10 left-2 w-full">
      <View className="rounded-b-md bg-slate-200">
        {status === "typing" && results}
      </View>
    </View>
  )
}

export default SearchResults
