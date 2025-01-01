import React from 'react'
import ExploreCollections from './ExploreCollections'
import NavigationBar from './NavigationBar'
import Trending from './Trending';

const Main = () => {
  return (
    <main className='mt-5 flex flex-col gap-20'>
      <NavigationBar />
      <ExploreCollections />
      <Trending />
    </main>
  )
}

export default Main