# MXT Blog

This is a personal blog that built using **Next.js 15 (app directory)** and **HeroUI (v2)**.

## 🚀 Getting Started

### Prerequisites
- Node.js
- npm/yarn/pnpm/bun

### Clone the repository

To create a new project based on this repository, run the following command:

```bash
git clone https://github.com/mufidmb085/personal-blog.git
cd personal-blog
```

### Install dependencies

Using npm:

```bash
npm install
```

Using pnpm:
```bash
pnpm install
```

**Note for pnpm users:**
HeroUI requires hoisting certain dependencies. Add this to your `.npmrc`:

```bash
public-hoist-pattern[]=*@heroui/*
```

After modifying the `.npmrc` file, you need to run `pnpm install` again to ensure that the dependencies are installed correctly.

### Run the development server

```bash
npm run dev
```

Then open http://localhost:3000 in your browser.

## 📄 License

Licensed under [MIT license](LICENSE). © 2025 Mufid Muhammad Baihaqi.
