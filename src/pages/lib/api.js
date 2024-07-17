// lib/api.js

// Example function to fetch latest posts
export async function getLatestPosts() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!response.ok) {
        throw new Error('Failed to fetch latest posts');
      }
      const posts = await response.json();
      return posts;
    } catch (error) {
      console.error('Error fetching latest posts:', error.message);
      return [];
    }
  }
  
  // Example function to fetch a single post by ID
  export async function getPostById(id) {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch post');
      }
      const post = await response.json();
      return post;
    } catch (error) {
      console.error(`Error fetching post with ID ${id}:`, error.message);
      return null;
    }
  }
  