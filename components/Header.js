import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <h1 class="flex title-font text-3xl items-center text-gray-900 mb-4 md:mb-0">TodoList</h1>
    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link href={"/"} class="mr-5 hover:text-gray-900">Home</Link>
      <Link href={"/"} class="mr-5 hover:text-gray-900">About</Link>
      <Link href={"/todos"} class="mr-5 hover:text-gray-900">My Task</Link>
      <Link href={"/"} class="mr-5 hover:text-gray-900">Contact Us</Link> 
    </nav>
    
  </div>
</header>
  )
}

export default Header