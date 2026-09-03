# 🍕 Papa's Pizzeria

Uma aplicação web desenvolvida em **React + Vite** para simular o funcionamento de uma pizzaria, oferecendo uma experiência completa para clientes e uma área administrativa para gerenciamento dos produtos.

O projeto foi desenvolvido com foco em **componentização, organização de código, reutilização de componentes e gerenciamento de estado**, utilizando recursos do próprio navegador para persistência dos dados.

---

## 📌 Sobre o Projeto

O **Papa's Pizzeria** é uma aplicação web que possui duas áreas principais:

### 👤 Área do Cliente

Permite que o cliente:

- 🏠 Acesse a página inicial;
- 🍕 Visualize o cardápio;
- 🔎 Consulte informações dos produtos;
- 🛒 Adicione produtos ao carrinho;
- 📦 Revise o pedido;
- 💳 Finalize o pedido;
- 📝 Realize cadastro.

### 🔐 Área Administrativa

Permite que o administrador:

- 📊 Acesse um dashboard;
- 🍕 Visualize os produtos cadastrados;
- ➕ Cadastre novos produtos;
- ✏️ Edite produtos existentes;
- 🗑️ Remova produtos;
- 🗂️ Gerencie categorias;
- ⚙️ Acesse configurações.

A aplicação foi construída **sem backend**, utilizando o **LocalStorage** do navegador para armazenar os dados necessários durante o funcionamento da aplicação.

---

## 🚀 Tecnologias

O projeto utiliza as seguintes tecnologias:

| Tecnologia | Utilização |
|---|---|
| ⚛️ **React** | Construção da interface e componentes |
| ⚡ **Vite** | Ambiente de desenvolvimento e build |
| 🎨 **CSS Modules** | Estilização dos componentes |
| 🧭 **React Router DOM** | Gerenciamento das rotas |
| 💾 **LocalStorage** | Persistência dos dados no navegador |
| 🎯 **Font Awesome** | Ícones da interface |
| 🧩 **Context API** | Compartilhamento de estados |

---

## 🏗️ Arquitetura

A aplicação utiliza uma organização baseada em **componentização** e conceitos do **Atomic Design**.

Os componentes são divididos em:

- **Atoms** → componentes pequenos e reutilizáveis;
- **Molecules** → combinação de componentes menores;
- **Organisms** → componentes maiores e mais complexos;
- **Pages** → páginas completas da aplicação.

Essa organização facilita a manutenção, reutilização e evolução do projeto.

---

## 📁 Estrutura do Projeto
```text
pizzaria-web/
│
├── src/
│   ├── assets/
│   │   ├── banner.jpeg
│   │   └── logo-papa'spizzeria.jpg
│   │
│   ├── components/
│   │   ├── atoms/
│   │   │   ├── CartItem/
│   │   │   ├── ClientProductItem/
│   │   │   ├── ItemNav/
│   │   │   ├── Logo/
│   │   │   └── ProductItem/
│   │   │
│   │   ├── molecules/
│   │   │   ├── AdminNav/
│   │   │   ├── CartList/
│   │   │   ├── ClientNav/
│   │   │   ├── InputForm/
│   │   │   └── ProductList/
│   │   │
│   │   └── organism/
│   │
│   ├── Contexts/
│   │
│   ├── pages/
│   │   ├── Admin/
│   │   │   ├── Categorias/
│   │   │   ├── Configuracoes/
│   │   │   ├── Dashboard/
│   │   │   ├── EditarProduto/
│   │   │   ├── NovoProduto/
│   │   │   └── Produtos/
│   │   │
│   │   ├── Client/
│   │   │   ├── Cadastro/
│   │   │   ├── Cardapio/
│   │   │   ├── Carrinho/
│   │   │   └── FinalizarPedido/
│   │   │
│   │   ├── Home/
│   │   │   ├── index.jsx
│   │   │   └── style.module.css
│   │   │
│   │   └── Login/
│   │
│   ├── routes/
│   │   ├── AppRoutes.jsx
│   │   └── PrivateRoutes.jsx
│   │
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

---

## 🧩 Organização das Pastas

### 📦 `components/`
Contém os componentes reutilizáveis da aplicação.

#### `atoms/`
Componentes menores e independentes:

```text
atoms/
├── CartItem/
├── ClientProductItem/
├── ItemNav/
├── Logo/
└── ProductItem/
```

Esses componentes são utilizados como base para construir componentes maiores.

#### `molecules/`

Componentes formados pela combinação de outros componentes:

```text
molecules/
├── AdminNav/
├── CartList/
├── ClientNav/
├── InputForm/
└── ProductList/
```

#### `organism/`

Reservado para componentes maiores que possuem uma estrutura mais complexa.

---

### 📄 `pages/`

Contém as páginas da aplicação.

A separação entre **Admin** e **Client** mantém as responsabilidades de cada área organizadas.

```text
pages/
├── Admin/
├── Client/
├── Home/
└── Login/
```

---

### 🔐 `routes/`

Responsável pelo gerenciamento da navegação da aplicação.

```text
routes/
├── AppRoutes.jsx
└── PrivateRoutes.jsx
```

#### `AppRoutes.jsx`

Define as rotas principais da aplicação.

#### `PrivateRoutes.jsx`

Responsável pelo controle das páginas que necessitam de acesso administrativo.

---

### 🧠 `Contexts/`

Contém os Contextos utilizados pela aplicação para compartilhar informações entre diferentes componentes sem a necessidade de passar propriedades manualmente por vários níveis da árvore de componentes.

---

### 🖼️ `assets/`

Armazena os recursos visuais utilizados na aplicação.

```text
assets/
├── banner.jpeg
└── logo-papa'spizzeria.jpg
```

---

## 🧭 Rotas da Aplicação

### 👤 Cliente

| Rota | Página |
|---|---|
| `/` | 🏠 Home |
| `/cardapio` | 🍕 Cardápio |
| `/produto/:id` | 🔎 Detalhes do produto |
| `/carrinho` | 🛒 Carrinho |
| `/finalizar-pedido` | 📦 Finalização do pedido |
| `/cadastro` | 📝 Cadastro |

### 🔐 Administrador

| Rota | Página |
|---|---|
| `/admin` | 📊 Dashboard |
| `/admin/produtos` | 🍕 Produtos |
| `/admin/produtos/novo` | ➕ Novo produto |
| `/admin/produtos/:id/editar` | ✏️ Editar produto |
| `/admin/categorias` | 🗂️ Categorias |
| `/admin/configuracoes` | ⚙️ Configurações |

---

## 💾 Armazenamento

Como o projeto não possui um backend ou banco de dados, os dados são armazenados utilizando o:

**LocalStorage**

Isso permite que informações como produtos e dados utilizados pela aplicação permaneçam salvos no navegador mesmo após atualizar ou fechar a página.

### Fluxo simplificado

```text
Usuário
   │
   ▼
