module.exports = {
    source: ["tokens/src/**/*.json"],
    platforms: {
        js: {
            transformGroup: "js",
            buildPath: "tokens/dist/js/",
            files: [{ destination: "tokens.js", format: "javascript/module" }]
        },
        css: {
            transformGroup: "css",
            buildPath: "tokens/dist/css/",
            files: [{ destination: "variables.css", format: "css/variables" }]
        }
    }
};
