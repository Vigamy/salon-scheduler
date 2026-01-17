export const services = [
  { id: 'haircut', name: 'Corte de Cabelo' },
  { id: 'coloring', name: 'Coloração' },
  { id: 'styling', name: 'Penteado' },
  { id: 'treatment', name: 'Tratamento Capilar' },
  { id: 'extensions', name: 'Extensões' },
];

export const appointments = [
  {
    id: 'apt1',
    date: new Date(new Date().setDate(new Date().getDate() + 1)),
    time: '10:00',
    clientName: 'Jane Doe',
    service: 'Corte de Cabelo',
    status: 'Aprovado',
  },
  {
    id: 'apt2',
    date: new Date(new Date().setDate(new Date().getDate() + 1)),
    time: '14:00',
    clientName: 'John Smith',
    service: 'Coloração',
    status: 'Aprovado',
  },
  {
    id: 'apt3',
    date: new Date(new Date().setDate(new Date().getDate() + 3)),
    time: '11:00',
    clientName: 'Emily White',
    service: 'Penteado',
    status: 'Aprovado',
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
      "Estou procurando um novo estilo completo, algo moderno e fácil de manter. Tenho cabelo ondulado de comprimento médio. Diga-me o que você acha que é melhor!",
  },
  {
    id: 'req2',
    clientName: 'Sarah Johnson',
    avatarUrl: 'https://picsum.photos/seed/102/100/100',
    dataAiHint: 'woman smiling',
    service: 'Coloração',
    preferredTime: 'Próxima sexta-feira de manhã.',
    additionalDetails:
      'Eu quero ficar loira. A cor atual do meu cabelo é castanho escuro. Sei que é uma grande mudança, então quero discutir opções e preços. Estou disponível para uma consulta primeiro, se necessário.',
  },
];

export const availability = {
  monday: { enabled: true, start: '09:00', end: '17:00' },
  tuesday: { enabled: true, start: '09:00', end: '17:00' },
  wednesday: { enabled: true, start: '09:00', end: '17:00' },
  thursday: { enabled: true, start: '10:00', end: '19:00' },
  friday: { enabled: true, start: '10:00', end: '19:00' },
  saturday: { enabled: false, start: '10:00', end: '16:00' },
  sunday: { enabled: false, start: '10:00', end: '16:00' },
};
