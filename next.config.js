const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
  }
})

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  assetPrefix: process.env.NODE_ENV === 'production' ? '/os-summer' : '',
})
