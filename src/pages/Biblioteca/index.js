import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image } from "react-native"; // Adicionei a importação do componente Image

const Biblioteca = ({ route }) => {
    return (
        <View style={styles.container}>
            <View style={styles.boxFlex}>
                <View style={styles.box}>
                    <Image 
                        style={styles.livroImage}
                        source={{
                            uri: `https://i.pinimg.com/736x/09/e7/a2/09e7a2af3928682cfaff2cd8c7b589ea.jpg`,
                        }}
                    />
                </View>
                <View style={styles.box}>
                    <Image 
                        style={styles.livroImage}
                        source={{
                            uri: `https://i.pinimg.com/236x/25/7b/e9/257be9298ddd09eca3853f5bcf3b9e85.jpg`,
                        }}
                    />
                </View>
                <View style={styles.box}>
                    <Image 
                        style={styles.livroImage}
                        source={{
                            uri: `https://m.media-amazon.com/images/I/81arD48HpRL._AC_UF1000,1000_QL80_.jpg`,
                        }}
                    />
                </View>
                <View style={styles.box}>
                    <Image 
                        style={styles.livroImage}
                        source={{
                            uri: `https://s2.glbimg.com/8l77OGB1wiRP3kmh3xDKp3Ata24=/smart/e.glbimg.com/og/ed/f/original/2020/01/23/louis-vuitton-pre-fall_2020_2.jpg`,
                        }}
                    />
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
    },
    boxFlex: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: -22,
        marginLeft: -24,
        height: "100%",
    },
    box: {
        width: 147,
        height: 250,
        backgroundColor: "#000",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 9,
        marginTop: 5,
        marginLeft: 5,
    },
    livroImage: {
        width: "100%",
        height: "100%",
    },
});

export default Biblioteca;
