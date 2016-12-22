export default (textDirection) => {
  switch((textDirection || '').toLowerCase()) {
    case 'rtl': return 'rtl'
    case 'ltr': return 'ltr'
    default: return null
  }
}
