//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withNx } = require("@nrwl/next/plugins/with-nx");

/**
 * @type {import("@nrwl/next/plugins/with-nx").WithNxOptions}
 **/
const nextConfig = {
   nx: {
      // Set this to true if you would like to use SVGR
      // See: https://github.com/gregberge/svgr
      svgr: true,
   },
   webpack(config, context) {
      config.module.rules
         .push
         // {
         //    test: /\.svg$/,
         //    use: ["file-loader"],
         // },
         // {
         //    test: /\.png$/,
         //    use: ["file-loader"],
         // },
         // {
         //    test: /\.jpg$/,
         //    use: ["file-loader"],
         // }
         // {
         //    test: /\.tsx$/,
         //    use: ["file-loader"],
         // }
         ();
      return config;
   },
   typescript: {
      ignoreBuildErrors: true,
   },
   images: {
      formats: ["image/webp"],
      loader: "default",
      unoptimized: true,
      disableStaticImages: false,
      minimumCacheTTL: 60 * 60,
      domains: ["zoobg.bg"],
   },
   async headers() {
      return Promise.resolve([
         {
            source: "/:path*",
            headers: [{ key: "X-Server", value: "PetHub/Next" }],
         },
      ]);
   },
   experimental: {
      appDir: true,
      swcMinify: true,
   },
   optimizeFonts: true,
   poweredByHeader: true,
};

module.exports = withNx(nextConfig);
