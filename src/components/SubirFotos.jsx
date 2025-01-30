"use client"
 
import React, { useEffect, useState } from 'react';
import useUserStore from '@/store/userStore';
import { useRouter } from 'next/navigation';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db } from '@/firebase/config';
import {doc, getDoc, updateDoc, arrayUnion, setDoc} from 'firebase/firestore';
 
export default function SubirFotos() {
    const user = useUserStore((state) => state.user);
    const router = useRouter();
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
 
    useEffect(() => {
        if (!user) {
            router.push('/login'); // Redirect to login if not authenticated
        }
    }, [user, router]);
 
    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };
 
    const handleUpload = async (e) => {
        e.preventDefault();
        if (!file) {
            setError('Please select a file to upload');
            return;
        }
 
        const storage = getStorage();
        const storageRef = ref(storage, `photos/${user.email}/${file.name}`);
        try {
            await uploadBytes(storageRef, file);
            const downloadURL = await getDownloadURL(storageRef);
 
            const userDocRef = doc(db, 'usuarios', user.email);
            const userDoc = await getDoc(userDocRef);
 
            if (userDoc.exists()) {
                const userData = userDoc.data();
                if (!userData.photoIds?.includes(downloadURL)) {
                    await updateDoc(userDocRef, {
                        photoIds: arrayUnion(downloadURL)
                    });
                }
            } else {
                await setDoc(userDocRef, {
                    email: user.email,
                    photoIds: [downloadURL]
                });
            }
            console.log('Imagen subida: ', downloadURL);
            alert('Imagen Subida: ' + downloadURL);
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
            <h1 className="text-2xl font-bold mb-4">Subir fotos</h1>
            <form onSubmit={handleUpload} className="mb-4">
                <div className="mb-2">
                    <label htmlFor="file" className="block text-sm font-medium text-gray-700">Seleccionar Foto</label>
                    <input
                        type="file"
                        id="file"
                        onChange={handleFileChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
                >
                    Subir Foto
                </button>
                {error && <div className="text-red-500 mt-2">{error}</div>}
            </form>
        </div>
    );
}
 