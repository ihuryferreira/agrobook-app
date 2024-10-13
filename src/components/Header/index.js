// Importa o React, o componente Icon de @rneui/themed e os componentes TextInput e View de react-native.
import React from "react";
import { Icon } from "@rneui/themed";
import { TextInput, View, StyleSheet } from "react-native";

// Exporta a função Header que recebe a função openDrawer como parâmetro.
export default function Header({ openDrawer }) {
    // Renderiza o cabeçalho personalizado que contém um ícone de menu e uma barra de pesquisa.
    return (
        <View style={styles.container}>
            <View style={styles.navBar}>
                {/* Renderiza o ícone do menu que, ao ser pressionado, chama a função openDrawer. */}
                <Icon
                    name="menu"
                    type="material"
                    color="#000000"
                    onPress={openDrawer}
                />
                <View style={styles.inputContainer}>
                    {/* Renderiza o componente TextInput para a barra de pesquisa. */}
                    <TextInput
                        type="text"
                        placeholder=""
                        style={styles.input}
                    />
                    {/* Renderiza o ícone de pesquisa na barra de pesquisa. */}
                    <Icon
                        name="search"
                        size={25}
                        color="#000"
                        style={styles.icon}
                    />
                </View>
            </View>
        </View>
    );
}

// Define os estilos para o componente Header.
const styles = StyleSheet.create({
    container: {
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
        width: "64%",
        borderRadius: 14,
        borderWidth: 0,
    },
    icon: {
        paddingHorizontal: 35,
    },
});
