import { TouchableOpacity, Image, Text } from "react-native"
import { Drink } from "../types"

type SearchResultProps = {
  result: Drink
  handleResultPress: (result: Drink) => void
}

function SearchResult({ result, handleResultPress }: SearchResultProps) {
  return (
    <TouchableOpacity
      key={result.idDrink}
      className="flex flex-row items-center gap-4"
      onPress={() => handleResultPress(result)}
    >
      <Image
        className="h-10 w-10 rounded-sm"
        source={{ uri: result.strDrinkThumb }}
      />
      <Text>{result.strDrink}</Text>
    </TouchableOpacity>
  )
}

export default SearchResult
