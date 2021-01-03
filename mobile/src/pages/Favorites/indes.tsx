import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import PageHeader from "../../Components/PageHeader";
import TeacherItem, { Teacher } from "../../Components/TeacherItem";

import styles from "./styles";

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useFocusEffect(() => {
    AsyncStorage.getItem("favorites").then((response) => {
      if (response) {
        setFavorites(JSON.parse(response));
      }
    });
  });

  return (
    <View style={styles.container}>
      <PageHeader title="Meus proffys favoritos" />

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {favorites.map((teacher: Teacher) => (
          <TeacherItem key={teacher.id} teacher={teacher} favorited={true} />
        ))}
      </ScrollView>
    </View>
  );
}

export default Favorites;
