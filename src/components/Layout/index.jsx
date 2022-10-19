import React from 'react';
import Sidebar from '../common/Sidebar';

const index = ({ children }) => {
   return (
      <>
         <Sidebar />
         {children}
      </>
   )
}

export default index;