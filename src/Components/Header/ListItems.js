import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import HoverList from './HoverList';


function ListItems({data}) {
  const [hover, setHover] = useState(false);
  return (
    <>
      {
        data.hoverList && (
          <li onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className="nav-item">
              <a className="nav-link d-flex justify-content-between align-items-center"  aria-current="page" href="##"> 
              <span className='px-1'>{data.title}</span>
              {
                data.topLevel && (
                  <i class="fa fa-angle-down" aria-hidden="true"></i>
                  )
                }
              {
                !data.topLevel && (
                  <i class="fa fa-angle-right" aria-hidden="true"></i>
                )
              }
              </a>

              {
                hover && (
                  <HoverList topLevel={data.topLevel} dataArray={data.hoverListArray}/>
                )
              }
          </li>
        )
      }

      {
        !data.hoverList && (
          <li onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className="nav-item">
              {/* <a className="nav-link d-flex justify-content-between align-items-center"  aria-current="page" href="##"> 
              <span className='px-1'>{data.title}</span>
              </a> */}
              <Link to={`/${data.href}`}  className="nav-link d-flex justify-content-between align-items-center">
              <span className='px-1'>{data.title}</span>
              </Link>
          </li>
        )
      }
    </>
  )
}

export default ListItems