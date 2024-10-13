// Importa o React e o hook useState para lidar com o estado.
import React, { useState } from "react";
// Importa componentes específicos do React Native para construir a interface do usuário.
import {
    View,
    StyleSheet,
    ScrollView,
    Text,
    Image,
    TouchableOpacity,
    Button,
    Modal,
} from "react-native";

// O componente FazerPedido exibe os detalhes de um filme específico.
const FazerPedido = ({ route, navigation }) => {
    // Lógica para recuperar o objeto item dos parâmetros de rota.
    const item = route?.params?.item;

    const [modalVisible, setModalVisible] = useState(false);

    const [confirmationModalVisible, setConfirmationModalVisible] =
        useState(false);

    const [listaPedidos, setListaPedidos] = useState([]);

    // Lógica de tratamento para quando o objeto item é undefined ou não possui a propriedade poster_path.
    if (!item || !item.capa) {
        return <Text>Não foi possível carregar os detalhes do livro.</Text>;
    }

    const adicionarPedido = () => {
        setListaPedidos([...listaPedidos, item]);
    };

    // Lógica para manipular o evento de reserva do filme.
    const handleReservar = () => {
        // console.log("Filme reservado: ", item);
        setModalVisible(true);
    };

    const handleConfirmarPedido = () => {
        // console.log("Pedido confirmado para o filme: ", item);
        setModalVisible(false);
        setConfirmationModalVisible(true);
    };

    const handleCancelarPedido = () => {
        setModalVisible(false);
    };

    const handleOk = () => {
        setConfirmationModalVisible(false);
        
        // Adicione a seguinte linha para navegar para a página Biblioteca e passar os dados do pedido.
        navigation.navigate('Biblioteca', { livroPedido: item });
    };

    // Componente interno para exibir os detalhes do filme.
    const ViewItem = () => {
        return (
            <ScrollView style={{ flex: 1, paddingHorizontal: 10 }}>
                <View style={styles.container}>
                    <View style={styles.imageAndDetailsContainer}>
                        <Image
                            style={styles.filmImage}
                            source={{
                                uri: item.capa,
                            }}
                        />
                        <View style={styles.detailsContainer}>
                            <Text style={styles.detailText}>
                                Número de Páginas: {item.paginas}
                            </Text>
                            <Text style={styles.detailText}>
                                Autor: {item.autor}
                            </Text>
                            <Text style={styles.detailText}>
                                Lançamento: {item.data_lancamento}
                            </Text>
                            <Text style={styles.detailText}>
                                Idioma: {item.idioma}
                            </Text>
                        </View>
                    </View>
                    <Text style={styles.filmTitle}>{item.titulo}</Text>
                    <Text style={styles.filmOverview}>{item.sinopse}</Text>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={handleReservar}
                    >
                        <Text style={styles.buttonText}>Fazer Pedido</Text>
                    </TouchableOpacity>
                    {/* Modal */}
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            setModalVisible(!modalVisible);
                        }}
                    >
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Image
                                    style={{ marginTop: 22, width: 48 }}
                                    source={require("../../../assets/ifoModal.png")}
                                />
                                <Text style={styles.modalText}>
                                    Deseja criar um pedido para este livro?
                                </Text>
                                <View style={styles.modalButtons}>
                                    <Button
                                        onPress={handleConfirmarPedido}
                                        title="Sim"
                                        color="#23B153"
                                    />
                                    <Button
                                        onPress={handleCancelarPedido}
                                        title="Cancelar"
                                        color="#FF0000"
                                    />
                                </View>
                            </View>
                        </View>
                    </Modal>
                    {/* Modal 2 */}
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={confirmationModalVisible}
                        onRequestClose={() => {
                            setConfirmationModalVisible(
                                !confirmationModalVisible
                            );
                        }}
                    >
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Image
                                    style={styles.successImage}
                                    source={require("../../../assets/sucesso.png")}
                                />
                                <Text style={styles.modalText2}>
                                    Pedido Criado com Sucesso
                                </Text>
                                <TouchableOpacity
                                    style={styles.okButton}
                                    onPress={handleOk}
                                >
                                    <Text style={styles.okButtonText}>OK</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>
                </View>
            </ScrollView>
        );
    };

    return <ViewItem />;
};

// Estilos para o componente Pedido.
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 30,
    },
    imageAndDetailsContainer: {
        marginVertical: 0,
        flexDirection: "row",
        marginBottom: 5,
    },
    filmImage: {
        marginTop: 30,
        width: 150,
        height: 200,
        marginRight: 8,
    },
    detailsContainer: {
        flex: 1,
        justifyContent: "center",
    },
    detailText: {
        fontSize: 15,
        marginBottom: 10,
    },
    filmTitle: {
        marginVertical: 15,
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 22,
    },
    filmOverview: {
        fontSize: 17,
        textAlign: "left",
        marginBottom: -55,
    },
    button: {
        backgroundColor: "#23B153",
        padding: 10,
        borderRadius: 5,
        marginTop: 90,
        width: 220,
        marginLeft: "auto",
        marginRight: "auto",
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        textAlign: "center",
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalView: {
        margin: 50,
        backgroundColor: "#FFF",
        borderRadius: 20,
        width: 300,
        height: 200,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 14,
        elevation: 5,
    },
    modalText: {
        paddingTop: 35,
        marginBottom: 15,
        textAlign: "center",
    },
    successImage: {
        width: 60,
        height: 60,
        margin: 12,
    },
    okButton: {
        backgroundColor: "#325EA1",
        padding: 10,
        borderRadius: 5,
        marginTop: 15,
        width: 100,
        alignSelf: "center",
    },
    okButtonText: {
        color: "#fff",
        fontSize: 16,
        textAlign: "center",
    },
    modalText2: {
        marginBottom: 30,
        textAlign: "center",
    },
    modalButtons: {
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "space-around",
        width: "90%",
    },
});

// Exporta o componente Pedido para uso em outros arquivos.
export default FazerPedido;
