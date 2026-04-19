export type AppointmentStatus = 'Aprovado' | 'Pendente' | 'Cancelado' | 'Reagendamento solicitado';

export const services = [
  { id: 'haircut', name: 'Corte de Cabelo', durationMinutes: 45, price: 70 },
  { id: 'coloring', name: 'Coloração', durationMinutes: 120, price: 260 },
  { id: 'styling', name: 'Penteado', durationMinutes: 60, price: 120 },
  { id: 'treatment', name: 'Tratamento Capilar', durationMinutes: 50, price: 90 },
  { id: 'extensions', name: 'Extensões', durationMinutes: 180, price: 420 },
];

export const appointments = [
  {
    id: 'apt1',
    date: new Date(new Date().setDate(new Date().getDate() + 1)),
    time: '10:00',
    clientName: 'Marina Rocha',
    service: 'Corte de Cabelo',
    status: 'Aprovado' as AppointmentStatus,
    amountPaid: 70,
    paymentMethod: 'Pix',
  },
  {
    id: 'apt2',
    date: new Date(new Date().setDate(new Date().getDate() + 1)),
    time: '14:00',
    clientName: 'Rafael Lima',
    service: 'Coloração',
    status: 'Reagendamento solicitado' as AppointmentStatus,
    amountPaid: 100,
    paymentMethod: 'Cartão',
  },
  {
    id: 'apt3',
    date: new Date(new Date().setDate(new Date().getDate() + 2)),
    time: '11:30',
    clientName: 'Luana Alves',
    service: 'Tratamento Capilar',
    status: 'Aprovado' as AppointmentStatus,
    amountPaid: 90,
    paymentMethod: 'Dinheiro',
  },
  {
    id: 'apt4',
    date: new Date(new Date().setDate(new Date().getDate() + 4)),
    time: '09:30',
    clientName: 'Carlos Nascimento',
    service: 'Penteado',
    status: 'Pendente' as AppointmentStatus,
    amountPaid: 0,
    paymentMethod: 'Não pago',
  },
];

export const clientAppointments = [
  {
    id: 'client-1',
    service: 'Corte de Cabelo',
    professional: 'Bruno Cabeleireiro',
    date: new Date(new Date().setDate(new Date().getDate() + 1)),
    time: '10:00',
    status: 'Confirmado',
    canReschedule: true,
    canCancel: true,
  },
  {
    id: 'client-2',
    service: 'Coloração',
    professional: 'Bruno Cabeleireiro',
    date: new Date(new Date().setDate(new Date().getDate() + 9)),
    time: '13:00',
    status: 'Aguardando confirmação',
    canReschedule: false,
    canCancel: true,
  },
];

export const appointmentRequests = [
  {
    id: 'req1',
    clientName: 'Michael Brown',
    avatarUrl: 'https://picsum.photos/seed/101/100/100',
    dataAiHint: 'man portrait',
    service: 'Corte de Cabelo',
    preferredTime: 'Amanhã à tarde, por volta das 15h se possível.',
    additionalDetails:
      'Estou procurando um novo estilo completo, algo moderno e fácil de manter. Tenho cabelo ondulado de comprimento médio.',
  },
  {
    id: 'req2',
    clientName: 'Sarah Johnson',
    avatarUrl: 'https://picsum.photos/seed/102/100/100',
    dataAiHint: 'woman smiling',
    service: 'Coloração',
    preferredTime: 'Próxima sexta-feira de manhã.',
    additionalDetails:
      'Quero ficar loira e gostaria de discutir opções e preços antes.',
  },
];

export const rescheduleRequests = [
  {
    id: 'res-1',
    appointmentId: 'apt2',
    clientName: 'Rafael Lima',
    currentSlot: 'Segunda 14:00',
    suggestedSlot: 'Segunda 16:30',
    requestedBy: 'Cliente',
    reason: 'Conflito no trabalho',
  },
  {
    id: 'res-2',
    appointmentId: 'apt3',
    clientName: 'Luana Alves',
    currentSlot: 'Terça 11:30',
    suggestedSlot: 'Quarta 09:00',
    requestedBy: 'Profissional',
    reason: 'Ajuste de agenda do salão',
  },
];

export const financeSummary = {
  monthRevenue: 5840,
  monthExpenses: 1720,
  pendingPayments: 430,
  cashFlow: [
    { day: 'Seg', revenue: 390 },
    { day: 'Ter', revenue: 640 },
    { day: 'Qua', revenue: 580 },
    { day: 'Qui', revenue: 420 },
    { day: 'Sex', revenue: 760 },
  ],
};

export const conversationPreview = [
  {
    id: 'chat-1',
    name: 'Marina Rocha',
    lastMessage: 'Pode me encaixar às 10h mesmo?',
    when: 'há 5 min',
    unread: true,
  },
  {
    id: 'chat-2',
    name: 'Rafael Lima',
    lastMessage: 'Consegui remarcar para 16h30?',
    when: 'há 15 min',
    unread: true,
  },
  {
    id: 'chat-3',
    name: 'Luana Alves',
    lastMessage: 'Obrigada pela confirmação 💜',
    when: 'ontem',
    unread: false,
  },
];

export const availability = {
  monday: { enabled: true, start: '09:00', end: '17:00' },
  tuesday: { enabled: true, start: '09:00', end: '17:00' },
  wednesday: { enabled: true, start: '09:00', end: '17:00' },
  thursday: { enabled: true, start: '10:00', end: '19:00' },
  friday: { enabled: true, start: '10:00', end: '19:00' },
  saturday: { enabled: true, start: '09:00', end: '14:00' },
  sunday: { enabled: false, start: '10:00', end: '16:00' },
};
