import { Global } from "@emotion/react";

const Fonts = () => (
    <Global styles={`
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
        @font-face {
        font-family: 'Gothic A1';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/gothica1/v8/CSR94z5ZnPydRjlCCwl6ac0oQNM8ru4reAXaTlFCBXrC-se62sS-fg.0.woff2) format('woff2');
        unicode-range: U+AC00-U+D7A3, U+0030-0039, U+0020-002F, U+003A-0040, U+005B-0060, U+007B-007E
        }
    `} />
);

export default Fonts;