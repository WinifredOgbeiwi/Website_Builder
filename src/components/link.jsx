import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowRight} from 'react-icons/bs'

const LinkIcon = (props) => {
  return (
      <p className={`flex font-medium items-center space-x-5 ${props.color}`}>
          <Link to={props.link}>{props.text}</Link>
          <span className=" text-xl">
              <BsArrowRight />
          </span>
      </p>
  )
}

export default LinkIcon
