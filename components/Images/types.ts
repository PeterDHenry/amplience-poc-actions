export type LazyLoadImageProps = {
  altText: string
  animationDuration: number
  applyAspectRatio: boolean
  height: number
  id?: string
  width: number
}

export type HeroImageProps = {
  altText: string
  id: string
}

export const defaultLazyLoadImageProps: LazyLoadImageProps = {
  altText: 'Default alt text',
  id: 'homepage-h-d',
  animationDuration: 0.1,
  width: 1920,
  height: 650,
  applyAspectRatio: true,
}

export const defaultHeroImageProps: HeroImageProps = {
  altText: 'Default hero alt text',
  id: 'homepage-h-d',
}
