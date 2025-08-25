import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  email: string;
  username: string;
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (email: string, password: string, username: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in on app start
    const storedUser = localStorage.getItem('climax_user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        localStorage.removeItem('climax_user');
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Get stored users
    const storedUsers = localStorage.getItem('climax_users');
    const users = storedUsers ? JSON.parse(storedUsers) : [];
    
    // Find user
    const foundUser = users.find((u: any) => u.email === email && u.password === password);
    
    if (foundUser) {
      const userData = {
        id: foundUser.id,
        email: foundUser.email,
        username: foundUser.username,
        avatar: foundUser.avatar
      };
      
      setUser(userData);
      localStorage.setItem('climax_user', JSON.stringify(userData));
      setIsLoading(false);
      return true;
    }
    
    setIsLoading(false);
    return false;
  };

  const signup = async (email: string, password: string, username: string): Promise<boolean> => {
    setIsLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Get stored users
    const storedUsers = localStorage.getItem('climax_users');
    const users = storedUsers ? JSON.parse(storedUsers) : [];
    
    // Check if user already exists
    const existingUser = users.find((u: any) => u.email === email);
    if (existingUser) {
      setIsLoading(false);
      return false;
    }
    
    // Create new user
    const newUser = {
      id: Math.random().toString(36).substr(2, 9),
      email,
      password,
      username,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${username}`
    };
    
    // Store user in users array
    users.push(newUser);
    localStorage.setItem('climax_users', JSON.stringify(users));
    
    // Set current user
    const userData = {
      id: newUser.id,
      email: newUser.email,
      username: newUser.username,
      avatar: newUser.avatar
    };
    
    setUser(userData);
    localStorage.setItem('climax_user', JSON.stringify(userData));
    setIsLoading(false);
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('climax_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};