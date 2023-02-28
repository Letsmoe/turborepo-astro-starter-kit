# Turborepo Starter Kit

This is an unofficial starter Kit for Turborepo.

## What's inside?

This Turborepo uses [pnpm](https://pnpm.io) as a package manager. The following apps/packages are already included out of the box:

### Apps and Packages

- `web`: A [Tailwind](https://tailwindcss.com/) + [Svelte](https://svelte.dev/) + [Astro](https://astro.build/) app.
- `ui`: A shared Svelte component library.
- `math-functions`: A shared library with vitest already set up.
- `config`: Shared `eslint`, `vitest` and `tailwind` configuration files.
- `tsconfig`: Shared `tsconfig.json`s used throughout the repo.

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
- [Cypress](https://www.cypress.io/) for e2e testing in all apps
- [Vitest](https://vitest.dev/) for unit tests in all library packages

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
pnpm run build
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo
pnpm run dev
```

### Lint/Format

To run linting or formatting on all files, run:

```
cd my-turborepo
pnpm run lint
pnpm run format
```

### Testing

To run tests on all packages/apps, run the following command:
Be sure to start the dev servers beforehand since they're not automatically started on each test run.
If you would like to change that, check out the [config details](#config) for more information.

```
cd my-turborepo

[ pnpm run dev ]

pnpm run test
```

### Filtering

If you would like to run commands on a subset of packages/apps, run a command with the `--filter` argument.

```
cd my-turborepo
pnpm run test --filter=web --filter=math-functions
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd my-turborepo
pnpm dlx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your turborepo:

```
pnpm dlx turbo link
```

## Config

This section will teach you how the configuration files have been setup and how you can modify them.

### Eslint

The `.eslintrc.cjs` files are present in all packages/apps that support linting (everywhere where there is a `.ts` or `.js` file).
Linting will ensure a consistent style of code across all your packages/apps and will force collaborators to write code that others can actually understand.

The `.eslintrc.cjs` files currently all inherit from the same `.eslintrc.cjs` file in the `packages/config` directory. This file includes the parser option (`@babel/eslint-parser`) and some [rules](https://eslint.org/docs/latest/rules) as well as the `simple-import-sort` plugin which will help you organize your imports.
If you want to modify it, just change up some rules.
If you want to add another plugin just run these commands:

```
cd my-turborepo
pnpm add <YOUR_PLUGIN_NAME> --filter=config
```

And add the plugin name to the `plugins` array in the `.eslintrc.cjs` file.

### Prettier

The `.prettierrc` config can be found at the workspace root.
It is already pre-configured to my liking, you can of course change it up so it fits your needs.
The prettier reference can be found [here](https://prettier.io/docs/en/configuration.html)

### Cypress

The `web` app already includes a Cypress configuration to enable e2e testing. The reference for tinkering with that can be found [here](https://docs.cypress.io/guides/references/configuration).

### Vitest

Packages can be tested via [Vitest](https://vitest.dev), a library for unit-testing, there is a shared configuration in the `config` directory. The reference for all settings can be found [here](https://vitest.dev/config/).

### Tailwind

The [Tailwind](https://tailwindcss.com/) configuration can be found in the `packages/config` directory. It is a shared configuration so that your repos style feels consistent across multiple apps. You can find all configuration options [here](https://tailwindcss.com/docs/configuration).

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
