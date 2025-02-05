import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
        // 특정 코드를 모든 scss 파일 상단에 자동으로 추가
        additionalData: `@use "@/shared/styles/style.scss" as *;`,
    },
};

export default nextConfig;
