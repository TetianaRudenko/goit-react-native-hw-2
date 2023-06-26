import { Text, StyleSheet, Pressable } from 'react-native';


const Button = ({ title }) => {
  return (
    <Pressable style={styles.container}>
      <Text style={styles.text}>{ title }</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    height: 50,
    borderRadius: 100,
    backgroundColor: '#FF6C00',
    padding: "32 16",
    alignItems: 'center',
    justifyContent: 'center',   
  },  
  text: {
    fontSize: 16,
    lineHeight: 19,   
    color: '#FFFFFF',
  },
});

export default Button;