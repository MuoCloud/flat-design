export const getContentColorSystem = (color: string) => {
  const { r, g, b } = (() => {
    if (color.match(/^rgb/)) {
      const matches = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/)
      return {
        r: Number(matches[1]),
        g: Number(matches[2]),
        b: Number(matches[3])
      }
    } else {
      const match = +('0x' + color.slice(1).replace(
        color.length < 5 && /./g, '$&$&'
      ))
      return {
        r: match >> 16,
        g: match >> 8 & 255,
        b: match & 255
      }
    }
  })()

  const hsp = Math.sqrt(
    0.299 * (r * r) +
    0.587 * (g * g) +
    0.114 * (b * b)
  )

  if (hsp > 150) {
    return 'dark-content'
  } else {
    return 'light-content'
  }
}

export const adjustBrightness = (col: string, amt: number) => {
  let usePound = false

  if (col[0] === '#') {
    col = col.slice(1)
    usePound = true
  }

  let R = parseInt(col.substring(0, 2), 16)
  let G = parseInt(col.substring(2, 4), 16)
  let B = parseInt(col.substring(4, 6), 16)

  // to make the colour less bright than the input
  // change the following three "+" symbols to "-"
  R = R + amt
  G = G + amt
  B = B + amt

  if (R > 255) { R = 255 } else if (R < 0) { R = 0 }
  if (G > 255) { G = 255 } else if (G < 0) { G = 0 }
  if (B > 255) { B = 255 } else if (B < 0) { B = 0 }

  const RR = ((R.toString(16).length === 1) ? '0' + R.toString(16) : R.toString(16))
  const GG = ((G.toString(16).length === 1) ? '0' + G.toString(16) : G.toString(16))
  const BB = ((B.toString(16).length === 1) ? '0' + B.toString(16) : B.toString(16))

  return (usePound ? '#' : '') + RR + GG + BB
}

export const darken = (color: string, amt: number) => adjustBrightness(color, -amt)
export const lighten = (color: string, amt: number) => adjustBrightness(color, amt)

export const themeColorSeq = (name: string, color: string) => {
  const colors: { [key: string]: string } = {}

  colors[`color-${name}-500`] = color

  for (let i = 400, j = 10; i >= 0; i -= 100, j += 10) {
    colors[`color-${name}-${i}`] = lighten(color, j)
  }

  for (let i = 600, j = 10; i <= 900; i += 100, j += 10) {
    colors[`color-${name}-${i}`] = darken(color, j)
  }

  return colors
}
