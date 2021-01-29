import React from 'react'
import Logo from '../assets/img/Logo.png'

function Navbar() {
  return (
    <nav class="flex items-center justify-between flex-wrap bg-teal p-2 shadow-lg">
        <img src={Logo} width="70" height="70" alt="montri logo" />
    </nav>
  );
}
export default Navbar;