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
