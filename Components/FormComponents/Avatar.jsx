import { StyleSheet, View } from "react-native";
import AddAvatarButton from "./AddAvatarButton";

const Avatar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <AddAvatarButton style={styles.avatarButton} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  avatar: {
    position: "absolute",
    top: -60,
    justifyContent: "center",
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
  avatarButton: {
    position: "absolute",
    right: -12,
    bottom: 14,
  },
});

export default Avatar;