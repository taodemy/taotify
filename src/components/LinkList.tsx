import React from 'react'
import { FaEllipsisH } from "react-icons/fa";

type linkprops={
    iconName?:string;
    linkName:string
}

const LinkList = ({iconName,linkName}:linkprops) => {
  return (
    <>
      <a>{`<${iconName}/>`}{linkName}</a>
    </>
  )
}

export default LinkList
