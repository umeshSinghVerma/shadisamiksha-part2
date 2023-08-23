import React from 'react'

export default function Photo({ imageUrl, coupleName, reviewSnippet, readMore, date }: any) {
    return (
        <div className='w-[136px] md:w-[352px] text-sm m-2'>
            <a
                className="credits-post-link w-full flex flex-col"
                href="/credits_post/138170"
                data-acsb-clickable="true"
                data-acsb-navigable="true"
                data-acsb-now-navigable="true"
            >
                <div className="image-container h-[136px] w-[136px] md:h-[263px] md:w-[330px] overflow-hidden" data-acsb-overflower="true">
                    <img
                        src={imageUrl}
                        role="presentation"
                        className='h-full w-full object-cover'
                    />
                </div>
                <div className='flex flex-col items-center justify-center'>
                    {coupleName && <div className="couple-name heading text-center">{coupleName}</div>}
                    {reviewSnippet && readMore  && <div className="review-snippet" data-acsb-overflower="true">
                        {reviewSnippet}
                        <div className="read-more">{readMore}</div>
                    </div>}
                    {date &&
                        <div className='date -mt-5'>
                            {date}
                        </div>
                    }
                </div>
            </a>

        </div>
    )
}
