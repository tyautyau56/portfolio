const colors = require("tailwindcss/colors")

module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx,html}'],
    darkMode: false,
    theme: {
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
        },
        colors: {
            black: colors.black,
            white: colors.white,
            gray: colors.gray,
            red: colors.red,
            yellow: colors.yellow,
            green: colors.green,
            blue: colors.blue,
            indigo: colors.indigo,
            purple: colors.purple,
            lime: colors.lime,
            teal: colors.teal,
            orange: colors.orange,
            pink: colors.pink
        },
    }
}
