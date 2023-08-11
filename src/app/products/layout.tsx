import React from 'react';
import styles from './layout.module.css';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: '멋진 제품 사이트 | 전체 제품 확인',
    description: '멋진 제품을 확인해 보세요.',
};

export default function ProductLayoutPage({ children }: { children: React.ReactNode }) {
    return (
        <>
            <nav className={styles.nav}>
                <Link href="products/woman">여성옷</Link>
                <Link href="products/man">남성옷</Link>
            </nav>
            <h1>제품 설명</h1>
            <section className={styles.product}>{children}</section>
        </>
    );
}
