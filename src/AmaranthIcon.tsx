import clsx from 'clsx';
import { IconDefinition } from './Amaranth';

interface AmaranthProps {
  icon: IconDefinition
  className?: string
  flip?: true | 'x' | 'y' | false
  rotate?: 0 | 90 | 180 | 270 | false
  spin?: boolean
}

export default function AmaranthIcon({
  icon,
  className,
  flip,
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
            [`ai-rotate-${rotate}`]: rotate,
            'ai-flip': flip === true,
            [`ai-flip-${flip}`]: flip === 'x' || flip === 'y'
          }
        )
      }
      {...props}
      dangerouslySetInnerHTML={{ __html: icon.data }}
    />
  );
}