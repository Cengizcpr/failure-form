import React from 'react';

const Page = ({children, singleMode, id}) => (<div
  id={"singlePage"} className="bg-white shadow-1 center pa6" 
  style={{width: "300mm", height: singleMode ? "400mm" : ""}}
>
  {children}
</div>); 

export default Page;