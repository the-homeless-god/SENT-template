const warningText = 'Use of eval is strongly discouraged, as it poses security risks and may cause issues with minification'
const warningIsIgnored = (warning) => warning.message.includes(warningText)
  || warning.message.includes('Circular dependency: node_modules')
  || warning.code === 'THIS_IS_UNDEFINED'
  || warning.message.includes(
    'If it is for external reference only, please consider using `export const preload`',
  )

// Workaround for https://github.com/sveltejs/sapper/issues/1266
const onwarn = (warning, _onwarn) => (warning.code === 'CIRCULAR_DEPENDENCY' && /[/\\]@sapper[/\\]/.test(warning.message))
  || warningIsIgnored(warning)
  || console.warn(warning.toString())

module.exports = {
  onwarn,
}
