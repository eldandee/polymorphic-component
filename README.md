# Aviationexam Interview Task

There is a Button component in the `./src/components/Button` folder. Aim of this task is to replace it with a component which is able to do the following:

- by default, render component button, this button can take any prop normal HTMLButtonElement can
- if specified, render the button component as HTMLAnchorElement instead, meaning the resulting HTML will be `<a ...>...</a>` instead of `<button ...>...</button>`, in this case typescript should also provide type hinting for anchor tag props (`href`, `target`, ...)

Bonus:

- make the Button component be able to use any component, not just HTMLAnchorElement, meaning if you have `CustomComponent` with `CustomComponentProps` interface as its props, the component should render HTML based on the `CustomComponent` and the typescript should hint the `CustomComponentProps` when using it
