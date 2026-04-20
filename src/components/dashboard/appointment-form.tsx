'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { cn } from '@/lib/utils';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { services } from '@/lib/mock-data';
import { useToast } from '@/hooks/use-toast';

const appointmentFormSchema = z.object({
  service: z.string({
    required_error: 'Por favor, selecione um serviço.',
  }),
  date: z.date({
    required_error: 'Uma data é obrigatória.',
  }),
  time: z.string({
    required_error: 'Por favor, selecione um horário de preferência.',
  }),
  details: z.string().optional(),
});

type AppointmentFormValues = z.infer<typeof appointmentFormSchema>;

const defaultValues: Partial<AppointmentFormValues> = {};

export default function AppointmentForm() {
  const { toast } = useToast();
  const form = useForm<AppointmentFormValues>({
    resolver: zodResolver(appointmentFormSchema),
    defaultValues,
  });

  function onSubmit(data: AppointmentFormValues) {
    console.log(data);
    toast({
      title: 'Solicitação Enviada!',
      description: 'Seu pedido foi enviado! Vamos confirmar e avisar você automaticamente.',
    });
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
            <FormField
            control={form.control}
            name="service"
            render={({ field }) => (
                <FormItem>
                <FormLabel>1) Escolha o serviço</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                    <SelectTrigger>
                        <SelectValue placeholder="Selecione um serviço" />
                    </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                    {services.map((service) => (
                        <SelectItem key={service.id} value={service.id}>
                        {service.name}
                        </SelectItem>
                    ))}
                    </SelectContent>
                </Select>
                <FormMessage />
                </FormItem>
            )}
            />
            <div className="grid gap-4 md:grid-cols-2">
                <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                    <FormItem className="flex flex-col">
                    <FormLabel>2) Escolha a data</FormLabel>
                    <Popover>
                        <PopoverTrigger asChild>
                        <FormControl>
                            <Button
                            variant={'outline'}
                            className={cn(
                                'w-full pl-3 text-left font-normal',
                                !field.value && 'text-muted-foreground'
                            )}
                            >
                            {field.value ? (
                                format(field.value, 'PPP', { locale: ptBR })
                            ) : (
                                <span>Escolha uma data</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                        </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) => date < new Date() || date < new Date('1900-01-01')}
                            initialFocus
                            locale={ptBR}
                        />
                        </PopoverContent>
                    </Popover>
                    <FormMessage />
                    </FormItem>
                )}
                />
                 <FormField
                    control={form.control}
                    name="time"
                    render={({ field }) => (
                        <FormItem className="flex flex-col">
                        <FormLabel>3) Melhor período</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                            <SelectTrigger>
                                <SelectValue placeholder="Selecione o horário" />
                            </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                                <SelectItem value="morning">Manhã (9h - 12h)</SelectItem>
                                <SelectItem value="afternoon">Tarde (12h - 16h)</SelectItem>
                                <SelectItem value="evening">Noite (16h - 19h)</SelectItem>
                            </SelectContent>
                        </Select>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
            </div>
        </div>
        <FormField
          control={form.control}
          name="details"
          render={({ field }) => (
            <FormItem>
              <FormLabel>4) Observações (opcional)</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Alguma solicitação ou informação específica? (ex: tipo de cabelo, preferência de estilo)"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Forneça detalhes extras que possam ajudar seu estilista.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" size="lg">Enviar pedido de agendamento</Button>
      </form>
    </Form>
  );
}
