import React from 'react';

const MainContent: React.FC = (props) => {
  return (
    <main>
      {props.children}
    </main>
  )
}

export default MainContent;