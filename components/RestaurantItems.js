import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/Ionicons';

const localRestaurants = [
  {
    name: 'Beachside Bar',
    image_url:
      'https://www.elitetraveler.com/wp-content/uploads/2021/06/FSX-0164-Filia-main-e1623861643989.jpg',
    categories: ['Cafe', 'Bar'],
    price: '$$',
    reviews: 1244,
    rating: 4.5,
  },
  {
    name: 'Benihana',
    image_url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgXw0pqGYwHn2ieksnWU1IoVsu7TQUfvFwsQ&usqp=CAU',
    categories: ['Cafe', 'Bar'],
    price: '$$',
    reviews: 1244,
    rating: 3.7,
  },
  {
    name: "India's Grill",
    image_url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2sBy_dIn70zKAOCQ-GCBS0tP1SOXAhgXEgA&usqp=CAU',
    categories: ['Indians', 'Bar'],
    price: '$$',
    reviews: 700,
    rating: 4.9,
  },
];
export default function RestaurantItems(props) {
  return (
    <TouchableOpacity activeOpacity={1} style={{marginBottom: 30}}>
      {localRestaurants.map((restaurant, index) => (
        <View
          key={index}
          style={{marginTop: 10, padding: 15, backgroundColor: 'white'}}>
          <RestaurantImage image={restaurant.image_url} />
          <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
        </View>
      ))}
    </TouchableOpacity>
  );
}

const RestaurantImage = props => (
  <>
    <Image
      source={{
        uri: props.image,
      }}
      style={{width: '100%', height: 180}}
    />
    <TouchableOpacity style={{position: 'absolute', right: 20, top: 20}}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
    </TouchableOpacity>
  </>
);

const RestaurantInfo = props => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 10,
    }}>
    <View>
      <Text style={{fontSize: 15, fontWeight: 'bold'}}>{props.name}</Text>
      <Text style={{fontSize: 13, color: 'gray'}}>35-45 * min</Text>
    </View>
    <View
      style={{
        backgroundColor: '#eee',
        height: 30,
        width: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
      }}>
      <Text>{props.rating}</Text>
    </View>
  </View>
);
