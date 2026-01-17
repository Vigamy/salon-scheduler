'use server';

import {
  summarizeAppointmentRequest,
  type SummarizeAppointmentRequestInput,
} from '@/ai/flows/appointment-request-summarization';

export async function generateSummaryAction(
  input: SummarizeAppointmentRequestInput
): Promise<string> {
  try {
    const { summary } = await summarizeAppointmentRequest(input);
    return summary;
  } catch (error) {
    console.error('Error summarizing appointment request:', error);
    return 'Falha ao gerar o resumo. Por favor, tente novamente.';
  }
}
