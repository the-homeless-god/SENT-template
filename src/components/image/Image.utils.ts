export type ImageProps = {
  alt: string
  caption?: string
  height: string
  src: string
  width: string

  onCaptionClick?: () => void
  onClick?: () => void
}

export const initialState: ImageProps = {
  alt: 'logo',
  src: 'assets/img/logo.png',
  height: '100%',
  width: '100%',
}

export const initialStoryState: ImageProps = {
  ...initialState,
  src: 'https://github.com/Zimtir/SENT-template/blob/master/public/assets/img/logo.png?raw=true',
}

export const isNoEmptyAlt = (alt: string): boolean => {
  if (alt && alt.length > 0 && alt !== '') {
    return true
  }
  return false
}
