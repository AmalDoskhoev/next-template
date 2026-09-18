'use client';

import { BellIcon, PanelLeftCloseIcon, PanelLeftOpenIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useUserStore } from '@/app/store';
import { routes } from '@/shared/constants';
import {
  Avatar,
  AvatarFallback,
  Button,
  IconButton,
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar
} from '@/shared/ui';

import { APP_NAV_ITEMS } from '../model/nav';

function getInitials(name: string) {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map(word => word[0])
    .join('')
    .toUpperCase();
}

export function AppSidebar() {
  const pathname = usePathname();
  const { user } = useUserStore();
  const { open, isMobile, toggleSidebar } = useSidebar();
  const expanded = isMobile || open;
  const displayName = user?.nickname ?? 'Асанов А. К.';
  const displayRole = 'Директор · СШ №12';

  return (
    <Sidebar collapsible="icon" aria-label="Основная навигация">
      <SidebarHeader>
        <div
          className={
            expanded
              ? 'flex min-h-[46px] items-center justify-between gap-2'
              : 'flex min-h-[46px] items-center justify-center'
          }
        >
          <Link
            href={routes.home}
            className="flex min-w-0 items-center gap-3 overflow-hidden"
          >
            <Image
              src="/brand/logo-mark.png"
              alt="Ailam"
              width={30}
              height={30}
              className="size-[30px] shrink-0 object-contain"
            />
            {expanded && (
              <span className="truncate text-base font-semibold tracking-[-0.01em]">
                Ailam GOV
              </span>
            )}
          </Link>
          {expanded && (
            <Button
              variant="ghost"
              size="icon-sm"
              className="rounded-lg"
              aria-label="Свернуть меню"
              aria-expanded={true}
              title="Свернуть меню"
              onClick={toggleSidebar}
            >
              <PanelLeftCloseIcon />
            </Button>
          )}
        </div>
        {!expanded && (
          <Button
            variant="ghost"
            size="icon-sm"
            className="self-center rounded-lg"
            aria-label="Развернуть меню"
            aria-expanded={false}
            title="Развернуть меню"
            onClick={toggleSidebar}
          >
            <PanelLeftOpenIcon />
          </Button>
        )}
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {APP_NAV_ITEMS.map(item => {
                const isActive =
                  item.href === routes.home
                    ? pathname === routes.home
                    : pathname === item.href ||
                      pathname.startsWith(`${item.href}/`);

                return (
                  <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                      tooltip={item.label}
                    >
                      <Link href={item.href}>
                        <item.icon />
                        <span>{item.label}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div
          className={
            expanded
              ? 'flex items-center justify-between gap-2.5 px-1'
              : 'flex flex-col items-center justify-center gap-2.5'
          }
        >
          {expanded ? (
            <>
              <div className="flex min-w-0 items-center gap-2.5">
                <Avatar size="sm">
                  <AvatarFallback>{getInitials(displayName)}</AvatarFallback>
                </Avatar>
                <div className="flex min-w-0 flex-col">
                  <span className="truncate text-[13px] font-semibold">
                    {displayName}
                  </span>
                  <span className="truncate text-[12px] text-(--gray-500)">
                    {displayRole}
                  </span>
                </div>
              </div>

              <IconButton
                variant="ghost"
                size="sm"
                aria-label="Уведомления"
                title="Уведомления"
              >
                <BellIcon />
              </IconButton>
            </>
          ) : (
            <>
              <IconButton
                variant="ghost"
                size="sm"
                aria-label="Уведомления"
                title="Уведомления"
              >
                <BellIcon />
              </IconButton>

              <Avatar size="sm">
                <AvatarFallback>{getInitials(displayName)}</AvatarFallback>
              </Avatar>
            </>
          )}
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
