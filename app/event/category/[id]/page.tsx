import BigPhoto from '@/components/BigPhoto'
import HeroSection from '@/components/HeroSection'
import Photo from '@/components/Photo'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const photoData = [
    {
      imageUrl: "https://www.wedreviews.co.il/uploads/default/files/credits_posts/213897953_10226234773878251_2231240478267296904_n_wed_thumb.jpg",
      coupleName: "ניצן וגלעד",
      date: "חתונה בגן פתוח"
    },
    {
      imageUrl: "https://www.wedreviews.co.il/uploads/default/files/credits_posts/80889052_10221749269621091_7627648075569299456_o_wed_thumb.jpg",
      coupleName: "ניצן ורועי",
      date: "מקום התארגנות"
    },
    {
      imageUrl: "https://www.wedreviews.co.il/uploads/default/files/credits_posts/74593549_10157830621794772_3455503559901052928_o_wed_thumb.jpg",
      coupleName: "קארין ואופיר",
      date: "מקום התארגנות"
    },
    {
      imageUrl: "https://www.wedreviews.co.il/uploads/default/files/credits_posts/271869942_10228537670205990_4481067787529923997_n_wed_thumb.jpg",
      coupleName: "גילי ואיתי",
      date: "חתונה בגן פתוח"
    },
]
const smallPhotoData = [
    {
        imageUrl: "https://www.wedreviews.co.il/uploads/default/files/credits_posts/213897953_10226234773878251_2231240478267296904_n_wed_thumb.jpg",
        coupleName: "ניצן וגלעד",
        date: "חתונה בגן פתוח"
    },
    {
        imageUrl: "https://www.wedreviews.co.il/uploads/default/files/credits_posts/80889052_10221749269621091_7627648075569299456_o_wed_thumb.jpg",
        coupleName: "ניצן ורועי",
        date: "מקום התארגנות"
    },
    {
        imageUrl: "https://www.wedreviews.co.il/uploads/default/files/credits_posts/74593549_10157830621794772_3455503559901052928_o_wed_thumb.jpg",
        coupleName: "קארין ואופיר",
        date: "מקום התארגנות"
    },
    {
        imageUrl: "https://www.wedreviews.co.il/uploads/default/files/credits_posts/74593549_10157830621794772_3455503559901052928_o_wed_thumb.jpg",
        coupleName: "קארין ואופיר",
        date: "מקום התארגנות"
    },
]

export default function page() {
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
                    <span>›</span> <span> הצהרת נגישות </span>
                </li>
            </ul>
            <div className='flex gap-3 max-w-full z-0 justify-center '>
                {
                    smallPhotoData.map((photo, key) => {
                        return (
                            <div key={key}>
                                <BigPhoto imageUrl={photo.imageUrl} date={photo.date} />
                            </div>
                        )
                    })
                }
            </div>
            <div className='flex flex-col md:flex-row w-full'>
                <div className='flex-wrap w-[55%] justify-between m-2 hidden md:flex'>
                    <div className='flex flex-grow items-center justify-center flex-col m-1 w-[48%]'>
                        <img src={smallPhotoData[0].imageUrl} alt="photo" className='h-full object-cover'/>
                        <p>hello</p>
                    </div>
                    <div className='flex flex-grow items-center justify-center flex-col m-1 w-[48%]'>
                        <img src={smallPhotoData[0].imageUrl} alt="photo" className='h-full object-cover'/>
                        <p>hello</p>
                    </div>
                    <div className='flex flex-grow items-center justify-center flex-col m-1 w-[48%]'>
                        <img src={smallPhotoData[0].imageUrl} alt="photo" className='h-full object-cover'/>
                        <p>hello</p>
                    </div>
                    <div className='flex flex-grow items-center justify-center flex-col m-1 w-[48%]'>
                        <img src={smallPhotoData[0].imageUrl} alt="photo" className='h-full object-cover'/>
                        <p>hello</p>
                    </div>
                </div>
                <div className='w-full md:w-[45%] p-5'>
                    <img src="/bigphoto.jpg" alt="hello" />
                </div>
                <div className='md:hidden flex flex-wrap w-full justify-center mb-20'>
                {
                    smallPhotoData.map((photo, key) => {
                        return (
                            <div key={key}>
                                <Photo imageUrl={photo.imageUrl} date={photo.date} />
                            </div>
                        )
                    })
                }
            </div>
            </div>
            <div className='flex gap-3 max-w-full z-0 justify-center '>
                {
                    smallPhotoData.map((photo, key) => {
                        return (
                            <div key={key}>
                                <BigPhoto imageUrl={photo.imageUrl} date={photo.date} />
                            </div>
                        )
                    })
                }
            </div>
            <div className='flex gap-3 max-w-full z-0 justify-center '>
                {
                    smallPhotoData.map((photo, key) => {
                        return (
                            <div key={key}>
                                <BigPhoto imageUrl={photo.imageUrl} date={photo.date} />
                            </div>
                        )
                    })
                }
            </div>



            <div className='flex flex-col gap-3 my-[25px]'>
                <div className='flex mb-6 flex-col md:flex-row w-full justify-center items-center gap-2 h-[30px]'>
                    <div className='h-full md:block hidden'>
                        <img src="/urban_brides_logo.png" alt="" className='h-full' />
                    </div>
                    <div className='text-center text-xl md:text-2xl w-min whitespace-nowrap '>
                        <span className='w-full text-center font-extrabold text-2xl md:inline hidden'>
                            פוסט קרדיטים
                        </span>
                        בשיתוף הקבוצה של כלות אורבניות
                    </div>
                    <div className='h-full '>
                        <img src="/urban_brides_logo.png" alt="" className='h-full' />
                    </div>
                </div>
            </div>

            <div className='flex gap-3 max-w-full z-0 justify-center '>
                {
                    smallPhotoData.map((photo, key) => {
                        return (
                            <div key={key}>
                                <BigPhoto imageUrl={photo.imageUrl} date={photo.date} />
                            </div>
                        )
                    })
                }
            </div>

            


            <div className='flex items-center justify-center flex-col w-full bg-[#f6f6f6] py-[35px] gap-8 my-[35px]'>
                <div className='text-2xl'>
                    התחברו לפייסבוק וגלו על מי החברים שלכם ממליצים
                </div>
                <button className='rounded-3xl p-5 bg-[#1776f2] max-w-[270px]'>
                    <div className='flex justify-center items-center gap-2 text-white'>
                        <div><Image src={"/facebook.svg"} alt='facebook' width={30} height={30} /></div>
                        <p className='text-lg'> לחצו להמלצות חברים </p>
                    </div>
                </button>
            </div>
        </div>
    )
}
