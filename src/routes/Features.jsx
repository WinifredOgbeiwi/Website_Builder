import React from 'react'
import { Hero } from '../sections/features/hero'
import { Benefit } from '../sections/features/benefit'
import { Clientele } from '../sections/features/clientele'
import { Support } from '../sections/features/support'
import { Delivery } from '../sections/features/delivery'
import Faq from '../sections/home/faq'

const Features = () => {
  return (
    <>
      <Hero />
      <Benefit/>
      <Clientele/>
      <Support/>
      <Delivery/>
      <Faq/>
    </>
  )
}

export default Features
