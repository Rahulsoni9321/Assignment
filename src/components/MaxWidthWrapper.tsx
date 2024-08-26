import { ReactNode } from "react"

const MaxWidthWrapper = ({children}:{children:ReactNode}) => {
  return (
    <div className="p-3">
      {children}
    </div>
  )
}

export default MaxWidthWrapper
