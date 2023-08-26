
import Link from 'next/link'
import React from 'react'

export default function page() {


    const breadcrumbs_1 = {
        fontSize: '14px',
        color: '#989898',
        display: 'flex',
        // justifyContent: 'center',
        flexShrink: 0,
        padding: '10px',
        width: '100%',
        margin: '35px 50px',
        maxWidth: '1440px'
    }
    const stories: any = [
        {
            story_top: {
                story_right: {
                    story_replier_photo_url: "https://www.wedreviews.co.il/uploads/default/files/repliers/10209904911135270.jpg",
                    story_basic_detail: {
                        couple_name: "החתונה של ליטל ושניר",
                        event_date: "20.10.22",
                        replier_name: "Lital Kahalani",
                    }
                }
            },
            review_body: {
                content: "חצר נצר זה האולם עם הבחירה הכי טובה שעשיתי! מעבר לכך שהאולם מהמם בעיצובו. הכל נראה יוקרתי וברמה גבוה. השירות שם מטורף!!! הקשיבו לכל הדרישות והבקשות שלי. האירוע התנהל בדיוק כפי שרצינו. גם כאשר לא התחברתי למנה בטעימות, מיד הכינו עבורנו מנה שאינה קיימת בתפריט. והכל כדי שאהיה מרוצה. האורחים התעלפו על",
                read_more: " המשך ",
                hidden: " האוכל קיבלתי ים מחמאות. ביום האירוע היה לצידי מנהל האירוע בשם יגאל מצוות האולם שעשה עבודה מדהימה. היה איתי לאורך כל האירוע. וידא תמיד שהכל מתקתק. צוות המלצרים בחדר חתן כלה היה קשוב ודאג תמיד לנקות את החדר כדי שלא יהיה לי בלאגן. וכמובן, דניאל ורפי שליוו אותנו לאורך כל התהליך מרגע סגירת האולם. תמיד נתנו הרגשה שהאירוע שלי חשוב להם, ושאנחנו לא סתם עוד \"זוג\" תמיד המליצו והכווינו אותנו ברמה מקצועית מאוד. האירוע היה מושלם!!! שום דבר לא התפקשש והכל נעשה ברמה הכי גבוה שיש. ממליצה בחום על האולם!!!"
            },
            other_suppliers: {
                other_suppliers_title: "נותני שירות נוספים",
                href_url: "260502",
                supplier_logo: `url("data:image/svg+xml,%3C?xml%20version%3D%221.0%22%20?%3E%3Csvg%20id%3D%22Layer_1%22%20data-name%3D%22Layer%201%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2060%2060%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill%3A%23ffffff%3B%7D.cls-2%7Bfill%3A%23f1cbc2%3B%7D.cls-3%7Bfill%3A%23f7dfda%3B%7D.cls-4%7Bfill%3A%23e68e8d%3B%7D%3C/style%3E%3C/defs%3E%3Ctitle%3Eicon-dress%3C/title%3E%3Ccircle%20class%3D%22cls-1%22%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%2228.46%22/%3E%3Cpath%20class%3D%22cls-2%22%20d%3D%22M46.11,40c-3.42-3.3-8.37-10.44-10.48-13.7a22.52,22.52,0,0,0-2.11-2.83c-.05,0-2,.08-3.64.14,0,0-3.59-.1-3.64-.14a22.52,22.52,0,0,0-2.11,2.83C22,29.53,17.07,36.67,13.65,40a19.84,19.84,0,0,0,2.85,2.5,1.86,1.86,0,0,0,.2,1.13c.53.61,3.64,1.68,4,1.89a4.62,4.62,0,0,0,1.8.63c.91.15-1.13.34,2.45,1.11,2.06.45,2.19.38,2.2.36a11.91,11.91,0,0,0,5.5,0s.14.09,2.2-.36c3.58-.77,1.55-.88,2.46-1s-.31-1,0-1.18a32.91,32.91,0,0,0,4.1-2.11c.57-.57.4-.63.4-.63l1.53.13A18,18,0,0,0,46.11,40Z%22/%3E%3Cpath%20class%3D%22cls-3%22%20d%3D%22M28.15,23.51c-.59,1-11.68,18.94-11.65,19l-.73,1a3.57,3.57,0,0,0,.39.42A34.51,34.51,0,0,0,20.26,46a12.74,12.74,0,0,0,2.22.22c.11,0,.49.13.39.13l6.48-22.8Z%22/%3E%3Cpath%20class%3D%22cls-3%22%20d%3D%22M31.61,23.51c.6,1,11.76,18.88,11.74,18.9l.68.83s0,.27-.43.66A36.08,36.08,0,0,1,39.5,46a10.78,10.78,0,0,1-2.18.29,1.72,1.72,0,0,0-.35.12L30.41,23.56Z%22/%3E%3Cpath%20class%3D%22cls-2%22%20d%3D%22M29.88,14.61c-1.09,0-3.47-3.1-3.47-3.1a6,6,0,0,0-3,1.2.54.54,0,0,0-.19.51L25,15.36a3.3,3.3,0,0,0-.74,1.34c0,.09,1.57,4.87,1.6,4.87a18.51,18.51,0,0,0,4,.37,19.27,19.27,0,0,0,4-.36s1.65-4.79,1.62-4.88a3.3,3.3,0,0,0-.74-1.34l1.84-2.14a.52.52,0,0,0-.19-.51,6,6,0,0,0-3-1.2S31,14.61,29.88,14.61Z%22/%3E%3Cpath%20class%3D%22cls-4%22%20d%3D%22M25.84,21.46s.2,1.09.31,2.07a19.85,19.85,0,0,0,3.73.41,19.85,19.85,0,0,0,3.73-.41c.11-1,.31-2.07.31-2.07a17.24,17.24,0,0,1-4,.39A17.24,17.24,0,0,1,25.84,21.46Z%22/%3E%3C/svg%3E")`,
                supplier_name_container: {
                    category_name: "שמלות כלה",
                    supplier_name: "סטודיו מדינה | MËDINA"
                }

            }
        }
    ]




    return (
        <>
            <ul style={breadcrumbs_1}>
                <li>
                    <Link href="/">דף הבית</Link>
                </li>
                <li>
                    <span>›</span> <Link href="/event/category/153251"> מקום לאירוע </Link>
                </li>
                <li>
                    <span>›</span>{" "}
                    <Link href="/event/category/153251/240731"> גני אירועים במרכז </Link>
                </li>
                <li>
                    <span>›</span> <span> חצר נצר </span>
                </li>
            </ul>
            <div className="flex provider-section_stories" >
                <div className="right-side">
                    <div className="provider-fixed-container">
                        <img
                            className="provider-photo"
                            alt="לוגו"
                            title="לוגו"
                            src="https://www.wedreviews.co.il/uploads/default/files/logos/51549824_2346249818753151_4065153530250395648_n.jpg"
                        />
                        <link
                            href="https://www.wedreviews.co.il/uploads/default/files/logos/51549824_2346249818753151_4065153530250395648_n.jpg"
                            itemProp="image"
                        />
                        <div className="supplier-total-reviews">338 ממליצים</div>
                        <div className="add-review">
                            <Link href="https://www.wedreviews.co.il/provider/add_review/154765">
                                {" "}
                                <i className="icon-plus" title="הוסיפו המלצה" /> הוסיפו המלצה{" "}
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='w-[100%] left-side'>
                    <div className="provider-header">
                        <div className="provider-top">
                            <h1>חצר נצר</h1>
                            <div className="add-review">
                                <a href="../add_review/154765">
                                    {" "}
                                    <i className="icon-plus" /> הוסיפו המלצה
                                </a>
                            </div>
                        </div>
                        <div className="business-info">
                            <div className="desktop-only">
                                <div className="desktop-only">
                                    <i className="icon-location-bg" />{" "}
                                    <span> דיזנגוף 7, קיבוץ נצר-סרני </span>
                                </div>
                            </div>
                            <div>
                                <a
                                    className="mobile-only"
                                    rel="nofollow"
                                    href="tel:08-9213939"
                                    aria-label="טלפון"
                                >
                                    {" "}
                                    <i className="icon-phone-bg" />{" "}
                                </a>
                                <div className="desktop-only">
                                    <i className="icon-phone-bg" /> <span> 08-9213939 </span>
                                </div>
                            </div>
                            <div className="mobile-only">
                                <a
                                    className="mobile-only"
                                    rel="nofollow"
                                    href="//wa.me/972089213939"
                                    aria-label="וואטסאפ"
                                >
                                    {" "}
                                    <i className="icon-whatsapp-bg" />{" "}
                                </a>
                            </div>
                            <div>
                                <a
                                    className="mobile-only"
                                    target="_blank"
                                    rel="nofollow noopener"
                                    href="http://www.hatzarnetzer.co.il/"
                                    aria-label="אתר אינטרנט"
                                >
                                    {" "}
                                    <i className="icon-website-bg" />{" "}
                                </a>{" "}
                                <a
                                    className="desktop-only"
                                    target="_blank"
                                    rel="nofollow noopener"
                                    href="http://www.hatzarnetzer.co.il/"
                                    aria-label="אתר אינטרנט"
                                >
                                    {" "}
                                    <i className="icon-website-bg" /> <span> hatzarnetzer.co.il </span>{" "}
                                </a>
                            </div>
                            <div>
                                <a
                                    target="_blank"
                                    rel="nofollow noopener"
                                    href="hatzar_netzer"
                                    aria-label="דף אינסטגרם"
                                >
                                    {" "}
                                    <i className="icon-instagram-bg" />{" "}
                                </a>
                            </div>
                            <div>
                                <a
                                    target="_blank"
                                    rel="nofollow noopener"
                                    href="//www.facebook.com/hatzarnetzer/"
                                    aria-label="דף פייסבוק"
                                >
                                    {" "}
                                    <i className="icon-facebook-pink" />{" "}
                                </a>
                            </div>
                        </div>
                        <div className="total-reviews mobile-only">338 ממליצים</div>
                        <div className="about-text">
                            <p>מתחם אירועים יוקרתי, השוכן בקיבוץ נצר סירני שבמרכז הארץ.</p>
                            <p>המתמחה בהפקת אירועי יוקרה וקולינריה מעודנת ואיכותית.</p>
                            <p>מציע חוויה בלתי נשכחת בזכות עיצוב ארכיטקטוני מרהיב,</p>
                            <p>ותפריט גורמה עשיר ומשובח. הכנסו לאווירה הקסומה,&nbsp;</p>
                            <p>תנו לניחוחות והטעמים לעטוף אתכם, וגם אתם תתאהבו.</p>
                            <p>הנסיון שצברנו בהפקת אירועי יוקרה, פרטיים ועסקיים, עומד כולו לרשותכם.</p>
                            <p>אז כמו שאומרים אצלנו: בקרוב אצלכם..</p>
                        </div>
                        <div
                            className="rating"
                            itemScope={false}
                            itemType="http://schema.org/LocalBusiness"
                        >
                            <meta content="חצר נצר" itemProp="name" />
                            <span
                                itemProp="aggregateRating"
                                itemScope={false}
                                itemType="http://schema.org/AggregateRating"
                            >
                                {/* <meta content={0} itemProp="worstRating" />
      <meta content={82} itemProp="ratingValue" />
      <meta content={100} itemProp="bestRating" />
      <meta content={338} itemProp="reviewCount" /> */}
                            </span>
                        </div>
                    </div>
                    <div className="filters-container">
                        <div className="filter-title">
                            חפשו ממליצים/ות שדומים/ות לכם או שהתחתנו בסגנון שלכם
                        </div>
                        <div className="filters">
                            <div className="secret">
                                <a href="154765/?filter=secret">
                                    {" "}
                                    <i className="icon-close-round" /> כלות אורבניות{" "}
                                </a>
                            </div>
                            <div>
                                <a href="154765/?filter=weekday&value=4">
                                    {" "}
                                    <i className="icon-close-round" /> חתונות שישי{" "}
                                </a>
                            </div>
                            <div>
                                <a href="154765/?filter=weekday&value=3">
                                    {" "}
                                    <i className="icon-close-round" /> חתונות חמישי{" "}
                                </a>
                            </div>
                            <div>
                                <a href="154765/?filter=winter">
                                    {" "}
                                    <i className="icon-close-round" /> חתונות חורף{" "}
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="crew-members-container">
                        <div className="caption">סינון המלצות לפי איש צוות:</div>
                        <div className="crew-members">
                            <div className="crew-member" data-id={0}>
                                כולם
                            </div>
                            <div className="hidden crew-member" data-id={404}>
                                חצר נצר- גן Z
                            </div>
                            <div className="hidden crew-member" data-id={405}>
                                חצר נצר- אולם S
                            </div>
                        </div>
                    </div>
                    <div className=' stories' style={{ marginBottom: '5em' }}>
                        <div className="secret-group-story">
                            <div className="story">
                                <div className="story-top">
                                    <div className="story-right">
                                        <div className="story-replier-photo">
                                            <img
                                                className=""
                                                alt="WedReviews חוות דעת והמלצות אמיתיות על חצר נצר | מקום לאירוע"
                                                title="WedReviews חוות דעת והמלצות אמיתיות על חצר נצר | מקום לאירוע"
                                                src="https://www.wedreviews.co.il/uploads/default/files/repliers/100000502920647.jpg"
                                                data-src="https://www.wedreviews.co.il/uploads/default/files/repliers/100000502920647.jpg"
                                                data-srcset="https://www.wedreviews.co.il/uploads/default/files/repliers/100000502920647.jpg"
                                                srcSet="https://www.wedreviews.co.il/uploads/default/files/repliers/100000502920647.jpg"
                                            />
                                        </div>
                                        <div className="story-basic-detail">
                                            <div className="couple-name">החתונה של אורטל ועמרי</div>
                                            <div className="event-date">10.10.19</div>
                                            <div className="replier_name">Ortal Naor</div>
                                        </div>
                                    </div>
                                    <div className="story-left">
                                        <div className="secret-group">
                                            <i
                                                className="icon-star"
                                                title="המלצה מתוך הקבוצה הסודית של כלות אורבניות"
                                            >
                                                <span className="path1" />
                                                <span className="path2" />
                                                <span className="path3" />
                                            </i>{" "}
                                            <span>המלצה מתוך הקבוצה הסודית של כלות אורבניות</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="review-body">
                                    <div>
                                        שנינו התאהבנו בחצר נצר מהפגישה הראשונה! מההתחלה היחס היה חמים ובייתי,
                                        היו לנו המון דגשים לאורך הדרך והם כל הזמן השתדלו לרצות אותנו ולבוא
                                        לקראתנו. היה לנו ליווי שלהם לאורך כל הדרך, מהודעות בוואטסאפ ועד שיחות
                                        לחידוד הפרטים הקטנים. היה לנו חשוב שהאוכל יהיה מושלם! וזו הייתה אחת
                                        הסיבות שבחרנו באולם הזה.
                                        <span className="read-more">
                                            {" "}
                                            המשך <i className="icon-triangle-down" />{" "}
                                        </span>
                                        <span className="hidden">
                                            {" "}
                                            סגרנו דרכם גם בר פתוח (open kitchen) של אוכל שמחובר לבר אלכוהולי שהיה
                                            ברחבה, בבר הפתוח הייתה עמדת סושי שקיבלה המון מחמאות, חיתוך פירות לאורך
                                            כל הערב, ועוד כמה מנות גורמה שהיו מוגשות בתוך הבר ע״י שפים שהכינו
                                            וצלחתו את המנות בזמן אמת. חייבת לציין שלא קיבלתי תלונה אחת, צוות
                                            המלצרים והברמנים תקתקו את הערב, כולם עבדו בעבודת צוות, גם המנהלים עשו
                                            עבודה נפלאה.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="top-story">
                            <div className="story">
                                <div className="story-top">
                                    <div className="story-right">
                                        <div className="story-replier-photo">
                                            <img
                                                className=""
                                                alt="WedReviews חוות דעת והמלצות אמיתיות על חצר נצר | מקום לאירוע"
                                                title="WedReviews חוות דעת והמלצות אמיתיות על חצר נצר | מקום לאירוע"
                                                src="https://www.wedreviews.co.il/addons/shared_addons/themes/wed_reviews_main_site_v2/img/bride-active.svg"
                                                data-src="https://www.wedreviews.co.il/addons/shared_addons/themes/wed_reviews_main_site_v2/img/bride-active.svg"
                                                data-srcset="https://www.wedreviews.co.il/addons/shared_addons/themes/wed_reviews_main_site_v2/img/bride-active.svg"
                                                srcSet="https://www.wedreviews.co.il/addons/shared_addons/themes/wed_reviews_main_site_v2/img/bride-active.svg"
                                            />
                                        </div>
                                        <div className="story-basic-detail">
                                            <div className="couple-name">החתונה של לין קאירי</div>
                                            <div className="event-date">24.11.22</div>
                                            <div className="replier_name" />
                                        </div>
                                    </div>
                                    <div className="story-left" />
                                </div>
                                <div className="review-body">
                                    <div>
                                        התחלנו את התהליך עם דניאל שבאמצע מסיבות כאלו ואחרות לא המשיכה איתנו את
                                        התהליך. הרגשנו שמשהו קצת התפספס ושהיחס האישי החם והחשוב שזוג מקבל כשהוא
                                        בדרך לקיים אירוע בסדר גודל כזה- התפספס ונפל בין הכסאות.. לא היה ליווי
                                        אישי וחם כמו בהתחלה. חדר החתן כלה לא סיפק את צרכינו לגמרי וגם לא נראה
                                        מזמין (חדר שאמור
                                        <span className="read-more">
                                            {" "}
                                            המשך <i className="icon-triangle-down" />{" "}
                                        </span>
                                        <span className="hidden">
                                            {" "}
                                            לשרת אותנו לאורך כל האירוע וזה קריטי). אוסיף ואציין שמשה מנהל האירוע
                                            היה מקסים, סבבלני וקשוב לאורך הערב. קיבלנו פידבקים חיוביים מהאורחים על
                                            העיצוב, האןכל, התאורה וההגברה, וזה באמת מה שגרם לנו לסגור אצלכם ועל זה
                                            אנחנו מודים לכם מאד!!!!!
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="last-posts-wrapper-desktop-only">
                            <div className="last-posts-wrapper">
                                <div className="title">פוסט קרדיטים מכלות אורבניות</div>
                                <div className="description">
                                    פוסטים של כלות מהקבוצה הסודית של כלות אורבניות שכוללים את חצר נצר
                                </div>
                                <div className="last-posts">
                                    <Link className="credits-post-link" href="/credits_post/112868">
                                        <div className="image-container">
                                            <img
                                                alt="אורטל ועמרי"
                                                title="אורטל ועמרי"
                                                src="https://www.wedreviews.co.il/uploads/default/files/credits_posts/73232853_3121611974532203_359003981126565888_o_wed_thumb.jpg"
                                            />
                                        </div>
                                        <div className="couple-name">אורטל ועמרי</div>
                                        <div className="review-snippet">
                                            שנינו התאהבנו בחצר נצר מהפגישה הראשונה! מההתחלה היחס היה חמים ובייתי,
                                            היו לנו המ
                                        </div>
                                    </Link>{" "}
                                    <Link className="credits-post-link" href="/credits_post/146105">
                                        <div className="image-container">
                                            <img
                                                alt="שיר ורועי"
                                                title="שיר ורועי"
                                                src="https://www.wedreviews.co.il/uploads/default/files/credits_posts/2020/90720688_10222519685645538_756110309353062400_n_wed_thumb.jpg"
                                            />
                                        </div>
                                        <div className="couple-name">שיר ורועי</div>
                                        <div className="review-snippet">
                                            אולם מושלם, היחס, השירות, המחיר מושלם מושלם מושלם!! רק קיבלנו פידבקים
                                            ומחמאות חי
                                        </div>
                                    </Link>{" "}
                                    <a className="credits-post-link" href="/credits_post/138170">
                                        <div className="image-container">
                                            <img
                                                alt="ספיר ולידור"
                                                title="ספיר ולידור"
                                                src="https://www.wedreviews.co.il/uploads/default/files/credits_posts/81500110_10213009893317106_5526315848324612096_n_wed_thumb.jpg"
                                            />
                                        </div>
                                        <div className="couple-name">ספיר ולידור</div>
                                        <div className="review-snippet">
                                            בראש ובראשונה אנחנו רוצים להודות ליובל המקסימה שליוותה אותנו לאורך
                                            התהליך, מרגע
                                        </div>
                                    </a>
                                </div>
                                <a className="credits-post-supplier-link" href="/credits_posts/154765">
                                    {" "}
                                    לכל הפוסט קרדיטים
                                    <i className="icon-left" />{" "}
                                </a>
                            </div>
                        </div>

                        {
                            stories.map((story: any) => {
                                return (
                                    <>
                                        <div className='story'>

                                            <div className='story-top'>
                                                <div className='story-right'>
                                                    <div className='story-replier-photo'>
                                                        <img
                                                            className=""
                                                            alt="WedReviews חוות דעת והמלצות אמיתיות על חצר נצר | מקום לאירוע"
                                                            title="WedReviews חוות דעת והמלצות אמיתיות על חצר נצר | מקום לאירוע"
                                                            src={story.story_top.story_right.story_replier_photo_url}
                                                            data-src="https://www.wedreviews.co.il/uploads/default/files/repliers/10209904911135270.jpg"
                                                            data-srcset="https://www.wedreviews.co.il/uploads/default/files/repliers/10209904911135270.jpg"
                                                            srcSet="https://www.wedreviews.co.il/uploads/default/files/repliers/10209904911135270.jpg"
                                                        />
                                                    </div>
                                                    <div className='story-basic-detail'>
                                                        <div className='couple-name'>
                                                            {story.story_top.story_right.story_basic_detail.couple_name}
                                                        </div>

                                                        <div className='event-date'>
                                                            {story.story_top.story_right.story_basic_detail.event_date}
                                                        </div>
                                                        <div className='replier_name'>
                                                            {story.story_top.story_right.story_basic_detail.replier_name}

                                                        </div>

                                                    </div>


                                                </div>
                                                <div className='story-left'></div>
                                            </div>
                                            <div className='review-body'>
                                                <div>
                                                    {story.review_body.content}
                                                    <span className='read-more'>
                                                        {story.review_body.read_more}
                                                        <i className="icon-triangle-down" />


                                                    </span>
                                                    <span className='hidden'>
                                                        {story.review_body.hidden}

                                                    </span>
                                                </div>
                                            </div>
                                            <div className='other-suppliers'>
                                                <div className='other-suppliers-title'>
                                                    {story.other_suppliers.other_suppliers_title}
                                                </div>

                                                <Link href={story.other_suppliers.href_url}   >
                                                    <div className='supplier-logo'>
                                                        <div className='category-icon category-icon-153279' style={{ backgroundImage: story.other_suppliers.supplier_logo }}>

                                                        </div>
                                                    </div>
                                                    <div className='supplier-name-container'>
                                                        <div className='category-name'>
                                                            {story.other_suppliers.supplier_name_container.category_name}

                                                        </div>
                                                        <div className='supplier-name'>
                                                            {story.other_suppliers.supplier_name_container.supplier_name}

                                                        </div>

                                                    </div>

                                                </Link>

                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }

                        <div className='load-stories' style={{ whiteSpace: "nowrap" }}>
                            {"ממליצים נוספים"}
                        </div>
                    </div>




                </div>



            </div>


        </>

    )

}