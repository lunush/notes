import { css } from 'styled-components'

export const scrollbar = css`
  overflow-y: scroll;
  scrollbar-color: ${({ theme }) =>
    `${theme.scrollbarThumb} ${theme.primary}`} !important;
  scrollbar-width: thin !important;
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    opacity: 0;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 15px;
    background-color: ${({ theme }) => theme.scrollbarThumb};
  }
`

export const clickable = css`
  cursor: pointer;
  color: ${({ theme }) => theme.textSecondary};

  &:hover {
    color: ${({ theme }) => theme.textPrimary};
  }

  &:active {
    color: ${({ theme }) => theme.textSecondary};
  }
`
