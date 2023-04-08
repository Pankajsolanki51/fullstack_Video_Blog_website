import React, { useEffect } from 'react'
import { Flex } from '@chakra-ui/react'
import { Category, Create, Feed, NavBar, Search, UserProfile, VideoDetails } from '../Component'
import { Route, Routes } from 'react-router-dom'
import {categories} from '../Data';

const Home = ({ user }) => {
   return (
    <>
      <NavBar user={user} />
      <Flex width={"100vw"}>
      <Flex 
      direction={'column'} 
      justifyContent="start"
        alignItems={"center"}
        width="5%"
      >
       {categories && categories.map(data=> <Category key ={data.id} data={data}/>)}
      </Flex>
      <Flex width={"95%"} 
      px={4} 
      justifyContent='center' 
      alignItems={'center'} >
        <Routes>
          <Route path = "/" element = {<Feed/>}/>
          <Route path = "/category/:categoryId" element = {<Feed/>}/>
          <Route path = "/create" element = {<Create/>}/>
          <Route path = "/videoDetail/:videoId" element = {<VideoDetails />}/>
          <Route path = "/search" element = {<Search/>}/>
          <Route path = "/UserDetail/:userId" element = {<UserProfile/>}/>
        </Routes>
      </Flex>
      </Flex>
    </>
  )
}

export default Home;