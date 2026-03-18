declare module "leaflet" {
  export class Icon {
    constructor(options?: IconOptions)
  }
  export type IconOptions = Record<string, unknown>
}

declare module "react-leaflet" {
  import * as React from "react"
  export const MapContainer: React.ComponentType<Record<string, unknown>>
  export const TileLayer: React.ComponentType<Record<string, unknown>>
  export const Marker: React.ComponentType<Record<string, unknown>>
  export const Popup: React.ComponentType<Record<string, unknown>>
}
