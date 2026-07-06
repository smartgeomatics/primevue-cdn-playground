# PrimeVue Playground

A zero-install sandbox for exploring and styling [PrimeVue](https://primevue.org) components.

## How to run

**Double-click `index.html`.** That's it — no installation, no terminal, no build tools.

The only requirement is an internet connection, because Vue, PrimeVue, the theme and the icons are loaded from a CDN.

## The files

| File | What it is |
|---|---|
| `index.html` | The page. All components live here — add, remove, rearrange them freely. |
| `custom.css` | **Your styling playground.** Page layout plus a section for overriding PrimeVue's design tokens. |
| `app.js` | Technical setup (sample data, component registration). Mostly leave alone. |

## Styling components

PrimeVue is styled entirely through CSS variables called **design tokens** (they all start with `--p-`). Open dev tools, inspect any component, and you'll see them. Override them in the "YOUR EXPERIMENTS" section of `custom.css`, for example:

```css
:root:root {
    --p-button-border-radius: 999px;
    --p-primary-color: #e11d48;
}
```

Components also carry plain CSS classes (`.p-button`, `.p-card`, …) you can target directly.

Use the **Dark mode** button in the top-right corner to check your styles in both modes.

## Adding a component

Every component is documented at https://primevue.org (left sidebar). To use one that isn't on the page yet, e.g. *InputMask*:

1. Register it once at the bottom of `app.js`:
   ```js
   app.component('p-inputmask', PrimeVue.InputMask);
   ```
2. Use it in `index.html`:
   ```html
   <p-inputmask v-model="text" mask="99-9999"></p-inputmask>
   ```

Two small translation rules when copying examples from the docs:

- The docs write tags like `<InputMask>` — here they are lowercase with a `p-` prefix: `<p-inputmask>`.
- Attributes written in camelCase in the docs (`showIcon`) become kebab-case here (`show-icon`).

## Changing the theme

PrimeVue ships four theme presets: **Aura** (default here), **Lara**, **Nora**, **Material**. To switch:

1. In `index.html`, change the theme script tag, e.g. `.../umd/aura.js` → `.../umd/lara.js`
2. In `app.js` (top of file), change `PrimeUIX.Themes.Aura` → `PrimeUIX.Themes.Lara`

## Useful links

- Component docs & demos: https://primevue.org
- Icon list: https://primevue.org/icons/
- Theming / design tokens: https://primevue.org/theming/styled/
