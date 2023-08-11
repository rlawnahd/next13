import { notFound } from 'next/navigation';
import React from 'react';

type Props = {
    params: {
        slug: string;
    };
};

export function generateMetadata({ params }: Props) {
    return {
        title: `제품의 이름 : ${params.slug}`,
        description: `${params.slug}바지 제품에 대한 설명을 확인할 수 있습니다.`,
    };
}

export default function PantsPage({ params }: Props) {
    if (params.slug === 'nothing') {
        notFound();
    }
    return <h1>{params.slug}바지 제품 설명 페이지</h1>;
}

export function generateStaticParams() {
    const products = ['skirt', 'pants'];
    return products.map((product) => ({
        slug: product,
    }));
}
