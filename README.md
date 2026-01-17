# Agendador de Salão

Esta é uma aplicação Next.js para gerenciar agendamentos de salão. Ela permite que estilistas gerenciem sua disponibilidade, lidem com solicitações de agendamento e visualizem sua agenda.

## Como Usar a Aplicação

A aplicação foi projetada da perspectiva de um estilista ou proprietário de salão. Aqui está um passo a passo das principais funcionalidades:

### 1. Autenticação
- **Login**: A página de login é atualmente um espaço reservado para fins de demonstração. Você não precisa inserir um e-mail ou senha. Basta clicar no botão "Ver Painel" para acessar a aplicação.

### 2. Painel
- **Visão Geral**: Após o login, você chegará ao [painel](/dashboard) principal.
- **Calendário**: Mostra seus agendamentos. Os dias com agendamentos são destacados. Clique em uma data para ver os agendamentos daquele dia.
- **Estatísticas Rápidas**: Veja um resumo dos agendamentos de hoje, agendamentos futuros para a semana e o número de solicitações pendentes.
- **Novo Agendamento**: Você pode criar um novo agendamento diretamente do painel clicando no botão "Novo Agendamento".

### 3. Gerenciar Disponibilidade
- Navegue para a página de [Disponibilidade](/dashboard/availability) na barra lateral.
- Aqui, você pode definir seu horário de trabalho para cada dia da semana.
- Use os interruptores para ativar ou desativar um dia e defina os horários de início e fim para seus horários disponíveis.
- Clique em "Salvar Alterações" para atualizar sua agenda.

### 4. Lidar com Solicitações de Agendamento
- Vá para a página de [Solicitações](/dashboard/requests) para ver todas as solicitações de agendamento pendentes de clientes.
- Cada cartão de solicitação mostra o nome do cliente, o serviço solicitado, o horário preferido e quaisquer detalhes adicionais que eles forneceram.
- **Resumo por IA**: Você pode clicar em "✨ Gerar Resumo" para obter um resumo conciso, gerado por IA, da solicitação do cliente, o que pode ajudá-lo a tomar uma decisão mais rápida.
- **Aprovar/Recusar**: Use os botões "Aprovar" e "Recusar" para gerenciar a solicitação.

### 5. Criar uma Nova Solicitação de Agendamento
- Você pode criar um agendamento manualmente navegando para a página [Nova Solicitação](/dashboard/new-request).
- Preencha o formulário com o serviço, data e hora preferidas e quaisquer outros detalhes.
- Clique em "Enviar Solicitação" para adicioná-lo ao sistema.

### 6. Gerenciar Seu Perfil
- A página de [Perfil](/dashboard/profile) permite que você visualize e atualize suas informações pessoais, como seu nome e foto de perfil.
- Você também pode sair desta página.
