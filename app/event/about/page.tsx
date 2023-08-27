import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

export default function page() {
    return (
        <div>
            <ul
                className="flex px-5 my-[35px]"
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
            <div className='px-5 flex gap-5'>
                <div>
                    <h1 className="underline font-extrabold text-xl mb-[30px]" aria-level={1}>
                        מה קורה פה?
                    </h1>
                    <div className="text-sm">
                        <p dir="RTL">
                            <span dir="LTR">WedReviews</span> היא פלטפורמה חברתית שמטרתה לחבר בין
                            זוגות המארגנים את חתונתם לבין נותני השירות הכי מתאימים להם, וזאת על ידי
                            סיפורי חתונה של זוגות שכבר התחתנו.
                        </p>
                        <p dir="RTL">&nbsp;</p>
                        <p dir="RTL">
                            אנחנו מאמינים שהמלצות טקסטואליות בלבד, מנותקות מהסיפור השלם ומהאנשים שכתבו
                            אותן, מתאימות יותר לקניה של טוסטר או שואב אבק אבל לא לבחירה בצלם או מאפרת
                            לחתונה.
                        </p>
                        <p dir="RTL">
                            <br />
                            <br />
                            למדנו שכשאתן קוראות המלצה מדהימה על מאפרת, אתן גם רוצות לראות מי זו הכלה,
                            האם האיפור שלה הוא בסגנון שלכן ומי היו נותני השירות הנוספים שהרכיבו את
                            החתונה שלה. אתן רוצות לראות תמונות ווידאו מהאירוע ואולי לקרוא גם המלצות של
                            חברות שלכן מהפייסבוק על אותה מאפרת.
                            <br />
                            ככה אתן יכולות לדעת שזו המאפרת שבאמת מתאימה לכן.
                        </p>
                        <p dir="RTL">&nbsp;</p>
                        <p dir="RTL">
                            20 אלף זוגות שיתפו דרכנו בשנתיים האחרונות את סיפור החתונה שלהם, כדי להודות
                            למי שעשה אותה וכדי שזוגות עתידיים יוכלו לעשות רק בחירות טובות לפני החתונה.
                        </p>
                        <p dir="RTL">&nbsp;</p>
                        <p dir="RTL">
                            אנחנו רוצים לאחל לכן ולבן (או לבת) הזוג ארגון חתונה קל, נעים ושקט ומקווים
                            לראות אתכן אצלנו אחרי החתונה, משתפות ועוזרות לזוגות אחרים.
                        </p>
                        <p dir="RTL">&nbsp;</p>
                        <p dir="RTL">בהצלחה!</p>
                        <p dir="RTL">&nbsp;</p>
                        <p dir="RTL">
                            צוות <span dir="LTR">WedReviews</span>
                        </p>
                        <p dir="RTL">&nbsp;</p>
                        <p dir="RTL">אתן מוזמנות לבקר אותנו גם באתרים הנוספים שלנו:</p>
                        <div className="flex gap-3 my-5">
                            <p dir="RTL">
                                <a
                                    target="_blank"
                                    rel="nofollow"
                                    href="//urbanbridesmag.co.il/"
                                    data-acsb-tooltip="נפתח בחלון חדש"
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
                                        {" "}
                                        נפתח בחלון חדש{" "}
                                    </span>
                                    <img
                                        src="https://www.wedreviews.co.il/addons/shared_addons/themes/wed_reviews_main_site/img/urban_brides_logo.png"
                                        alt="כלות אורבניות" width={100}
                                    />
                                </a>
                            </p>
                            <p dir="RTL">
                                <a
                                    target="_blank"
                                    rel="nofollow"
                                    href="//businessclass.co.il/"
                                    data-acsb-tooltip="נפתח בחלון חדש"
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
                                        {" "}
                                        נפתח בחלון חדש{" "}
                                    </span>
                                    <img
                                        src="https://www.wedreviews.co.il/addons/shared_addons/themes/wed_reviews_main_site/img/businessclass_logo.png"
                                        alt="מחלקת עסקים" width={100}
                                    />
                                </a>
                            </p>
                            <p dir="RTL">
                                <a
                                    target="_blank"
                                    rel="nofollow"
                                    href="//www.9instyle.com/"
                                    data-acsb-tooltip="נפתח בחלון חדש"
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
                                        {" "}
                                        נפתח בחלון חדש{" "}
                                    </span>
                                    <img
                                        src="https://www.wedreviews.co.il/addons/shared_addons/themes/wed_reviews_main_site/img/9instyle_logo.png"
                                        alt="אמהות בסטייל" width={100}
                                    />
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className=" mt-11 flex-col gap-8 items-center hidden md:flex">
                    <a
                        target="_blank"
                        rel="nofollow"
                        href="http://winterweddings.co.il/"
                        data-acsb-tooltip="נפתח בחלון חדש"
                        data-acsb-clickable="true"
                        data-acsb-navigable="true"
                        data-acsb-now-navigable="true"
                    >
                        <img
                            src="https://www.wedreviews.co.il/addons/shared_addons/themes/wed_reviews_main_site/img/about_logo_winterweddings.png"
                            alt="Winter Weddings"
                            className='max-w-[255px]'
                        />
                    </a>
                    <a
                        target="_blank"
                        href="/"
                        data-acsb-tooltip="נפתח בחלון חדש"
                        data-acsb-clickable="true"
                        data-acsb-navigable="true"
                        data-acsb-now-navigable="true"
                        className='w-full'
                    >
                        
                        <div className='border-2 border-black border-dotted w-full flex items-center justify-center border-l-0 border-r-0 py-6'>
                            <img
                                src="https://www.wedreviews.co.il/addons/shared_addons/themes/wed_reviews_main_site/img/about_logo_wedreviews.png"
                                alt="WedReviews"
                                role="presentation"
                                className='max-w-[255px]'
                            />
                        </div>
                    </a>
                </div>

            </div>
        </div>
    )
}
