import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';

export default function Card() {
  return (
    <>
      {' '}
      // SafeAreaView
      <ScrollView>
        <Text style={styles.font}>Quick picks for you</Text>
        <View style={styles.container}>
          <View style={styles.card}>
            <Image
              style={styles.image}
              source={require('../Images/pizza.jpeg')}
            />
            <Text style={styles.center}>Pizza</Text>
          </View>
          <View style={styles.card}>
            <Image
              style={styles.image}
              source={require('../Images/biryani.jpg')}
            />
            <Text style={styles.center}>Biryani</Text>
          </View>
          <View style={styles.card}>
            <Image
              style={styles.image}
              source={require('../Images/north-indian.jpg')}
            />
            <Text style={styles.center}>North Indian</Text>
          </View>
          <View style={styles.card}>
            <Image
              style={styles.image}
              source={require('../Images/rolls.jpg')}
            />
            <Text style={styles.center}>Rolls</Text>
          </View>
        </View>
        <View style={styles.review}>
          <View>
            <Text style={styles.font}>Most Preferred Restaurants</Text>
            <View>
              <Image
                style={[styles.image, styles.reviewCard]}
                source={require('../Images/kw.png')}
              />
              <Text>Quality Walls</Text>
              <Text>⭐⭐⭐⭐</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  card: {
    width: '40%',
    height: 140,
    margin: '5%',
  },
  reviewCard: {
    height: 150,
  },
  review: {
    marginTop: 20,
  },
  font: {
    fontWeight: 'bold',
    marginLeft: 10,
  },
  image: {
    alignContent: 'center',
    width: 140,
    height: '100%',
  },
  center: {
    textAlign: 'center',
  },
});
