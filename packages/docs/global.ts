/// <reference types="@repo/dts/common" />

declare module "*.png" {
  const src: string;
  // eslint-disable-next-line import/no-default-export -- allow default export for PNG files
  export default src;
}
