'use server';
/**
 * @fileOverview Summarizes appointment requests for hairdressers.
 *
 * - summarizeAppointmentRequest - A function that summarizes appointment requests.
 * - SummarizeAppointmentRequestInput - The input type for the summarizeAppointmentRequest function.
 * - SummarizeAppointmentRequestOutput - The return type for the summarizeAppointmentRequest function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeAppointmentRequestInputSchema = z.object({
  service: z.string().describe('The requested service.'),
  preferredTime: z.string().describe('The preferred appointment time.'),
  additionalDetails: z.string().describe('Any additional details provided by the client.'),
});
export type SummarizeAppointmentRequestInput = z.infer<typeof SummarizeAppointmentRequestInputSchema>;

const SummarizeAppointmentRequestOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the appointment request.'),
});
export type SummarizeAppointmentRequestOutput = z.infer<typeof SummarizeAppointmentRequestOutputSchema>;

export async function summarizeAppointmentRequest(input: SummarizeAppointmentRequestInput): Promise<SummarizeAppointmentRequestOutput> {
  return summarizeAppointmentRequestFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeAppointmentRequestPrompt',
  input: {schema: SummarizeAppointmentRequestInputSchema},
  output: {schema: SummarizeAppointmentRequestOutputSchema},
  prompt: `You are an assistant helping hairdressers quickly understand appointment requests.\n\nSummarize the following appointment request in a concise and informative way:\n\nService: {{{service}}}\nPreferred Time: {{{preferredTime}}}\nAdditional Details: {{{additionalDetails}}}\n\nSummary:`,
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
