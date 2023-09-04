module.exports = {
    darkMode: "class",
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
        "./node_modules/flowbite/**/*.{js,ts}"
    ],
    theme: {
        extend: {
            colors: {
                'gray-dark': '#121212'
            }
        },
        fontFamily: {
            sf: "San Francisco",
            sfbold: "San Francisco Bold",
          }
    },
    plugins: [
        require('flowbite/plugin')
    ]
}