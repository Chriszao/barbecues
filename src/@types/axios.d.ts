import 'axios';

declare module 'axios' {
  export interface HeadersDefaults extends HeadersDefaults {
    authorization: string;
  }
}
