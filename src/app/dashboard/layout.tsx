'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarInset,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { Logo } from '@/components/icons';
import {
  Calendar,
  LayoutGrid,
  Scissors,
  Settings,
  Bell,
  User,
} from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const avatar = PlaceHolderImages.find((img) => img.id === 'user-avatar-1');

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <div className="flex items-center gap-2">
            <Logo className="size-7 text-primary" />
            <span className="text-lg font-semibold font-headline">Salão</span>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                isActive={pathname === '/dashboard'}
                tooltip="Painel"
              >
                <Link href="/dashboard">
                  <LayoutGrid />
                  <span>Painel</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                isActive={pathname === '/dashboard/requests'}
                tooltip="Solicitações"
              >
                <Link href="/dashboard/requests">
                  <Bell />
                  <span>Solicitações</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                isActive={pathname === '/dashboard/availability'}
                tooltip="Disponibilidade"
              >
                <Link href="/dashboard/availability">
                  <Calendar />
                  <span>Disponibilidade</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                isActive={pathname === '/dashboard/profile'}
                tooltip="Perfil"
              >
                <Link href="/dashboard/profile">
                  <User />
                  <span>Perfil</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter>
          <div className="flex items-center gap-3">
            <Avatar className="size-8">
              {avatar && <AvatarImage src={avatar.imageUrl} alt="Usuário" data-ai-hint={avatar.imageHint} />}
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-sm font-medium">Estilista</span>
              <span className="text-xs text-muted-foreground">stylist@salon.com</span>
            </div>
          </div>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <header className="flex h-14 items-center justify-between border-b bg-background px-4 md:px-6 lg:px-8">
          <SidebarTrigger className="md:hidden"/>
          <div className="flex-1 text-center md:text-left">
             {/* Pode adicionar breadcrumbs ou título da página aqui */}
          </div>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Settings className="h-5 w-5" />
            <span className="sr-only">Configurações</span>
          </Button>
        </header>
        <main className="flex-1 px-4 py-4 md:px-6 md:py-6 lg:px-8">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default MainLayout;
