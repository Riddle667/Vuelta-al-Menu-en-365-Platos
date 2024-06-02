import React from 'react'
import { userUserLocal } from '../../hooks/userUserLocal'

export const RolesViewModel = () => {

    const {user} = userUserLocal();

  return {
    user
  }
}

export default RolesViewModel