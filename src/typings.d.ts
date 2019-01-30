declare module "*.svg";
declare module "*.jpg";

declare module "*module.css" {
  const cssModule: { [key: string]: string };
  export default cssModule;
}
