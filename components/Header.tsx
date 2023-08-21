'use client'
import { SidebarContext } from '@/context/sidebarContext';
import Link from 'next/link'
import React, { useContext } from 'react'

export default function Header() {
    const { isOpenSideBar, setIsOpenSidebar } = useContext<any>(SidebarContext);
    return (
        <div className="header bg-white">
            <div className="w-full items-center hidden md:flex justify-between px-5  ">
                <div className="logo-container">
                    <div className="logo">
                        <a
                            href="/"
                            aria-label="WedReviews המלצות וחוות דעת על אולמות וספקים לחתונה"
                        >
                            <img
                                src="https://www.wedreviews.co.il/addons/shared_addons/themes/wed_reviews_main_site_v2/img/logo-wed.svg"
                                title="WedReviews המלצות וחוות דעת על אולמות וספקים לחתונה"
                                alt="WedReviews המלצות וחוות דעת על אולמות וספקים לחתונה"
                                className='h-[91px]'
                            />
                        </a>
                    </div>
                </div>
                <div className="flex bg-[#f2f2f2] text-gray rounded-full text-xs px-5 w-[400px] h-[45px] items-center">
                    <input type="text" placeholder='חפשו ממליצים על...' className='outline-none bg-transparent flex-grow' />
                    <img src="/searchicon.svg" alt="" className='h-[80%] mt-2' />
                </div>
            </div>
            <div className='flex md:hidden h-[98px] items-center justify-between pt-0 border border-b-[#e6e6e6]'>
                <div className='h-full p-7'>
                    <img src="/menu.svg" alt="" className='h-full mt-2' onClick={() => { setIsOpenSidebar(!isOpenSideBar) }} />
                </div>
                <div className="logo-container h-full border border-[#e6e6e6] border-t-0 border-b-0 flex-grow justify-center items-center flex">
                    <div className="logo h-full">
                        <a
                            href="/"
                            aria-label="WedReviews המלצות וחוות דעת על אולמות וספקים לחתונה"
                        >
                            <img
                                src="https://www.wedreviews.co.il/addons/shared_addons/themes/wed_reviews_main_site_v2/img/logo-wed.svg"
                                title="WedReviews המלצות וחוות דעת על אולמות וספקים לחתונה"
                                alt="WedReviews המלצות וחוות דעת על אולמות וספקים לחתונה"
                                className='h-[98%]'
                            />
                        </a>
                    </div>
                </div>
                <div className='h-full p-7 '>
                    <img src="/searchiconblack.svg" alt="" className='h-full mt-2' />
                </div>
            </div>
            <div className='w-full hidden md:flex justify-around items-center font-extrabold p-2 my-6 text-lg border-b pb-6 border-b-[#e6e6e6]'>
                <div className='group '>
                    <Link href={"/"}>מקום לאירוע</Link>
                    <div className='hidden group-hover:flex absolute right-0 left-0 h-[350px] p-5 bg-white font-medium gap-5 border-t-2 mt-2 border-gray-200'>
                        <div>
                            <ul>
                                <li>
                                    <a href="153251/240731">גני אירועים במרכז</a>
                                </li>
                                <li>
                                    <a href="153251/240732">גני אירועים בשרון</a>
                                </li>
                                <li>
                                    <a href="153251/240733">גני אירועים בשפלה</a>
                                </li>
                                <li>
                                    <a href="153251/240734">גני אירועים בתל אביב</a>
                                </li>
                                <li>
                                    <a href="153251/240735">גני אירועים בדרום</a>
                                </li>
                                <li>
                                    <a href="153251/240736">גני אירועים בצפון</a>
                                </li>
                                <li>
                                    <a href="153251/240737">גני אירועים בירושלים והסביבה</a>
                                </li>
                                <li>
                                    <a href="153251/240738">גני אירועים בעמק חפר</a>
                                </li>
                                <li>
                                    <a href="153251/240739">גני אירועים בקיסריה</a>
                                </li>
                                <li>
                                    <a href="153251/240740">מקומות לחתונה קטנה</a>
                                </li>
                                <li>
                                    <a href="153251/240741">אולמות אירועים במרכז</a>
                                </li>
                            </ul>
                        </div>
                        <div className="flex gap-2 ">
                            <img
                                className=" h-full"
                                src="https://www.wedreviews.co.il/addons/shared_addons/themes/wed_reviews_main_site_v2/img/top_menu_venue_location1.webp"
                                title="מקום לאירוע"
                                alt="מקום לאירוע"
                                data-srcset="https://www.wedreviews.co.il/addons/shared_addons/themes/wed_reviews_main_site_v2/img/top_menu_venue_location1.webp"
                                data-src="https://www.wedreviews.co.il/addons/shared_addons/themes/wed_reviews_main_site_v2/img/top_menu_venue_location1.webp"
                                srcSet="https://www.wedreviews.co.il/addons/shared_addons/themes/wed_reviews_main_site_v2/img/top_menu_venue_location1.webp"
                            />
                            <img
                                className="h-full"
                                src="https://www.wedreviews.co.il/addons/shared_addons/themes/wed_reviews_main_site_v2/img/top_menu_venue_location2.webp"
                                title="מקום לאירוע"
                                alt="מקום לאירוע"
                                data-srcset="https://www.wedreviews.co.il/addons/shared_addons/themes/wed_reviews_main_site_v2/img/top_menu_venue_location2.webp"
                                data-src="https://www.wedreviews.co.il/addons/shared_addons/themes/wed_reviews_main_site_v2/img/top_menu_venue_location2.webp"
                                srcSet="https://www.wedreviews.co.il/addons/shared_addons/themes/wed_reviews_main_site_v2/img/top_menu_venue_location2.webp"
                            />
                        </div>
                    </div>
                </div>
                <div className='group '>
                    <Link href={"/"}>עיצוב והפקה</Link>
                    <div className='hidden group-hover:flex absolute right-0 left-0 h-[350px] p-5 bg-white font-medium gap-5 border-t-2 mt-2 border-gray-200 justify-center'>
                        <ul >
                            <li>
                                <a
                                    href={"153269"}
                                    data-acsb-clickable="true"
                                    data-acsb-navigable="true"
                                    data-acsb-now-navigable="false"
                                    tabIndex={-1}
                                >
                                    קייטרינג | שירותי בר
                                </a>
                            </li>
                            <li>
                                <a
                                    href={"187802"}
                                    data-acsb-clickable="true"
                                    data-acsb-navigable="true"
                                    data-acsb-now-navigable="false"
                                    tabIndex={-1}
                                >
                                    עיצוב אירועים | סידור פרחים
                                </a>
                            </li>
                            <li>
                                <a
                                    href={"153447"}
                                    data-acsb-clickable="true"
                                    data-acsb-navigable="true"
                                    data-acsb-now-navigable="false"
                                    tabIndex={-1}
                                >
                                    הפקת אירועים
                                </a>
                            </li>
                            <li>
                                <a
                                    href={"187804"}
                                    data-acsb-clickable="true"
                                    data-acsb-navigable="true"
                                    data-acsb-now-navigable="false"
                                    tabIndex={-1}
                                >
                                    ניהול אירוע | אישורי הגעה
                                </a>
                            </li>
                            <li>
                                <a
                                    href={"153257"}
                                    data-acsb-clickable="true"
                                    data-acsb-navigable="true"
                                    data-acsb-now-navigable="false"
                                    tabIndex={-1}
                                >
                                    הזמנות לחתונה | מיתוג
                                </a>
                            </li>
                        </ul>
                        <div
                            className="flex gap-4"
                        >
                            <img
                                className="h-full"
                                src="https://www.wedreviews.co.il/addons/shared_addons/themes/wed_reviews_main_site_v2/img/top_menu_design_prod1.webp"
                                alt="עיצוב והפקה"
                                data-srcset="https://www.wedreviews.co.il/addons/shared_addons/themes/wed_reviews_main_site_v2/img/top_menu_design_prod1.webp"
                                data-src="https://www.wedreviews.co.il/addons/shared_addons/themes/wed_reviews_main_site_v2/img/top_menu_design_prod1.webp"
                                srcSet="https://www.wedreviews.co.il/addons/shared_addons/themes/wed_reviews_main_site_v2/img/top_menu_design_prod1.webp"
                            />
                            <img
                                className="h-full"
                                src="https://www.wedreviews.co.il/addons/shared_addons/themes/wed_reviews_main_site_v2/img/top_menu_design_prod2.webp"
                                alt="עיצוב והפקה"
                                data-srcset="https://www.wedreviews.co.il/addons/shared_addons/themes/wed_reviews_main_site_v2/img/top_menu_design_prod2.webp"
                                data-src="https://www.wedreviews.co.il/addons/shared_addons/themes/wed_reviews_main_site_v2/img/top_menu_design_prod2.webp"
                                srcSet="https://www.wedreviews.co.il/addons/shared_addons/themes/wed_reviews_main_site_v2/img/top_menu_design_prod2.webp"
                            />
                        </div>
                    </div>
                </div>
                <Link href={"/"}>מעצבי שמלות כלה</Link>
                <div className='group'>
                    <Link href={"/"}>נותני שירות לחתונה</Link>
                    <div className='hidden group-hover:flex absolute right-0 left-0 h-[350px] p-5 bg-white font-medium border-t-2 mt-2 border-gray-200 gap-72'>
                        <div className='flex gap-2'>
                            <img
                                className="h-full"
                                src="https://www.wedreviews.co.il/addons/shared_addons/themes/wed_reviews_main_site_v2/img/top_menu_service_pro1.webp"
                                alt="נותני שירות לחתונה"
                                data-src="https://www.wedreviews.co.il/addons/shared_addons/themes/wed_reviews_main_site_v2/img/top_menu_service_pro1.webp"
                                data-srcset="https://www.wedreviews.co.il/addons/shared_addons/themes/wed_reviews_main_site_v2/img/top_menu_service_pro1.webp"
                                srcSet="https://www.wedreviews.co.il/addons/shared_addons/themes/wed_reviews_main_site_v2/img/top_menu_service_pro1.webp"
                            />
                            <img
                                className="h-full"
                                src="https://www.wedreviews.co.il/addons/shared_addons/themes/wed_reviews_main_site_v2/img/top_menu_service_pro2.webp"
                                alt="נותני שירות לחתונה"
                                data-src="https://www.wedreviews.co.il/addons/shared_addons/themes/wed_reviews_main_site_v2/img/top_menu_service_pro2.webp"
                                data-srcset="https://www.wedreviews.co.il/addons/shared_addons/themes/wed_reviews_main_site_v2/img/top_menu_service_pro2.webp"
                                srcSet="https://www.wedreviews.co.il/addons/shared_addons/themes/wed_reviews_main_site_v2/img/top_menu_service_pro2.webp"
                            />
                        </div>
                        <ul>
                            <li>
                                <a
                                    href="event/category/153263"
                                    data-acsb-clickable="true"
                                    data-acsb-navigable="true"
                                    data-acsb-now-navigable="false"
                                    tabIndex={-1}
                                >
                                    צילום סטילס
                                </a>
                            </li>
                            <li>
                                <a
                                    href="event/category/187806"
                                    data-acsb-clickable="true"
                                    data-acsb-navigable="true"
                                    data-acsb-now-navigable="false"
                                    tabIndex={-1}
                                >
                                    צילום ועריכת וידאו
                                </a>
                            </li>
                            <li>
                                <a
                                    href="event/category/153277"
                                    data-acsb-clickable="true"
                                    data-acsb-navigable="true"
                                    data-acsb-now-navigable="false"
                                    tabIndex={-1}
                                >
                                    איפור
                                </a>
                            </li>
                            <li>
                                <a
                                    href="event/category/153275"
                                    data-acsb-clickable="true"
                                    data-acsb-navigable="true"
                                    data-acsb-now-navigable="false"
                                    tabIndex={-1}
                                >
                                    עיצוב שיער
                                </a>
                            </li>
                            <li>
                                <a
                                    href="event/category/153265"
                                    data-acsb-clickable="true"
                                    data-acsb-navigable="true"
                                    data-acsb-now-navigable="false"
                                    tabIndex={-1}
                                >
                                    {`די ג'יי לחתונה`}
                                </a>
                            </li>
                            <li>
                                <a
                                    href="event/category/187807"
                                    data-acsb-clickable="true"
                                    data-acsb-navigable="true"
                                    data-acsb-now-navigable="false"
                                    tabIndex={-1}
                                >
                                    הופעות חיות
                                </a>
                            </li>
                            <li>
                                <a
                                    href="event/category/153255"
                                    data-acsb-clickable="true"
                                    data-acsb-navigable="true"
                                    data-acsb-now-navigable="false"
                                    tabIndex={-1}
                                >
                                    אטרקציות לחתונה
                                </a>
                            </li>
                            <li>
                                <a
                                    href="event/category/187805"
                                    data-acsb-clickable="true"
                                    data-acsb-navigable="true"
                                    data-acsb-now-navigable="false"
                                    tabIndex={-1}
                                >
                                    רב לחתונה
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='group'>
                    <Link href={"/"}>חתן וכלה</Link>
                    <div className='hidden group-hover:flex absolute right-0 left-0 h-[350px] p-5 bg-white font-medium border-t-2 mt-2 border-gray-200 gap-72'>
                        <div className="flex gap-2">
                            <img
                                className="h-full"
                                src="https://www.wedreviews.co.il/addons/shared_addons/themes/wed_reviews_main_site_v2/img/top_menu_groom_bride1.webp"
                                alt="חתן וכלה"
                                data-src="https://www.wedreviews.co.il/addons/shared_addons/themes/wed_reviews_main_site_v2/img/top_menu_groom_bride1.webp"
                                data-srcset="https://www.wedreviews.co.il/addons/shared_addons/themes/wed_reviews_main_site_v2/img/top_menu_groom_bride1.webp"
                                srcSet="https://www.wedreviews.co.il/addons/shared_addons/themes/wed_reviews_main_site_v2/img/top_menu_groom_bride1.webp"
                            />
                            <img
                                className="h-full"
                                src="https://www.wedreviews.co.il/addons/shared_addons/themes/wed_reviews_main_site_v2/img/top_menu_groom_bride2.webp"
                                alt="חתן וכלה"
                                data-src="https://www.wedreviews.co.il/addons/shared_addons/themes/wed_reviews_main_site_v2/img/top_menu_groom_bride2.webp"
                                data-srcset="https://www.wedreviews.co.il/addons/shared_addons/themes/wed_reviews_main_site_v2/img/top_menu_groom_bride2.webp"
                                srcSet="https://www.wedreviews.co.il/addons/shared_addons/themes/wed_reviews_main_site_v2/img/top_menu_groom_bride2.webp"
                            />
                        </div>
                        <ul>
                            <li>
                                <a
                                    href="event/category/187793"
                                    data-acsb-clickable="true"
                                    data-acsb-navigable="true"
                                    data-acsb-now-navigable="false"
                                    tabIndex={-1}
                                >
                                    טבעות
                                </a>
                            </li>
                            <li>
                                <a
                                    href="event/category/187809"
                                    data-acsb-clickable="true"
                                    data-acsb-navigable="true"
                                    data-acsb-now-navigable="false"
                                    tabIndex={-1}
                                >
                                    ליל כלולות | התארגנות לחתונה
                                </a>
                            </li>
                            <li>
                                <a
                                    href="event/category/153253"
                                    data-acsb-clickable="true"
                                    data-acsb-navigable="true"
                                    data-acsb-now-navigable="false"
                                    tabIndex={-1}
                                >
                                    לחתן
                                </a>
                            </li>
                            <li>
                                <a
                                    href="event/category/187808"
                                    data-acsb-clickable="true"
                                    data-acsb-navigable="true"
                                    data-acsb-now-navigable="false"
                                    tabIndex={-1}
                                >
                                    תכשיטים ואקססוריז
                                </a>
                            </li>
                            <li>
                                <a
                                    href="event/category/187810"
                                    data-acsb-clickable="true"
                                    data-acsb-navigable="true"
                                    data-acsb-now-navigable="false"
                                    tabIndex={-1}
                                >
                                    מסיבת רווקות
                                </a>
                            </li>
                        </ul>


                    </div>
                </div>
                <div className='border-b border-b-[#ca7f9d]'>
                    <Link href={"/"} className='text-[#ca7f9d]'>פוסט קרדיטים כלות אורבניות</Link>
                </div>
            </div>
        </div>

    )
}
