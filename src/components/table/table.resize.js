import {$} from '@core/dom';

export function resizeHandler($root, event) {
  return new Promise(resolve => {
    const $resizer = $(event.target)
    const $parent = $resizer.closest('[data-type="resizable"]')
    const coords = $parent.getCoords()
    const cellName = $parent.data.col
    let value


    document.onmousemove = e => {
      if (event.target.dataset.resize === 'col') {
        // console.log(e)
        const delta = e.pageX - coords.right
        value = coords.width + delta
        $resizer.css({
          right: -delta +'px',
          bottom: '-5000px'
        })
      } else {
        const delta = e.pageY - coords.bottom
        value = coords.height + delta
        $resizer.css({
          right: '-5000px',
          bottom: -delta + 'px'
        })
        // $parent.css({
        //   height: value + 'px'
        // })
      }
    }
    document.onmouseup = () => {
      document.onmousemove = null
      document.onmouseup = null
      if (event.target.dataset.resize === 'col') {
        $parent.css({
          width: value + 'px'
        })
        $root.findAll(`[data-col="${cellName}"`)
            .forEach(el => el.style.width = value + 'px')
      } else {
        $parent.css({
          height: value + 'px'
        })
      }
      console.log(value)
      resolve({
        value,
        type: event.target.dataset.resize,
        id: $parent.data[event.target.dataset.resize]
      })
      $resizer.css({
        bottom: 0,
        right: 0
      })
    }
  })
}
