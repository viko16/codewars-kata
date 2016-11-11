function pigIt (str) {
  return str.split(' ').map(el => {
    return el.substr(1) + el[0] + 'ay'
  }).join(' ')
}
