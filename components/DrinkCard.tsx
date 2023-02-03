import { TouchableOpacity, Image, Text, View } from "react-native"

function DrinkCard(
  props: {
    id: string, image: string, name: string, handleCardPress: (id: string) => void
  }
) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className="w-48 mx-1 relative bg-black rounded-lg"
      onPress={() => props.handleCardPress(props.id)}
    >
      <Image
        className="w-full h-48 rounded-lg opacity-70"
        source={{ uri: props.image }}
      />
      <Text className="text-base absolute bottom-1 left-2 right-2 font-bold text-white">{props.name}</Text>
    </TouchableOpacity>
  )
}

export default DrinkCard