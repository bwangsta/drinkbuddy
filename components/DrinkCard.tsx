import { View, Image, Text } from "react-native"

function DrinkCard(props: { image: string, name: string }) {
  return (
    <View className="w-48 mx-1">
      <Image
        className="w-full h-48 rounded-lg"
        source={{ uri: props.image }}
      />
      <Text className="text-base">{props.name}</Text>
    </View>
  )
}

export default DrinkCard