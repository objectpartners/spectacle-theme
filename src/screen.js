import * as polished from 'polished';

import assign from './deep-assign';

import logo from './images/OPi-logo.svg';

import { OPI_BLACK, OPI_RED } from './colors';

export default (userColors, ...rest) => {
  const colors = assign(
    {
      primary: OPI_RED,
      secondary: OPI_BLACK,
      tertiary: 'white',
      quartenary: 'white'
    },
    userColors
  );
  const fonts = assign(
    {
      primary: 'Montserrat',
      secondary: 'Helvetica'
    },
    ...rest
  );
  let googleFonts = {};
  return {
    colors,
    fonts,
    googleFonts: googleFonts,
    global: {
      body: {
        background: colors.tertiary,
        fontFamily: fonts.primary,
        fontWeight: 'normal',
        fontSize: '2em',
        color: colors.secondary,
        overflow: 'hidden'
      },
      'html, body': {
        height: '100%'
      },
      '*': {
        boxSizing: 'border-box'
      },
      '.spectacle-content': {
        // maxHeight: '100% !important',
        // maxWidth: '100% !important',
        // position: 'absolute',
        // top: 0,
        // right: 0,
        // bottom: 0,
        // left: 0,
        // display: 'flex',
        // justifyContent: 'center',
        // flexDirection: 'column'
      }
    },
    fullscreen: {
      fill: colors.tertiary
    },
    controls: {
      prev: {
        position: 'absolute',
        top: '50%',
        left: 20,
        transform: 'translateY(-50%)',
        zIndex: 9999,
        background: 'none',
        border: 'none',
        outline: 0
      },
      prevIcon: {
        fill: colors.quartenary
      },
      next: {
        position: 'absolute',
        top: '50%',
        right: 20,
        transform: 'translateY(-50%)',
        zIndex: 9999,
        background: 'none',
        border: 'none',
        outline: 0
      },
      nextIcon: {
        fill: colors.quartenary
      }
    },
    progress: {
      pacman: {
        container: {
          position: 'absolute',
          bottom: '5px',
          left: '50%',
          transition: 'all 1s ease-in-out 0.2s',
          zIndex: 1000
        },
        pacman: {
          position: 'absolute',
          transition: 'left 0.3s ease-in-out 0.2s',
          width: '20px',
          height: '20px',
          transform: 'translate(-5px, -5px)'
        },
        pacmanTop: {
          position: 'absolute',
          content: '',
          width: '20px',
          height: '10px',
          borderTopLeftRadius: '10px',
          borderTopRightRadius: '10px',
          background: colors.secondary
        },
        pacmanBottom: {
          position: 'absolute',
          content: '',
          width: '20px',
          height: '10px',
          borderBottomLeftRadius: '10px',
          borderBottomRightRadius: '10px',
          background: colors.secondary,
          top: '10px'
        },
        point: {
          position: 'absolute',
          float: 'left',
          background: 'transparent',
          width: '10px',
          height: '10px',
          borderWidth: 2,
          borderStyle: 'solid',
          borderColor: colors.secondary,
          borderRadius: '50%',
          transition: 'all 0.01s ease-out 0.4s'
        }
      },
      bar: {
        container: {
          position: 'absolute',
          height: '10px',
          width: '100%',
          bottom: 0,
          left: 0,
          transition: 'all 1s ease-in-out 0.2s',
          zIndex: 1000
        },
        bar: {
          height: '100%',
          background: colors.quartenary,
          transition: 'all 0.3s ease-out'
        }
      },
      number: {
        container: {
          position: 'absolute',
          bottom: 10,
          right: 10,
          zIndex: 1000,
          color: colors.quartenary
        }
      }
    },
    components: {
      blockquote: {
        textAlign: 'left',
        position: 'relative',
        display: 'inline-block',
        margin: 20
      },
      quote: {
        borderLeft: `5px solid ${colors.primary}`,
        paddingLeft: 40,
        display: 'block',
        color: colors.tertiary,
        fontSize: '4.9rem',
        lineHeight: 1,
        fontWeight: 'bold'
      },
      cite: {
        color: colors.tertiary,
        display: 'block',
        clear: 'left',
        fontSize: '2rem',
        marginTop: '1rem'
      },
      content: {
        margin: '0 auto',
        textAlign: 'center'
      },
      codePane: {
        pre: {
          margin: 'auto',
          fontSize: '0.8rem',
          fontWeight: 'normal',
          fontFamily: fonts.tertiary,
          minWidth: '100%',
          maxWidth: 800
        },
        code: {
          textAlign: 'left',
          fontWeight: 'normal'
        }
      },
      code: {
        color: 'black',
        fontSize: '2.66rem',
        fontFamily: fonts.tertiary,
        margin: '0.25rem auto',
        backgroundColor: 'rgba(0,0,0,0.15)',
        padding: '0 10px',
        borderRadius: 3
      },
      heading: {
        h1: {
          color: colors.tertiary,
          fontSize: '7.05rem',
          fontFamily: fonts.primary,
          lineHeight: 1,
          fontWeight: 'bold',
          margin: 0,
          zoom: 1,
          zIndex: 2
        },
        h2: {
          color: colors.secondary,
          fontSize: '5.88rem',
          fontFamily: fonts.primary,
          lineHeight: 1,
          fontWeight: 'bold',
          margin: 0,
          zIndex: 2
        },
        h3: {
          color: 'black',
          fontSize: '4.9rem',
          fontFamily: fonts.secondary,
          lineHeight: 1,
          fontWeight: 'bold',
          margin: '0.5rem auto',
          zIndex: 2
        },
        h4: {
          color: 'black',
          fontSize: '3.82rem',
          fontFamily: fonts.primary,
          lineHeight: 1,
          fontWeight: 'bold',
          margin: '0.5rem auto',
          zIndex: 2
        },
        h5: {
          color: 'black',
          fontSize: '3.19rem',
          fontFamily: fonts.primary,
          lineHeight: 1,
          fontWeight: 'bold',
          margin: '0.5rem auto',
          zIndex: 2
        },
        h6: {
          color: 'black',
          fontSize: '2.66rem',
          fontFamily: fonts.primary,
          lineHeight: 1,
          fontWeight: 'bold',
          margin: '0.5rem auto',
          zIndex: 2
        }
      },
      image: {
        display: 'block',
        margin: '0.5rem auto'
      },
      link: {
        textDecoration: 'none'
      },
      listItem: {
        fontSize: '2.66rem'
      },
      list: {
        textAlign: 'left',
        listStylePosition: 'inside',
        padding: 0
      },
      s: {
        strikethrough: {}
      },
      tableHeaderItem: {
        fontSize: '2.66rem',
        fontWeight: 'bold'
      },
      tableItem: {
        fontSize: '2.66rem'
      },
      table: {
        width: '100%'
      },
      text: {
        color: 'black',
        fontSize: '2.66rem',
        fontFamily: fonts.primary,
        margin: '0.25rem auto'
      }
    }
  };
};