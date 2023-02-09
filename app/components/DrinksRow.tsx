import { ScrollView, View, Text, TouchableOpacity } from "react-native"
import Ionicons from "@expo/vector-icons/Ionicons"
import { ScreenNavigationProps } from "../types"

type DrinksRowProps = {
  icon: any
  type: string
  children: React.ReactNode
  navigation: ScreenNavigationProps["navigation"]
}

function DrinksRow({ icon, type, children, navigation }: DrinksRowProps) {
  return (
    <View className="-z-10 py-4">
      <View className="flex flex-row items-center">
        {icon}
        <Text className="mx-1 text-xl font-bold">{type}</Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingVertical: 1,
        }}
      >
        {children}
        <TouchableOpacity
          className="flex justify-center"
          onPress={() =>
            navigation.navigate("DrinkCategory", { category: type })
          }
        >
          <Ionicons name="arrow-forward" size={28} />
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

export default DrinksRow
