import Counter from '@/components/Counter';
import os from 'os';
export default function Home() {
    console.log(os.hostname());
    return (
        <>
            <div>홈페이지 버전 2</div>
            <Counter />
        </>
    );
}
