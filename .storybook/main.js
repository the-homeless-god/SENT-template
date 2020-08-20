module.exports = {
  stories: ['../src/*.stories.@(ts|js)'],

  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-actions/register',
    '@storybook/addon-knobs/register',
    '@storybook/addon-notes/register',
    '@storybook/addon-storysource',
  ],
}
