import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Linking } from 'react-native';

const CatInfo = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Welcome and Introduction */}
      <View style={styles.welcomeContainer}>
        <Text style={styles.header}>Welcome to</Text>
        <Text style={styles.logoText}>The Cat&Grass</Text>
      </View>

      <Text style={styles.introText}>
        Welcome to the ultimate resource for cat lovers! Explore different cat breeds, learn about their
        personalities, and discover useful tips on how to grow and care for cat grass. Whether you're a seasoned
        cat owner or a new pet parent, this app is packed with information to help you give your feline friends
        the best care.
      </Text>

      <Text style={styles.header}>Types of Cats</Text>

      {/* Cat Cards with Creative Design */}
      <View style={styles.card}>
        <Text style={styles.stylishSubHeader}>Puspin Cat</Text>
        <Image 
          source={require('../../assets/puspin.jpg')} // Puspin image
          style={styles.image}
        />
        <Text style={styles.text}>
          The Puspin is a native Filipino cat breed known for its friendly personality and adorable appearance.
          They come in various coat colors and patterns, and they make wonderful, playful pets.
        </Text>
        <TouchableOpacity style={styles.linkButton} onPress={() => Linking.openURL('https://en.wikipedia.org/wiki/Puspin')}>
          <Text style={styles.link}>Learn more about Puspin Cats</Text>
        </TouchableOpacity>
      </View>

      {/* Persian Cat Card */}
      <View style={styles.card}>
        <Text style={styles.stylishSubHeader}>Persian Cat</Text>
        <Image 
          source={require('../../assets/persian.jpg')} // Persian image
          style={styles.image}
        />
        <Text style={styles.text}>
          Persian cats are known for their long, luxurious coats and calm temperament. They make excellent lap
          cats and require regular grooming.
        </Text>
        <TouchableOpacity style={styles.linkButton} onPress={() => Linking.openURL('https://en.wikipedia.org/wiki/Persian_cat')}>
          <Text style={styles.link}>Learn more about Persian Cats</Text>
        </TouchableOpacity>
      </View>

      {/* Maine Coon Cat Card */}
      <View style={styles.card}>
        <Text style={styles.stylishSubHeader}>Maine Coon Cat</Text>
        <Image 
          source={require('../../assets/mainecoon.jpg')} // Maine Coon image
          style={styles.image}
        />
        <Text style={styles.text}>
          The Maine Coon is one of the largest domestic cat breeds. Known for their long fur, tufted ears, and
          friendly nature, they are often called "gentle giants."
        </Text>
        <TouchableOpacity style={styles.linkButton} onPress={() => Linking.openURL('https://en.wikipedia.org/wiki/Maine_Coon')}>
          <Text style={styles.link}>Learn more about Maine Coon Cats</Text>
        </TouchableOpacity>
      </View>

      {/* Siamese Cat Card */}
      <View style={styles.card}>
        <Text style={styles.stylishSubHeader}>Siamese Cat</Text>
        <Image 
          source={require('../../assets/siamese.jpg')} // Siamese image
          style={styles.image}
        />
        <Text style={styles.text}>
          Siamese cats are known for their striking blue eyes and sleek, short coats. They are social, vocal, and love
          to interact with their owners.
        </Text>
        <TouchableOpacity style={styles.linkButton} onPress={() => Linking.openURL('https://en.wikipedia.org/wiki/Siamese_cat')}>
          <Text style={styles.link}>Learn more about Siamese Cats</Text>
        </TouchableOpacity>
      </View>

      {/* Bengal Cat Card */}
      <View style={styles.card}>
        <Text style={styles.stylishSubHeader}>Bengal Cat</Text>
        <Image 
          source={require('../../assets/bengal.jpg')} // Bengal image
          style={styles.image}
        />
        <Text style={styles.text}>
          Bengal cats have a striking wild appearance with their spotted or marbled coats. They are active, intelligent,
          and highly social.
        </Text>
        <TouchableOpacity style={styles.linkButton} onPress={() => Linking.openURL('https://en.wikipedia.org/wiki/Bengal_cat')}>
          <Text style={styles.link}>Learn more about Bengal Cats</Text>
        </TouchableOpacity>
      </View>

      {/* More cat cards can be added here... */}
      
      <Text style={styles.header}>Types of Cat Grass</Text>

      {/* Cat Grass Cards */}
      <View style={styles.card}>
        <Text style={styles.catGrassHeader}> Wheatgrass</Text>
        <Image 
          source={require('../../assets/wheat.jpg')} // Wheatgrass image
          style={styles.catGrassImage}
        />
        <Text style={styles.text}>
          Wheatgrass is the most common type of cat grass. It's easy to grow and provides essential nutrients like
          vitamins and fiber for your cat’s digestive health.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.catGrassHeader}> Oat Grass</Text>
        <Image 
          source={require('../../assets/oat.jpeg')} // Oatgrass image
          style={styles.catGrassImage}
        />
        <Text style={styles.text}>
          Oat grass is another popular choice. It's rich in fiber and helps with hairball control and digestion.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.catGrassHeader}> Barley Grass</Text>
        <Image 
          source={require('../../assets/barley.jpg')} // Barley Grass image
          style={styles.catGrassImage}
        />
        <Text style={styles.text}>
          Barley grass is rich in chlorophyll and can help detoxify your cat's body. It also aids in digestion and
          provides additional nutrients.
        </Text>
      </View>

      {/* Tips for Planting */}
      <Text style={styles.header}>Tips to Plant Cat Grass</Text>

      <View style={styles.tipCard}>
        <Text style={styles.tipHeader}>1. Choose the Right Container</Text>
        <Text style={styles.tipText}>
          Select a shallow container with good drainage to prevent overwatering. A small pot or tray works well for
          growing cat grass.
        </Text>
      </View>

      <View style={styles.tipCard}>
        <Text style={styles.tipHeader}>2. Use Quality Soil</Text>
        <Text style={styles.tipText}>
          Use well-draining potting soil. Avoid using garden soil as it may contain chemicals that are harmful to your
          cat.
        </Text>
      </View>

      <View style={styles.tipCard}>
        <Text style={styles.tipHeader}>3. Provide Adequate Sunlight</Text>
        <Text style={styles.tipText}>
          Cat grass needs a good amount of sunlight to grow. Place the container near a window where it can get plenty of
          natural light for at least 4–6 hours a day.
        </Text>
      </View>

      <View style={styles.tipCard}>
        <Text style={styles.tipHeader}>4. Water Regularly</Text>
        <Text style={styles.tipText}>
          Keep the soil moist but not soggy. Water the grass regularly, but be careful not to overwater it as that can
          lead to root rot.
        </Text>
      </View>

      <View style={styles.tipCard}>
        <Text style={styles.tipHeader}>5. Harvest When Ready</Text>
        <Text style={styles.tipText}>
          Once the cat grass grows to about 4-6 inches, you can start cutting it for your cat. Trim the grass regularly to
          encourage new growth.
        </Text>
      </View>

      <View style={styles.tipCard}>
        <Text style={styles.tipHeader}>6. Keep it Fresh</Text>
        <Text style={styles.tipText}>
          After your cat has eaten some grass, make sure to replace it regularly so that it stays fresh and nutritious.
        </Text>
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#FFF8DE', 
  },
  welcomeContainer: {
    alignItems: 'center',
    marginBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#FFB100', 
    paddingBottom: 15,
  },
  header: {
    fontSize: 28,
    fontWeight: '700',
    color: '#ffbb00',
    textAlign: 'center',
    marginBottom: 15,
  },
  logoText: {
    fontSize: 36,
    fontWeight: '900',
    color: '#4C9B55',
    marginTop: -5,
    textAlign: 'center',
  },
  introText: {
    fontSize: 16,
    marginVertical: 20,
    color: '#333',
    textAlign: 'left',
    lineHeight: 30,
  },

  // Cat Cards and Cat Grass Cards
  card: {
    backgroundColor: '#ffffff',
    padding: 20,
    marginVertical: 12,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 5,
    elevation: 3,
    borderLeftWidth: 6,
    borderLeftColor: '#4C9B55', 
  },
  stylishSubHeader: {
    fontSize: 22,
    fontWeight: '600',
    color: '#2A2A2A',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 12,
  },
  linkButton: {
    backgroundColor: '#FFB100',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  link: {
    color: '#fff',
    fontWeight: 'bold',
  },

  // Tip Card Styles
  tipCard: {
    backgroundColor: '#ffffff',
    padding: 20,
    marginVertical: 12,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 5,
    elevation: 3,
    borderLeftWidth: 6,
    borderLeftColor: '#4C9B55', // Green accent line
  },
  tipHeader: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2A2A2A',
    marginBottom: 10,
  },
  tipText: {
    fontSize: 16,
    color: '#555',
    lineHeight: 22,
    marginBottom: 10,
  },

  // Cat Grass Images
  catGrassHeader: {
    fontSize: 20,
    fontWeight: '600',
    color: '#2A2A2A',
    marginBottom: 8,
  },
  catGrassImage: {
    width: '100%',
    height: 180,
    borderRadius: 10,
    marginBottom: 12,
  },
});

export default CatInfo;
