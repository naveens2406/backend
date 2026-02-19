import { useState, useCallback } from 'react';
import { generateBlueprint } from '../api/generateAPI';
import toast from 'react-hot-toast';

export function useGenerate() {
    const [loading, setLoading] = useState(false);
    const [blueprint, setBlueprint] = useState(null);
    const [error, setError] = useState(null);

    const generate = useCallback(async (config) => {
        setLoading(true);
        setError(null);
        setBlueprint(null);

        try {
            const result = await generateBlueprint(config);
            setBlueprint(result);
            toast.success('Blueprint generated successfully!');
            return result;
        } catch (err) {
            const message = err.response?.data?.message || err.message || 'Failed to generate blueprint';
            setError(message);
            toast.error(message);
            return null;
        } finally {
            setLoading(false);
        }
    }, []);

    const reset = useCallback(() => {
        setBlueprint(null);
        setError(null);
        setLoading(false);
    }, []);

    return {
        loading,
        blueprint,
        error,
        generate,
        reset,
        setBlueprint
    };
}
