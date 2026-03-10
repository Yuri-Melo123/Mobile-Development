# Catálogo Interativo Mobile

Aplicativo mobile desenvolvido em **React Native com Expo** que simula um catálogo de produtos de uma loja online.
O aplicativo consome dados de uma **API REST pública** e apresenta os produtos organizados por categoria, permitindo visualizar detalhes de cada item.

Este projeto foi desenvolvido como parte da disciplina **Mobile Development**, com o objetivo de aplicar conceitos de consumo de APIs, navegação entre telas e organização de projetos mobile.

---

# Tecnologias Utilizadas

* **React Native**
* **Expo**
* **Axios**
* **Redux Toolkit**

---

# Funcionalidades

O aplicativo possui as seguintes funcionalidades:

### Tela de Login

* Simulação de login com validação de campos.
* Armazenamento temporário dos dados do usuário.

### Lista de Produtos

* Produtos organizados por categorias:

  * Masculino
  * Feminino
* Consumo de dados através da API REST.

### Detalhes do Produto

* Exibição de:

  * Imagem
  * Nome e descrição
  * Preço

### Logout

* Botão para sair da aplicação.
* Limpeza dos dados do usuário e retorno à tela de login.

---

# API Utilizada

Os dados dos produtos são consumidos da seguinte API pública:

https://dummyjson.com/products/category/{categoria}

Exemplo:

https://dummyjson.com/products/category/mens-shirts

Categorias utilizadas:

Masculino

* mens-shirts
* mens-shoes
* mens-watches

Feminino

* womens-bags
* womens-dresses
* womens-jewellery
* womens-shoes
* womens-watches

Documentação da API:

https://dummyjson.com/docs

---

# Como Executar o Projeto

### Clonar o repositório

```bash
git clone https://github.com/Yuri-Melo123/-Mobile-Development.git
```

---

### Entrar na pasta do projeto

```bash
cd Mobile-Development
```

---

### Instalar as dependências

```bash
npm install
```

---

### Executar o projeto

```bash
npx expo start
```

---

### Abrir o aplicativo

Você pode rodar o app utilizando:

* **Expo Go (Android / iOS)**
* **Emulador Android**
* **Simulador iOS**

---

# Objetivos de Aprendizado

Este projeto foi desenvolvido com o objetivo de praticar:

* Desenvolvimento mobile com React Native
* Consumo de APIs REST
* Navegação entre telas
* Organização profissional de projetos
* Gerenciamento de estado com Redux Toolkit

---

# Autor

Projeto desenvolvido por Yuri de Oliveira Melo
