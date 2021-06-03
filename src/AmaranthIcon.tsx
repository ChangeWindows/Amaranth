import clsx from 'clsx';
import { IconDefinition } from './Amaranth';

interface AmaranthProps {
  icon: IconDefinition
  className?: string
  spin?: boolean
}

export default function AmaranthIcon({
  icon,
  className,
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
            'ai-spin': spin
          }
        )
      }
      {...props}
      dangerouslySetInnerHTML={{ __html: icon.data }}
    />
  );
}