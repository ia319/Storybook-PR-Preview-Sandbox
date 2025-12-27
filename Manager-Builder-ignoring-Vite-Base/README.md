# Issue #30434 Reproduction: Manager Builder ignoring Vite Base

This sandbox demonstrates a fix for [Issue #30434](https://github.com/storybookjs/storybook/issues/30434), where `builder-manager` ignores the `base` configuration from `viteFinal`.

## Steps to Verify

### 1. Install & Build

```bash
yarn install
yarn build-storybook
```

### 2. Verify Output

Check if the generated `index.html` uses the configured base path (`/design-system/`).

```bash
grep -E "sb-manager|sb-addons" storybook-static/index.html | head -5
```

**Output should contain absolute paths:**
```html
<link href="/design-system/sb-manager/runtime.js" rel="modulepreload" />
<link href="/design-system/sb-addons/..." rel="modulepreload" />
```

If the paths start with `./` (relative paths), the fix is **NOT** working.
