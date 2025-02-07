# WAVS Docs

Welcome to the official documentation for WAVS, a WASI AVS runtime for streamlined AVS development.

These docs were built using [Fumadocs](https://fumadocs.vercel.app/docs/ui).

## Build Locally

```
npm i
npm run dev
```

## Updating the theme

This site is built with [Fumadocs](https://fumadocs.vercel.app/docs/ui/theme). To update the theme, navigate to `tailwind.config.js`, and `global.css`. Styles are generated/applied by the tailwind config, which references the variables defined in the global CSS file.

Because the actual class names are generated by Fumadocs, you'll have to overwrite/"extend" the variables you want to change, and play around with what does what. They are loosely based on [shad/cn](https://ui.shadcn.com/docs/theming)'s theming, which may be a good reference.

## Docs components

### Callouts

```
import { Callout } from 'fumadocs-ui/components/callout';
<Callout title="Info" type="info">
  Hello World
</Callout>

<Callout title="Error" type="error">
  Hello World
</Callout>

<Callout title="Warn" type="warn">
  Hello World
</Callout>
```

### Cards

```
import {Layers, Microscope } from 'lucide-react';

<Cards>
  <Card
    icon={<Layers />}
    href="/about"
    title="About"
    description="Learn about Layer"
  />
    <Card
    icon={<Microscope />}
    href="/how-it-works"
    title="How it works"
    description="Discover how Layer works"
  />
</Cards>

```

### Tabs

```
import { Tab, Tabs } from 'fumadocs-ui/components/tabs';
 
<Tabs items={['Javascript', 'Rust']}>
  <Tab value="Javascript">Javascript is weird</Tab>
  <Tab value="Rust">Rust is fast</Tab>
</Tabs>
```
