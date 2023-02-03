import { TouchableOpacity, Image, Text, Alert } from "react-native"

function DrinkCard(
  props: {
    id: string, image: string, name: string, handleCardPress: (id: string) => void
  }
) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className="w-48 mx-1"
      onPress={() => props.handleCardPress(props.id)}
    >
      <Image
        className="w-full h-48 rounded-lg"
        source={{ uri: props.image }}
      />
      <Text className="text-base">{props.name}</Text>
    </TouchableOpacity>
  )
}

export default DrinkCard