# 🚀 Deploy no Netlify - AdrianFlix

## 📋 Configurações para o Netlify

### ✅ Respostas para os Campos do Netlify:

| Campo | O que colocar |
|-------|---------------|
| **Base directory** | `.` (ponto) ou deixe **vazio** |
| **Build command** | Deixe **vazio** |
| **Publish directory** | `.` (ponto) |
| **Functions directory** | Deixe **vazio** |

---

## 🎯 Por quê essas configurações?

### Base directory: `.` ou vazio
- Seu projeto está na raiz do repositório
- Não há subpastas para build
- Todos os arquivos estão no diretório principal

### Build command: vazio
- Projeto **100% estático** (HTML, CSS, JS puro)
- Não precisa de compilação (não usa React, Vue, etc.)
- Não tem dependências para instalar (npm install, etc.)

### Publish directory: `.`
- Os arquivos já estão prontos para publicação
- `index.html` está na raiz
- Não gera pasta `dist`, `build` ou `public`

### Functions directory: vazio
- Não usa Netlify Functions
- API é chamada diretamente do frontend (TMDB)

---

## 🌐 Método 1: Deploy via GitHub (Recomendado)

### Passo a Passo:

1. **Push para o GitHub**
```bash
cd "d:\Windows-User\Desktop\Projetos github\AdrianFlix"
git add .
git commit -m "Deploy AdrianFlix no Netlify"
git push origin main
```

2. **No Netlify:**
   - Acesse: https://app.netlify.com/
   - Clique em **"Add new site"**
   - Escolha **"Import an existing project"**
   - Selecione **GitHub**
   - Autorize o Netlify a acessar seus repositórios
   - Escolha o repositório **AdrianFlix**

3. **Configurações detectadas automaticamente:**
   - O arquivo `netlify.toml` já está configurado
   - Netlify vai detectar automaticamente

4. **Clique em "Deploy site"** 🚀

5. **Aguarde 1-2 minutos** ⏱️

6. **Seu site estará no ar!** 🎉
   - URL: `https://random-name-123.netlify.app`
   - Você pode mudar para: `https://adrianflix.netlify.app`

---

## 🎨 Método 2: Deploy Manual (Drag & Drop)

### Passo a Passo:

1. **Acesse:** https://app.netlify.com/drop

2. **Arraste toda a pasta** `AdrianFlix` para a área de upload

3. **Pronto!** Site no ar em segundos 🚀

**Vantagens:**
- ✅ Super rápido
- ✅ Não precisa de Git

**Desvantagens:**
- ❌ Sem atualizações automáticas
- ❌ Precisa fazer upload manual a cada mudança

---

## ⚙️ Arquivo netlify.toml (Já Criado)

O arquivo `netlify.toml` na raiz do projeto já contém:

```toml
[build]
  base = "."
  command = ""
  publish = "."

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/*.css"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/*.js"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

**Benefícios:**
- ✅ Cache otimizado (CSS e JS por 1 ano)
- ✅ Redirects automáticos
- ✅ Configuração versionada no Git

---

## 🔧 Configuração Manual (Se Não Detectar Automático)

Se o Netlify não detectar o `netlify.toml`, configure manualmente:

### No Netlify Dashboard:

**Site settings** → **Build & deploy** → **Build settings**

```
Base directory:        (deixe vazio)
Build command:         (deixe vazio)  
Publish directory:     .
```

---

## 🌐 Customizar Domínio

### Mudar para domínio personalizado Netlify:

1. **Site settings** → **Domain management**
2. **Options** → **Edit site name**
3. Digite: `adrianflix`
4. Salve
5. URL final: `https://adrianflix.netlify.app`

### Usar domínio próprio:

1. **Add custom domain**
2. Digite seu domínio (ex: `adrianflix.com`)
3. Siga as instruções de DNS
4. Netlify gera SSL automático (HTTPS)

---

## ✅ Checklist de Deploy

Antes de fazer deploy, verifique:

- [ ] Arquivo `netlify.toml` existe na raiz
- [ ] Arquivo `index.html` existe na raiz
- [ ] Arquivos CSS e JS estão no mesmo diretório
- [ ] Código está commitado no Git
- [ ] Repository está no GitHub

---

## 🐛 Troubleshooting

### Problema: "Page not found"
**Solução:** Verifique se `publish directory` está como `.` (ponto)

### Problema: "Build failed"
**Solução:** Deixe `build command` vazio (projeto não precisa de build)

### Problema: "CSS não carrega"
**Solução:** Verifique os caminhos no `index.html`:
```html
<link rel="stylesheet" href="modern-ui-clean.css">
<link rel="stylesheet" href="advanced-effects-clean.css">
<script src="modern-ui-clean.js"></script>
```

### Problema: API TMDB não funciona
**Solução:** Verifique se a chave da API está no código JavaScript

---

## 📊 Arquivos do Projeto

```
AdrianFlix/
├── .git/                         # Git (não vai pro deploy)
├── .gitignore                    # Ignora arquivos (vai pro deploy)
├── netlify.toml                  # Configuração Netlify ✅
├── index.html                    # Página principal ✅
├── modern-ui-clean.css          # Estilos ✅
├── modern-ui-clean.js           # JavaScript ✅
├── advanced-effects-clean.css   # Efeitos ✅
└── README.md                    # Documentação ✅
```

**Todos os arquivos acima serão enviados para o Netlify.**

---

## 🎉 Deploy Bem-Sucedido!

Após o deploy, você verá:

```
✅ Site is live
🌐 https://adrianflix.netlify.app
📊 Last published: Just now
🚀 Deploy time: 15s
```

### Links Úteis:
- **Site ao vivo:** https://adrianflix.netlify.app
- **Deploy logs:** Site dashboard → Deploys
- **Settings:** Site dashboard → Site settings

---

## 🔄 Atualizações Automáticas

Com o método Git/GitHub:

1. Faça mudanças no código local
2. Commit e push:
```bash
git add .
git commit -m "Atualização do layout"
git push origin main
```
3. **Netlify detecta automaticamente** e faz novo deploy
4. Site atualizado em ~1 minuto

---

## 💡 Dicas Extras

### 1. Build status badge
Adicione no README:
```markdown
[![Netlify Status](https://api.netlify.com/api/v1/badges/SEU-ID/deploy-status)](https://app.netlify.com/sites/adrianflix/deploys)
```

### 2. Deploy Previews
- Pull Requests geram preview automático
- URL: `https://deploy-preview-123--adrianflix.netlify.app`

### 3. Monitoramento
- **Analytics:** Site dashboard → Analytics
- **Forms:** Captura de formulários gratuito
- **Functions:** Adicione backend serverless

---

## 📞 Suporte

**Problemas com deploy?**
1. Verifique os logs: Deploys → último deploy → Deploy log
2. Netlify Docs: https://docs.netlify.com/
3. Netlify Community: https://answers.netlify.com/

---

<div align="center">

**🚀 Pronto para colocar o AdrianFlix no ar!**

Qualquer dúvida, consulte este guia ou os logs do Netlify.

</div>
