import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import AppointmentForm from '@/components/dashboard/appointment-form';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function ClienteNovoPage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-4xl flex-col gap-6 p-4 md:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold font-headline tracking-tight">Novo agendamento</h1>
          <p className="text-sm text-muted-foreground">Preencha em menos de 1 minuto. O salão confirma para você.</p>
        </div>
        <Button variant="outline" asChild>
          <Link href="/cliente">
            <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para área do cliente
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Pedido de horário</CardTitle>
          <CardDescription>
            Informe serviço, data e período do dia. Você recebe retorno assim que for aprovado.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <AppointmentForm />
        </CardContent>
      </Card>
    </main>
  );
}
