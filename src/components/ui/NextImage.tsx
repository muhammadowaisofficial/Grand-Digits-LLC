'use client'
import React, { FC } from 'react';
import { cn } from '@/utils/utils';
import Image, { ImageProps } from 'next/image';
import { useState } from 'react';

interface NextImageProps extends ImageProps {}

const NextImage: FC<NextImageProps> = (props: NextImageProps) => {
  const { src, alt, height, width, priority, className, ...rest } = props;
  const [loaded, setLoaded] = useState(false);
  return (
    <>
      {props.fill ? (
        <Image
          src={src}
          alt={alt}
          fill
          draggable={false}
          priority={priority}
          className={cn(
            'object-contain duration-500 ease-in-out group-hover:opacity-75',
            !loaded
              ? 'scale-95 blur-2xl grayscale'
              : 'scale-100 blur-0 grayscale-0',
            props.className
          )}
          onLoadingComplete={() => setLoaded(true)}
          {...rest}
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          height={height}
          width={width}
          draggable={false}
          className={cn(
            'object-contain duration-500 ease-in-out group-hover:opacity-75',
            !loaded
              ? 'scale-95 blur-2xl grayscale'
              : 'scale-100 blur-0 grayscale-0',
            props.className
          )}
          onLoadingComplete={() => setLoaded(true)}
          {...rest}
        />
      )}
    </>
  );
};

export default NextImage;
