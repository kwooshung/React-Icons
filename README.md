<div align="center">

# @kwooshung/react-icons

## It is more convenient to use `svg` as `React` icon, which has strong operability and high degree of freedom.

[![GitHub License](https://img.shields.io/github/license/kwooshung/React-Icons?labelColor=272e3b&color=165dff)](LICENSE)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/kwooshung/React-Icons?labelColor=272e3b&color=00b42A&logo=github)
![GitHub last commit](https://img.shields.io/github/last-commit/kwooshung/React-Icons?labelColor=272e3b&color=165dff)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/kwooshung/React-Icons?labelColor=272e3b&color=165dff)
![GitHub top language](https://img.shields.io/github/languages/top/kwooshung/React-Icons?labelColor=272e3b&color=165dff)
![GitHub pull requests](https://img.shields.io/github/issues-pr/kwooshung/React-Icons?labelColor=272e3b&color=165dff)
![GitHub issues](https://img.shields.io/github/issues/kwooshung/React-Icons?labelColor=272e3b&color=165dff)
![Github Stars](https://img.shields.io/github/stars/kwooshung/React-Icons?labelColor=272e3b&color=165dff)
[![NPM Version](https://img.shields.io/npm/v/@kwooshung/react-icons?labelColor=272e3b&color=165dff)](https://www.npmjs.com/package/@kwooshung/react-icons)
[![Npm.js Downloads/Week](https://img.shields.io/npm/dw/@kwooshung/react-icons?labelColor=272e3b&labelColor=272e3b&color=165dff&logo=npm)](https://www.npmjs.com/package/@kwooshung/react-icons)
[![Github CI/CD](https://github.com/kwooshung/React-Icons/actions/workflows/ci.yml/badge.svg)](https://github.com/kwooshung/React-Icons/actions/)
[![codecov](https://codecov.io/gh/kwooshung/React-Icons/graph/badge.svg?token=cDGeXFY45W)](https://codecov.io/gh/kwooshung/React-Icons)
[![Maintainability](https://api.codeclimate.com/v1/badges/40b8bb79cf908037ee92/maintainability)](https://codeclimate.com/github/kwooshung/React-Icons/maintainability)
[![Gitee Repo](https://img.shields.io/badge/Gitee-React--Icons-165dff?logo=gitee)](https://gitee.com/kwooshung/React-Icons/)

<p align="center">
    <a href="README.md" style="font-weight:700;color:#165dff;text-decoration:underline;">English</a> | 
    <a href="README.zh-CN.md">中文</a>
</p>
</div>

# Why Develop It?

- So, I think directly importing icons as components into my project is the most suitable way for me.
- Because current **React websites** only load the entire page during the initial load. During route switching, there's no whole page reload, and writing them once in the global structure won't pose any performance issues (after all, the dynamic creation process of [IconFont](https://www.iconfont.cn/) scripts works the same way).

# What Pain Points Does It Solve?

- Why not directly import SVGs and auto-generate icons?
  - Because I don't like this way of importing, and the componentization functionality is not strong or flexible enough.
- Why not directly use [IconFont](https://www.iconfont.cn/) to import **script**?
  - I quite like this method, but it’s troublesome to manage icons on the official website every time;
  - It's also bothersome to upload my own icons, especially since the review mechanism is very strict; for example, I wanted to upload a Chinese flag icon to support internationalization, but the review system didn't allow it;
  - There was an incident where [IconFont](https://www.iconfont.cn/) suddenly announced they would close their CDN service. Although the existing icon links were not affected, modifying the icon library became impossible, and I had to download them myself. Later on, they reopened the service, but such instability is worrying;
- Full control over tags and SVG structure;
- Supports **prefix** for easy management;

# Why Use It?

- Supports custom SVG icons, allowing you to use any icons you like;
- Supports customization of the loading bar's style, such as color, size, rotation direction, and animation;
- Supports bilingual annotations in both English and Chinese;
- Low learning curve, simple and flexible usage;
- Implemented using modern features of **ES6**;
- Written in **TypeScript** for type safety;
- Supports modular import on demand with `esm`, natively supporting **tree-shaking**, so there's no need to worry about the package size post-compilation;
- This project also provides a `commonjs` (`cjs`) version;
- Test coverage **100%**;

# Installation

## npm

```bash
npm install @kwooshung/react-icons
```

## yarn

```bash
yarn add @kwooshung/react-icons
```

## pnpm

```bash
pnpm add @kwooshung/react-icons
```

# Usage

## Style

In some frameworks, you can directly import the styles in the global `css` / `less` / `scss` files as shown below:

```css
@import url('@kwooshung/react-icons/dist/index.css');
```

In certain frameworks, like `Next.js`, you may need to add a `~` symbol for it to work, as shown below:

```css
@import url('~@kwooshung/react-icons/dist/index.css');
```

You can also import it in a global page, such as the `Layout` page in `Next.js`, or within the corresponding component, as shown below:

```tsx
import '@kwooshung/react-icons/dist/index.css';
```

## Components

Introduced in a global component, such as `Layout.tsx`, as shown below:

```tsx
import '@kwooshung/react-icons/dist/index.css';
import { KsIconsConfig, KsIconSymbol, KsIcon } from '@kwooshung/react-icons';

const icons = (
  <>
    <symbol id='thumb' viewBox='0 0 1024 1024' fill='currentColor'>
      <path d='M845.312 478.72c-31.744-8.192-105.984-8.192-215.04-11.264 5.12-23.552 6.144-45.056 6.144-83.456 0-90.624-66.048-171.008-124.928-171.008-41.472 0-75.264 33.792-75.776 75.264-0.512 51.2-16.384 139.264-101.376 183.808-6.144 3.072-24.064 12.288-26.624 13.312l1.536 1.024c-13.312-11.264-31.744-20.48-50.688-20.48H182.784c-41.984 0-75.776 34.304-75.776 75.776v404.992c0 41.984 34.304 75.776 75.776 75.776h75.776c30.208 0 55.296-18.432 67.584-43.52 0.512 0 1.024 0 1.024 0.512 1.536 0.512 3.584 1.024 6.144 1.536 0.512 0 0.512 0 1.024 0.512 14.336 3.584 42.496 10.24 102.912 24.064 12.8 3.072 80.896 17.408 151.04 17.408h138.24c41.984 0 72.704-16.384 90.624-48.64 0-0.512 6.144-11.776 10.752-27.136 3.584-11.776 5.12-28.16 0.512-44.544 27.136-18.944 35.84-47.104 41.472-65.536 9.728-30.208 6.656-52.736 0-69.12 15.36-14.336 28.16-36.352 33.792-70.144 3.584-20.992 0-42.496-9.728-59.904 14.336-15.872 20.992-36.352 21.504-55.296l0.512-5.12c0-3.072 0.512-5.12 0.512-12.8 0.512-31.232-21.504-71.68-71.168-86.016zM284.16 948.224c0 13.824-11.264 25.088-25.088 25.088H182.784c-13.824 0-25.088-11.264-25.088-25.088V542.72c0-13.824 11.264-25.088 25.088-25.088h75.776c13.824 0 25.088 11.264 25.088 25.088v405.504z m581.632-366.592c-0.512 12.288-5.632 36.864-50.176 36.864h-50.688c-7.168 0-12.8 5.632-12.8 12.8s5.632 12.8 12.8 12.8h49.152c37.888 0 43.008 31.744 40.448 46.592-3.072 18.944-11.776 54.784-54.784 54.784h-59.904c-7.168 0-12.8 5.632-12.8 12.8s5.632 12.8 12.8 12.8h49.664c42.496 0 38.912 32.768 32.768 52.224-8.192 25.6-12.8 49.152-67.072 49.152h-41.472c-7.168 0-12.8 5.632-12.8 12.8s5.632 12.8 12.8 12.8h39.936c27.648 0 29.184 26.112 26.112 35.84-3.072 10.24-7.168 17.92-7.168 18.432-7.68 13.824-19.968 22.016-46.08 22.016h-138.24c-69.632 0-138.752-15.872-140.288-16.384-104.96-24.064-110.592-26.112-117.248-28.16 0 0-21.504-3.584-21.504-22.528v-349.696c0-11.776 7.68-22.528 19.968-26.624 1.536-0.512 3.584-1.024 5.12-2.048C450.56 480.768 485.888 375.808 486.912 289.792c0-12.288 9.728-25.088 25.088-25.088 26.624 0 74.24 53.76 74.24 120.32 0 59.904-2.56 70.656-23.552 133.12 253.44 0 251.392 3.584 273.92 9.728 27.648 7.68 30.208 30.72 30.208 38.912 0 7.68-0.512 6.144-1.024 14.848z m-645.12 290.304c-20.992 0-37.888 16.896-37.888 37.888 0 20.992 16.896 37.888 37.888 37.888s37.888-16.896 37.888-37.888c0-20.992-16.896-37.888-37.888-37.888z m0 50.688c-7.168 0-12.8-5.632-12.8-12.8s5.632-12.8 12.8-12.8 12.8 5.632 12.8 12.8-5.632 12.8-12.8 12.8zM512 168.96c-16.896 0-30.72-13.824-30.72-30.72V35.84c0-16.896 13.824-30.72 30.72-30.72s30.72 13.824 30.72 30.72v102.4c0 16.896-13.824 30.72-30.72 30.72zM357.376 240.64c-11.776 11.776-31.232 11.776-43.52 0L241.664 168.448c-11.776-11.776-11.776-31.232 0-43.52 11.776-11.776 31.232-11.776 43.52 0l72.192 72.192c11.776 12.288 11.776 31.744 0 43.52zM666.624 240.64c-11.776-11.776-11.776-31.232 0-43.52l72.192-72.192c11.776-11.776 31.232-11.776 43.52 0 11.776 11.776 11.776 31.232 0 43.52L710.144 240.64c-11.776 12.288-31.232 12.288-43.52 0z' />
    </symbol>
    <symbol id='earth' viewBox='0 0 1024 1024' fill='currentColor'>
      <path d='M512 0C229.2 0 0 229.2 0 512s229.2 512 512 512 512-229.2 512-512S794.8 0 512 0zM337.6 924.8c-53.3-22.6-101.3-54.9-142.4-96-41.2-41.2-73.5-89.1-96-142.4C75.8 631.2 64 572.5 64 512c0-29 2.7-57.6 8.1-85.5 6.5 2.5 13.8 3.9 20.9 3.9 9.7 0 19.3-2.4 27.1-7.6 8-5.3 17.3-8.1 26.5-8.1 7.9 0 15.8 2.1 22.8 6.4 8.1 5 13.8 11.6 13.8 22.8 0 81.6 2.8 168.7 76.9 169.9 2.2 0 41.2 14.9 59.8 63.3 2.2 5.6 6.4 7.4 12.2 7.4 11.5 0 29-7.4 47.6-7.4 13.9 0 0 23.6 0 74.5C379.8 802 489 880.1 489 880.1c-0.6 32 0.9 58.5 3.3 79.4-53.5-2.2-105.5-13.9-154.7-34.7z m491.2-96c-41.2 41.2-89.1 73.5-142.4 96-24.4 10.3-49.4 18.4-75 24.1-1.5-0.3-3.2-0.4-5-0.4-3.5 0-7.5 0.5-12 1.7 15.5-65.5 22.9-102.4 54.9-130.2 44-38.2 9.7-80.4-24-80.4-1.9 0-3.9 0.1-5.8 0.4-1.5 0.2-2.8 0.3-4 0.3-22.2 0-7.5-34.9-31.1-36.9-24.8-2.1-57.3-51.4-93.4-68.5-19-9-37.5-33.2-67-34.5h-1.7c-18.6 0-42.3 11.1-54.4 11.1-4.8 0-7.8-1.8-7.8-6.7 0-57.1-5.9-97.7-6.8-113.8-0.4-5.5-2-7.1-1.1-7.1 1.2 0 7.2 3.2 27.8 3.7h0.5c18.6 0 9.7-38.5 28.1-40 0.8-0.1 1.6-0.1 2.4-0.1 16.4 0 47.5 11.8 63.8 11.8 3.4 0 6.1-0.5 7.9-1.7 0.2-0.1 0.4-0.2 0.7-0.2 8.8 0 43.4 86.3 62.8 86.3 8 0 13.4-14.7 13.4-56 0-17.1-9-46.9 0-63.3 35.1-64.2 67.9-116.7 65.1-124.1-0.9-2.3-11.3-4.4-25-4.4-11.7 0-25.7 1.5-38.3 5.6-9.4 3.1 2.8 17.7-10.2 20.8-8.7 2-17.2 2.9-25.2 2.9-38.2 0-65.8-20.3-53.3-39.8 15.9-23.9 72.8-10.6 77.9-58.6 2.3-22.2 4.3-47.2 5.8-68.5 0.5-7.7 6.7-13.7 14.4-14.2 37.2-2.7 41-47 6.2-75.3 37.5 5.4 74.1 15.6 109.2 30.5 53.3 22.6 101.3 54.9 142.4 96 37.4 37.4 67.4 80.3 89.6 127.8-5.7-3.5-11.6-5.2-17.4-5.2-28.3 0-54.2 38.4-38 82-133 102-98.9 173.4-55.5 214 12.8 12 25.4 27.4 36.4 42.7 10.6 14.6 17.2 31.5 21 49.2 1.4 6.4 6.4 9.6 13.7 9.6 11 0 27-7.3 43.1-21.7-22.2 50.3-53.4 95.8-92.7 135.1z' />
    </symbol>
  </>
);

const Demo = () => {
  return (
    <KsIconsConfig icons={icons} prefix='demo'>
      <KsIcons name='thumb' spin={100} />
      <KsIcons name='earth' />
    </KsIconsConfig>
  );
};

export default Demo;
```

# API

## Props

For the following types, please refer to: [interfaces.d.ts](src/icons/interfaces.d.ts)

### KsIconsConfig

### Props

| Parameters | Description | Type          | Default value    | Required |
| ---------- | ----------- | ------------- | ---------------- | -------- |
| icons      | Icon Groups | `JSX.Element` | `React.Fragment` | Yes      |
| prefix     | Icon Prefix | `string`      | `''`             | No       |

### KsIcon

#### Props

| Parameters | Description        | Type                 | Default value | Required |
| ---------- | ------------------ | -------------------- | ------------- | -------- |
| name       | Icon Name          | `string`             | -             | Yes      |
| id         | ID                 | `string`             | -             | No       |
| className  | className Style    | `string`             | -             | No       |
| size       | Size               | `number`             | `0`           | No       |
| rotate     | Rotation angle     | `number`             | `0`           | No       |
| spin       | Rotation animation | `number`\| `boolean` | `0`           | No       |

#### Events

| Parameters    | Description        | Type                                     |
| ------------- | ------------------ | ---------------------------------------- |
| onClick       | Click event        | `(e: MouseEvent<SVGSVGElement>) => void` |
| onDoubleClick | Double click event | `(e: MouseEvent<SVGSVGElement>) => void` |
