export default (name) => {
  switch(name) {
    case 'nav-back': return '&#57835;'
    case 'message-success': return '&#57859;'
    case 'message-warning': return '&#57857;'
    case 'message-error' : return '&#57521;'
    default: return ''
  }
}
