import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

import { cn } from '@/shared/utils';

export type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'label1'
  | 'label2'
  | 'p1'
  | 'p2'
  | 'caption1'
  | 'caption2';

const variantClasses: Record<TypographyVariant, string> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  label1: 'label1',
  label2: 'label2',
  p1: 'p1',
  p2: 'p2',
  caption1: 'caption1',
  caption2: 'caption2'
};

const defaultVariantMapping: Record<TypographyVariant, ElementType> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'p',
  h4: 'p',
  h5: 'p',
  label1: 'p',
  label2: 'p',
  p1: 'p',
  p2: 'p',
  caption1: 'p',
  caption2: 'p'
};

type TypographyProps<C extends ElementType = ElementType> = {
  component?: C;
  variant?: TypographyVariant;
  className?: string;
  children?: ReactNode;
} & Omit<ComponentPropsWithoutRef<C>, 'className' | 'children'>;

export function Typography<C extends ElementType = 'p'>({
  component,
  variant = 'p1',
  className,
  ...props
}: TypographyProps<C>) {
  const Component = (component ??
    defaultVariantMapping[variant]) as ElementType;

  return (
    <Component className={cn(variantClasses[variant], className)} {...props} />
  );
}
