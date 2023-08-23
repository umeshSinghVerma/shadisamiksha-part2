import Photo from '@/components/Photo'
import React from 'react'

export default function page() {
    const photoData = [
        {
            imageUrl: "https://www.wedreviews.co.il/uploads/default/files/credits_posts/81500110_10213009893317106_5526315848324612096_n_wed_thumb.jpg",
            coupleName: "ספיר ולידור",
            reviewSnippet: "בראש ובראשונה אנחנו רוצים להודות ליובל המקסימה שליוותה אותנו לאורך התהליך, מרגע",
            readMore: "[קרא עוד...]"
        },
        {
            imageUrl: "https://www.wedreviews.co.il/uploads/default/files/credits_posts/2020/90720688_10222519685645538_756110309353062400_n_wed_thumb.jpg",
            coupleName: "שיר ורועי",
            reviewSnippet: "אולם מושלם, היחס, השירות, המחיר מושלם מושלם מושלם!! רק קיבלנו פידבקים ומחמאות חי",
            readMore: "[קרא עוד...]"
        },
        {
            imageUrl: "https://www.wedreviews.co.il/uploads/default/files/credits_posts/73232853_3121611974532203_359003981126565888_o_wed_thumb.jpg",
            coupleName: "אורטל ועמרי",
            reviewSnippet: "שנינו התאהבנו בחצר נצר מהפגישה הראשונה! מההתחלה היחס היה חמים ובייתי, היו לנו המ",
            readMore: "[קרא עוד...]"
        },
    ]
    return (
        <div>
            <ul
                className="flex px-5"
                role="navigation"
                data-acsb-bc="true"
                aria-label="פירורי לחם"
                style={{ fontSize: "14px", color: "#989898" }}
            >
                <li>
                    <a
                        href="/"
                        data-acsb-clickable="true"
                        data-acsb-navigable="true"
                        data-acsb-now-navigable="true"
                    >
                        <span
                            className="acsb-sr-only"
                            data-acsb-sr-only="true"
                            data-acsb-force-visible="true"
                            aria-hidden="false"
                            data-acsb-hidden="false"
                        >
                            דף הבית
                        </span>
                    </a>
                </li>
                <li>
                    <span>›</span> <span>  פוסט קרדיטים כלות אורבניות </span>
                </li>
            </ul>
            <div className='flex flex-col gap-3'>
                <div className='w-full text-center font-extrabold text-2xl'>
                    פוסט קרדיטים
                </div>
                <div className='flex mb-6 flex-col md:flex-row w-full justify-center items-center gap-2 h-[30px]'>
                    <div className='h-full md:block hidden'>
                        <img src="/urban_brides_logo.png" alt="" className='h-full' />
                    </div>
                    <div className='text-center text-2xl w-min whitespace-nowrap '>
                        בשיתוף הקבוצה של כלות אורבניות
                    </div>
                    <div className='h-full '>
                        <img src="/urban_brides_logo.png" alt="" className='h-full' />
                    </div>
                </div>
            </div>
            <div className='w-full flex justify-center items-center'>
                <div className="flex bg-[#f2f2f2] text-gray rounded-full text-xs px-5 w-[336px] h-[45px] items-center">
                    <input type="text" placeholder='חפשו ממליצים על...' className='outline-none bg-transparent flex-grow' />
                    <img src="/searchicon.svg" alt="" className='h-[80%] mt-2' />
                </div>
            </div>
            <div className='w-full flex items-center justify-center gap-8 my-8'>
                <div className='border w-[150px]'></div>
                <div
                    className="text-center text-2xl w-min whitespace-nowrap"
                    data-acsb-overflower="true"
                    role="heading"
                    data-acsb-fake-title="true"
                    aria-level={2}
                >
                    <span>תוצאות חיפוש: חצר נצר </span>
                </div>
                <div className='border w-[150px]'></div>
            </div>

            <div className='flex flex-wrap w-full justify-center mb-20'>
                {
                    photoData.map((photo, key) => {
                        return (
                            <div key={key}>
                                <Photo imageUrl={photo.imageUrl} coupleName={photo.coupleName} reviewSnippet={photo.reviewSnippet} readMore={photo.readMore} />
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}
