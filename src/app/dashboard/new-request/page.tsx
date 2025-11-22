import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import AppointmentForm from '@/components/dashboard/appointment-form';

export default function NewRequestPage() {
  return (
    <div className="flex flex-col gap-6">
       <h1 className="text-2xl font-bold font-headline tracking-tight">Request an Appointment</h1>
      <Card>
        <CardHeader>
          <CardTitle>Appointment Details</CardTitle>
          <CardDescription>
            Fill out the form below to request a new appointment. We will confirm your booking shortly.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <AppointmentForm />
        </CardContent>
      </Card>
    </div>
  );
}
