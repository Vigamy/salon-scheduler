import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function ProfilePage() {
  const avatar = PlaceHolderImages.find((img) => img.id === 'user-avatar-1');

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold font-headline tracking-tight">Profile</h1>
      <Card>
        <CardHeader>
          <CardTitle>Your Information</CardTitle>
          <CardDescription>Manage your account settings and personal details.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center gap-4">
            <Avatar className="h-20 w-20 border">
              {avatar && <AvatarImage src={avatar.imageUrl} alt="User" data-ai-hint={avatar.imageHint} />}
              <AvatarFallback className="text-2xl">S</AvatarFallback>
            </Avatar>
            <Button variant="outline">Change Photo</Button>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" defaultValue="Default Stylist" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" defaultValue="stylist@salon.com" disabled />
            </div>
          </div>
          <div className="flex justify-between items-center pt-4 border-t">
              <div>
                <h3 className="font-medium">Log Out</h3>
                <p className="text-sm text-muted-foreground">You will be returned to the login screen.</p>
              </div>
            <Button variant="destructive" asChild>
              <Link href="/login">Log Out</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
