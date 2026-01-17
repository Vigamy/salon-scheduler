'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { availability as defaultAvailability } from '@/lib/mock-data';
import { useToast } from '@/hooks/use-toast';

type Availability = typeof defaultAvailability;

const dayTranslations: Record<keyof Availability, string> = {
  monday: 'Segunda-feira',
  tuesday: 'Terça-feira',
  wednesday: 'Quarta-feira',
  thursday: 'Quinta-feira',
  friday: 'Sexta-feira',
  saturday: 'Sábado',
  sunday: 'Domingo',
};

export default function AvailabilityPage() {
  const [availability, setAvailability] = React.useState<Availability>(defaultAvailability);
  const { toast } = useToast();

  const handleSwitchChange = (day: keyof Availability, checked: boolean) => {
    setAvailability((prev) => ({
      ...prev,
      [day]: { ...prev[day], enabled: checked },
    }));
  };

  const handleTimeChange = (day: keyof Availability, type: 'start' | 'end', value: string) => {
    setAvailability((prev) => ({
      ...prev,
      [day]: { ...prev[day], [type]: value },
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Saving availability:', availability);
    toast({
      title: 'Sucesso!',
      description: 'Sua disponibilidade foi atualizada.',
      variant: 'default',
    });
  };

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold font-headline tracking-tight">Gerenciar Disponibilidade</h1>
      <form onSubmit={handleSubmit}>
        <Card>
          <CardHeader>
            <CardTitle>Horário de Trabalho</CardTitle>
            <CardDescription>
              Defina seus horários disponíveis para agendamentos de clientes. As alterações afetarão novas solicitações de agendamento.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {Object.entries(availability).map(([day, { enabled, start, end }]) => (
              <div
                key={day}
                className="flex flex-col gap-4 rounded-lg border p-4 sm:flex-row sm:items-center"
              >
                <div className="flex items-center gap-4 sm:w-40">
                  <Switch
                    id={day}
                    checked={enabled}
                    onCheckedChange={(checked) => handleSwitchChange(day as keyof Availability, checked)}
                    aria-label={`Ativar ${dayTranslations[day as keyof Availability]}`}
                  />
                  <Label htmlFor={day} className="capitalize text-base font-medium">
                    {dayTranslations[day as keyof Availability]}
                  </Label>
                </div>
                <div className={`grid flex-1 grid-cols-2 gap-4 ${!enabled ? 'opacity-50' : ''}`}>
                  <div className="grid gap-2">
                    <Label htmlFor={`${day}-start`}>Horário de início</Label>
                    <Input
                      id={`${day}-start`}
                      type="time"
                      value={start}
                      onChange={(e) => handleTimeChange(day as keyof Availability, 'start', e.target.value)}
                      disabled={!enabled}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor={`${day}-end`}>Horário de término</Label>
                    <Input
                      id={`${day}-end`}
                      type="time"
                      value={end}
                      onChange={(e) => handleTimeChange(day as keyof Availability, 'end', e.target.value)}
                      disabled={!enabled}
                    />
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
          <CardFooter className="border-t px-6 py-4">
            <Button type="submit">Salvar Alterações</Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
}
