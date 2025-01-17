import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";
import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { dts } from "rollup-plugin-dts";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

const config = [
  {
    input: "src/index.ts",
    output: [
      {
        file: "dist/index.esm.js",
        format: "es",
        sourcemap: true,
      },
      {
        file: "dist/index.js",
        format: "cjs",
        sourcemap: true,
      },
    ],
    plugins: [
      typescript(),
      nodeResolve(),
      terser(),
      commonjs(),
      peerDepsExternal(),
    ],
  },
  {
    input: "src/index.d.ts",
    output: {
      file: "dist/index.d.ts",
      format: "es",
    },
    plugins: [dts()],
  },
];

export default config;
