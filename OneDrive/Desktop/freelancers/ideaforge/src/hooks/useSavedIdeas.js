import { useState, useEffect, useCallback } from 'react';
import { getIdeas, saveIdea, deleteIdea, getIdeaById } from '../api/ideasAPI';
import toast from 'react-hot-toast';

const LOCAL_STORAGE_KEY = 'saved_ideas';

function getLocalIdeas() {
    try {
        const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
        return saved ? JSON.parse(saved) : [];
    } catch {
        return [];
    }
}

function setLocalIdeas(ideas) {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(ideas));
}

export function useSavedIdeas(isAuthenticated = false) {
    const [ideas, setIdeas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchIdeas = useCallback(async () => {
        setLoading(true);
        setError(null);

        try {
            if (isAuthenticated) {
                const data = await getIdeas();
                setIdeas(data);
            } else {
                setIdeas(getLocalIdeas());
            }
        } catch (err) {
            setError(err.message);
            setIdeas(getLocalIdeas());
        } finally {
            setLoading(false);
        }
    }, [isAuthenticated]);

    useEffect(() => {
        fetchIdeas();
    }, [fetchIdeas]);

    const save = useCallback(async (blueprint) => {
        const idea = {
            ...blueprint,
            id: blueprint.id || `idea_${Date.now()}`,
            savedAt: new Date().toISOString()
        };

        try {
            if (isAuthenticated) {
                const saved = await saveIdea(idea);
                setIdeas(prev => [saved, ...prev]);
            } else {
                const localIdeas = getLocalIdeas();
                const exists = localIdeas.find(i => i.id === idea.id);
                if (exists) {
                    toast.error('Idea already saved');
                    return null;
                }
                const updated = [idea, ...localIdeas];
                setLocalIdeas(updated);
                setIdeas(updated);
            }
            toast.success('Idea saved!');
            return idea;
        } catch {
            toast.error('Failed to save idea');
            return null;
        }
    }, [isAuthenticated]);

    const remove = useCallback(async (id) => {
        try {
            if (isAuthenticated) {
                await deleteIdea(id);
            }
            const localIdeas = getLocalIdeas().filter(i => i.id !== id);
            setLocalIdeas(localIdeas);
            setIdeas(localIdeas);
            toast.success('Idea removed');
        } catch {
            toast.error('Failed to remove idea');
        }
    }, [isAuthenticated]);

    const getById = useCallback(async (id) => {
        try {
            if (isAuthenticated) {
                return await getIdeaById(id);
            }
            return getLocalIdeas().find(i => i.id === id) || null;
        } catch {
            return null;
        }
    }, [isAuthenticated]);

    const isSaved = useCallback((id) => {
        return ideas.some(i => i.id === id);
    }, [ideas]);

    return {
        ideas,
        loading,
        error,
        save,
        remove,
        getById,
        isSaved,
        refetch: fetchIdeas
    };
}
