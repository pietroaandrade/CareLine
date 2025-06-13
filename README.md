# CareLine - Sistema de Gestão de Saúde

CareLine é um sistema moderno de gestão de saúde construído com React, apresentando uma interface limpa e intuitiva para gerenciar filas de pacientes, registros médicos e serviços de saúde.

## Funcionalidades

- Gestão de Fila de Pacientes
- Sistema de Registros Médicos
- Gestão de Serviços
- Formulário de Contato
- Design Responsivo
- Autenticação de Usuários

<h1 align="left">Tecnologias utilizadas</h1>

###

<div align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="40" alt="react logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="40" alt="javascript logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" height="40" alt="sass logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" height="40" alt="bootstrap logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg" height="40" alt="tailwindcss logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="40" alt="nodejs logo"  />
</div>

###

### Estilização
- **SASS/SCSS** é utilizado nos seguintes componentes:
  - `Header.scss` - Estilização da navegação principal
  - `Footer.scss` - Estilização do rodapé
  - `Login.css` - Estilização da página de autenticação
  - `Contact.css` - Estilização do formulário de contato
  - `Servicos.css` - Estilização da página de serviços
  - `Sobre.css` - Estilização da página sobre
  - `Landing.css` - Estilização da página inicial

- **Bootstrap 5** está implementado em:
  - `Login.jsx` - Campos de formulário e botões
  - `Contact.jsx` - Layout do formulário e validação
  - Componentes de formulário e sistema de grid responsivo

### APIs Externas
- **DiceBear API** - Utilizada para gerar imagens de avatar
  - Implementação: `https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}`
  - Utilizada no sistema de gestão de pacientes para representação visual

## Credenciais de Acesso

Para acessar o protótipo, utilize as seguintes credenciais:
- **Email**: admin
- **Senha**: admin123

## Como acessar

1. Clone o repositório:
```bash
git clone [url-do-repositorio]
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

4. Abra [http://localhost:5173](http://localhost:5173) no seu navegador

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── Dashboard/
│   ├── Navbar/
│   ├── Login.jsx
│   ├── Contact.jsx
│   ├── Header.jsx
│   ├── Footer.jsx
│   └── ...
├── styles/
│   └── variables.scss
└── ...
```

## Integrantes

| Nome                            | RM       |
|---------------------------------|----------|
| Pietro Brandalide De Andrade    | RM560142 |
| Ícaro Henrique de Souza Calixto | RM560278 |
| Caio Costa Beraldo              | RM560775 |
| Victor Kenzo Mikado             | RM560057 |

