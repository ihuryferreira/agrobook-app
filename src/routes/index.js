// Importa todas as funcionalidades do React.
import * as React from "react";
// Descrição: O React Navigation é uma biblioteca de roteamento e navegação para aplicativos React Native que facilita a navegação entre diferentes telas e fluxos de um aplicativo móvel.
import { NavigationContainer } from "@react-navigation/native";
// Importa a função de criação de pilha de navegação do React Navigation.
import { createStackNavigator } from "@react-navigation/stack";

// Importa os componentes de páginas e barras de guias.
import Login from "../pages/Login";
import TabBar from "../components/TabBar";

// Cria uma instância de pilha de navegação.
const Stack = createStackNavigator();

// Definindo as rotas do aplicativo.
const Routes = () => {
    return (
        <NavigationContainer>
            {/* Define um navegador de pilha para empilhar as telas. */}
            <Stack.Navigator>
                {/* Define a tela de login como rota inicial. */}
                <Stack.Screen
                    initialRouteName="Login"
                    options={{ headerShown: false }}
                    name="Login"
                    component={Login}
                />
                {/* Define a tela Home com a barra de guias como outra rota. */}
                <Stack.Screen
                    name="Home"
                    component={TabBar}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

// Exporta o componente de rotas para uso em outros arquivos.
export default Routes;