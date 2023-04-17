const { createGlobPatternsForDependencies } = require("@nrwl/react/tailwind");
const { join } = require("path");

/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      join(
         __dirname,
         "{src,components,app,pages}/**/*!(*.stories|*.spec).{ts,tsx,html}"
      ),
      ...createGlobPatternsForDependencies(__dirname),
   ],
   theme: {
      extend: {
         colors: {
            "albescent-white": "#F4e4cc",
            "woodsmoke": "#050507",
            "raw-sienna": "#d5814c",
            "whiskey": "#d6a979",
            "cornflower-blue": "#6496f0",
            "goldsand": "#e8c59b",
            "leather": "#9a6a4e",
            "amethyst-smoke": "#a39abe",
            "jordy-blue": "#98c2f1",
         },
      },
   },
   plugins: [],
};
