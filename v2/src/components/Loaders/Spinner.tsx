import { cn } from '@/utils';

type Props = {
  color?: string;
  innerColor?: string;
};
const LoadingSpinner = ({ color, innerColor }: Props) => (
  <div className="relative h-9 w-9 sm:h-16 sm:w-16 ">
    <div
      className={cn(
        'animate-loadspin rounded-full border-4 border-r-transparent border-b-transparent',
        color || 'border-primary-100 dark:border-dark-two',
        'border-solid h-full w-full absolute',
      )}
    />

    <div
      className={cn(
        'rounded-full border-4',
        innerColor || 'border-primary-100/30 dark:border-dark-two',
        'border-solid h-full w-full',
      )}
    />
  </div>
);

export default LoadingSpinner;
