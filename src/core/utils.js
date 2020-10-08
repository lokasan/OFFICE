// Pure Functions
export function capitalize(listener) {
  if (typeof listener != 'string') {
    return ''
  }
  return listener[0].toUpperCase() + listener.slice(1)
}

export function range(start, end) {
  if (start > end) {
    [end, start] = [start, end]
  }
  return new Array(end - start + 1)
      .fill('')
      .map((_, index) => start + index)
}
