import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { appointmentRequests } from '@/lib/mock-data';
import { Check, X } from 'lucide-react';
import RequestSummary from '@/components/dashboard/request-summary';

export default function RequestsPage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold font-headline tracking-tight">Appointment Requests</h1>
      <div className="space-y-6">
        {appointmentRequests.map((request) => (
          <Card key={request.id} className="overflow-hidden">
            <CardHeader className="flex flex-row items-start gap-4 space-y-0 bg-muted/50 p-4">
              <Avatar className="h-12 w-12 border">
                <AvatarImage src={request.avatarUrl} alt={request.clientName} data-ai-hint={request.dataAiHint} />
                <AvatarFallback>{request.clientName.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <CardTitle>{request.clientName}</CardTitle>
                <CardDescription>New appointment request for <Badge variant="secondary">{request.service}</Badge></CardDescription>
              </div>
            </CardHeader>
            <CardContent className="p-4 grid md:grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-semibold">Preferred Time</h3>
                  <p className="text-sm text-muted-foreground">{request.preferredTime}</p>
                </div>
                 <Separator />
                <div className="space-y-2">
                  <h3 className="font-semibold">Additional Details</h3>
                  <p className="text-sm text-muted-foreground">{request.additionalDetails}</p>
                </div>
              </div>
               <RequestSummary request={request} />
            </CardContent>
            <CardFooter className="flex justify-end gap-2 border-t bg-muted/50 p-4">
              <Button variant="outline">
                <X className="mr-2 h-4 w-4" />
                Decline
              </Button>
              <Button>
                <Check className="mr-2 h-4 w-4" />
                Approve
              </Button>
            </CardFooter>
          </Card>
        ))}
        {appointmentRequests.length === 0 && (
          <div className="flex flex-col items-center justify-center text-center p-10 border-dashed border rounded-lg">
            <p className="text-lg font-medium">No pending requests</p>
            <p className="text-sm text-muted-foreground">You're all caught up!</p>
          </div>
        )}
      </div>
    </div>
  );
}
