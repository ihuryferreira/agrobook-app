// Componente de roteamento para navegar entre diferentes páginas.

// Importa o módulo React para o arquivo.
import React from "react";

// Importa o componente de rotas do diretório "src" para gerenciar a navegação.
import Routes from "./src/routes";

// Exporta a função principal App.
export default function App() {
    // Retorna o componente de rotas, que gerencia a navegação entre diferentes páginas.
    return <Routes />;
}
