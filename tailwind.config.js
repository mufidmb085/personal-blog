import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            primary: {
              50: "#e4ebf7",   // lighten
              100: "#d6e3ff",  // container
              200: "#b0c4e5",
              300: "#8aa6cc",
              400: "#6487b2",
              500: "#415f91",  // base
              600: "#2c4a7c",
              700: "#284775",  // on-primary-container
              800: "#1b335b",
              900: "#001b3e",  // on-primary-fixed
              DEFAULT: "#415f91",
              foreground: "#ffffff"
            },
            secondary: {
              50: "#f2f4fb",
              100: "#dae2f9",  // container
              200: "#c3cde5",
              300: "#aeb8d0",
              400: "#99a3bc",
              500: "#565f71",  // base
              600: "#495362",
              700: "#3d4653",  // on-secondary-container
              800: "#303a44",
              900: "#131c2b",  // on-secondary-fixed
              DEFAULT: "#565f71",
              foreground: "#ffffff"
            },
            danger: {
              50: "#ffebeb",
              100: "#ffdada",
              200: "#ffbcbc",
              300: "#ff9e9e",
              400: "#ff8080",
              500: "#ba1a1a", // base
              600: "#a21616",
              700: "#8a1212",
              800: "#730e0e",
              900: "#690005", // on-error (dark)
              DEFAULT: "#ba1a1a",
              foreground: "#ffffff"
            },
            background: "#f9f9ff",
            foreground: "#191c20",
            content1: {
              DEFAULT: "#ffffff",
              foreground: "#000000"
            },
            content2: {
              DEFAULT: "#f3f3fa",
              foreground: "#000000"
            },
            content3: {
              DEFAULT: "#ebebf4",
              foreground: "#000000"
            },
            content4: {
              DEFAULT: "#e1e1ea",
              foreground: "#000000"
            },
            success: {
              DEFAULT: "#17c964",
              foreground: "#000000"
            },
            warning: {
              DEFAULT: "#f5a524",
              foreground: "#000000"
            },
            focus: "#415f91",
            overlay: "#000000"
          }
        },
        dark: {
          colors: {
            primary: {
              50: "#001b3e",  // on-primary-fixed
              100: "#1b335b",
              200: "#284775",  // on-primary-container
              300: "#2c4a7c",
              400: "#415f91",
              500: "#aac7ff",  // base
              600: "#bcd5ff",
              700: "#cfe2ff",
              800: "#e2efff",
              900: "#f5faff",
              DEFAULT: "#aac7ff",
              foreground: "#0a305f"
            },
            secondary: {
              50: "#131c2b",  // on-secondary-fixed
              100: "#303a44",
              200: "#3d4653",  // on-secondary-container
              300: "#495362",
              400: "#565f71",
              500: "#bec6dc",  // base
              600: "#cfd6e6",
              700: "#e0e7f1",
              800: "#f2f4fb",
              900: "#ffffff",
              DEFAULT: "#bec6dc",
              foreground: "#283141"
            },
            danger: {
              50: "#690005", // on-error (dark)
              100: "#730e0e",
              200: "#8a1212",
              300: "#a21616",
              400: "#ba1a1a",
              500: "#ffb4ab", // base
              600: "#ffc7bf",
              700: "#ffd9d4",
              800: "#ffeceb",
              900: "#fff7f7",
              DEFAULT: "#ffb4ab",
              foreground: "#690005"
            },
            background: "#111318",
            foreground: "#e2e2e9",
            content1: {
              DEFAULT: "#1d1f24",
              foreground: "#ffffff"
            },
            content2: {
              DEFAULT: "#25282c",
              foreground: "#ffffff"
            },
            content3: {
              DEFAULT: "#323538",
              foreground: "#ffffff"
            },
            content4: {
              DEFAULT: "#43464b",
              foreground: "#ffffff"
            },
            success: {
              DEFAULT: "#17c964",
              foreground: "#000000"
            },
            warning: {
              DEFAULT: "#f5a524",
              foreground: "#000000"
            },
            focus: "#aac7ff",
            overlay: "#ffffff"
          }
        }
      },
      layout: {
        disabledOpacity: "0.5"
      }
    }),
    require("@tailwindcss/typography"),
  ],
};

export default config;
