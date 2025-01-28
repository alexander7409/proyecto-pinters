const key = 'i9Chx6psmzC8VgeUy1JFdNLaia4waE4en4wiVypppFc'
 
export const fetchPhotosFromUnsplash = async (search, page) => {
    const response = await fetch(`https://api.unsplash.com/search/photos?query=${search}&page=${page}`, {
        headers: {
            Authorization: `Client-ID ${key}`
        }
    });
 
    if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
 
    const data = await response.json();
    return data;
};
 
export const uploadPhotoToUnsplash = async (photoId, photoData) => {
    const response = await fetch(`https://api.unsplash.com/photos/${photoId}`, {
        method: 'PUT',
        headers: {
            Authorization: `Client-ID ${key}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(photoData)
    });
 
    if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
 
    const data = await response.json();
    return data;
};