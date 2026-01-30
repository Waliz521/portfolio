# Theme styles

Each theme is in its own file so they don’t overlap or override each other by mistake.

- **dark.css** – Default theme. Defines `:root` variables (green/dark palette). Used when no `data-theme` is set or when `data-theme="dark"`.
- **dune.css** – Dune theme. Defines `[data-theme="dune"]` variables and overrides (cream → yellow → orange → red). Used when `data-theme="dune"` is set on `<html>`.

Component styles (header, hero, projects, etc.) use the shared variables (`--color-text`, `--color-background`, etc.). Only theme files set or override those variables and add theme-specific rules.

To add a new theme: create a new file (e.g. `themes/light.css`) and define `[data-theme="light"] { ... }` with your variables and overrides, then import it in `src/index.css` after the other theme files.
