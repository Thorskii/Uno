/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
        colors: {
            'uno': '#eacf00',
            'unoDark': '#bda700',
            'mush': '#FCF9F1',
            'mushTitle': '#C5A94B',
            'kratom': '#FBF8F2',
            'kratomTitle': '#F06C42',
            'cbd': '#F2F6F8',
            'cbdTitle': '#409BBE'


        },
    },
    variants: {
        extend: {
            backgroundColor: ['active']
        }
    }
  },
  plugins: [],
}

