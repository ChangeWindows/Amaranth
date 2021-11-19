import clsx from 'clsx';
import { IconDefinition } from './Amaranth';

interface AmaranthProps {
  icon: IconDefinition
  className?: string
  rotate?: 0 | 90 | 180 | 270 | false
  spin?: boolean
}

export default function AmaranthIcon({
  icon,
  className,
  rotate = false,
  spin = false,
  ...props
}: AmaranthProps) {
  return (
    <div
      className={
        clsx(
          'ai',
          className,
          {
            'ai-spin': spin,
            [`ai-rotate-${rotate}`]: rotate
          }
        )
      }
      {...props}
      dangerouslySetInnerHTML={{ __html: icon.data }}
    />
  );
}