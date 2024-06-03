import React from 'react'
import { RemoveUserLocalUseCase } from '../../../../Domain/useCases/userLocal/RemoveUserLocal';
import { userUserLocal } from '../../../hooks/userUserLocal';

export const ProfileInfoViewModel = () => {

  const {user} =userUserLocal();

  const removeSession = async () => {
      await RemoveUserLocalUseCase();
  }
  return {
    removeSession,
    user
  }
}

export default ProfileInfoViewModel;