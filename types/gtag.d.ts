export type GtagEventParams = Record<string, string | number | boolean>;

export type GtagFunction = (
  command: "event",
  eventName: string,
  eventParams?: GtagEventParams,
) => void;

declare global {
  interface Window {
    gtag?: GtagFunction;
  }
}

export {};
