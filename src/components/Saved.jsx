"use client"
 
import React, { useEffect, useState } from 'react';
import { db } from '@/firebase/config';
import { doc, getDoc } from 'firebase/firestore';
import useUserStore from '@/store/userStore';
 
export default function Saved() {
    const [savedPhotos, setSavedPhotos] = useState([]);
    const user = useUserStore((state) => state.user);
 
    useEffect(() => {
        const fetchSavedPhotos = async () => {
            if (!user) return;
 
            const userDocRef = doc(db, 'usuarios', user.email);
            const userDoc = await getDoc(userDocRef);
 
            if (userDoc.exists()) {
                const userData = userDoc.data();
                setSavedPhotos(userData.photoIds || []);
            }
        };
 
        fetchSavedPhotos();
    }, [user]);
 
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Guardados</h1>
            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
                {savedPhotos.map((photoUrl) => (
                    <div key={photoUrl} className="mb-4 break-inside-avoid">
                        <img src={photoUrl} alt={photoUrl} className="w-full h-auto rounded-lg" />
                    </div>
                ))}
            </div>
        </div>
    );
}