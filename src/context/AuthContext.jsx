import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Mock users database stored in localStorage
  const getStoredUsers = () => {
    const users = localStorage.getItem('marketgrow_registered_users');
    return users ? JSON.parse(users) : [];
  };

  useEffect(() => {
    const storedUser = localStorage.getItem('marketgrow_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    const users = getStoredUsers();
    // Check registered users first, fallback to mock demo user
    const existingUser = users.find(u => u.email.toLowerCase() === email.toLowerCase());

    if (existingUser) {
      if (existingUser.password !== password) {
        return { success: false, message: 'Invalid email or password.' };
      }
      const { password: _, ...userData } = existingUser;
      localStorage.setItem('marketgrow_user', JSON.stringify(userData));
      setUser(userData);
      return { success: true, message: 'Login successful! Redirecting...' };
    }

    // Demo account fallback
    if (email === 'demo@marketgrow.com' && password === 'password123') {
      const mockUser = {
        id: 'usr_101',
        name: 'Demo Owner',
        email: email,
        businessName: 'Apex Enterprises',
      };
      localStorage.setItem('marketgrow_user', JSON.stringify(mockUser));
      setUser(mockUser);
      return { success: true, message: 'Login successful! Redirecting...' };
    }

    return { success: false, message: 'Invalid email or password.' };
  };

  const register = (userData) => {
    const users = getStoredUsers();
    const userExists = users.some(u => u.email.toLowerCase() === userData.email.toLowerCase());

    if (userExists) {
      return { success: false, message: 'An account with this email already exists.' };
    }

    const newUser = { id: Date.now().toString(), ...userData };
    users.push(newUser);
    localStorage.setItem('marketgrow_registered_users', JSON.stringify(users));

    const { password: _, ...sessionUser } = newUser;
    localStorage.setItem('marketgrow_user', JSON.stringify(sessionUser));
    setUser(sessionUser);
    
    return { success: true, message: 'Account created successfully! Redirecting...' };
  };

  const logout = () => {
    localStorage.removeItem('marketgrow_user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);