Interface React
   │
   ▼
Componentes
   │
   ▼
Contextos / Estados
   │
   ▼
LocalStorage
```

---

## 🔄 Fluxo do Cliente

O funcionamento principal da área do cliente segue o seguinte fluxo:

```text
        🏠 Home
           │
           ▼
      🍕 Cardápio
           │
           ▼
    🔎 Produto
           │
           ▼
       🛒 Carrinho
           │
           ▼
   📦 Finalizar Pedido
```

---

## 🔐 Fluxo Administrativo

```text
          🔐 Login
             │
             ▼
        📊 Dashboard
             │
      ┌──────┼──────────┐
      ▼      ▼          ▼
   🍕 Produtos  🗂️ Categorias
      │
 ┌────┴─────┐
 ▼          ▼
➕ Novo    ✏️ Editar
Produto    Produto
```

---

## 🎯 Objetivos do Projeto

O projeto tem como principais objetivos:

- Praticar desenvolvimento de aplicações com **React**;
- Trabalhar com **componentes reutilizáveis**;
- Aplicar conceitos de **Atomic Design**;
- Trabalhar com **React Router**;
- Utilizar **Context API**;
- Praticar gerenciamento de estados;
- Trabalhar com **LocalStorage**;
- Criar interfaces responsivas;
- Organizar um projeto React de forma escalável;
- Simular uma aplicação real de gerenciamento de uma pizzaria.

---

## 📚 Conceitos Praticados

Durante o desenvolvimento foram utilizados conceitos como:

- Componentização;
- Props;
- State;
- Hooks;
- Context API;
- React Router;
- Rotas privadas;
- Renderização condicional;
- Formulários;
- Manipulação de arrays;
- CRUD de produtos;
- LocalStorage;
- CSS Modules;
- Responsividade;
- Atomic Design.

---

## ▶️ Como Executar o Projeto

### 1. Clone o repositório

```bash
git clone URL_DO_REPOSITORIO
```

### 2. Entre na pasta

```bash
cd pizzaria-web
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Execute o projeto

```bash
npm run dev
```

Após isso, o Vite disponibilizará a aplicação localmente.

---

## 🛠️ Status do Projeto

🚧 **Em desenvolvimento**

Novas funcionalidades, melhorias visuais e ajustes na experiência do usuário poderão ser adicionados durante o desenvolvimento.

---

## 👨‍💻 Projeto

Projeto desenvolvido para prática de desenvolvimento **Frontend com React**, aplicando conceitos de organização de projetos, componentização e criação de uma aplicação web funcional.