'use client';

import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import {
  appointments as mockAppointments,
  conversationPreview,
  financeSummary,
  rescheduleRequests,
} from '@/lib/mock-data';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { format, isSameDay } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import Link from 'next/link';
import { CalendarClock, MessageCircleMore, PlusCircle, Wallet, CircleCheckBig, BellRing } from 'lucide-react';

export default function DashboardPage() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  const selectedDayAppointments = React.useMemo(() => {
    if (!date) return [];
    return mockAppointments.filter((apt) => isSameDay(apt.date, date));
  }, [date]);

  const weekAppointments = mockAppointments.filter(
    (a) => a.date > new Date() && a.date < new Date(new Date().setDate(new Date().getDate() + 7))
  ).length;

  const todayRevenue = selectedDayAppointments.reduce((acc, apt) => acc + apt.amountPaid, 0);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold font-headline tracking-tight">Agenda do Profissional</h1>
          <p className="text-sm text-muted-foreground">
            Fluxo pensado para remarcação rápida e operação simples no dia a dia.
          </p>
        </div>
        <Button asChild>
          <Link href="/dashboard/new-request">
            <PlusCircle className="mr-2 h-4 w-4" />
            Agendar encaixe manual
          </Link>
        </Button>
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        <Card className="border-primary/30 bg-primary/5">
          <CardContent className="flex items-center gap-3 p-4 text-sm">
            <CircleCheckBig className="h-4 w-4 text-primary" />
            <span>Ações rápidas com foco no dia de hoje.</span>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center gap-3 p-4 text-sm">
            <BellRing className="h-4 w-4 text-primary" />
            <span>{rescheduleRequests.length} remarcações para revisar.</span>
          </CardContent>
        </Card>
        <Button size="lg" variant="outline" className="h-full" asChild>
          <Link href="/dashboard/requests">Abrir solicitações pendentes</Link>
        </Button>
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        <Card className="xl:col-span-2">
          <CardHeader>
            <CardTitle>Sua agenda</CardTitle>
            <CardDescription>Veja horários, status e pagamentos no mesmo lugar.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-2">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
              locale={ptBR}
              modifiers={{
                hasAppointment: mockAppointments.map((apt) => apt.date),
              }}
              modifiersStyles={{
                hasAppointment: {
                  border: '2px solid hsl(var(--primary))',
                  borderRadius: 'var(--radius)',
                },
              }}
            />

            <div className="space-y-4">
              <h3 className="font-semibold">
                {date ? `Agendamentos para ${format(date, 'PPP', { locale: ptBR })}` : 'Selecione um dia'}
              </h3>
              {selectedDayAppointments.length > 0 ? (
                <ul className="space-y-3">
                  {selectedDayAppointments.map((apt) => (
                    <li key={apt.id} className="rounded-lg border p-3">
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <p className="font-medium">{apt.clientName}</p>
                          <p className="text-sm text-muted-foreground">{apt.service}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-mono text-sm">{apt.time}</p>
                          <Badge variant={apt.status === 'Aprovado' ? 'default' : 'secondary'}>{apt.status}</Badge>
                        </div>
                      </div>
                      <div className="mt-2 text-xs text-muted-foreground">
                        Pago: R$ {apt.amountPaid.toFixed(2)} • {apt.paymentMethod}
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="flex h-full flex-col items-center justify-center rounded-lg border border-dashed p-4 text-center">
                  <p className="text-sm text-muted-foreground">Nenhum agendamento para este dia.</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Resumo rápido</CardTitle>
            </CardHeader>
            <CardContent className="space-y-5 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Agendamentos do dia</span>
                <strong className="text-lg">{selectedDayAppointments.length}</strong>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Próximos 7 dias</span>
                <strong className="text-lg">{weekAppointments}</strong>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Faturamento do dia</span>
                <strong className="text-lg">R$ {todayRevenue.toFixed(2)}</strong>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CalendarClock className="h-4 w-4" /> Remarcações
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {rescheduleRequests.map((request) => (
                <div key={request.id} className="rounded-md border p-3 text-sm">
                  <p className="font-medium">{request.clientName}</p>
                  <p className="text-muted-foreground">{request.currentSlot} → {request.suggestedSlot}</p>
                  <p className="text-xs text-muted-foreground">Solicitado por {request.requestedBy.toLowerCase()}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wallet className="h-4 w-4" /> Financeiro (mês)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <p>Receita: <strong>R$ {financeSummary.monthRevenue.toFixed(2)}</strong></p>
              <p>Despesas: <strong>R$ {financeSummary.monthExpenses.toFixed(2)}</strong></p>
              <p>Em aberto: <strong>R$ {financeSummary.pendingPayments.toFixed(2)}</strong></p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircleMore className="h-4 w-4" /> Chat interno (prévia)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {conversationPreview.map((conversation) => (
                <div key={conversation.id} className="flex items-center justify-between rounded-md border p-2 text-sm">
                  <div>
                    <p className="font-medium">{conversation.name}</p>
                    <p className="text-xs text-muted-foreground">{conversation.lastMessage}</p>
                  </div>
                  <Badge variant={conversation.unread ? 'default' : 'outline'}>{conversation.when}</Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
