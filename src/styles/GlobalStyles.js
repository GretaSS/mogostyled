import { createGlobalStyle } from 'styled-components';
import KaushanScript from '../assets/fonts/Kaushan_Script/Kaushan_Script';
import Montserrat from '../assets/fonts/Montserrat/Montserrat-Black.ttf';

export const GlobalStyle = () =>
    createGlobalStyle`
        @font-face{
            font-family: 'Kaushan Script', 'Montserrat';
            src: url(${KaushanScript}), url(${Montserrat});
        }
    `;