export default async (url, options = {}) => {
  try {
    const res = await fetch(url, { mode: 'cors', ...options });
    if (res.ok) return res.json();
    throw new Error('Failed to fetch');
  } catch (error) {
    throw new Error('Failed to fetch');
  }
};
