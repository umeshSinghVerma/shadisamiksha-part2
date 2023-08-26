import React from 'react'

export default function BigPhoto({ imageUrl, coupleName, reviewSnippet, readMore, date }: any) {
    return (
        <div className='w-[90%] text-sm m-2 max-h-[263px] h-full flex-grow'>
            <a
                className="credits-post-link w-full h-full flex flex-col"
                href="/credits_post/138170" 
                data-acsb-clickable="true"
                data-acsb-navigable="true"
                data-acsb-now-navigable="true"
            >
                <div className="h-full w-full" data-acsb-overflower="true">
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
                        <div className={`date ${coupleName && '-mt-5 text-[#b2b2b2]'} text-black`}>
                            {date}
                        </div>
                    }
                </div>
            </a>

        </div>
    )
}
