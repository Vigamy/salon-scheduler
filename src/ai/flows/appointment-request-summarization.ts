'use server';
/**
 * @fileOverview Resume solicitações de agendamento para cabeleireiros.
 *
 * - summarizeAppointmentRequest - Uma função que resume solicitações de agendamento.
 * - SummarizeAppointmentRequestInput - O tipo de entrada para a função summarizeAppointmentRequest.
 * - SummarizeAppointmentRequestOutput - O tipo de retorno para a função summarizeAppointmentRequest.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeAppointmentRequestInputSchema = z.object({
  service: z.string().describe('O serviço solicitado.'),
  preferredTime: z.string().describe('O horário de agendamento preferido.'),
  additionalDetails: z.string().describe('Quaisquer detalhes adicionais fornecidos pelo cliente.'),
});
export type SummarizeAppointmentRequestInput = z.infer<typeof SummarizeAppointmentRequestInputSchema>;

const SummarizeAppointmentRequestOutputSchema = z.object({
  summary: z.string().describe('Um resumo conciso da solicitação de agendamento.'),
});
export type SummarizeAppointmentRequestOutput = z.infer<typeof SummarizeAppointmentRequestOutputSchema>;

export async function summarizeAppointmentRequest(input: SummarizeAppointmentRequestInput): Promise<SummarizeAppointmentRequestOutput> {
  return summarizeAppointmentRequestFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeAppointmentRequestPrompt',
  input: {schema: SummarizeAppointmentRequestInputSchema},
  output: {schema: SummarizeAppointmentRequestOutputSchema},
  prompt: `Você é um assistente que ajuda cabeleireiros a entender rapidamente as solicitações de agendamento.\n\nResuma a seguinte solicitação de agendamento de forma concisa e informativa:\n\nServiço: {{{service}}}\nHorário Preferido: {{{preferredTime}}}\nDetalhes Adicionais: {{{additionalDetails}}}\n\nResumo:`,
});

const summarizeAppointmentRequestFlow = ai.defineFlow(
  {
    name: 'summarizeAppointmentRequestFlow',
    inputSchema: SummarizeAppointmentRequestInputSchema,
    outputSchema: SummarizeAppointmentRequestOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
