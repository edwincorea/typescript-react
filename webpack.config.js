module.exports = {
    devtool: "inline-source-map",
    entry: "./src/app.tsx",
    output: {
        path: __dirname + "/public",
        filename: "build/app.js"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.tsx$/,
                enforce: 'pre',
                loader: 'tslint-loader'
            },            
            {
                test: /\.tsx?$/,
                loader: "ts-loader"
            }
        ]
    }
};