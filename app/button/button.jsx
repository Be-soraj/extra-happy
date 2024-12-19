import { View, Text, Button, SafeAreaView, StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Alert } from "react-native";

const Separator = () => <View style={styles.separator} />;

const Btn = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View>
          <Text className="text-xl px-4 pb-4">
            The title and onPress handler are required. It is recommended to set
            accessibilityLabel to help make your app usable by everyone.
          </Text>
          <Button
            title="Press me"
            onPress={() => Alert.alert("Simple Button pressed")}
          />
        </View>
        <Separator />
        <View>
          <Text className="text-xl px-4 pb-4">
            Adjust the color in a way that looks standard on each platform. On
            iOS, the color prop controls the color of the text. On Android, the
            color adjusts the background color of the button.
          </Text>
          <Button
            title="Press me"
            color="#f194ff"
            onPress={() => Alert.alert("Button with adjusted color pressed")}
          />
        </View>
        <Separator />
        <View>
          <Text className="text-xl px-4 pb-4">
            All interaction for the component are disabled.
          </Text>
          <Button
            title="Press me"
            disabled
            className="text-xl px-4 pb-4"
            onPress={() => Alert.alert("Cannot press this one")}
          />
        </View>
        <Separator />
        <View>
          <Text className="text-xl px-4 pb-4">
            This layout strategy lets the title define the width of the button.
          </Text>
          <View className="flex-row justify-between mx-4 ">
            <Button
              title="Left button"
              onPress={() => Alert.alert("Left button pressed")}
            />
            <Button
              title="Right button"
              onPress={() => Alert.alert("Right button pressed")}
            />
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default Btn;
