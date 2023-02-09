import { TouchableOpacity, Image, Text } from "react-native"
import { ScreenNavigationProps } from "../types"

type DrinkCardProps = {
  id: string
  name: string
  image: string
  size: "small" | "large"
  navigation: ScreenNavigationProps["navigation"]
}

function DrinkCard({ id, name, image, size, navigation }: DrinkCardProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className={`relative m-1 rounded-lg bg-black ${
        size === "small" ? "w-28" : "w-48"
      }`}
      onPress={() => navigation.navigate("DrinkInfo", { id: id })}
    >
      <Image
        className={`w-full rounded-lg opacity-60 ${
          size === "small" ? "h-28" : "h-48"
        }`}
        source={{ uri: image }}
      />
      <Text className="absolute bottom-1 left-2 right-2 text-base font-bold text-white">
        {name}
      </Text>
    </TouchableOpacity>
  )
}

export default DrinkCard
