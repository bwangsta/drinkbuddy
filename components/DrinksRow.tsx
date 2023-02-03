import { ScrollView, View, Text } from "react-native"

function DrinksRow(props: { type: string, children }) {
  return (
    <View className="py-4">
      <Text className="text-xl pl-3 font-bold">{props.type}</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="space-x-2"
        contentContainerStyle={{
          paddingHorizontal: 8,
          paddingTop: 8,
        }}
      >
        {props.children}
      </ScrollView>
    </View>
  )
}

export default DrinksRow