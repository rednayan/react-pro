import React from 'react'
import {Grid} from '@mui/material'
import CreateBlog from '../../component/CreateBlog'
import DisplayBlogs from '../../component/DisplayBlogs'

export default function Blog() {
  return (
      <Grid container>
        <Grid item xs ={12}>
            <DisplayBlogs />
        </Grid>
      </Grid>
  )
}

