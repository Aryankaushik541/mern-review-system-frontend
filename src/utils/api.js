// API Configuration
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

// Helper function to get auth token
const getAuthToken = () => {
  return localStorage.getItem('token');
};

// Helper function to create headers
const getHeaders = (includeAuth = false) => {
  const headers = {
    'Content-Type': 'application/json',
  };

  if (includeAuth) {
    const token = getAuthToken();
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
  }

  return headers;
};

// Generic API request function
const apiRequest = async (endpoint, options = {}) => {
  const url = `${API_URL}${endpoint}`;
  
  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        ...getHeaders(options.auth),
        ...options.headers,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'API request failed');
    }

    return data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

// API Methods
export const api = {
  // Health check
  health: () => apiRequest('/api/health'),

  // Auth endpoints
  auth: {
    signup: (userData) => apiRequest('/api/auth/signup', {
      method: 'POST',
      body: JSON.stringify(userData),
    }),
    
    login: (credentials) => apiRequest('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    }),
    
    forgotPassword: (email) => apiRequest('/api/auth/forgot-password', {
      method: 'POST',
      body: JSON.stringify({ email }),
    }),
    
    resetPassword: (token, password) => apiRequest(`/api/auth/reset-password/${token}`, {
      method: 'POST',
      body: JSON.stringify({ password }),
    }),
  },

  // Review endpoints
  reviews: {
    getAll: (filters = {}) => {
      const queryParams = new URLSearchParams(filters).toString();
      return apiRequest(`/api/reviews${queryParams ? `?${queryParams}` : ''}`);
    },
    
    getById: (id) => apiRequest(`/api/reviews/${id}`),
    
    create: (reviewData) => apiRequest('/api/reviews', {
      method: 'POST',
      body: JSON.stringify(reviewData),
      auth: true,
    }),
    
    update: (id, reviewData) => apiRequest(`/api/reviews/${id}`, {
      method: 'PUT',
      body: JSON.stringify(reviewData),
      auth: true,
    }),
    
    delete: (id) => apiRequest(`/api/reviews/${id}`, {
      method: 'DELETE',
      auth: true,
    }),
    
    addReply: (reviewId, replyData) => apiRequest(`/api/reviews/${reviewId}/reply`, {
      method: 'POST',
      body: JSON.stringify(replyData),
      auth: true,
    }),
    
    updateReply: (reviewId, replyId, replyData) => apiRequest(`/api/reviews/${reviewId}/reply/${replyId}`, {
      method: 'PUT',
      body: JSON.stringify(replyData),
      auth: true,
    }),
    
    deleteReply: (reviewId, replyId) => apiRequest(`/api/reviews/${reviewId}/reply/${replyId}`, {
      method: 'DELETE',
      auth: true,
    }),
  },

  // Admin endpoints
  admin: {
    getStats: () => apiRequest('/api/admin/stats', { auth: true }),
    
    getUsers: () => apiRequest('/api/admin/users', { auth: true }),
    
    getUserById: (id) => apiRequest(`/api/admin/users/${id}`, { auth: true }),
    
    updateUser: (id, userData) => apiRequest(`/api/admin/users/${id}`, {
      method: 'PUT',
      body: JSON.stringify(userData),
      auth: true,
    }),
    
    deleteUser: (id) => apiRequest(`/api/admin/users/${id}`, {
      method: 'DELETE',
      auth: true,
    }),
    
    getAllReviews: () => apiRequest('/api/admin/reviews', { auth: true }),
  },
};

// Export API_URL for direct use if needed
export { API_URL };

export default api;
