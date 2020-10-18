declare module '*.mdx';
declare module '*.jpg';
declare module "*.png" {
    const value: string;
    export default value;
  }