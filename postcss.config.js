const tailwindCss = require('tailwindcss')
const purgeCss = require('@fullhuman/postcss-purgecss')({
    content: [
        './public/index.html'
    ],
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
})

module.exports = {
    plugins: [
        tailwindCss('./tailwind.config.js'),
        require('autoprefixer'),
        ...process.env.NODE_ENV === 'production'
            ? [purgeCss]
            : []
    ]
}