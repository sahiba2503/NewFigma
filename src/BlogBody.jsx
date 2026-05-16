import React from 'react'

function BlogBody() {
  return (
    <>
    <div className='blogBodybordr'>
        <h1>Blog Index</h1>
        <h4>Latest Article</h4>
        </div>
         <div className='blogArticles'>
            <div className="blogLatestArticles">
                <div className="latestArticlesImg"></div>
                 <div className="latestArticlesDetail">
                    <b>latest article</b>
                    <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quae error eum velit quisquam expedita aliquam animi cumque nisi quis quia illo accusantium architecto quos. Nobis?</p>
                    <div className="blogIndexThreebtn">
                        <button>Clip</button>
                        <button>Clip</button>
                        <button>Clip</button>
                    </div>

                 </div>

            </div>
            <div className="blogGustav">
                <div className='gustavchip1'>
                    <div className="gustavchipImg"></div>
                    <div className="gustavchipDetail">
                        <h4>heading </h4>
                        <h3>Lorem ipsum dolor  adipisicing elit. Excepturi rerum</h3>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                     <button> Chip</button>
                    </div>
                </div>
                <div className='gustavchip1'>
                    <div className="gustavchipImg"></div>
                    <div className="gustavchipDetail">
                        <h4>heading </h4>
                        <h3>Lorem ipsum dolor  adipisicing elit. Excepturi rerum</h3>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. laudantium dolore, </p>
                     <button> Chip</button>
                    </div>
                </div>
                <div className='gustavchip1'>
                    <div className="gustavchipImg"></div>
                    <div className="gustavchipDetail">
                        <h4>heading </h4>
                        <h3>Lorem ipsum dolor  adipisicing elit. Excepturi rerum</h3>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. laudantium dolore, </p>
                     <button> Chip</button>
                    </div>
                </div>
            </div>
        </div>      
    
    </>
  )
}

export default BlogBody
