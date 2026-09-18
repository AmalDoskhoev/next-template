'use client';

import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/shared/utils';

const avatarVariants = cva(
  'relative flex shrink-0 overflow-hidden rounded-full bg-(--gray-100) text-(--gray-600) font-semibold',
  {
    variants: {
      size: {
        xs: 'size-6 text-[10px]',
        sm: 'size-8 text-xs',
        md: 'size-10 text-sm',
        lg: 'size-14 text-lg',
        xl: 'size-[72px] text-2xl'
      }
    },
    defaultVariants: {
      size: 'md'
    }
  }
);

function Avatar({
  className,
  size,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Root> &
  VariantProps<typeof avatarVariants>) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cn(avatarVariants({ size }), className)}
      {...props}
    />
  );
}

function AvatarImage({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn('aspect-square size-full object-cover', className)}
      {...props}
    />
  );
}

function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        'flex size-full items-center justify-center rounded-full bg-(--gray-100)',
        className
      )}
      {...props}
    />
  );
}

type AvatarPerson = {
  name: string;
  src?: string;
};

function AvatarGroup({
  people,
  size = 'sm',
  max = 4,
  className
}: {
  people: AvatarPerson[];
  size?: VariantProps<typeof avatarVariants>['size'];
  max?: number;
  className?: string;
}) {
  const shown = people.slice(0, max);
  const extra = people.length - shown.length;
  const overlap =
    size === 'xs'
      ? '-ml-1.5'
      : size === 'sm'
        ? '-ml-2'
        : size === 'lg'
          ? '-ml-4'
          : size === 'xl'
            ? '-ml-5'
            : '-ml-3';

  return (
    <div className={cn('inline-flex items-center', className)}>
      {shown.map((person, index) => (
        <Avatar
          key={`${person.name}-${index}`}
          size={size}
          className={cn(
            'shadow-[0_0_0_2px_var(--white)]',
            index > 0 && overlap
          )}
        >
          {person.src && <AvatarImage src={person.src} alt={person.name} />}
          <AvatarFallback>
            {person.name
              .trim()
              .split(/\s+/)
              .slice(0, 2)
              .map(word => word[0])
              .join('')
              .toUpperCase()}
          </AvatarFallback>
        </Avatar>
      ))}
      {extra > 0 && (
        <span
          className={cn(
            avatarVariants({ size }),
            overlap,
            'items-center justify-center bg-gray-200 text-gray-700 shadow-[0_0_0_2px_var(--white)]'
          )}
        >
          +{extra}
        </span>
      )}
    </div>
  );
}

export { Avatar, AvatarFallback, AvatarGroup, AvatarImage };
export type { AvatarPerson };
