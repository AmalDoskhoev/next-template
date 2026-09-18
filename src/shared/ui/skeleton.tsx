import { cn } from '@/shared/utils';

function Skeleton({
  className,
  width,
  height,
  ...props
}: React.ComponentProps<'div'> & {
  width?: string | number;
  height?: string | number;
}) {
  return (
    <div
      data-slot="skeleton"
      className={cn('animate-pulse rounded-[10px] bg-(--gray-100)', className)}
      style={{ width, height }}
      {...props}
    />
  );
}

export { Skeleton };
