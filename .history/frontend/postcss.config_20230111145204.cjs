module.exports = {
    plugins: {
        tailwindcss: {},
        autoprefixer: {},
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
    },
}