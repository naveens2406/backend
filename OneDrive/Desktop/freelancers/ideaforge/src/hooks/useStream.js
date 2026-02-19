import { useState, useCallback } from 'react';

export function useStream() {
    const [data, setData] = useState('');
    const [isStreaming, setIsStreaming] = useState(false);

    const startStream = useCallback(async (response) => {
        setIsStreaming(true);
        setData('');

        const reader = response.body.getReader();
        const decoder = new TextDecoder();

        try {
            while (true) {
                const { value, done } = await reader.read();
                if (done) break;

                const chunk = decoder.decode(value, { stream: true });
                setData((prev) => prev + chunk);
            }
        } catch (error) {
            console.error('Streaming error:', error);
        } finally {
            setIsStreaming(false);
        }
    }, []);

    return { data, isStreaming, startStream };
}
