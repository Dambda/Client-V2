import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
    webpack: (config) => {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });
        return config;
    },
    experimental: {
        turbo: {
            rules: {
                '*.svg': {
                    loaders: ['@svgr/webpack'],
                    as: '*.js',
                },
            },
        },
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
        // 특정 코드를 모든 scss 파일 상단에 자동으로 추가
        additionalData: `@use "@/shared/styles/style.scss" as *;`,
    },
};

export default nextConfig;
