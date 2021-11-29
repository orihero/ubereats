import React from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';

const items = [
  {
    image: require('../assets/images/shopping-bag.png'),
    text: 'Pick-up',
  },
  {
    image: require('../assets/images/soft-drink.png'),
    text: 'Soft Drinks',
  },
  {
    image: require('../assets/images/bread.png'),
    text: 'Bakery Items',
  },
  {
    image: require('../assets/images/fast-food.png'),
    text: 'Fast Food',
  },
  {
    image: require('../assets/images/deals.png'),
    text: 'Deals',
  },
  {
    image: require('../assets/images/coffee.png'),
    text: 'Coffee & Tea',
  },
  {
    image: require('../assets/images/desserts.png'),
    text: 'Desserts',
  },
];

export default function Categories({categories, index, changeIndex}) {
  return (
    <View
      style={{
        marginTop: 8,
        backgroundColor: '#fff',
        paddingVertical: 10,
        zIndex: 0,
      }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories?.map((item, i) => (
          <TouchableOpacity
            key={item.idCategory}
            onPress={() => changeIndex(i)}>
            <View
              key={index}
              style={{
                alignItems: 'center',
                marginHorizontal: 15,
                backgroundColor: index === i ? 'green' : 'white',
              }}>
              <Image
                style={{
                  width: 50,
                  height: 40,
                  resizeMode: 'center',
                }}
                source={{uri: item.strCategoryThumb}}
              />
              <Text style={{fontSize: 13, fontWeight: '900'}}>
                {item.strCategory}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
