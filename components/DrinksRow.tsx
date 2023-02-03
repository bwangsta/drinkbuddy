import { ScrollView, View, Text, TouchableOpacity } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons'

function DrinksRow(props: { type: string, children }) {
  return (
    <View className="py-4">
      <Text className="text-xl pl-3 font-bold">{props.type}</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 8,
          paddingTop: 8,
        }}
      >
        {props.children}
        <TouchableOpacity className="flex justify-center">
          <Ionicons name="arrow-forward" size={28} />
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

export default DrinksRow