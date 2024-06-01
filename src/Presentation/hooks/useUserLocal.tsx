import React, { useEffect, useState } from 'react'
import { GetUserLocalUseCase } from '../../Domain/useCases/userLocal/GetUserLocal';
import { User } from '../../Domain/entities/User';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';

export const useUserLocal = () => {

    const [user, setUser] = useState<User>()
    
    useEffect(() => {
        getUserSession();
    }, [])

    const getUserSession = async () => {
        const user = await GetUserLocalUseCase();
        setUser(user);
    }

    return { 
        user,
        getUserSession 
    }
}
