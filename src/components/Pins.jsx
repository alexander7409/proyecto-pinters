"use client"
 
import React, { useEffect, useState } from 'react';
import { fetchPhotosFromUnsplash } from '@/api/unsplash';
import useSearchStore from '@/store/searchStore';
import { db } from '@/firebase/config'; // Import Firestore
import { doc, getDoc, setDoc, updateDoc, arrayUnion, collection, addDoc  } from 'firebase/firestore'; // Import Firestore functions
import useUserStore from '@/store/userStore'; // Import user store
 
 
export default function Pins() {
    const [photos, setPhotos] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [hoveredPhotoId, setHoveredPhotoId] = useState(null);
    const searchTerm = useSearchStore((state) => state.searchTerm);
    const user = useUserStore((state) => state.user);
 
    useEffect(() => {
        const fetchPhotos = async () => {
            try {
                const data = await fetchPhotosFromUnsplash(searchTerm, page);
                setPhotos(data.results);
                setTotalPages(data.total_pages);
            } catch (err) {
            }
        };
 
        fetchPhotos();
    }, [searchTerm, page]);
 
    const handleNextPage = () => {
        if (page < totalPages) {
            setPage(page + 1);
        }
    };
 
    const handlePreviousPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };
 
    const handlePinClick = async(photoUrl) => {
        if (!user) {
            console.error('User not authenticated');
            return;
        }
 
        const userDocRef = doc(db, 'usuarios', user.email);
        const userDoc = await getDoc(userDocRef);
 
        if (userDoc.exists()) {
            const userData = userDoc.data();
            if (!userData.photoIds?.includes(photoUrl)) {
                await updateDoc(userDocRef, {
                    photoIds: arrayUnion(photoUrl)
                });
            }
        } else {
            await setDoc(userDocRef, {
                email: user.email,
                photoIds: [photoUrl]
            });
        }
 
        console.log(`Pin clicked for photo URL: ${photoUrl}`);
    };
 
    return (
        <div>
            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
                {photos.map((photo) => (
                    <div
                        key={photo.id}
                        className="mb-4 break-inside-avoid relative"
                        onMouseEnter={() => setHoveredPhotoId(photo.id)}
                        onMouseLeave={() => setHoveredPhotoId(null)}
                    >
                        <img src={photo.urls.small} alt={photo.description} className="w-full h-auto rounded-lg" />
                        {hoveredPhotoId === photo.id && (
                            <div
                                className="absolute top-2 right-2 bg-white p-2 rounded-full cursor-pointer"
                                onClick={() => handlePinClick(photo.urls.small)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6 text-red-500">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25c-1.8 0-3.25 1.45-3.25 3.25 0 1.8 1.45 3.25 3.25 3.25s3.25-1.45 3.25-3.25c0-1.8-1.45-3.25-3.25-3.25zm0 6.5c-1.8 0-3.25 1.45-3.25 3.25v6.5c0 1.8 1.45 3.25 3.25 3.25s3.25-1.45 3.25-3.25v-6.5c0-1.8-1.45-3.25-3.25-3.25z" />
                                </svg>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <div className="flex justify-between items-center mt-4">
                <button
                    onClick={handlePreviousPage}
                    disabled={page === 1}
                    className="bg-gray-200 rounded-full px-4 py-2 hover:bg-gray-300 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Previous
                </button>
                <span className="text-lg font-semibold">
                    Page {page} of {totalPages}
                </span>
                <button
                    onClick={handleNextPage}
                    disabled={page === totalPages}
                    className="bg-gray-200 rounded-full px-4 py-2 hover:bg-gray-300 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Next
                </button>
            </div>
        </div>
    );
}