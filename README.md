# Vitest Circular Dependency Demo

This is a demo project to show what happens when you have circular dependencies in your project and how to fix them.

## Getting Started

1. Clone the repository: `git clone https://github.com/Maxim-Mazurok/vitest-circular-dependency-demo`
1. `cd vitest-circular-dependency-demo`
1. (optional) Use appropriate Node.js version: `nvm i`
1. Install dependencies: `npm ci`
1. Run the tests: `npm test`

## Notes

The idea is pretty simple: you have router, and component. Router imports component (to render it), and component imports router (to get own page URL). This creates a circular dependency.

Check comments in these files for details:

- [src-bad/component-first.spec.ts](src-bad/component-first.spec.ts)
- [src-bad/router-first.spec.ts](src-bad/router-first.spec.ts)

And compare them with the fixed versions:

- [src-good/component-first.spec.ts](src-good/component-first.spec.ts)
- [src-good/router-first.spec.ts](src-good/router-first.spec.ts)

Another approach is to just extract constants into separate file to avoid circular dependencies.

This can be helpful to detect and fix circular dependencies in your project: https://www.npmjs.com/package/vite-plugin-circular-dependency
