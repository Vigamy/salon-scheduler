import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Logo } from '@/components/icons';

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <Card className="w-full max-w-sm">
        <CardHeader className="text-center">
          <div className="mb-4 flex justify-center">
            <Logo className="h-12 w-12 text-primary" />
          </div>
          <CardTitle className="text-2xl font-headline">Salon Scheduler Demo</CardTitle>
          <CardDescription>
            Authentication is not yet implemented. Click the button below to explore the app.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                disabled
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" required disabled />
            </div>
            <Button type="submit" className="w-full" asChild>
              <Link href="/dashboard">View Dashboard</Link>
            </Button>
            <Button variant="outline" className="w-full" disabled>
              Sign in with Google
            </Button>
          </div>
          <div className="mt-4 text-center text-sm text-muted-foreground">
            No account needed for this demo.
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
