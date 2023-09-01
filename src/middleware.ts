import { NextRequest, NextResponse } from 'next/server';

export default function MiddlewareNotFoundError(request: NextRequest) {
    console.log('미들웨어가 실행되고 있음! 체크 중!');
    if (request.nextUrl.pathname.startsWith('/products/1004')) {
        console.log('미들웨어에서 1004를 체크했음!');
        return NextResponse.redirect(new URL('/products', request.nextUrl));
    }
}
export const config = {
    matcher: ['/products/:path*'],
};
