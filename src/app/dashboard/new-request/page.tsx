import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import AppointmentForm from '@/components/dashboard/appointment-form';

export default function NewRequestPage() {
  return (
    <div className="flex flex-col gap-6">
       <h1 className="text-2xl font-bold font-headline tracking-tight">Solicitar um Agendamento</h1>
      <Card>
        <CardHeader>
          <CardTitle>Detalhes do Agendamento</CardTitle>
          <CardDescription>
            Preencha o formulário abaixo para solicitar um novo agendamento. Confirmaremos sua reserva em breve.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <AppointmentForm />
        </CardContent>
      </Card>
    </div>
  );
}
