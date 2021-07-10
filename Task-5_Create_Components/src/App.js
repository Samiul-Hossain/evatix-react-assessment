import React, { useState, useEffect } from 'react'
import Button from './components/Button/Button'
import Avatar from './components/Avatar/Avatar'
import axios from 'axios'
import Posts from './components/Pagination/Posts'
import Pagination from './components/Pagination/Pagination'

function App() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(10)

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true)
      const res = await axios.get('http://jsonplaceholder.typicode.com/posts')
      setPosts(res.data)
      setLoading(false)
    }

    fetchPosts()
  }, [])

  const indexOfLastPost = currentPage * postsPerPage
  const indexofFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexofFirstPost, indexOfLastPost)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div className='container mt-5'>
      <h1 className='text-primary mb-3'>Button</h1>
      <Button text='Default button' appearance='btn' />
      <Button text='Primary button' appearance='btn btn-primary' />
      <Button text='Subtle button' appearance='btn btn-subtle' />
      <Button text='Link button' appearance='btn  btn-link ' />
      <Button text='Subtle link button' appearance='btn btn-subtle-link' />
      <Button text='Warning button' appearance='btn btn-warning' />
      <Button text='Danger button' appearance='btn btn-danger' />
      <Button text='Disabled button' appearance='btn btn-disabled' />
      <Button text='Selected button' appearance='btn btn-selected' />
      <h1 className='text-primary mb-3'>Avatar</h1>
      <Avatar
        appearance='circle'
        size='size-medium'
        src='https://hello.atlassian.net/secure/projectavatar?pid=30630'
      />
      <Avatar
        appearance='square'
        size='size-medium'
        src='https://hello.atlassian.net/secure/projectavatar?pid=30630'
      />
      <Avatar
        appearance='circle'
        size='size-large'
        src='https://pbs.twimg.com/profile_images/803832195970433027/aaoG6PJI_400x400.jpg'
      />
      <Avatar
        appearance='square'
        size='size-large'
        src='https://pbs.twimg.com/profile_images/803832195970433027/aaoG6PJI_400x400.jpg'
      />
      <Avatar
        appearance='circle'
        size='size-xlarge'
        src='https://pbs.twimg.com/profile_images/803832195970433027/aaoG6PJI_400x400.jpg'
      />
      <Avatar
        appearance='square'
        size='size-xlarge'
        src='https://pbs.twimg.com/profile_images/803832195970433027/aaoG6PJI_400x400.jpg'
      />
      <Avatar
        appearance='circle'
        size='size-xxlarge'
        src='https://hello.atlassian.net/secure/projectavatar?pid=30630'
      />
      <Avatar
        appearance='square'
        size='size-xxlarge'
        src='https://hello.atlassian.net/secure/projectavatar?pid=30630'
      />

      <h1 className='text-primary mb-3'>Pagination Example</h1>
      <Posts posts={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  )
}

export default App
