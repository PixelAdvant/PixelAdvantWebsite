import { ImgHTMLAttributes } from 'react';

interface LazyImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  /** Set to true for above-the-fold images (hero, logo) to disable lazy loading */
  eager?: boolean;
}

/**
 * SEO-optimised image component with lazy loading by default.
 * Use eager={true} for above-the-fold images (hero section, logos).
 */
const LazyImage = ({ eager = false, alt = '', ...props }: LazyImageProps) => {
  return (
    <img
      loading={eager ? 'eager' : 'lazy'}
      decoding={eager ? 'sync' : 'async'}
      alt={alt}
      {...props}
    />
  );
};

export default LazyImage;
