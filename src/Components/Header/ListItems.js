import React, { useState } from 'react'
import { Link } from 'react-router-dom';


function ListItems({content,link, children}) {
  const [hover, setHover] = useState(false);
  return (
    <>
    {
      children && (
        <li onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className="nav-item">
            <span className='px-1 text-white nav-link d-flex justify-content-between align-items-center'>{content}</span>
            {
              hover && children
            }
        </li>

      )
    }

    {
      !children && (
        <li className="nav-item">
          <Link to={`/${link}`} className="nav-link d-flex justify-content-between align-items-center">
            <span className='px-1'>{content}</span>
          </Link>
        </li>
      )
    }
    </>
  )
}

export default ListItems