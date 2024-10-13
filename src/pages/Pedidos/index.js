import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";

const Pedidos = ({ navigation }) => {

    const PedidosView = () => {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.positionImg} onPress={() => console.log("Teste Img")}>
                    <Image style={{width: 28, height: 28}} source={require("../../../assets/filtroPng.png")}/>
                </TouchableOpacity>
                <View style={styles.list}>
                    <Text style={styles.textFontSize}>Livro:</Text>
                    <Text style={styles.textFontSize}>Dt. Pedido:</Text>
                </View>
                <View style={styles.listItem}>
                    <View style={styles.box}>
                        <Text>O Senhor dos Aneis</Text>
                        <Text>01/05/2023</Text>
                        <Image style={styles.icon} source={require("../../../assets/aprovar1.jpg")}/>
                    </View>
                </View>
            </View>
        )
    }

    return <>{PedidosView()}</>
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        position: "relative",
    },
    positionImg: {
        position: "absolute",
        top: 50,
        right: 15,
    },
    list: {
        flexDirection: "row",
        gap: 130,
        marginTop: 35,
    },
    textFontSize: {
        fontSize: 17,
        fontWeight: "500",
    },
    listItem: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100%",
    },
    box: {
        borderWidth: 1,
        borderColor: "#000",
        borderRadius: 4,
        borderStyle: "solid",
        width: 340,
        height: "auto",
        backgroundColor: "#FFF",
        marginTop: 12,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
    },
    icon: {
        width: 24,
        height: 24,
    }
});

export default Pedidos;
