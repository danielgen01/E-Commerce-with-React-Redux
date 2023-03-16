import React from "react"

interface TranspBackProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  onClick?: ()=> void
}

const TranspBack: React.FC<TranspBackProps> = ({ children, style, onClick }) => {
  return (
    <>
      <div
        className="block
  bg-black/70 absolute w-screen h-screen top-0 z-20 cursor-pointer hover:bg-black/50"
        style={style} 
        onClick={onClick}
      >
        {children}
      </div>
    </>
  )
}

export default TranspBack
