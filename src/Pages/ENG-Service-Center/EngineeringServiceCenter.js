import React from 'react'
import Header from '../../Components/Header/Header'
import TopSection from '../../Components/TopSection'
import { freeFallImpactTest, HardnessTest, hydrostaticTest, mechanicalLoadTesting, surfaceRoughnessTester } from './escData'

function EngeneeringServiceCenter() {
  return (
    <div>
      <TopSection/>
      <Header/>

      <div className='container'>

    <div>
        <div className='display-3 text-center my-lg-4 my-2'>
        TESTING CAPABILITIES-WORKSHOP
        </div>

        <div className='py-lg-3 py-2'>
          <h1>
            {hydrostaticTest.title}
          </h1>
          <h6 className='font-bold'>Range : {hydrostaticTest.Range}</h6>
          <h6 className='font-bold'>Material : {hydrostaticTest.Material}</h6>
          <h6 className='font-bold'>Equipment : {hydrostaticTest.Equipment}</h6>
        </div>

        <div className='py-lg-3 py-2'>
          <h1>
            {HardnessTest.title}
          </h1>
          {
            HardnessTest.testArray.map((element, index) => (
              <h6 className='font-bold px-4'>{index + 1} : {element}</h6>
            ))
          }
          <h6 className='font-bold'>Material : {hydrostaticTest.Material}</h6>
          <h6 className='font-bold'>Equipment : {hydrostaticTest.Equipment}</h6>
        </div>


        <div className='py-lg-3 py-2'>
          <h1>
            {freeFallImpactTest.title}
          </h1>
          <h6 className='font-bold'>Range : {freeFallImpactTest.Range}</h6>
          <h6 className='font-bold'>Material : {freeFallImpactTest.Material}</h6>
          <h6 className='font-bold'>Equipment : {freeFallImpactTest.Equipment}</h6>
        </div>


        <div className='py-lg-3 py-2'>
          <h1>
            {mechanicalLoadTesting.title}
          </h1>
          <h6 className='font-bold'>Range : {mechanicalLoadTesting.Range}</h6>
          <h6 className='font-bold'>Equipment : {mechanicalLoadTesting.Equipment}</h6>
        </div>
        <div className='py-lg-3 py-2'>
          <h1>
            {surfaceRoughnessTester.title}
          </h1>
          <h6 className='font-bold'>Equipment : {surfaceRoughnessTester.Equipment}</h6>
        </div>
    </div>
      </div>
    </div>
  )
}

export default EngeneeringServiceCenter