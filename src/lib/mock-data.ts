export const services = [
  { id: 'haircut', name: 'Haircut' },
  { id: 'coloring', name: 'Coloring' },
  { id: 'styling', name: 'Styling' },
  { id: 'treatment', name: 'Hair Treatment' },
  { id: 'extensions', name: 'Extensions' },
];

export const appointments = [
  {
    id: 'apt1',
    date: new Date(new Date().setDate(new Date().getDate() + 1)),
    time: '10:00 AM',
    clientName: 'Jane Doe',
    service: 'Haircut',
    status: 'Approved',
  },
  {
    id: 'apt2',
    date: new Date(new Date().setDate(new Date().getDate() + 1)),
    time: '02:00 PM',
    clientName: 'John Smith',
    service: 'Coloring',
    status: 'Approved',
  },
  {
    id: 'apt3',
    date: new Date(new Date().setDate(new Date().getDate() + 3)),
    time: '11:00 AM',
    clientName: 'Emily White',
    service: 'Styling',
    status: 'Approved',
  },
];

export const appointmentRequests = [
  {
    id: 'req1',
    clientName: 'Michael Brown',
    avatarUrl: 'https://picsum.photos/seed/101/100/100',
    dataAiHint: 'man portrait',
    service: 'Haircut',
    preferredTime: 'Tomorrow afternoon, around 3 PM if possible.',
    additionalDetails:
      "I'm looking for a complete restyle, something modern and easy to maintain. I have medium-length wavy hair. Let me know what you think is best!",
  },
  {
    id: 'req2',
    clientName: 'Sarah Johnson',
    avatarUrl: 'https://picsum.photos/seed/102/100/100',
    dataAiHint: 'woman smiling',
    service: 'Coloring',
    preferredTime: 'Next Friday morning.',
    additionalDetails:
      'I want to go blonde. My current hair color is dark brown. I know this is a big change, so I want to discuss options and pricing. I am available for a consultation first if needed.',
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
