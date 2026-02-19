import axiosInstance from './axiosInstance';

export async function getIdeas() {
    const response = await axiosInstance.get('/ideas');
    return response.data;
}

export async function getIdeaById(id) {
    const response = await axiosInstance.get(`/ideas/${id}`);
    return response.data;
}

export async function saveIdea(blueprint) {
    const response = await axiosInstance.post('/ideas', blueprint);
    return response.data;
}

export async function deleteIdea(id) {
    const response = await axiosInstance.delete(`/ideas/${id}`);
    return response.data;
}

export async function updateIdea(id, updates) {
    const response = await axiosInstance.put(`/ideas/${id}`, updates);
    return response.data;
}
