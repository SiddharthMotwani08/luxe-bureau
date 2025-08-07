/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./scripts/**/*.js"],
  theme: {
    extend: {
      colors: {
        'luxe-cream': '#FBF7E5',
        'luxe-brown': '#50462D',
        'luxe-gold': '#FBD060',
        'luxe-light-brown': '#dad6c2',
      },
      fontFamily: {
        'schoolbook': ['Crimson Text', 'serif'],
        'century': ['Cormorant Garamond', 'serif'],
        'quadrant': ['Inter', 'sans-serif'],
        'abc-marfa': ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        'xs-tight': ['12px', { lineHeight: '14.4px', letterSpacing: '0.1em' }],
        'sm-tight': ['15px', { lineHeight: '15px', letterSpacing: '0.05em' }],
        'lg-tight': ['25px', { lineHeight: '30px', letterSpacing: '0%' }],
        'xl-tight': ['32px', { lineHeight: '40px', letterSpacing: '0.02em' }],
        'hero': ['50px', { lineHeight: '90px', letterSpacing: '0%' }],
      },
      letterSpacing: {
        'tight-5': '0.05em',
        'tight-2': '0.02em',
        'wide-10': '0.1em',
      },
      fontWeight: {
        'thin': '100',
        'extralight': '200',
        'light': '300',
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
        'extrabold': '800',
        'black': '900',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'dissolve': 'dissolve 300ms ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        dissolve: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
}