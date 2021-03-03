import { createGlobalStyle } from 'styled-components'
import { scrollbar } from './css'
import notoSansEOT from '../../../fonts/noto-sans-v9-vietnamese_latin-ext_latin_greek-ext_greek_devanagari_cyrillic-ext_cyrillic-regular.eot'
import notoSansWOFF2 from '../../../fonts/noto-sans-v9-vietnamese_latin-ext_latin_greek-ext_greek_devanagari_cyrillic-ext_cyrillic-regular.woff2'
import notoSansWOFF from '../../../fonts/noto-sans-v9-vietnamese_latin-ext_latin_greek-ext_greek_devanagari_cyrillic-ext_cyrillic-regular.woff'
import notoSansTTF from '../../../fonts/noto-sans-v9-vietnamese_latin-ext_latin_greek-ext_greek_devanagari_cyrillic-ext_cyrillic-regular.ttf'
import notoSansSVG from '../../../fonts/noto-sans-v9-vietnamese_latin-ext_latin_greek-ext_greek_devanagari_cyrillic-ext_cyrillic-regular.svg'

const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 400;
    src: url(${notoSansEOT});
    src: local('Noto Sans'), local('NotoSans'),
      url(${notoSansEOT}) format('embedded-opentype'),
      url(${notoSansWOFF2}) format('woff2'),
      url(${notoSansWOFF}) format('woff'),
      url(${notoSansTTF}) format('truetype'),
      url(${notoSansSVG}) format('svg');
  }

  * {
    box-sizing: border-box;
  }

  *:focus {
    outline: none;
  }

  html,
  body,
  #root {
    position: absolute;
    width: 100vw !important;
    height: 100vh !important;
    box-sizing: border-box;
    overflow: hidden;
    margin: 0;
    font-family: 'Noto Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .markdown-body {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.textPrimary};
  }

  .markdown-body h1, .markdown-body h2, .markdown-body h3, .markdown-body h4, .markdown-body h4, .markdown-body h5, .markdown-body h6 {
    color: ${({ theme }) => theme.textPrimary};
    border-bottom: 1px solid ${({ theme }) => theme.border};
  }

  .markdown-body table {
    display: table;
  }

  .markdown-body table td, .markdown-body table th {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.textPrimary};
    border: 1px solid ${({ theme }) => theme.border};

    @media only screen and (max-width: 800px) {
      padding: 3px 9px;
    }
  }

  .markdown-body table tr:nth-child(2n) td {
    background: ${({ theme }) => theme.scrollbarThumb};
    color: ${({ theme }) => theme.textPrimary};
    border: 1px solid ${({ theme }) => theme.border};
  }

  .markdown-body .highlight pre, .markdown-body pre {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.textPrimary};
    border: 1px solid ${({ theme }) => theme.border};
    ${scrollbar}
    overflow-y: auto;
    overflow-x: scroll;
  }

  .markdown-body hr, .markdown-body img {
    background: ${({ theme }) => theme.scrollbarThumb};
  }

  .markdown-body blockquote p {
    color: ${({ theme }) => theme.textSecondary};
  }
`

export default GlobalStyle
