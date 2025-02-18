/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {


    extend: {

      fontFamily:{
        lato:[ "Lato", "sans-serif"],
      },
      
      boxShadow: {
        btn: '0px 5px 0 white ',
        hvr:'7px 7px 0 black',
        trans:'10px 10px  0 black',

      },
      
      colors: {
        main:' rgb(191, 247, 71)',
        blck:'rgba(24, 28, 20,0.4)',
      },

 
      
    animation: {
      wiggle: 'wiggle 10s linear infinite ',
      hvr1:'paused',
      
    },

    transitionDuration:{
      trans:'2s',
    },
    
    keyframes: {
      wiggle: {
        from: { transform: 'translateX(0%)' },
      to: { transform: 'translateX(-100%)' },
      }
    }, 

    
     
     


      screens: {
        xmd: '840px',
        xs: '500px',
      },

    },
  },
  plugins: [],
  
}
