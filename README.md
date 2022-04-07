## Getting Started

First, create a conda environment in the root directory of the application and activate it:

```bash
conda create --yes --prefix ./.conda-env --file conda.txt
conda activate ./.conda-env
```

Second, install dependencies:
```bash
cd nextjs-postcss-tailwind
npm install
```

Finally, run the development server:

```bash
npm run dev
```

Error should appear in the terminal or in the browser:

```bash
Error: tailwindcss is not a PostCSS plugin
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the error.

## Learn More

To learn more about how to configure Next.js, Tailwind, Postcss and it's plugins:

- [Next.js Customizing PostCSS Config](https://nextjs.org/docs/advanced-features/customizing-postcss-config) - Next.js explicit recommend to avoid `require()`.
- [postcss-each](https://github.com/madyankin/postcss-each#beforeeach) - A PostCSS plugin to iterate through values recommends to use beforeEach to keep import order of the plugins.
- [Tailwind and Postcss-each](https://github.com/tailwindlabs/tailwindcss/discussions/7362#discussioncomment-2132610) - Tailwindcss plugin should be called before each iteration.

## Expected behaviour

Tailwindcss plugin is found when called inside `beforeEach` without `require()` as defined in the Next.js documentation.

## Workaround in the meantime

Call Tailwindcss plugin inside `beforeEach` with `require` function and impact the [perfomance](https://github.com/vercel/next.js/issues/10117#issuecomment-574899412) of the application.

Use `postcss-each` v0.10.0 with medium vulnerabilities.

