import colors from '@core/theme/modules/colors'

export const Divider = {
  baseStyle: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    borderColor: colors.primary[200]
  },
  sizes: {
    base: {
      borderBottomWidth: '1px'
    },
    lg: {
      borderBottomWidth: '2px'
    },
    xl: {
      borderBottomWidth: '10px'
    }
  }
}
