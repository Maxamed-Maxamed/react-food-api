import axios from 'axios';

const apiKey = process.env.REACT_APP_SPOONACULAR_API_KEY;

const api = axios.create({
  baseURL: 'https://api.spoonacular.com',
  params: {
    apiKey: apiKey,
  },
});

export const getRecipes = async (query) => {
  try {
    const response = await api.get(`/recipes/complexSearch`, {
      params: {
        query: query,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching recipes:', error);
    throw error;
  }
};
