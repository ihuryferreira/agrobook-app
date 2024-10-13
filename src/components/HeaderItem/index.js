// Importa o componente Icon de @rneui/themed e os componentes View, StyleSheet e Image de react-native.
import { Icon } from "@rneui/themed";
import { View, StyleSheet, Image } from "react-native";

// Exporta a função HeaderItem que recebe a função openDrawer como parâmetro.
export default function HeaderItem({ openDrawer }) {
    // Renderiza o cabeçalho personalizado que contém um ícone de menu e um logotipo.
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
                <View style={styles.box}>
                    {/* Renderiza o logotipo a partir de um arquivo de origem específico. */}
                    <Image
                        style={styles.logo}
                        source={require("../../../assets/small-logo.png")}
                    />
                </View>
            </View>
        </View>
    );
}

// Define os estilos para o componente HeaderItem.
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#52f6af",
    },
    navBar: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 35,
        paddingHorizontal: 25,
        width: "100%",
        marginBottom: 5,
    },
    box: {
        marginRight: -8,
        marginBottom: 5,
    },
    logo: {
        width: 127,
        height: 22,
    },
    icon: {
        paddingHorizontal: 35,
    },
});
