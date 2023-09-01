'use client';
import React, { useEffect } from 'react';

export default function ProductsError({ error, reset }: { error: Error; reset: () => void }) {
    useEffect(() => {
        console.error(error);
    }, [error]);
    return (
        <div>
            <h2>Something went wrong!</h2>
            <button onClick={() => reset()}>Try Again</button>
        </div>
    );
}
