import { babel } from "@rollup/plugin-babel";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import replace from "@rollup/plugin-replace";
import path from "path";

// const NODE_ENV = process.env.NODE_ENV || "development";
// const outputFile = NODE_ENV === "production" ? "./lib/prod.js" : "./lib/dev.js";

export default {
  input: "./src/index.js",
  output: {
    file: "./dist/main.js",
    format: "es",
  },
  plugins: [
    replace({
      // "process.env.NODE_ENV": JSON.stringify(NODE_ENV)
      "process.env.NODE_ENV": JSON.stringify("production"),
    }),
    babel({
      exclude: "node_modules/**",
      configFile: path.resolve(__dirname, "babel.config.json"),
    }),
    nodeResolve(),
    commonjs(),
  ],
  external: ["react"],
};
