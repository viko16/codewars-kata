function alphabetPosition(text) {
  const begin = 'a'.charCodeAt()
  return text.toLowerCase().replace(/./ig, l => {
    return /[a-z]/.test(l) ? l.charCodeAt() - begin + 1 + ' ' : ''
  }).trim()
}
