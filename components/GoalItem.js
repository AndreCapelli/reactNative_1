import { StyleSheet } from "react-native";
import { Text, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <Pressable
      android_ripple={{ color: "#ddd" }}
      onPress={props.onDeleteItem.bind(this, props.id)}
      onLongPress={props.showInfo.bind(this, props.id)}>
      <Text style={styles.goalItem}>{props.text}</Text>
    </Pressable>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    color: "#fff",
  },
});
