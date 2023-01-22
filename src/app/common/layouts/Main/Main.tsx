import React from 'react';

const MainLayout: React.FC = (props) => {
  return (
    <>
      <main>
        {props.children}
      </main>
    </>
  )
}
export default MainLayout;
