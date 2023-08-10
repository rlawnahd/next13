import React from 'react';
import styles from './layout.module.css';
import Link from 'next/link';
export default function ProductLayoutPage({ children }: { children: React.ReactNode }) {
    return (
        <>
            <nav className={styles.nav}>
                <Link href="">여성옷</Link>
                <a href="">남성옷</a>
            </nav>
            <h1>제품 설명</h1>
            <section className={styles.product}>{children}</section>
        </>
    );
}
