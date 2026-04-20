import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { clientAppointments } from '@/lib/mock-data';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import Link from 'next/link';
import { CalendarCheck, CalendarPlus, Clock3, Sparkles } from 'lucide-react';

export default function ClientePage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col gap-6 p-4 md:p-8">
      <header className="rounded-2xl border bg-card p-6 shadow-sm">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <h1 className="text-2xl font-bold font-headline">Área do Cliente</h1>
            <p className="text-sm text-muted-foreground">
              Tudo em poucos cliques: pedir horário, remarcar e cancelar sem complicação.
            </p>
          </div>
          <Button size="lg" asChild>
            <Link href="/cliente/novo">
              <CalendarPlus className="mr-2 h-4 w-4" /> Pedir novo horário
            </Link>
          </Button>
        </div>
      </header>

      <section className="grid gap-4 md:grid-cols-3">
        <Card className="border-primary/30 bg-primary/5">
          <CardContent className="flex items-center gap-3 p-4">
            <Clock3 className="h-5 w-5 text-primary" />
            <div>
              <p className="text-xs uppercase text-muted-foreground">Próximo compromisso</p>
              <p className="font-semibold">{format(clientAppointments[0].date, "dd/MM 'às' HH:mm")}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center gap-3 p-4">
            <CalendarCheck className="h-5 w-5 text-primary" />
            <div>
              <p className="text-xs uppercase text-muted-foreground">Total confirmados</p>
              <p className="font-semibold">{clientAppointments.filter((item) => item.status === 'Confirmado').length}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center gap-3 p-4">
            <Sparkles className="h-5 w-5 text-primary" />
            <div>
              <p className="text-xs uppercase text-muted-foreground">Atendimento</p>
              <p className="font-semibold">Resposta rápida do salão</p>
            </div>
          </CardContent>
        </Card>
      </section>

      <Card>
        <CardHeader>
          <CardTitle>Meus horários</CardTitle>
          <CardDescription>Clique no botão desejado e o sistema cuida do restante para você.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {clientAppointments.map((appointment) => (
            <div key={appointment.id} className="rounded-xl border bg-background p-4 shadow-sm">
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="font-semibold">{appointment.service}</p>
                  <p className="text-sm text-muted-foreground">com {appointment.professional}</p>
                </div>
                <Badge variant={appointment.status === 'Confirmado' ? 'default' : 'secondary'}>{appointment.status}</Badge>
              </div>

              <p className="mt-2 text-sm">
                {format(appointment.date, "EEEE, dd 'de' MMMM", { locale: ptBR })} às {appointment.time}
              </p>

              <div className="mt-4 grid gap-2 sm:grid-cols-3">
                <Button size="sm" className="w-full">Solicitar novo horário</Button>
                <Button size="sm" variant="outline" className="w-full" disabled={!appointment.canReschedule}>
                  Pedir remarcação
                </Button>
                <Button size="sm" variant="ghost" className="w-full" disabled={!appointment.canCancel}>
                  Cancelar
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </main>
  );
}
