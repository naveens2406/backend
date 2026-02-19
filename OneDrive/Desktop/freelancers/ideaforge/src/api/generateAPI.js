import axiosInstance from './axiosInstance';

export async function generateBlueprint(config) {
    const response = await axiosInstance.post('/generate', {
        domain: config.domain,
        projectType: config.projectType,
        skillLevel: config.skillLevel,
        keywords: config.keywords,
        preferences: config.preferences
    });
    return response.data;
}

export async function generateBlueprintStream(config, onChunk) {
    const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api'}/generate/stream`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('auth_token')}`
            },
            body: JSON.stringify({
                domain: config.domain,
                projectType: config.projectType,
                skillLevel: config.skillLevel,
                keywords: config.keywords,
                preferences: config.preferences
            })
        }
    );

    if (!response.ok) {
        throw new Error('Failed to generate blueprint');
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let result = '';

    while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        
        const chunk = decoder.decode(value, { stream: true });
        result += chunk;
        if (onChunk) onChunk(chunk);
    }

    try {
        return JSON.parse(result);
    } catch {
        return result;
    }
}
