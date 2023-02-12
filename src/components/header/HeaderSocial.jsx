import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'

const HeaderSocial = () => {
  return (
    <div className="header__social">
        <a href="http://linkedin.com" targer="__blank"><BsLinkedin/></a>
        <a href="http://github.com" targer="__blank"><FaGithub/></a>
        <a href="http://dribbble.com" targer="__blank"><FiDribbble/></a>
    </div>
  )
}

export default HeaderSocial