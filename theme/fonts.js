import { Global } from "@emotion/react";

const Fonts = () => (
    <Global
        styles={`
        /* cyrillic */
        @font-face {
        font-family: 'Playfair Display';
        font-style: italic;
        font-weight: 500;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/playfairdisplay/v25/nuFRD-vYSZviVYUb_rj3ij__anPXDTnCjmHKM4nYO7KN_pqTXtXA_3-uE0qEE5Do.woff) format('woff');
        unicode-range: U+0020-002F, U+003A-0040, U+005B-0060, U+007B-007E, U+0061-007A, U+0041-005A;
        }
        /* latin-ext */
        @font-face {
        font-family: 'Playfair Display';
        font-style: italic;
        font-weight: 500;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/playfairdisplay/v25/nuFRD-vYSZviVYUb_rj3ij__anPXDTnCjmHKM4nYO7KN_pqTXt_A_3-uE0qEE5Do.woff) format('woff');
        unicode-range: U+0020-002F, U+003A-0040, U+005B-0060, U+007B-007E,U+0061-007A, U+0041-005A;
        }
        /* latin */
        @font-face {
        font-family: 'Playfair Display';
        font-style: italic;
        font-weight: 500;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/playfairdisplay/v25/nuFRD-vYSZviVYUb_rj3ij__anPXDTnCjmHKM4nYO7KN_pqTXtHA_3-uE0qEEw.woff) format('woff');
        unicode-range: U+0020-002F, U+003A-0040, U+005B-0060, U+007B-007E, U+0061-007A, U+0041-005A;
        }
        /* cyrillic */
        @font-face {
        font-family: 'Playfair Display';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/playfairdisplay/v25/nuFvD-vYSZviVYUb_rj3ij__anPXJzDwcbmjWBN2PKd3vXDTbtXK-F2qC0usEw.woff) format('woff');
        unicode-range: U+0020-002F, U+003A-0040, U+005B-0060, U+007B-007E, U+0061-007A, U+0041-005A;
        }
        /* latin-ext */
        @font-face {
        font-family: 'Playfair Display';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/playfairdisplay/v25/nuFvD-vYSZviVYUb_rj3ij__anPXJzDwcbmjWBN2PKd3vXDZbtXK-F2qC0usEw.woff) format('woff');
        unicode-range: U+0020-002F, U+003A-0040, U+005B-0060, U+007B-007E, U+0061-007A, U+0041-005A;
        }
        /* latin */
        @font-face {
        font-family: 'Playfair Display';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/playfairdisplay/v25/nuFvD-vYSZviVYUb_rj3ij__anPXJzDwcbmjWBN2PKd3vXDXbtXK-F2qC0s.woff) format('woff');
        unicode-range:U+0020-002F, U+003A-0040, U+005B-0060, U+007B-007E, U+0061-007A, U+0041-005A;
        }
        /* latin-ext */
        @font-face {
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/raleway/v18/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVvaorCGPrcVIT9d0c-dYA.woff) format('woff');
            unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
        }
        /* latin */
        @font-face {
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/raleway/v18/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVvaorCIPrcVIT9d0c8.woff) format('woff');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
    `}
    />
);

export default Fonts;
