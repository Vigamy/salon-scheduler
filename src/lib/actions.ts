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
    return 'Failed to generate summary. Please try again.';
  }
}
