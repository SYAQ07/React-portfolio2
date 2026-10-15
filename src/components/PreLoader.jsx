import { useState, useEffect } from "react"
const PreLoader = () => {

const [loading, setloading] = useState(true);

useEffect(() => {
  setTimeout(() => setloading(false), 3000)
}, [])
     
  return (
    loading && (
  
    <div className="w-screen h-screen fixed flex items-center justify-center bg-black z-50">
     <div role="status">
<svg
  aria-hidden="true"
  className="inline w-10 h-10 text-gray-200 animate-spin fill-purple-600"
  viewBox="0 0 100 101"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4012 91.5095 50 91.5095C72.5988 91.5095 90.9186 73.1895 90.9186 50.5908C90.9186 27.9922 72.5988 9.67291 50 9.67291C27.4012 9.67291 9.08144 27.9922 9.08144 50.5908Z"
    fill="currentColor"
  />
  <path
    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.119 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0871 9.04881 41.5691 10.4713 44.0505 10.1071C47.8511 9.54855 51.7195 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6334 15.2552C75.2738 17.9647 79.3348 21.5618 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5425 39.6781 93.9676 39.0409Z"
    fill="currentFill"
  />
</svg>    
        <span class="sr-only">Loading...</span>
</div>
</div>
      
    )

    
  )
}

export default PreLoader