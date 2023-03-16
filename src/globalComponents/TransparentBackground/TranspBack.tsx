import React from "react"

interface TranspBackProps {
  children?: React.ReactNode
  style?: React.CSSProperties
}

const TranspBack: React.FC<TranspBackProps> = ({ children, style }) => {
  return (
    <>
      <div
        className="block
  bg-black/70 absolute w-screen h-screen top-0 z-20 cursor-pointer hover:bg-black/50"
        style={style}
      >
        {children}
      </div>
    </>
  )
}

export default TranspBack
