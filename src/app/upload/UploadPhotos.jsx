"use client"
 
import React, { useEffect, useState } from 'react';
import useUserStore from '@/store/userStore';
import { useRouter } from 'next/navigation';
import { uploadPhotoToUnsplash } from '@/api/unsplash';
 
export default function UploadPhotos() {
    const user = useUserStore((state) => state.user);
    const router = useRouter();
    const [photos, setPhotos] = useState([]);
    const [photoId, setPhotoId] = useState('');
    const [photoData, setPhotoData] = useState({ description: '', location: '' });
    const [error, setError] = useState(null);
 
    useEffect(() => {
        if (!user) {
            router.push('/login'); // Redirect to login if not authenticated
        }
    }, [user, router]);
 
    useEffect(() => {
        const fetchPhotos = async () => {
            try {
                const data = await fetchAllPhotosFromUnsplash();
                setPhotos(data);
            } catch (error) {
                console.error(error.message);
            }
        };
 
        fetchPhotos();
    }, []);
 
    const handleUpload = async (e) => {
        e.preventDefault();
        try {
            const data = await uploadPhotoToUnsplash(photoId, photoData);
            console.log('Photo uploaded:', data);
            setError(null);
        } catch (error) {
            setError(error.message);
        }
    };
 
    if (!user) {
        return null; // Render nothing if not authenticated
    }
 
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Upload Photos</h1>
            <form onSubmit={handleUpload} className="mb-4">
                <div className="mb-2">
                    <label htmlFor="photoId" className="block text-sm font-medium text-gray-700">Photo ID</label>
                    <input
                        type="text"
                        id="photoId"
                        value={photoId}
                        onChange={(e) => setPhotoId(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required
                    />
                </div>
                <div className="mb-2">
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                    <input
                        type="text"
                        id="description"
                        value={photoData.description}
                        onChange={(e) => setPhotoData({ ...photoData, description: e.target.value })}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required
                    />
                </div>
                <div className="mb-2">
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
                    <input
                        type="text"
                        id="location"
                        value={photoData.location}
                        onChange={(e) => setPhotoData({ ...photoData, location: e.target.value })}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
                >
                    Upload Photo
                </button>
                {error && <div className="text-red-500 mt-2">{error}</div>}
            </form>
            <div className="grid grid-cols-3 gap-4">
                {photos.map((photo) => (
                    <div key={photo.id} className="border rounded-lg overflow-hidden">
                        <img src={photo.urls.small} alt={photo.description} className="w-full h-auto" />
                    </div>
                ))}
            </div>
        </div>
    );
}