# 🎬 AdrianFlix# 🎬 AdrianFlix - Streaming Platform



> Plataforma moderna de streaming de filmes com design inspirado na NetflixUma plataforma de streaming moderna inspirada no Netflix, desenvolvida com React e estilizada com um tema customizado que oferece uma experiência visual incrível.



![Status](https://img.shields.io/badge/status-active-success.svg)## ✨ Características

![Version](https://img.shields.io/badge/version-2.0-blue.svg)

![License](https://img.shields.io/badge/license-MIT-blue.svg)- **Design Netflix-Inspired**: Interface moderna com cores e layouts inspirados no Netflix

- **Responsivo**: Totalmente adaptável para desktop, tablet e mobile

## 📋 Sobre- **Animações Suaves**: Transições e efeitos visuais elegantes

- **Tema Escuro**: Interface otimizada para visualização confortável

**AdrianFlix** é uma aplicação web moderna que simula uma plataforma de streaming de filmes, utilizando a API do The Movie Database (TMDB) para exibir conteúdo real. O projeto apresenta um design elegante e responsivo, com animações suaves e efeitos visuais avançados.- **PWA Ready**: Configurado como Progressive Web App

- **Acessibilidade**: Implementado com foco na acessibilidade

## ✨ Características

## 🎨 Design Features

### 🎯 Funcionalidades Principais

- **Hero Banner** com rotação automática de 5 filmes em destaque### Cores Principais

- **8 Categorias** de filmes: Em Alta, Populares, Mais Votados, Em Breve, Ação, Comédia, Ficção Científica e Terror- **Netflix Red**: `#e50914` - Cor principal da marca

- **120+ Filmes** carregados dinamicamente da API TMDB- **Dark Background**: `#141414` - Fundo principal

- **Carrosséis Horizontais** navegáveis com suporte a mouse- **Dark Gray**: `#181818` - Elementos secundários

- **Design Responsivo** para desktop, tablet e mobile- **Gold Accent**: `#e6a00a` - Destaques especiais



### 🎨 Interface e Efeitos### Funcionalidades Visuais

- **Efeitos 3D** nos cards de filmes ao passar o mouse- ✅ Header com efeito blur e transparência

- **Animações Parallax** na hero banner- ✅ Cards de filmes com hover effects

- **Efeitos de Glow e Neon** em elementos interativos- ✅ Botões com gradientes e animações

- **Glass Morphism** no header ao fazer scroll- ✅ Loading spinner customizado

- **Transições Suaves** em toda a interface- ✅ Scrollbar personalizada

- **Loading Screen** animado- ✅ Efeitos de parallax e transformações 3D

- ✅ Animações de entrada (fade-in)

### 🛠️ Tecnologias

- **HTML5** - Estrutura semântica## 🚀 Tecnologias Utilizadas

- **CSS3** - Estilização moderna com variáveis CSS e animações

- **JavaScript (Vanilla)** - Lógica e integração com API- **React.js** - Framework principal

- **TMDB API** - Dados reais de filmes- **CSS3** - Estilização avançada com:

  - CSS Grid & Flexbox

## 🚀 Como Usar  - CSS Variables

  - Animações e Transições

### Pré-requisitos  - Media Queries

- Navegador web moderno (Chrome, Firefox, Safari, Edge)  - Pseudo-elementos

- Python 3.x instalado (para servidor local)- **Font Awesome** - Ícones

- **Google Fonts** - Tipografia (Netflix Sans)

### Instalação e Execução

## 📱 Responsividade

1. **Clone o repositório**

```bashO projeto foi desenvolvido com mobile-first approach:

git clone https://github.com/AdrianResende/AdrianFlix.git

cd AdrianFlix- **Desktop**: Layout completo com todas as funcionalidades

```- **Tablet**: Adaptado para telas médias

- **Mobile**: Interface otimizada para smartphones

2. **Inicie um servidor local**

```bash### Breakpoints

python -m http.server 8000```css

```@media (max-width: 768px) { /* Tablets */ }

@media (max-width: 480px) { /* Smartphones */ }

3. **Acesse no navegador**```

```

http://localhost:8000## 🎯 Funcionalidades

```

- [x] Listagem de filmes com cards interativos

## 📁 Estrutura do Projeto- [x] Página de detalhes do filme

- [x] Sistema de favoritos

```- [x] Header responsivo com navegação

AdrianFlix/- [x] Loading states

├── index.html                    # Página principal- [x] Página 404 personalizada

├── modern-ui-clean.css          # Estilos principais otimizados- [x] Animações de hover e transição

├── modern-ui-clean.js           # JavaScript principal otimizado

├── advanced-effects-clean.css   # Efeitos visuais avançados## 📁 Estrutura do Projeto

└── README.md                    # Documentação

``````

AdrianFlix/

## 🎯 API do TMDB├── index.html              # Página principal

├── manifest.json           # Configuração PWA

O projeto utiliza a API do The Movie Database (TMDB) para obter informações sobre filmes.├── netflix-theme.css       # Tema personalizado Netflix

├── _redirects.txt          # Configuração de deploy

### Endpoints Utilizados:├── static/

- `/trending/movie/week` - Filmes em alta│   ├── css/

- `/movie/popular` - Filmes populares│   │   └── main.a4a7babc.css

- `/movie/top_rated` - Filmes mais votados│   └── js/

- `/movie/upcoming` - Filmes em breve│       └── main.920e74f2.js

- `/discover/movie?with_genres={id}` - Filmes por gênero└── README.md              # Documentação

```

### Chave de API:

A chave de API está integrada no código. Para uso em produção, recomenda-se usar variáveis de ambiente.## 🎨 Customizações Implementadas



## 🎨 Categorias de Filmes### 1. Sistema de Cores Netflix

```css

| Categoria | Descrição | Gênero ID |:root {

|-----------|-----------|-----------|  --netflix-red: #e50914;

| 🔥 Em Alta | Filmes mais populares da semana | - |  --netflix-dark-red: #b20710;

| ⭐ Populares | Filmes mais assistidos | - |  --netflix-black: #141414;

| 🏆 Mais Votados | Filmes com melhor avaliação | - |  --netflix-dark-gray: #181818;

| 🎬 Em Breve | Próximos lançamentos | - |  --gradient-primary: linear-gradient(135deg, #e50914 0%, #b20710 100%);

| 💥 Ação | Filmes de ação | 28 |}

| 😂 Comédia | Filmes de comédia | 35 |```

| 🚀 Ficção Científica | Filmes de ficção científica | 878 |

| 😱 Terror | Filmes de terror | 27 |### 2. Animações Personalizadas

- **Fade In Up**: Para entrada de elementos

## 💻 Funcionalidades Implementadas- **Hover Effects**: Transformações em cards

- **Loading Spinner**: Animação personalizada

### ✅ Concluído- **Button Ripple**: Efeito de ondulação nos botões

- [x] Integração com TMDB API

- [x] Hero banner com rotação automática### 3. Efeitos Visuais

- [x] 8 categorias de filmes- **Backdrop Blur**: Header com desfoque

- [x] Carrosséis navegáveis- **Box Shadows**: Sombras elegantes

- [x] Design responsivo- **Gradients**: Gradientes em botões e backgrounds

- [x] Efeitos 3D e animações- **Transforms**: Rotações e escalas

- [x] Loading screen

- [x] Header dinâmico com scroll## 🛠️ Como Utilizar

- [x] Sistema de imagens com fallback

- [x] Badges de qualidade e rating1. **Clone o repositório**

   ```bash

### 🔄 Planejado   git clone https://github.com/seu-usuario/adrianflix.git

- [ ] Modal com detalhes do filme   ```

- [ ] Player de vídeo integrado

- [ ] Sistema de busca2. **Abra o projeto**

- [ ] Sistema de favoritos   - Abra o arquivo `index.html` em um navegador

- [ ] Autenticação de usuário   - Ou use um servidor local para melhor experiência

- [ ] Perfis de usuário

3. **Deploy**

## 🎨 Design   - O projeto está pronto para deploy em Netlify, Vercel, etc.

   - O arquivo `_redirects.txt` já está configurado para SPAs

### Paleta de Cores

- **Netflix Red**: `#e50914`## 🎨 Personalização

- **Netflix Black**: `#141414`

- **Netflix Dark**: `#0a0a0a`### Alterando Cores

- **Netflix Gray**: `#2f2f2f`Edite as variáveis CSS no arquivo `netflix-theme.css`:

- **Text Primary**: `#ffffff`

- **Text Secondary**: `#d2d2d2````css

:root {

### Tipografia  --netflix-red: #sua-cor-aqui;

- **Fonte Principal**: Netflix Sans, Helvetica Neue, Helvetica, Arial, sans-serif  --netflix-black: #sua-cor-de-fundo;

- **Tamanhos**: Responsivos com media queries  /* ... outras variáveis */

}

## 📱 Responsividade```



O projeto é totalmente responsivo com breakpoints para:### Adicionando Novos Efeitos

- **Desktop**: > 1200pxO arquivo `netflix-theme.css` está organizado em seções:

- **Tablet**: 768px - 1200px- **Variáveis**: Cores e configurações

- **Mobile**: < 768px- **Reset & Global**: Estilos base

- **Components**: Componentes específicos

## ⚡ Performance- **Responsive**: Media queries

- **Animations**: Animações e efeitos

### Otimizações Implementadas:

- **Lazy Loading** de imagens## 📈 Performance

- **CSS otimizado** com 26% menos código

- **JavaScript limpo** sem código morto- **Otimizado** para carregamento rápido

- **Carregamento assíncrono** de dados da API- **CSS Minificado** em produção

- **Transições com GPU** usando `transform` e `opacity`- **Lazy Loading** de imagens

- **PWA** para cache eficiente

### Métricas:

- **Tamanho Total**: ~32 KB (CSS + JS)## 🔧 Melhorias Implementadas

- **Tempo de Carregamento**: < 2s

- **Filmes Carregados**: 120+ em ~3s### Visual

- [x] Tema Netflix completo

## 🤝 Contribuindo- [x] Tipografia Netflix Sans

- [x] Cores oficiais da marca

Contribuições são bem-vindas! Para contribuir:- [x] Gradientes e sombras

- [x] Animações suaves

1. Fork o projeto

2. Crie uma branch para sua feature (`git checkout -b feature/NovaFeature`)### UX/UI

3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)- [x] Hover effects interativos

4. Push para a branch (`git push origin feature/NovaFeature`)- [x] Loading states

5. Abra um Pull Request- [x] Feedback visual em botões

- [x] Navegação intuitiva

## 📄 Licença- [x] Responsividade completa



Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.### Técnico

- [x] CSS Variables para manutenibilidade

## 👨‍💻 Autor- [x] BEM methodology nos estilos

- [x] Acessibilidade (focus states)

**Adrian Resende**- [x] Performance otimizada

- [x] SEO friendly

- GitHub: [@AdrianResende](https://github.com/AdrianResende)

- Projeto: [AdrianFlix](https://github.com/AdrianResende/AdrianFlix)## 📄 Licença



## 🙏 AgradecimentosEste projeto é livre para uso pessoal e educacional.



- [The Movie Database (TMDB)](https://www.themoviedb.org/) pela API gratuita## 👨‍💻 Autor

- Netflix pelo design inspirador

- Comunidade open source**AdrianFlix** - Desenvolvido com ❤️ e inspirado no design do Netflix



## 📞 Suporte---



Se você tiver alguma dúvida ou problema, por favor:### 🌟 Curtiu o projeto? Dê uma estrela!

1. Verifique se já existe uma [issue](https://github.com/AdrianResende/AdrianFlix/issues) aberta

2. Crie uma nova issue se necessárioSe este projeto te ajudou ou você gostou do design, não esqueça de dar uma ⭐ no repositório!

3. Entre em contato através do GitHub

---

---

*"O streaming nunca foi tão bonito!" - AdrianFlix*
<div align="center">

**⭐ Se você gostou do projeto, não esqueça de dar uma estrela! ⭐**

Feito com ❤️ por Adrian Resende

</div>
