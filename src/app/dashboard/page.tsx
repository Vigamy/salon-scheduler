'use client';

import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { appointments as mockAppointments } from '@/lib/mock-data';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { format, isSameDay } from 'date-fns';
import Link from 'next/link';
import { PlusCircle } from 'lucide-react';

export default function DashboardPage() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  
  const selectedDayAppointments = React.useMemo(() => {
    if (!date) return [];
    return mockAppointments.filter((apt) => isSameDay(apt.date, date));
  }, [date]);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold font-headline tracking-tight">Dashboard</h1>
        <Button asChild>
          <Link href="/dashboard/new-request">
            <PlusCircle className="mr-2 h-4 w-4" />
            New Appointment
          </Link>
        </Button>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Your Schedule</CardTitle>
            <CardDescription>View and manage your upcoming appointments.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-2">
            <div>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
                modifiers={{
                  hasAppointment: mockAppointments.map(apt => apt.date)
                }}
                modifiersStyles={{
                  hasAppointment: {
                    border: '2px solid hsl(var(--primary))',
                    borderRadius: 'var(--radius)',
                  },
                }}
              />
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold">
                Appointments for {date ? format(date, 'PPP') : '...'}
              </h3>
              {selectedDayAppointments.length > 0 ? (
                <ul className="space-y-3">
                  {selectedDayAppointments.map((apt) => (
                    <li key={apt.id} className="flex items-center justify-between rounded-lg border p-3">
                      <div>
                        <p className="font-medium">{apt.clientName}</p>
                        <p className="text-sm text-muted-foreground">{apt.service}</p>
                      </div>
                      <div className='text-right'>
                        <p className='font-mono text-sm'>{apt.time}</p>
                        <Badge variant={apt.status === 'Approved' ? 'default' : 'secondary'}>
                          {apt.status}
                        </Badge>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="flex flex-col items-center justify-center text-center p-4 border-dashed border rounded-lg h-full">
                  <p className="text-sm text-muted-foreground">No appointments scheduled for this day.</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Quick Stats</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Today's Appointments</span>
              <span className="font-bold text-2xl">{selectedDayAppointments.length}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Upcoming this week</span>
              <span className="font-bold text-2xl">
                {mockAppointments.filter(a => a.date > new Date() && a.date < new Date(new Date().setDate(new Date().getDate() + 7))).length}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Pending Requests</span>
              <span className="font-bold text-2xl text-primary">2</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
