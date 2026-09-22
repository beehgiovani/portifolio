# Frontend do brunodevs.com

Single-page application bilíngue construída com React 19, TypeScript e Vite.

## Comandos

```bash
npm ci
npm run dev
npm run lint
npm test
npm run build
npm run preview
```

## Conteúdo

- `src/locales/pt.ts` e `src/locales/en.ts`: textos e projetos apresentados.
- `src/data/resumes.ts`: currículos por objetivo profissional.
- `src/components/ProjectGrid.tsx`: seleção e ordem dos projetos em destaque.
- `src/components/ResumeManager.tsx`: visualização e impressão dos currículos.

O build não deve depender de arquivos ignorados pelo Git. Informações públicas precisam ser sustentadas pelo código, pela documentação do projeto ou por uma demonstração acessível.

## Publicação

O destino configurado é o Firebase Hosting `brunodevs`, com saída em `dist`. Consulte `../DEPLOYMENT.md` antes de publicar.
