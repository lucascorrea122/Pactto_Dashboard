import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme{
        title: string,
    
        colors: {
            primary_grey: string,
            primary_black: string,
            primary_yellow: string,
            
            secundary_white: string,
            secundary_light_grey: string,
            secundary_light_yellow: string,
    
            accent_green: string,
            accent_cyan: string,
            accent_red: string,
    
            background: string,
        }
    }


}