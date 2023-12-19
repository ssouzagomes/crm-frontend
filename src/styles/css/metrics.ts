interface BreakpointsProps {
  phone: number | string
  tablet: number | string
  desktop: number | string
  largeDesktop: number | string
}

export const breakpoints = {
  phone: 500,
  tablet: 851,
  desktop: 1120,
  largeDesktop: 1441,
}

export const screen = Object.entries(breakpoints).reduce<BreakpointsProps>(
  (accumulator, [breakpoint, size]) => ({
    ...accumulator,
    [breakpoint]: `(max-width: ${size}px)`,
  }),
  breakpoints,
)

export default { screen, breakpoints }
