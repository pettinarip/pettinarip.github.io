import React from "react"
import { Global, css, useTheme } from "@emotion/react"

const GlobalStyles = () => {
  const theme = useTheme()

  return (
    <Global
      styles={css`
        body {
          margin: 0;
          padding: 0;
          font-family: ${theme.fonts.base};
          color: ${theme.colors.base};
          background-color: ${theme.colors.background};
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        .title {
          font-family: ${theme.fonts.titles};
        }

        ul li {
          margin-bottom: 10px;
        }

        a,
        a:active,
        a:visited {
          color: ${theme.colors.base};
        }

        a:hover {
          color: ${theme.colors.primary};
        }

        ::-moz-selection {
          background-color: ${theme.colors.primary};
        }

        ::selection {
          background-color: ${theme.colors.primary};
        }
      `}
    />
  )
}

export default GlobalStyles
