import * as sapper from '@sapper/app'

const target = document.querySelector('#sapper')

if (target) {
  sapper.start({
    target,
  })
}
