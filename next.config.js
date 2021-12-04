/** @type {import('next').NextConfig} */
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
})
module.exports = withMDX({
  reactStrictMode: true,
  pageExtensions: ['tsx', 'md', 'mdx']
})
