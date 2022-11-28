import React from "react"

export default function NavBar() {
  return (
    <div className="flex flex-row justify-between flex-grow-1 px-3 max-h-24 bg-[#383436]">
      <a href="localhost:3000">
        <img
          src="./images/image.png"
          alt="Instameet Logo"
          style={{ height: "100%" }}
        />
      </a>
      <div className="self-center text-4xl tracking-wider font-bold text-white">
        instameet
      </div>
      <div className="self-center text-white text-xl flex">
        <a className="pr-2" href="localhost:3000">
          Home
        </a>
        <a className="border-l-2 pl-2" href="/about">
          About
        </a>
      </div>
    </div>
  )
}
