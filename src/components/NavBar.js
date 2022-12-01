import React from "react"

export default function NavBar() {
  return (
    <div className="flex flex-row justify-between flex-grow-1 px-3 max-h-24 bg-[#383436]">
      <a href="/" className="grow-0">
        <img
          src="./images/image.png"
          alt="Instameet Logo"
          style={{
            height: "100%",
            width: "96px",
          }}
        />
      </a>
      <div className="self-center text-4xl font-serif font-bold text-white">
        instameet
      </div>
      <div className="self-center text-white text-xl flex">
        <a className="pr-2" href="/">
          Home
        </a>
        <a className="border-l-2 pl-2" href="/about">
          About
        </a>
      </div>
    </div>
  )
}
