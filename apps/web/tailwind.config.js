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
         animation: {
            slideDown: "slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)",
            slideUp: "slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)",
         },
         keyframes: {
            slideDown: {
               from : {
                  height: 0
               },
               to : {
                  height: "100px"
               },
            },
            slideUp: {
               from : {
                  height: "100px"
               },
               to : {
                  height: 0
               },
            }
         }
      },
   },
   plugins: [],
};
