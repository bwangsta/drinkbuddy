import { ScrollView, View, Text, TouchableOpacity } from "react-native"
import Ionicons from "@expo/vector-icons/Ionicons"

type DrinksRowProps = {
  icon
  type: string
  children: React.ReactNode
}

function DrinksRow({ icon, type, children }: DrinksRowProps) {
  return (
    <View className="py-4 -z-10">
      <View className="flex flex-row items-center">
        {icon}
        <Text className="text-xl mx-1 font-bold">{type}</Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingVertical: 1,
        }}
      >
        {children}
        <TouchableOpacity className="flex justify-center">
          <Ionicons name="arrow-forward" size={28} />
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

export default DrinksRow
