# Blueprint do Produto — Salão Scheduler

## 1) Princípios do projeto

- **Simplicidade extrema:** o profissional precisa operar sem fricção.
- **Agenda como centro do sistema:** tudo gira em torno dos horários.
- **Remarcação rápida:** ação recorrente deve ser a mais fácil do produto.
- **Financeiro acoplado ao atendimento:** cada agendamento deve refletir no caixa.

## 2) Perfis de usuário

### Profissional (cabeleireiro)
- Visualiza agenda por dia/semana.
- Cria agendamentos para clientes cadastrados ou não.
- Aprova/recusa pedidos.
- Reagenda com sugestão automática de próximos horários.
- Marca pagamento (valor, método, status).

### Cliente
- Solicita novo horário.
- Visualiza próximos agendamentos.
- Solicita remarcação.
- Cancela atendimento.
- (Futuro) conversa por chat interno com o salão.

## 3) Módulos funcionais

1. **Agenda principal**
   - Calendário + lista do dia.
   - Status dos atendimentos (confirmado, pendente, cancelado, reagendamento).

2. **Solicitações de agendamento**
   - Entrada pelo cliente.
   - Triagem/aprovação do profissional.

3. **Remarcações**
   - Pedido pelo cliente ou profissional.
   - Histórico de alterações com timestamp e autor.

4. **Financeiro**
   - Valor previsto e valor pago por atendimento.
   - Formas de pagamento.
   - Resumo diário/semanal/mensal.

5. **Chat interno (fase posterior)**
   - Conversas ligadas ao agendamento.
   - Mensagens rápidas com templates.

## 4) Modelo de dados mínimo (MVP)

- `users` (id, role, name, phone, email)
- `clients` (id, name, phone, notes)
- `services` (id, name, duration_min, base_price)
- `appointments` (id, client_id nullable, guest_name nullable, service_id, start_at, end_at, status)
- `appointment_changes` (id, appointment_id, old_start_at, new_start_at, changed_by)
- `payments` (id, appointment_id, amount, method, status, paid_at)
- `messages` (id, appointment_id nullable, sender_id, receiver_id, body, created_at)

## 5) Arquitetura sugerida para backend

### MVP no Vercel (recomendado)
- Next.js + Server Actions/API routes
- PostgreSQL + Prisma
- Auth.js
- WebSocket/Realtime opcional na fase de chat

### Evolução para produção
- Separar backend (NestJS) somente se a regra de negócio crescer muito.
- Manter PostgreSQL como fonte principal.
- Adicionar filas para notificações/reagendamentos automáticos.

## 6) Critérios de sucesso do MVP

- Profissional consegue reagendar um cliente em até 3 cliques.
- Cliente consegue solicitar remarcação em menos de 1 minuto.
- Cada atendimento confirmado possui estado financeiro rastreável.
- Fluxo principal é compreensível para usuário com baixa familiaridade tecnológica.
