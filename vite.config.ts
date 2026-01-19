// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import path from 'path';

// // https://vite.dev/config/
// export default defineConfig({
// 	plugins: [
// 		react({
// 			babel: {
// 				plugins: [['@babel/plugin-proposal-decorators', { legacy: true }]],
// 			},
// 		}),
// 	],
// 	build: {
// 		outDir: './build',
// 	},
// 	resolve: {
// 		alias: {
// 			'@': path.resolve(__dirname, './src'),
// 		},
// 	},
// });



import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  base: '/', // <-- for root deployment
  plugins: [
    react({
      babel: {
        plugins: [['@babel/plugin-proposal-decorators', { legacy: true }]],
      },
    }),
  ],
  build: {
    outDir: './build', // or 'dist', whatever you are using
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
