import { getProducts } from '@/service/products';
import Link from 'next/link';
import React from 'react';
import MeowArticle from '@/components/MeowArticle';
// export const revalidate = 3; //3초마다 재검증
//서버 파일(데이터베이스)에 있는 데이터를 가져와서 렌더링

export default async function ProductsPage() {
    const products = await getProducts();

    return (
        <>
            <h1>제품 소개 페이지 !</h1>
            <ul>
                {products.map((product, index) => (
                    <li key={index}>
                        <Link href={`/products/${product.id}`}>{product.name}</Link>
                    </li>
                ))}
            </ul>
            <MeowArticle />
        </>
    );
}
