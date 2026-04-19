import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Logo } from '@/components/icons';
import { Scissors, UserRound } from 'lucide-react';

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader className="text-center">
          <div className="mb-4 flex justify-center">
            <Logo className="h-12 w-12 text-primary" />
          </div>
          <CardTitle className="text-2xl font-headline">Prototype do agendador do salão</CardTitle>
          <CardDescription>
            Escolha a visão de teste (profissional ou cliente). Autenticação real será adicionada nas próximas fases.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border p-4">
            <h3 className="mb-2 flex items-center gap-2 font-semibold">
              <Scissors className="h-4 w-4" /> Visão do cabeleireiro
            </h3>
            <p className="mb-4 text-sm text-muted-foreground">
              Agenda diária, remarcação rápida, solicitações e financeiro.
            </p>
            <Button className="w-full" asChild>
              <Link href="/dashboard">Entrar como profissional</Link>
            </Button>
          </div>

          <div className="rounded-lg border p-4">
            <h3 className="mb-2 flex items-center gap-2 font-semibold">
              <UserRound className="h-4 w-4" /> Visão do cliente
            </h3>
            <p className="mb-4 text-sm text-muted-foreground">
              Pedir horário, solicitar remarcação e cancelar sem WhatsApp.
            </p>
            <Button variant="outline" className="w-full" asChild>
              <Link href="/cliente">Entrar como cliente</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
