import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Logo } from '@/components/icons';
import { CalendarClock, ClipboardList, Scissors, UserRound } from 'lucide-react';

export default function LoginPage() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-4 py-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(132,95,184,0.2),transparent_48%),radial-gradient(circle_at_bottom_right,rgba(216,145,161,0.18),transparent_42%)]" />

      <Card className="relative w-full max-w-5xl border-0 shadow-2xl shadow-primary/10">
        <CardHeader className="space-y-3 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
            <Logo className="h-8 w-8 text-primary" />
          </div>
          <CardTitle className="text-3xl font-headline">Bem-vindo ao salão</CardTitle>
          <CardDescription className="mx-auto max-w-2xl text-base">
            Escolha como deseja entrar. Se preferir, compartilhe os links diretos com cada pessoa (cliente ou
            administração).
          </CardDescription>
        </CardHeader>

        <CardContent className="grid gap-6 lg:grid-cols-2">
          <section className="rounded-2xl border bg-card/80 p-6 shadow-sm backdrop-blur">
            <h3 className="mb-2 flex items-center gap-2 text-lg font-semibold">
              <UserRound className="h-5 w-5 text-primary" /> Área do cliente
            </h3>
            <p className="mb-5 text-sm text-muted-foreground">
              Interface mais simples para quem quer agendar sem dificuldade.
            </p>
            <div className="space-y-3">
              <Button size="lg" className="w-full justify-start" asChild>
                <Link href="/cliente">
                  <CalendarClock className="mr-2 h-4 w-4" /> Link 1: ver meus horários
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="w-full justify-start" asChild>
                <Link href="/cliente/novo">
                  <ClipboardList className="mr-2 h-4 w-4" /> Link 2: pedir novo horário
                </Link>
              </Button>
            </div>
          </section>

          <section className="rounded-2xl border bg-card/80 p-6 shadow-sm backdrop-blur">
            <h3 className="mb-2 flex items-center gap-2 text-lg font-semibold">
              <Scissors className="h-5 w-5 text-primary" /> Área administrativa
            </h3>
            <p className="mb-5 text-sm text-muted-foreground">
              Acesso rápido para quem cuida da agenda e confirmações.
            </p>
            <div className="space-y-3">
              <Button size="lg" className="w-full justify-start" asChild>
                <Link href="/dashboard">
                  <CalendarClock className="mr-2 h-4 w-4" /> Link 1: agenda do dia
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="w-full justify-start" asChild>
                <Link href="/dashboard/requests">
                  <ClipboardList className="mr-2 h-4 w-4" /> Link 2: solicitações pendentes
                </Link>
              </Button>
            </div>
          </section>

          <div className="rounded-2xl border border-dashed bg-muted/35 p-4 text-sm text-muted-foreground lg:col-span-2">
            <p className="font-medium text-foreground">Links diretos para compartilhar:</p>
            <ul className="mt-2 grid gap-1 md:grid-cols-2">
              <li>/cliente</li>
              <li>/cliente/novo</li>
              <li>/dashboard</li>
              <li>/dashboard/requests</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
