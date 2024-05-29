import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  
  components: {
    MuiTabs: {
      styleOverrides: {
        root: {
          width:'100vw', // Ajusta el ancho del contenedor de tabs
          justifyContent:'center', // Centra las tabs horizontalmente
          backgroundColor:'whitesmoke',
          
        },
        indicator: {
          backgroundColor: '#002766', // Color de la línea del scroller
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          backgroundColor:'',
          color: '#002766', // Color del texto del tab
          '&.Mui-selected': {
            backgroundColor:'',
            color: '#002766', // Color del texto del tab seleccionado
            fontFamily:'Lato'
          },
        },
      },
    },
  },

 


});

export default theme;