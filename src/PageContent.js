import React from 'react'
import './styles/PageContent.css'

function PageContent(props) {
  return (
    <main className='PageContent'>
        {props.children}
    </main>
  )
}


export default PageContent;
