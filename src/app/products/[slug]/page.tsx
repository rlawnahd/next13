import { getProduct, getProducts } from '@/service/products';
import { notFound } from 'next/navigation';
import React from 'react';

type Props = {
    params: {
        slug: string;
    };
};
export const revalidate = 3; //3초마다 재검증

export function generateMetadata({ params }: Props) {
    return {
        title: `제품의 이름 : ${params.slug}`,
        description: `${params.slug}바지 제품에 대한 설명을 확인할 수 있습니다.`,
    };
}

export default async function ProductPage({ params: { slug } }: Props) {
    const product = await getProduct(slug);
    if (!product) {
        notFound();
    }

    return <h1>{product.name} 제품 설명 페이지</h1>;
}

export async function generateStaticParams() {
    const products = await getProducts();

    return products.map((product) => ({
        slug: product.id,
    }));
}
