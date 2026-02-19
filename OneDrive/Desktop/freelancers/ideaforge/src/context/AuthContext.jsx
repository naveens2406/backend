import { createContext, useContext, useState, useEffect } from 'react';
// import { initializeApp } from 'firebase/app';
// import { getAuth, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Scaffolding Firebase logic - currently just simulated
    useEffect(() => {
        // onAuthStateChanged(auth, (user) => {
        //   setUser(user);
        //   setLoading(false);
        // });

        // Simulate no user for now
        setTimeout(() => {
            setLoading(false);
        }, 500);
    }, []);

    const loginWithGoogle = async () => {
        // const provider = new GoogleAuthProvider();
        // return signInWithPopup(auth, provider);
        console.log('Login with Google triggered');
    };

    const logout = async () => {
        // return signOut(auth);
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, loading, loginWithGoogle, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);
