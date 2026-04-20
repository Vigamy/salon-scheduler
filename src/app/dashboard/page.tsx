'use client';

import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { appointments as mockAppointments, rescheduleRequests } from '@/lib/mock-data';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { format, isSameDay } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import Link from 'next/link';
import { CalendarClock, PlusCircle } from 'lucide-react';

export default function DashboardPage() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  const selectedDayAppointments = React.useMemo(() => {
    if (!date) return [];
    return mockAppointments.filter((apt) => isSameDay(apt.date, date)).sort((a, b) => a.time.localeCompare(b.time));
  }, [date]);

  const weekAppointments = mockAppointments.filter(
    (a) => a.date > new Date() && a.date < new Date(new Date().setDate(new Date().getDate() + 7))
  ).length;

  const todayAppointments = mockAppointments.filter((apt) => isSameDay(apt.date, new Date()));
  const todayRevenue = todayAppointments.reduce((acc, apt) => acc + apt.amountPaid, 0);

  return (
    <div className="flex flex-col gap-5">
      <header className="flex flex-col gap-3 rounded-xl border bg-card p-4 shadow-sm md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold font-headline tracking-tight">Agenda</h1>
          <p className="text-sm text-muted-foreground">{format(new Date(), "EEEE, dd 'de' MMMM", { locale: ptBR })}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" asChild>
            <Link href="/dashboard/requests">Ver solicitações</Link>
          </Button>
          <Button asChild>
            <Link href="/dashboard/new-request">
              <PlusCircle className="mr-2 h-4 w-4" /> Novo encaixe
            </Link>
          </Button>
        </div>
      </header>

      <section className="grid gap-5 xl:grid-cols-[1.8fr_1fr]">
        <Card className="overflow-hidden">
          <CardHeader className="border-b bg-muted/30 pb-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <CardTitle className="text-lg">
                {date ? `Agenda de ${format(date, "dd 'de' MMMM", { locale: ptBR })}` : 'Selecione uma data'}
              </CardTitle>
              <Badge variant="secondary">{selectedDayAppointments.length} horários</Badge>
            </div>
          </CardHeader>
          <CardContent className="grid gap-5 p-4 lg:grid-cols-[420px_1fr]">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="w-full rounded-xl border p-3"
              locale={ptBR}
              modifiers={{
                hasAppointment: mockAppointments.map((apt) => apt.date),
              }}
              modifiersStyles={{
                hasAppointment: {
                  border: '2px solid hsl(var(--primary))',
                  borderRadius: '10px',
                },
              }}
            />

            <div className="min-h-[540px] rounded-xl border bg-background p-3">
              {selectedDayAppointments.length > 0 ? (
                <ul className="space-y-3">
                  {selectedDayAppointments.map((apt) => (
                    <li key={apt.id} className="rounded-lg border bg-card p-4 shadow-sm">
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div className="space-y-1">
                          <p className="text-xl font-semibold leading-none">{apt.time}</p>
                          <p className="font-medium">{apt.clientName}</p>
                          <p className="text-sm text-muted-foreground">{apt.service}</p>
                        </div>
                        <Badge variant={apt.status === 'Aprovado' ? 'default' : 'secondary'}>{apt.status}</Badge>
                      </div>
                      <p className="mt-3 text-xs text-muted-foreground">
                        Pago: R$ {apt.amountPaid.toFixed(2)} • {apt.paymentMethod}
                      </p>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="flex h-full min-h-[500px] flex-col items-center justify-center rounded-lg border border-dashed text-center">
                  <p className="text-sm text-muted-foreground">Sem horários para este dia.</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <div className="space-y-5">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Resumo do dia</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <div className="flex items-center justify-between rounded-lg border p-3">
                <span className="text-muted-foreground">Hoje</span>
                <strong className="text-lg">{todayAppointments.length}</strong>
              </div>
              <div className="flex items-center justify-between rounded-lg border p-3">
                <span className="text-muted-foreground">Próx. 7 dias</span>
                <strong className="text-lg">{weekAppointments}</strong>
              </div>
              <div className="flex items-center justify-between rounded-lg border p-3">
                <span className="text-muted-foreground">Faturamento</span>
                <strong className="text-lg">R$ {todayRevenue.toFixed(2)}</strong>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex-row items-center gap-2 space-y-0">
              <CalendarClock className="h-4 w-4" />
              <CardTitle className="text-lg">Remarcações</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {rescheduleRequests.slice(0, 4).map((request) => (
                <div key={request.id} className="rounded-lg border p-3 text-sm">
                  <p className="font-medium">{request.clientName}</p>
                  <p className="text-muted-foreground">
                    {request.currentSlot} → {request.suggestedSlot}
                  </p>
                </div>
              ))}
              <Button variant="outline" className="w-full" asChild>
                <Link href="/dashboard/requests">Abrir lista completa</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
