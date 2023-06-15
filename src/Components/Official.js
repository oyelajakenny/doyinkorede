import React from 'react'

const Official = () => {
    return (
        <div className='official'>

            <h2>IT'S OFFICIAL</h2>
            <h1>She Said Yes!</h1>
            <hr></hr>
            <p>On September 5th, 2020, our lives were forever changed. After dating for four years and just a week before she was set to embark on her <br/> master's degree abroad, I gathered the courage to ask the most significant question. With <br/>unwavering certainty, I proposed, and to my delight, she joyfully said yes.<br/> Now, less than three years later, we are embarking on a lifelong journey together, bound by love and commitment.</p>
            <div className='image-grid'>
                <div className='img-1'>

                    <img src='./images/750_2704.jpg' alt='image1' />
                </div>
                <div className='img-1'><img src='./images/750_2807.jpg' alt='image1' />
                </div>
                <div className='img-1'><img src='./images/750_2727.jpg' alt='image1' />
                </div>
                <div className='img-1'><img src='./images/750_2710.jpg' alt='image1' />
                </div>
                <div className='img-1'><img src='./images/750_2816.jpg' alt='image1' />
                </div>

            </div>

            <div className='stats'>
                <div className='stats1'>
                    <h1>7</h1>
                    <p>YEARS</p>
                </div>

                <div className='stats1'>
                    <h1>150</h1>
                    <p>DATES</p>
                </div>

                <div className='stats1'>
                    <h1>10</h1>
                    <p>TRIPS</p>
                </div>
            </div>
        </div>
    )
}

export default Official