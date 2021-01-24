const purgecss = [
    "@fullhuman/postcss-purgecss",
    {
        content: [
            "./components/**/*.js",
            "./components/**/*.ts",
            "./components/**/*.tsx",
            "./pages/**/*.js",
            "./pages/**/*.ts",
            "./pages/**/*.tsx"
        ],
        defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
    },
];

export default {
    plugins: [
        "postcss-import",
        "tailwindcss",
        "autoprefixer",
        ...(process.env.NODE_ENV === "production" ? [purgecss] : []),
    ],
};
