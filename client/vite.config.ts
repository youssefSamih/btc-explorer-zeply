import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';
import { dynamicImport } from 'vite-plugin-dynamic-import';
import path from 'path';

// https://vitejs.dev/config/
export default (mode: string) => {
  const envPrefix = ['REACT_APP_', 'PORT'];

  const defaultPort = 3000;

  process.env = {
    ...process.env,
    ...loadEnv(mode, process.cwd(), envPrefix)
  };

  if (!process.env.SYSTEMROOT && process.env.SystemRoot) {
    process.env.SYSTEMROOT = process.env.SystemRoot;
  }

  return defineConfig({
    envPrefix,
    plugins: [react(), viteTsconfigPaths(), svgr(), dynamicImport()],
    define: {
      'process.env': process.env
    },
    resolve: {
      alias: [
        {
          find: '@',
          replacement: path.resolve(__dirname, 'src')
        }
      ]
    },
    server: {
      open: true,
      port: process.env.PORT ? Number(process.env.PORT) : defaultPort,
      hmr: {
        clientPort: process.env.PORT ? Number(process.env.PORT) : defaultPort
      }
    },
    preview: {
      open: true,
      port: process.env.PORT ? Number(process.env.PORT) : defaultPort
    },
    build: {
      sourcemap: true,
      outDir: `${__dirname}/build`
    }
  });
};
