import React from 'react';

const Page = ({children, singleMode, id}) => (<div
  id={"singlePage"} className="bg-white shadow-1 center pa3" 
  style={{width: "150mm", height: singleMode ? "200mm" : ""}}
>
  {children}
</div>); 

export default Page;