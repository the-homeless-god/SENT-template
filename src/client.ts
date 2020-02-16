import * as sapper from '@sapper/app'

let target = document.querySelector('#sapper')

if (target) {
  sapper.start({
    target: target
  })
}
