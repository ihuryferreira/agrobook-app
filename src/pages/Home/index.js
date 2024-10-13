import React, { useEffect, useState } from "react";
import { View, ScrollView, FlatList, TouchableOpacity, Image, Text, StyleSheet } from "react-native";
import axios from "axios";

const API_URL = "http://52.67.20.226:57601/api/book/list_book";

const Home = ({ route, navigation }) => {
  const [dbBooks, setDbBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const authToken = route.params?.authToken;
        console.log(`Teste: ${authToken}`);

        if (authToken === undefined) {
          const config = {
            headers: { Authorization: `Bearer ${authToken}` }
          };
          const response = await axios.post(API_URL, {
            filter: { titulo: "a" },
            sort: { _id: -1 },
            limit: 99
          }, config);

          setDbBooks(response.data.data_base.result || []);
        }
      } catch (error) {
        console.error("Erro ao buscar livros:", error);
      }
    };

    fetchData();
  }, [route.params?.authToken]);

  const handleImagePress = (item) => {
    navigation.navigate("FazerPedido", { item });
  };

  const renderGenresWithImages = () => {
    if (!dbBooks || dbBooks.length === 0) {
      return null;
    }

    return (
      <ScrollView style={styles.scrollView}>
        {dbBooks.map((livro) => (
          <View key={livro._id} style={styles.genreContainer}>
            <Text style={styles.titleGender}>{livro.categorias.join(", ")}</Text>
            <View style={styles.imageListContainer}>
              <FlatList
                data={[livro]} // Passando o livro como um array
                horizontal={true}
                renderItem={({ item }) => (
                  <TouchableOpacity onPress={() => handleImagePress(item)}>
                    <View style={styles.imageContainer}>
                      <Image style={styles.genreImage} source={{ uri: item.capa }} />
                      <Text style={styles.imageTitle}>{item.titulo}</Text>
                    </View>
                  </TouchableOpacity>
                )}
                keyExtractor={(item) => item._id.toString()}
              />
            </View>
          </View>
        ))}
      </ScrollView>
    );
  };

  return <>{renderGenresWithImages()}</>;
}

// Estilos para o componente Home.
const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    marginTop: -23,
  },
  container: {
    flex: 1,
    backgroundColor: "#52f6af",
  },
  navBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 35,
    paddingHorizontal: 20,
    width: "100%",
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 14,
    paddingHorizontal: 0,
    marginBottom: 0,
    width: 180,
  },
  input: {
    backgroundColor: "#fff",
    paddingTop: 2,
    paddingLeft: 10,
    paddingBottom: 2,
    width: "70%",
    borderRadius: 14,
    borderWidth: 0,
    position: "relative",
    left: 0,
  },
  icon: {
    paddingHorizontal: 25,
  },
  titleGender: {
    fontSize: 25,
    fontWeight: "600",
    paddingLeft: 10,
    marginTop: 20,
    backgroundColor: "#FFF",
  },
  genreImage: {
    width: 135,
    height: 150,
    marginLeft: 0, // Corrigido de marginHorizontal: 0 para marginLeft: 0
    marginTop: 5, // Adicione margem à esquerda
    marginRight: 12, // Adicione margem à direita
  },
  imageListContainer: {
    margin: 10,
    padding: 10,
    backgroundColor: "#FFF",
  },
  imageContainer: {
    marginRight: 12,
    marginTop: 5,
  },
});

export default Home;
