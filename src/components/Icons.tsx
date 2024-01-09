export interface Props {
  size?: number;
}

export const IconUser: React.FC<Props> = ({ size = 50 }) => {
  return (
<svg width={size} height={size} viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
  <path fill="currentColor" d="M248 104c-53 0-96 43-96 96s43 96 96 96s96-43 96-96s-43-96-96-96m0 144c-26.5 0-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48m0-240C111 8 0 119 0 256s111 248 248 248s248-111 248-248S385 8 248 8m0 448c-49.7 0-95.1-18.3-130.1-48.4c14.9-23 40.4-38.6 69.6-39.5c20.8 6.4 40.6 9.6 60.5 9.6s39.7-3.1 60.5-9.6c29.2 1 54.7 16.5 69.6 39.5c-35 30.1-80.4 48.4-130.1 48.4m162.7-84.1c-24.4-31.4-62.1-51.9-105.1-51.9c-10.2 0-26 9.6-57.6 9.6c-31.5 0-47.4-9.6-57.6-9.6c-42.9 0-80.6 20.5-105.1 51.9C61.9 339.2 48 299.2 48 256c0-110.3 89.7-200 200-200s200 89.7 200 200c0 43.2-13.9 83.2-37.3 115.9"/>
</svg>
  )
}
export const IconScore: React.FC<Props> = ({ size = 50 }) => {
  return (
<svg width={size} height={size} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <path fill="currentColor" d="m22 27.18l-2.59-2.59L18 26l4 4l8-8l-1.41-1.41z"/>
    <path fill="currentColor" d="M25 5h-3V4a2.006 2.006 0 0 0-2-2h-8a2.006 2.006 0 0 0-2 2v1H7a2.006 2.006 0 0 0-2 2v21a2.006 2.006 0 0 0 2 2h9v-2H7V7h3v3h12V7h3v11h2V7a2.006 2.006 0 0 0-2-2m-5 3h-8V4h8Z"/>
</svg>
  )
}

export const IconError: React.FC<Props> = ({ size = 50 }) => {
  return (
<svg width={size} height={size} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <path fill="currentColor" fillRule="evenodd" d="M8 14.5a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m1-5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-.25-6.25a.75.75 0 0 0-1.5 0v3.5a.75.75 0 0 0 1.5 0z" clipRule="evenodd"/>
</svg>
  )
}
export const IconRight: React.FC<Props> = ({ size = 50 }) => {
  return (
<svg width={size} height={size} viewBox="0 0 1200 1200" xmlns="http://www.w3.org/2000/svg">
    <path fill="currentColor" d="M600 0C268.63 0 0 268.63 0 600s268.63 600 600 600c331.369 0 600-268.63 600-600S931.369 0 600 0m0 130.371c259.369 0 469.556 210.325 469.556 469.629c0 259.305-210.187 469.556-469.556 469.556c-259.37 0-469.556-210.251-469.556-469.556C130.445 340.696 340.63 130.371 600 130.371m229.907 184.717L482.153 662.915L369.36 550.122L258.691 660.718l112.793 112.793l111.401 111.401l110.597-110.669l347.826-347.754z"/>
</svg>
  )
}

