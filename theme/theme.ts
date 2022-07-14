export const Theme = {
    colors: { 
        primary: '#673ab7',
        secondary: '#00eded',
        orn: '#ff9800',
        gray: '#ccc', 
        error: 'tomato',
        success: 'green', 
        dark: '#181818',
        light: '#fff',
        none: ''
    },
    mode: { 
        dark: `background: #181818; color: #fff;`,
        light: `background: #fff; color: #181818;`
    },
    radius: { 
        sma: '3px',
        med: '5px',
        max: '8px'
    },
    sizes: {
        thin: '12px',
        xsmall: '1rem',
        small: '1.2rem',
        medium: '1.6rem',
        large: '2.4rem',
        xlarge: '3.2rem',
        xxlarge: '4.0rem'
    },
    weights: {
        thin: '100',
        light: '300',
        normal: '400',
        regular: '500',
        bold: '700' 
    },
    
    display: { 
        full: 
            `
                position: fixed;
                top: 0;
                left: 0;
                height: 100vh;
                width: 100vw;
                z-index: 9;

            `,
        flex: `
                display: flex;
                flex-wrap: wrap;
            `,
        
    },

}
