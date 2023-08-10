import './globals.css';
import styles from './layout.module.css';
export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
            <head />
            <body>
                <header className={styles.header}>
                    <h1>Demo Note</h1>
                    <nav className={styles.nav}>
                        <a href="/">Contract</a>
                        <a href="/about">About</a>
                    </nav>
                </header>
                {children}
            </body>
        </html>
    );
}
