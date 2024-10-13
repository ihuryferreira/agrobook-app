import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image, Modal } from "react-native";
import { Button, Input, Text } from "@rneui/themed";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/native";
import AuthSingin from "./AuthSingin";

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleNavLogin = async () => {
    try {
      const { codigo, mensagem, cookiesString } = await AuthSingin(email, senha);

      setModalMessage(`Mensagem: ${mensagem}`);
      setModalVisible(true);
      setTimeout(() => {
        setModalVisible(false);
  
        if (codigo === "ok" && cookiesString) {
          navigation.navigate("Home", { authToken: cookiesString });
        }else{ 
          if(mensagem === "Você já está logado") {
            navigation.navigate("Home", { authToken: cookiesString });
          };
        };
      }, 3200);
    } catch (error) {
      console.error("Erro ao realizar o login:", error);
    }
  };
  

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../../../assets/LogoApk.png")}
      />
      <Input
        containerStyle={{ width: "85%", marginTop: 40 }}
        style={styles.input}
        placeholder="E-MAIL"
        placeholderStyle={styles.placeholder}
        placeholderTextColor="#000"
        value={email}
        onChangeText={(text) => setEmail(text)}
        autoCorrect={false}
      />
      <Input
        containerStyle={{ width: "85%", marginTop: 40 }}
        style={styles.input}
        placeholder="SENHA"
        placeholderStyle={styles.placeholder}
        placeholderTextColor="#000"
        secureTextEntry
        value={senha}
        onChangeText={(text) => setSenha(text)}
        autoCorrect={false}
      />
      <Button
        containerStyle={styles.buttonContainer}
        buttonStyle={styles.button}
        onPress={handleNavLogin}
      >
        Login
      </Button>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)} // Adicionado para suportar o botão de retorno no Android
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{modalMessage}</Text>
            <Button onPress={() => setModalVisible(false)}>Fechar</Button>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  logo: {
    width: 150,
    height: 150,
  },
  input: {
    color: "#000",
    borderTopColor: "transparent",
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderWidth: 1,
    borderBottomColor: "#8CD23C",
  },
  placeholder: {
    fontWeight: "bold",
  },
  buttonContainer: {
    width: 220,
    marginTop: 50,
    borderRadius: 14,
  },
  button: {
    backgroundColor: "#00A700",
  },
  modalText: {
    textAlign: "center",
    fontSize: 16,
  },
});

export default Login;
