/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                beVietnam: ['Be Vietnam Pro', 'sans-serif']
            },
            colors: {
                'custom-111729': '#111729',
                'custom-1D1B48': '#1D1B48',
                'custom-3662E3': '#3662E3',
                'custom-20293A': '#20293A',
                'custom-364153': '#364153',
                'custom-4A5567': '#4A5567',
                'custom-CDD5E0': '#CDD5E0'
            },
            backgroundImage: {
                hero: "url('./assets/hero-image-github-profile.png')"
            }
        }
    },
    plugins: []
}
