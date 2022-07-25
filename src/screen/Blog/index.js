import React from 'react'
import {Grid} from '@mui/material'
import CreateBlog from '../../component/CreateBlog'
import DisplayBlogs from '../../component/DisplayBlogs'

export default function Blog() {
  return (
      <Grid container spacing ={2}>
        <Grid item xs ={8}>
            <DisplayBlogs />
        </Grid>
        <Grid item xs={4}>
            <CreateBlog />
        </Grid>
      </Grid>
  )
}
