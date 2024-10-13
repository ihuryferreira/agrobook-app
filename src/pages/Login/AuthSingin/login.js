import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthSingin = async (email, senha) => {

    try {
        const response = await axios.post(
            'http://52.67.20.226:57601/auth/singin',
            {
                email: email,
                senha: senha,
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );

        const { codigo, mensagem, hash } = response.data;
        const cookies = response.headers['set-cookie'];

        if (codigo === 'ok') {
            // Armazena os cookies como uma string
            const cookiesString = cookies.join('; ');
            await AsyncStorage.setItem('authCookies', cookiesString);

            return { codigo, mensagem, hash, cookiesString };
        } else {
            console.error('Erro durante o login:', mensagem);
            return { codigo, mensagem };
        }
    } catch (error) {
        console.error('Ocorreu um erro inesperado:', error);

        // Obtém a mensagem de erro do objeto de erro, se disponível
        const mensagem = error.response?.data?.mensagem || 'Erro inesperado durante o login';

        return { codigo: 'erro', mensagem };
    }
};

export default AuthSingin;
