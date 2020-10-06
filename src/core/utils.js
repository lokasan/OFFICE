// Pure Functions
export function capitalize(listener) {
  if (typeof listener != 'string') {
    return ''
  }
  return listener[0].toUpperCase() + listener.slice(1)
}
