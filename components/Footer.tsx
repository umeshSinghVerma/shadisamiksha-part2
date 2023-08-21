import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <div>
            <div className="site-total-reviews-container">
                <div className="site-total-reviews">
                    <span style={{border:"none"}}>1</span> 
                    <span>3</span> 
                    <span>6</span> 
                    <span>4</span> 
                    <span>5</span>
                    <span>9</span>
                </div>
                <div className='font-bold text-xl'>המלצות של כלות אורבניות</div>
            </div>

            <div className='flex w-screen h-full flex-col bg-[#f5f5f5] '>
                <div className='flex justify-around flex-wrap gap-y-10 gap-x-5 text-sm'>
                    <div className="section">
                        <div className="section-title">
                            <Link href="/event/category/153251"> גני אירועים </Link>
                        </div>
                        <div className="links">
                            <Link href="/event/category/153251/240731">גני אירועים במרכז</Link>
                            <Link href="/event/category/153251/240732">גני אירועים בשרון</Link>
                            <Link href="/event/category/153251/240733">גני אירועים בשפלה</Link>
                            <Link href="/event/category/153251/240734">גני אירועים בתל אביב</Link>
                            <Link href="/event/category/153251/240735">גני אירועים בדרום</Link>
                            <Link href="/event/category/153251/240736">גני אירועים בצפון</Link>
                            <Link href="/event/category/153251/240737">גני אירועים בירושלים</Link>
                            <Link href="/event/category/153251/240738">גני אירועים בעמק חפר</Link>
                            <Link href="/event/category/153251/240739">גני אירועים בקיסריה</Link>
                            <Link href="/event/category/153251/240740">מקומות לחתונה קטנה</Link>
                            <Link href="/event/category/153251/240741">אולמות אירועים במרכז</Link>
                        </div>
                    </div>
                    <div className="section">
                        <div className="section-title">עיצוב והפקה</div>
                        <div className="links">
                            <Link href="/event/category/153269"> קייטרינג ושירותי בר </Link>
                            <Link href="/event/category/187802"> עיצוב אירועים וסידורי פרחים </Link>
                            <Link href="/event/category/153447"> הפקת אירועים </Link>
                            <Link href="/event/category/187804"> ניהול אירוע ואישורי הגעה </Link>
                            <Link href="/event/category/153257"> הזמנות לחתונה ומיתוג </Link>
                        </div>
                        <div className="subsection">
                            <Link className="section-title" href="/event/category/153279"> שמלות כלה </Link>
                        </div>
                    </div>
                    <div className="section">
                        <div className="section-title">נותני שירות לחתונה</div><div className="links">
                            <Link href="/event/category/153263"> צילום סטילס </Link>
                            <Link href="/event/category/187806"> צילום ועריכת וידאו </Link>
                            <Link href="/event/category/153277"> איפור </Link>
                            <Link href="/event/category/153275"> עיצוב שיער </Link>
                            <Link href="/event/category/153265"> Dj לחתונה </Link>
                            <Link href="/event/category/187807"> הופעות חיות </Link>
                            <Link href="/event/category/153255"> אטרקציות </Link>
                            <Link href="/event/category/187805"> רב לחתונה </Link>
                        </div>
                    </div>
                    <div className="section">
                        <div className="section-title">חתן וכלה</div>
                        <div className="links"><Link href="/event/category/187793"> מעצבי טבעות </Link>
                            <Link href="/event/category/187809"> התארגנות וליל כלולות </Link>
                            <Link href="/event/category/153253"> לחתן </Link>
                            <Link href="/event/category/187808"> תכשיטים ואקססוריז </Link>
                            <Link href="/event/category/187810"> מסיבת רווקות </Link>
                        </div>
                    </div>
                    <div className="section">
                        <div className="links">
                            <Link href="/event/about">אודות wedreviews</Link>
                            <Link href="/terms" rel="nofollow">תקנון האתר</Link>
                            <Link href="/privacy_policy" rel="nofollow">מדיניות פרטיות</Link>
                            <Link href="/supplier/add_review">הוספת המלצה</Link>
                            <Link href="/event/contact_us">צרו קשר</Link>
                            <Link href="/accessibility" rel="nofollow">הצהרת נגישות</Link>
                        </div>
                        <div className="social-networks">
                            <Link href="//www.facebook.com/wedreviews" rel="noopener nofollow" aria-label="facebook" target="_blank">
                                <i className="icon-facebook-pink"></i>
                            </Link>
                            <Link href="//www.instagram.com/wedreviews_/" rel="noopener nofollow" aria-label="instagram" target="_blank">
                                <i className="icon-instagram-bg"></i>
                            </Link>
                            <Link href="/event/about" rel="noopener nofollow" aria-label="about" target="_blank">
                                <i className="icon-about">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                </i>
                            </Link>
                        </div>
                        <div className="provider-login">
                            <Link href="/users/login" rel="nofollow"> כניסת נותני שירות </Link>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    <Link href="http://www.wickedonion.com" rel="noopener nofollow" target="_blank">
                        Developed by Wickedonion.com
                    </Link>
                    <div>כל הזכויות שמורות וודריביוז 2022 ©</div>
                </div>
            </div>
        </div>
    )
}
