# React Component Library Template

Includes:

- react as external dependency (not included in resulting bundle)
- rollup
- TypeScript
- CSS modules support
- Jest support
- Ladle for stories

## Usage

Clone using `degit` to new directory:

```bash
npx degit https://github.com/maxatwork/react-library-template my-react-lib
cd my-react-lib
```

Initialize Git repository:

```bash
git init
```

Install dependencies:

```bash
npm install
```

Create initial commit:

```bash
git add .
git commit -m "Initial commit"
```

Build library:

```bash
npm run build
```

Run tests:

```bash
npm run test

-- OR --

npm run test:watch
```

Run Ladle:

```bash
npm run ladle
```
