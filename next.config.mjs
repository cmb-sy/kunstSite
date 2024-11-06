import TerserPlugin from "terser-webpack-plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  swcMinify: true, // SWCを使用してコードを最適化
  webpack(config, { isServer }) {
    if (!isServer) {
      config.optimization.minimizer = [
        new TerserPlugin({
          terserOptions: {
            output: {
              ascii_only: true,
            },
            compress: {
              warnings: false, // 警告を抑制する（README:Latex警告対策）
            },
          },
          extractComments: false, // コメントを抽出しない
          parallel: true, // 並列処理を有効にする
        }),
      ];
    }
    return config;
  },
};

export default nextConfig;
