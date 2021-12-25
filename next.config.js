
/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
}

/**
module.exports = {
  webpack: config => {
    config.module.rules.push({
      test: /\.tsx?$/,
      loader: 'eslint-loader',
      exclude: /node_modeles/
    })
    return config
  }
}
*/