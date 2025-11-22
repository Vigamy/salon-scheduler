'use client';

import * as React from 'react';
import { useTransition } from 'react';
import { Button } from '@/components/ui/button';
import { generateSummaryAction } from '@/lib/actions';
import type { appointmentRequests } from '@/lib/mock-data';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal } from 'lucide-react';
import { Skeleton } from '../ui/skeleton';

type RequestSummaryProps = {
  request: (typeof appointmentRequests)[0];
};

export default function RequestSummary({ request }: RequestSummaryProps) {
  const [isPending, startTransition] = useTransition();
  const [summary, setSummary] = React.useState<string | null>(null);
  const [error, setError] = React.useState<string | null>(null);

  const handleClick = () => {
    setError(null);
    setSummary(null);
    startTransition(async () => {
      const result = await generateSummaryAction({
        service: request.service,
        preferredTime: request.preferredTime,
        additionalDetails: request.additionalDetails,
      });
      if (result.startsWith('Failed')) {
        setError(result);
      } else {
        setSummary(result);
      }
    });
  };

  return (
    <div className="space-y-4 rounded-lg bg-muted/50 p-4">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">AI Assistant</h3>
        <Button size="sm" onClick={handleClick} disabled={isPending}>
          ✨ Generate Summary
        </Button>
      </div>

      {isPending && (
        <div className="space-y-2">
          <Skeleton className="h-4 w-1/4" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>
      )}

      {error && (
        <Alert variant="destructive">
          <Terminal className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {summary && (
        <Alert>
          <Terminal className="h-4 w-4" />
          <AlertTitle>Appointment Summary</AlertTitle>
          <AlertDescription>{summary}</AlertDescription>
        </Alert>
      )}

      {!isPending && !summary && !error && (
        <div className="text-center text-sm text-muted-foreground py-4">
          Click the button to generate a quick summary of the client's request.
        </div>
      )}
    </div>
  );
}
