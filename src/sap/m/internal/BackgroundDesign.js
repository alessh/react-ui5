export default {
  getClass(prefix, backgroundDesign) {
    switch((backgroundDesign || '').toLowerCase()) {
      case 'translucent': return prefix + 'Translucent'
      case 'transparent': return prefix + 'Transparent'
      default: return prefix + 'Solid'
    }
  }
}
