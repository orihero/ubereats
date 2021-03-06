import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import Categories from '../components/home/Categories';
import HeaderTabs from '../components/home/HeaderTabs';
import Header from '../components/home/HeaderTabs';
import RestaurantItems, {localRestaurants} from '../components/home/RestaurantItems';
import SearchBar, {AutocompleteSearchBar} from '../components/home/SearchBar';
import axios from 'axios';
import {Divider} from 'react-native-elements';
import BottomTabs from '../components/home/BottomTabs';

export default function Home( navigation  ) {
  const [categories, setCategories] = useState([]);
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  let getCategories = async () => {
    try {
      let response = await axios.get(
        'https://www.themealdb.com/api/json/v1/1/categories.php',
      );
      setCategories(response.data.categories);
    } catch (error) {}
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <SafeAreaView style={{backgroundColor: '#eee', flex: 1}}>
      <View style={{backgroundColor: 'white', padding: 15}}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories
          categories={categories}
          index={activeCategoryIndex}
          changeIndex={setActiveCategoryIndex}
        />
        <RestaurantItems navigation={ navigation } />
      </ScrollView>
      <Divider width={1} />
      <BottomTabs />
    </SafeAreaView>
  );
}
