module.exports = {
  stories: ['../src/**/*.stories.@(js|ts|mdx)'],

  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-docs',
    '@storybook/addon-links',
    '@storybook/addon-viewport',
    '@storybook/addon-actions/register',
    '@storybook/addon-knobs/register',
    '@storybook/addon-storysource',
  ],
}
