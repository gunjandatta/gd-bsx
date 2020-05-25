const path = require("path");

module.exports = (env, argv) => {
    var isDev = argv.mode === "development";

    // Return the configuration
    var config = {
        entry: [
            "./node_modules/gd-bs/dist/gd-bs.min.js",
            path.resolve(__dirname, "src/index.ts")
        ],
        externals: {
            "gd-bs": "GD"
        },
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: "gd-bsx" + (isDev ? "" : ".min") + ".js"
        },
        resolve: {
            extensions: [".ts", ".tsx", ".js"]
        },
        module: {
            rules: [
                // Handle TypeScript Files
                {
                    test: /\.tsx?$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: "babel-loader",
                            options: {
                                presets: ["@babel/preset-env", "@babel/preset-react"]
                            }
                        },
                        {
                            loader: "ts-loader"
                        }
                    ]
                }
            ]
        }
    };

    // Return the configuration
    return config;
}