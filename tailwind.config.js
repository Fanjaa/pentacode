/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Brand Colors
        white: '#FFFFFF',
        extraLight: '#F5F5F7',
        lightGray: '#D2D2D7',
        gray: '#808080',
        darkGray: '#424245',
        black: '#121212',
        
        // Status Color
        success: '#32936F',
        error: '#F55F56',
      },
      // Tipe Fonts
      fontFamily: {
        gilroy: ['Gilroy', 'sans-serif'],
      },
      // Ukuran Fonts
      fontSize: {
        // Desktop fontSize
        heading1: '67px',
        heading2: '50px',
        heading3: '38px',
        heading4: '28px',
        heading5: '21px',
        heading6: '16px',
        subtitle: '18px',
        body: '16px',
        button: '16px', // For Uppercase
        links: '16px',
        overline: '14px', // For Uppercase
        caption: '14px',
        captionSmall: '12px',

        // Mobile fontSize
        headingMobile1: '40px',
        headingMobile2: '34px',
        headingMobile3: '26px',
        headingMobile4: '22px',
        headingMobile5: '18px',
        headingMobile6: '16px',
        subtitleMobile: '18px',
        bodyMobile: '16px',
        buttonMobile: '14px', // For Uppercase
        linksMobile: '14px',
        overlineMobile: '12px', // For Uppercase
        captionMobile: '14px',
        captionSmallMobile: '12px',
      },
      // Tebal Fonts
      fontWeight: {
        regular: '400',
        medium: '500',
        semibold: '600',
      },
      lineHeight: {
        // 100% = leading-tight
        '100': '1',
        '120': '1.2',
        '140': '1.4',
      },
      backgroundImage: {
        'wedding': "url('assets/images/wedding.png')"
      },
    },
  },
  plugins: [],
}

