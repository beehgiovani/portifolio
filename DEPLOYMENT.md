# Publicação do portfólio

O frontend de produção é hospedado no Firebase Hosting e atende o domínio `brunodevs.com`.

## Pré-requisitos

- Node.js compatível com a versão declarada pelo projeto.
- Dependências instaladas com `npm ci` dentro de `frontend`.
- Firebase CLI autenticada em uma conta com acesso ao site `brunodevs`.

## Verificação obrigatória

Dentro de `frontend`:

```bash
npm run lint
npm test
npm run build
```

Antes de publicar, abra o preview local e valide:

- navegação em português e inglês;
- abertura dos seis projetos selecionados;
- links de demonstração e GitHub;
- currículos Full-stack, Android/Kotlin e Python/Dados/GIS;
- impressão de cada currículo;
- formulário de contato;
- layout em desktop e mobile.

## Deploy

```bash
cd frontend
firebase deploy --only hosting:brunodevs
```

O arquivo `frontend/firebase.json` aponta `dist` como diretório público e redireciona rotas para `index.html`.

## Pós-publicação

1. Abrir `https://brunodevs.com` sem cache.
2. Confirmar título, descrição e imagem Open Graph.
3. Repetir o smoke test dos links e currículos.
4. Conferir o cabeçalho `Last-Modified` e registrar o commit publicado.

O backend Spring Boot não faz parte do deploy do Firebase Hosting. Se a API de contato for publicada separadamente, documente o provedor, a URL e as variáveis de ambiente em uma atualização específica deste arquivo.
