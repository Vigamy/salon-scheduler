import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { clientAppointments } from '@/lib/mock-data';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import Link from 'next/link';

export default function ClientePage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-4xl flex-col gap-6 p-4 md:p-8">
      <header className="space-y-2">
        <h1 className="text-2xl font-bold font-headline">Área do Cliente</h1>
        <p className="text-sm text-muted-foreground">
          Pedido de agendamento, cancelamento e remarcação em poucos cliques.
        </p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>Meus próximos horários</CardTitle>
          <CardDescription>Fluxo simples para quem não gosta de tecnologia complicada.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {clientAppointments.map((appointment) => (
            <div key={appointment.id} className="rounded-lg border p-4">
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="font-semibold">{appointment.service}</p>
                  <p className="text-sm text-muted-foreground">com {appointment.professional}</p>
                </div>
                <Badge variant={appointment.status === 'Confirmado' ? 'default' : 'secondary'}>
                  {appointment.status}
                </Badge>
              </div>

              <p className="mt-2 text-sm">
                {format(appointment.date, "EEEE, dd 'de' MMMM", { locale: ptBR })} às {appointment.time}
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                <Button size="sm">Solicitar novo horário</Button>
                <Button size="sm" variant="outline" disabled={!appointment.canReschedule}>
                  Pedir remarcação
                </Button>
                <Button size="sm" variant="ghost" disabled={!appointment.canCancel}>
                  Cancelar
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Novo agendamento</CardTitle>
          <CardDescription>
            Escolha serviço, data preferida e observações. O salão confirma no painel principal.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button asChild>
            <Link href="/dashboard/new-request">Pedir agendamento</Link>
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}
