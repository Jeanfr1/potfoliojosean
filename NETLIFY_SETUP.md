# Configuração do Netlify para o Portfolio Josean

Este documento contém instruções para configurar o deploy contínuo do projeto no Netlify.

## Passos para Deploy

### 1. Criar uma conta no Netlify

Se você ainda não tem uma conta, acesse [Netlify](https://www.netlify.com/) e crie uma.

### 2. Conectar ao GitHub

1. Faça login no Netlify
2. Clique em "New site from Git"
3. Selecione "GitHub" como provedor de Git
4. Autorize o Netlify a acessar seu GitHub
5. Selecione o repositório `potfoliojosean`

### 3. Configurar as opções de build

As configurações já estão definidas no arquivo `netlify.toml`, mas você pode verificar se estão corretas:

- **Build command:** `npm run build`
- **Publish directory:** `dist`

### 4. Configurações avançadas (opcional)

#### Variáveis de ambiente

Se necessário, você pode adicionar variáveis de ambiente em:
Site settings > Build & deploy > Environment > Environment variables

#### Domínio personalizado

Para configurar um domínio personalizado:
1. Vá para Site settings > Domain management
2. Clique em "Add custom domain"
3. Siga as instruções para configurar seu domínio

### 5. Deploy

Clique em "Deploy site" para iniciar o processo de build e deploy.

## Recursos adicionais

- O arquivo `netlify.toml` já contém configurações para:
  - Comandos de build
  - Diretório de publicação
  - Redirecionamentos para SPA
  - Headers de segurança e performance

- O arquivo `public/_redirects` garante que as rotas do React Router funcionem corretamente

## Verificação do deploy

Após o deploy, verifique se:

1. O site está carregando corretamente
2. A navegação entre páginas funciona
3. O jogo Snake está funcionando
4. As ilustrações SVG estão sendo exibidas
5. Os links externos (GitHub, LinkedIn) estão funcionando

## Solução de problemas comuns

### Problema com rotas

Se as rotas não estiverem funcionando corretamente, verifique:
- Se o arquivo `_redirects` está na pasta `public`
- Se o arquivo `netlify.toml` tem a configuração de redirecionamento correta

### Falha no build

Se o build falhar, verifique:
- Os logs de build no Netlify
- Se todas as dependências estão instaladas
- Se o comando de build está correto

### Problemas com CSS/JS

Se o CSS ou JS não estiverem carregando:
- Verifique a política de segurança de conteúdo no `netlify.toml`
- Pode ser necessário ajustar o CSP para permitir recursos externos
