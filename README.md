# 🎬 AdrianFlix - Streaming Platform

Uma plataforma de streaming moderna inspirada no Netflix, desenvolvida com React e estilizada com um tema customizado que oferece uma experiência visual incrível.

## ✨ Características

- **Design Netflix-Inspired**: Interface moderna com cores e layouts inspirados no Netflix
- **Responsivo**: Totalmente adaptável para desktop, tablet e mobile
- **Animações Suaves**: Transições e efeitos visuais elegantes
- **Tema Escuro**: Interface otimizada para visualização confortável
- **PWA Ready**: Configurado como Progressive Web App
- **Acessibilidade**: Implementado com foco na acessibilidade

## 🎨 Design Features

### Cores Principais
- **Netflix Red**: `#e50914` - Cor principal da marca
- **Dark Background**: `#141414` - Fundo principal
- **Dark Gray**: `#181818` - Elementos secundários
- **Gold Accent**: `#e6a00a` - Destaques especiais

### Funcionalidades Visuais
- ✅ Header com efeito blur e transparência
- ✅ Cards de filmes com hover effects
- ✅ Botões com gradientes e animações
- ✅ Loading spinner customizado
- ✅ Scrollbar personalizada
- ✅ Efeitos de parallax e transformações 3D
- ✅ Animações de entrada (fade-in)

## 🚀 Tecnologias Utilizadas

- **React.js** - Framework principal
- **CSS3** - Estilização avançada com:
  - CSS Grid & Flexbox
  - CSS Variables
  - Animações e Transições
  - Media Queries
  - Pseudo-elementos
- **Font Awesome** - Ícones
- **Google Fonts** - Tipografia (Netflix Sans)

## 📱 Responsividade

O projeto foi desenvolvido com mobile-first approach:

- **Desktop**: Layout completo com todas as funcionalidades
- **Tablet**: Adaptado para telas médias
- **Mobile**: Interface otimizada para smartphones

### Breakpoints
```css
@media (max-width: 768px) { /* Tablets */ }
@media (max-width: 480px) { /* Smartphones */ }
```

## 🎯 Funcionalidades

- [x] Listagem de filmes com cards interativos
- [x] Página de detalhes do filme
- [x] Sistema de favoritos
- [x] Header responsivo com navegação
- [x] Loading states
- [x] Página 404 personalizada
- [x] Animações de hover e transição

## 📁 Estrutura do Projeto

```
AdrianFlix/
├── index.html              # Página principal
├── manifest.json           # Configuração PWA
├── netflix-theme.css       # Tema personalizado Netflix
├── _redirects.txt          # Configuração de deploy
├── static/
│   ├── css/
│   │   └── main.a4a7babc.css
│   └── js/
│       └── main.920e74f2.js
└── README.md              # Documentação
```

## 🎨 Customizações Implementadas

### 1. Sistema de Cores Netflix
```css
:root {
  --netflix-red: #e50914;
  --netflix-dark-red: #b20710;
  --netflix-black: #141414;
  --netflix-dark-gray: #181818;
  --gradient-primary: linear-gradient(135deg, #e50914 0%, #b20710 100%);
}
```

### 2. Animações Personalizadas
- **Fade In Up**: Para entrada de elementos
- **Hover Effects**: Transformações em cards
- **Loading Spinner**: Animação personalizada
- **Button Ripple**: Efeito de ondulação nos botões

### 3. Efeitos Visuais
- **Backdrop Blur**: Header com desfoque
- **Box Shadows**: Sombras elegantes
- **Gradients**: Gradientes em botões e backgrounds
- **Transforms**: Rotações e escalas

## 🛠️ Como Utilizar

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/adrianflix.git
   ```

2. **Abra o projeto**
   - Abra o arquivo `index.html` em um navegador
   - Ou use um servidor local para melhor experiência

3. **Deploy**
   - O projeto está pronto para deploy em Netlify, Vercel, etc.
   - O arquivo `_redirects.txt` já está configurado para SPAs

## 🎨 Personalização

### Alterando Cores
Edite as variáveis CSS no arquivo `netflix-theme.css`:

```css
:root {
  --netflix-red: #sua-cor-aqui;
  --netflix-black: #sua-cor-de-fundo;
  /* ... outras variáveis */
}
```

### Adicionando Novos Efeitos
O arquivo `netflix-theme.css` está organizado em seções:
- **Variáveis**: Cores e configurações
- **Reset & Global**: Estilos base
- **Components**: Componentes específicos
- **Responsive**: Media queries
- **Animations**: Animações e efeitos

## 📈 Performance

- **Otimizado** para carregamento rápido
- **CSS Minificado** em produção
- **Lazy Loading** de imagens
- **PWA** para cache eficiente

## 🔧 Melhorias Implementadas

### Visual
- [x] Tema Netflix completo
- [x] Tipografia Netflix Sans
- [x] Cores oficiais da marca
- [x] Gradientes e sombras
- [x] Animações suaves

### UX/UI
- [x] Hover effects interativos
- [x] Loading states
- [x] Feedback visual em botões
- [x] Navegação intuitiva
- [x] Responsividade completa

### Técnico
- [x] CSS Variables para manutenibilidade
- [x] BEM methodology nos estilos
- [x] Acessibilidade (focus states)
- [x] Performance otimizada
- [x] SEO friendly

## 📄 Licença

Este projeto é livre para uso pessoal e educacional.

## 👨‍💻 Autor

**AdrianFlix** - Desenvolvido com ❤️ e inspirado no design do Netflix

---

### 🌟 Curtiu o projeto? Dê uma estrela!

Se este projeto te ajudou ou você gostou do design, não esqueça de dar uma ⭐ no repositório!

---

*"O streaming nunca foi tão bonito!" - AdrianFlix*