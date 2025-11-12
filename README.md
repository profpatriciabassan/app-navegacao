# 📱 App Navegação — React Native com Expo

Exemplo usado em aula da disciplina **Desenvolvimento Mobile**, ministrada pela **Prof. Patricia Bassan**.  
Este projeto demonstra como criar **navegação entre telas** com o **React Navigation**, utilizando o **Expo** e uma **estrutura organizada de pastas**.


## 🧭 Sobre o projeto

O app tem **duas telas principais**:

- **LoginScreen** → o usuário digita o nome e clica em "Entrar".  
- **PostsScreen** → exibe o nome digitado e permite voltar à tela anterior.

Este exemplo mostra:
- ✅ Como configurar a navegação com `@react-navigation/native` e `@react-navigation/stack`
- ✅ Como **passar dados** entre telas (`navigation.navigate`)
- ✅ Como **voltar manualmente** (`navigation.goBack`)
- ✅ Como **organizar o projeto** em pastas (`src/screens`, `src/styles`)

---

## 🗂️ Estrutura do projeto

app-navegacao/
├── App.js
└── src/
├── screens/
│ ├── LoginScreen.js
│ └── PostsScreen.js
└── styles/
└── estilos.js


---

## 🚀 Como rodar o projeto

### 1️⃣ Instalar as dependências
Abra o terminal na pasta do projeto e rode:
```bash
npm install

2️⃣ Executar no navegador (modo web)
npx expo start --web
O projeto vai abrir automaticamente no navegador (geralmente em http://localhost:8081).

🧩 Tecnologias usadas

React Native

Expo

React Navigation

👩‍🏫 Professora

Prof. Patricia Bassan
Disciplina: Desenvolvimento Mobile (React Native com Expo)

Este app serve como referência para o Trabalho Prático — CRUD com Navegação.
A estrutura e a navegação aqui serão reutilizadas e ampliadas no próximo projeto.