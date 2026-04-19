# Agendador de Salão (Rascunho de Evolução)

Este repositório agora está organizado como **protótipo evolutivo** para construir, com calma, um sistema completo para salão/cabeleireiro.

## Objetivo do produto

Criar um sistema simples para duas personas:

1. **Profissional (cabeleireiro):**
   - Ver agenda do dia/semana (feature principal).
   - Agendar para clientes cadastrados e não cadastrados.
   - Reagendar com poucos cliques (uso diário).
   - Acompanhar recebimentos e pendências financeiras.

2. **Cliente:**
   - Solicitar agendamento.
   - Pedir remarcação.
   - Cancelar quando necessário.

Também está previsto um **chat interno** para reduzir dependência de WhatsApp.

## O que já foi ajustado nesta fase

- Tela de entrada com escolha de perfil (profissional/cliente).
- Dashboard do profissional com foco em:
  - agenda + status;
  - bloco de remarcações;
  - resumo financeiro;
  - prévia de chat interno.
- Nova tela inicial da visão do cliente com ações de solicitar horário, remarcar e cancelar.

> Tudo ainda em modo demo com dados mockados para validar fluxo de UX antes de backend definitivo.

## Sugestão de backend (recomendação prática)

Para velocidade no QA e simplicidade operacional:

### Opção recomendada (MVP rápido)
- **Next.js (App Router) + API Routes/Server Actions**
- **PostgreSQL (Neon/Supabase/Railway)**
- **Prisma ORM**
- **Auth.js (ou Clerk)**
- **Redis (Upstash) opcional** para filas/notificações

Vantagens:
- Deploy simples no Vercel.
- Stack única em TypeScript.
- Fácil escalar para produção sem reescrever tudo.

### Opção 2 (se quiser separar cedo)
- Frontend: Next.js
- Backend: NestJS (REST/GraphQL)
- Banco: PostgreSQL
- Fila: BullMQ/Redis

Vantagens:
- Domínio mais organizado para regras complexas (agenda + financeiro + chat).
- Melhor para times maiores.

## Roadmap sugerido (passo a passo)

### Fase 1 — UX e regras de agenda (atual)
- Fluxos principais navegáveis.
- Definição das regras de remarcação e cancelamento.
- Estrutura inicial de dados.

### Fase 2 — Persistência real + autenticação
- Tabelas reais (usuários, agendamentos, pagamentos, mensagens).
- Login por perfil (profissional/cliente).
- CRUD real de agendamentos.

### Fase 3 — Operação diária
- Remarcação em massa (drag/drop ou ações rápidas).
- Histórico de alterações de horário.
- Registro financeiro por atendimento.

### Fase 4 — Chat interno
- Conversa cliente-profissional por agendamento.
- Templates rápidos de mensagem.
- Notificações no sistema (e e-mail opcional).

### Fase 5 — Produção
- Observabilidade (logs, métricas, erros).
- Backup e rotinas administrativas.
- Segurança e conformidade LGPD.

## Executar localmente

```bash
npm install
npm run dev
```

Abra `http://localhost:3000/login`.

## Deploy QA na Vercel

1. Conectar repositório.
2. Build command padrão (`npm run build`).
3. Sem variáveis críticas por enquanto (modo mock).

Quando entrar na Fase 2, adicionar `DATABASE_URL`, `AUTH_SECRET` e chaves do provedor escolhido.

## Deploy automático QA (Vercel + GitHub Actions)

Foi adicionado o workflow `.github/workflows/vercel-qa.yml` para deploy de preview no Vercel.

### Como configurar

No repositório do GitHub, adicione estes secrets:

- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

Depois disso, faça push na branch `work` (ou execute manualmente via `workflow_dispatch`) para gerar deploy de QA.

> Observação: o workflow faz `npm run build` antes de publicar, para evitar subir build quebrado.
