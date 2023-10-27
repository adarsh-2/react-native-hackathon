import {StyleSheet, Text, TextInput, View} from 'react-native';

export default function SearchBar() {
  return (
    <View>
      <Text style={styles.center}>Taste Parlour</Text>
      <TextInput style={styles.input} placeholder="Search" />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 1,
    margin: 10,
    borderRadius: 5,
  },
  center: {
    textAlign: 'center',
    fontSize: 30,
    color: 'black',
  },
});
