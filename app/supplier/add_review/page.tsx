import { Input } from '@/components/ui/input'
import React from 'react'



export default function page() {


    return (
        <>
            <ul className="breadcrumbs_add_review">
                <li>
                    <a href="/">דף הבית</a>
                </li>
                <li>
                    <span>›</span> <span> הוספת המלצה </span>
                </li>
            </ul>
            <div className='add-review-container provider-section'>
                <div className='add-review' style={{ display: 'flex', justifyContent: 'center' }}>
                    <div className='left-side'>
                        <div className='survey'>
                            <form action="" id='add-review-form' acceptCharset='utf-8'>
                                <Input className='hidden-input replier-type-hidden ' name='replier' type='hidden' value={"bride"} />
                                <Input className='event-id ' name='e_id' type='hidden' value={"0"} />
                                <div className="header">
                                    <h1>הוספת המלצה</h1>
                                    <div>
                                        מזל טוב! אתם אחרי חתונה מהחלומות ואנחנו בטוחים שיש לכם הרבה מסקנות. נשמח
                                        לשמוע את המלצתכם.
                                    </div>
                                </div>
                                <div className='event-details'>
                                    <div>
                                        <Input
                                            className="location form-input"
                                            name="event_location"
                                            placeholder="מיקום"
                                            list="locations"
                                            autoComplete="off"
                                        />
                                        <Input
                                            className="business_name form-input"
                                            name="business_name"
                                            placeholder="שם הספק"
                                            autoComplete="off"
                                        />
                                    </div>
                                    <div className='event-date-type'>
                                        <div className="input-date form-input">
                                            <Input
                                                className="event-date"
                                                name="event_date"
                                                placeholder="תאריך"
                                                id="datepicker"
                                                readOnly={false}
                                                autoComplete="off"
                                            />
                                            <span
                                                className="the-datepicker__deselect"
                                                style={{ position: "absolute", visibility: "hidden" }}
                                            >
                                                <a
                                                    href="#"
                                                    className="the-datepicker__deselect-button"
                                                    style={{ position: "relative", left: "-0.8em" }}
                                                >
                                                    ×
                                                </a>
                                            </span>
                                            <div
                                                className="the-datepicker__container"
                                                style={{ position: "absolute", zIndex: 99 }}
                                            />
                                            <i className="icon-calender" />
                                        </div>
                                        <Input className='event-type' name='event-type' type='hidden' value={3} />
                                        <div className='event-type-select-container custom-select-container '>
                                            <div className="event-type-select custom-select">
                                                <span className="arrow-down">
                                                    <i className="icon-down" />
                                                </span>
                                                <div className="hidden event-type-option custom-option open " data-id={1}>
                                                    חתונה
                                                </div>
                                                <div className="hidden event-type-option custom-option open " data-id={2}>
                                                    אירוע עסקי
                                                </div>
                                                <div className="event-type-option custom-option open" data-id={3}>
                                                    בר מצווה
                                                </div>
                                                <div className="hidden event-type-option custom-option open " data-id={4}>
                                                    בת מצווה
                                                </div>
                                                <div className="hidden event-type-option custom-option open " data-id={5}>
                                                    יום הולדת
                                                </div>
                                                <div className="hidden event-type-option custom-option open " data-id={6}>
                                                    ברית
                                                </div>
                                                <div className="hidden event-type-option custom-option open " data-id={7}>
                                                    בריתה
                                                </div>
                                                <div className="hidden event-type-option custom-option open " data-id={8}>
                                                    אפליקציה
                                                </div>
                                                <div className="hidden event-type-option custom-option open " data-id={9}>
                                                    איפור ערב
                                                </div>
                                                <div className="hidden event-type-option custom-option open " data-id={10}>
                                                    שיעור איפור פרטי
                                                </div>
                                                <div className="hidden event-type-option custom-option open " data-id={11}>
                                                    שמלת ערב
                                                </div>
                                                <div className="hidden event-type-option custom-option open " data-id={12}>
                                                    סדנת איפור
                                                </div>
                                                <div className="hidden event-type-option custom-option open " data-id={13}>
                                                    חינה
                                                </div>
                                                <div className="hidden event-type-option custom-option open " data-id={14}>
                                                    אירוע פרטי
                                                </div>
                                                <div className="hidden event-type-option custom-option open " data-id={15}>
                                                    אירוסין
                                                </div>
                                                <div className="hidden event-type-option custom-option open " data-id={16}>
                                                    צילומי סטודיו
                                                </div>
                                                <div className="hidden event-type-option custom-option open " data-id={17}>
                                                    טראש דה דראס
                                                </div>
                                                <div className="hidden event-type-option custom-option open " data-id={18}>
                                                    צילומי זוגיות
                                                </div>
                                                <div className="hidden event-type-option custom-option open " data-id={19}>
                                                    צילומי תדמית
                                                </div>
                                                <div className="hidden event-type-option custom-option open " data-id={20}>
                                                    צילומי אוכל ואווירה
                                                </div>
                                                <div className="hidden event-type-option custom-option open " data-id={21}>
                                                    צילומי יח"צ
                                                </div>
                                                <div className="hidden event-type-option custom-option open " data-id={22}>
                                                    שיער ערב
                                                </div>
                                                <div className="hidden event-type-option custom-option open " data-id={23}>
                                                    מלווה
                                                </div>
                                                <div className="hidden event-type-option custom-option open " data-id={24}>
                                                    איפור ושיער
                                                </div>
                                                <div className="hidden event-type-option custom-option open " data-id={25}>
                                                    VR
                                                </div>
                                                <div className="hidden event-type-option custom-option open " data-id={26}>
                                                    סדנת שיער
                                                </div>
                                            </div>
                                            <Input className='form-input placeholder-input' />


                                        </div>
                                    </div>
                                    <div>
                                        <Input
                                            className="bride-name form-input"
                                            name="bride_name"
                                            placeholder="שם הכלה / החתן"
                                        />
                                        <Input
                                            className="groom-name form-input"
                                            name="groom_name"
                                            placeholder="שם החתן / הכלה"
                                        />
                                    </div>

                                    <div className="replier-type-container">
                                        <div>מי אני?</div>
                                        <div className="replier-type bride active" data-replier-type="bride">
                                            <img
                                                className="regular"
                                                src="https://www.wedreviews.co.il/addons/shared_addons/themes/wed_reviews_main_site_v2/img/bride.svg"
                                            />
                                            <img
                                                className="active"
                                                src="https://www.wedreviews.co.il/addons/shared_addons/themes/wed_reviews_main_site_v2/img/bride-active.svg"
                                            />
                                        </div>
                                        <div className="replier-type groom" data-replier-type="groom">
                                            <img
                                                className="regular"
                                                src="https://www.wedreviews.co.il/addons/shared_addons/themes/wed_reviews_main_site_v2/img/groom.svg"
                                            />
                                            <img
                                                className="active"
                                                src="https://www.wedreviews.co.il/addons/shared_addons/themes/wed_reviews_main_site_v2/img/groom-active.svg"
                                            />
                                        </div>
                                    </div>


                                </div>

                                <div className='survey-form'>
                                    <Input
                                        className="hidden-input survey-question-hidden"
                                        name="question_486"
                                        type="hidden"
                                        defaultValue={0}
                                        data-question-id={486}
                                    />
                                    <div className="question">
                                        <div className="question-text">
                                            עד כמה הייתם מרוצים מהשירות שקיבלתם מספק זה?
                                        </div>
                                        <div className="answer-container">
                                            <div className="answer" data-question-id={486} data-answer-id={2163}>
                                                <div className="tick" />
                                                <i className="icon-active-bar">
                                                    {" "}
                                                    <span className="path1" /> <span className="path2" />{" "}
                                                </i>{" "}
                                                מאד מרוצים
                                            </div>
                                            <div className="answer" data-question-id={486} data-answer-id={2164}>
                                                <div className="tick" />
                                                <i className="icon-active-bar">
                                                    {" "}
                                                    <span className="path1" /> <span className="path2" />{" "}
                                                </i>{" "}
                                                מרוצים
                                            </div>
                                            <div className="answer" data-question-id={486} data-answer-id={2165}>
                                                <div className="tick" />
                                                <i className="icon-active-bar">
                                                    {" "}
                                                    <span className="path1" /> <span className="path2" />{" "}
                                                </i>{" "}
                                                ככה ככה
                                            </div>
                                            <div className="answer" data-question-id={486} data-answer-id={2166}>
                                                <div className="tick" />
                                                <i className="icon-active-bar">
                                                    {" "}
                                                    <span className="path1" /> <span className="path2" />{" "}
                                                </i>{" "}
                                                לא מרוצים
                                            </div>
                                        </div>
                                        <div className="separator" />
                                    </div>
                                    <div className="question">
                                        <div className="question-text">כתבו כאן את חוות דעתכם</div>
                                        <div className="answer reply-text-container">
                                            <textarea className="reply-text" name="reply_text" defaultValue={""} />
                                        </div>
                                    </div>
                                    <div className="question allow-images-container">
                                        <input
                                            className="allow-images-use-checkbox"
                                            name="allow_images_use"
                                            type="hidden"
                                            defaultValue={1}
                                        />
                                        <div className="allow-images-button">
                                            <i className="icon-agree active" />
                                        </div>
                                        <div>
                                            אני מאשר/ת לנותני שירות שהשתתפו באירוע להציג תמונות ווידאו מהאירוע לצד
                                            ההמלצה ובאתר וודריביוז וכלות אורבניות.
                                        </div>
                                    </div>
                                    <div className='error'>
                                        {" "}
                                    </div>
                                    <div className="mb-6 submit-button-container">
                                        <input type="button" defaultValue="שגרו את ההמלצה" />
                                    </div>


                                </div>

                            </form>
                        </div>
                        <div className='hidden loading-popup'>
                            <div className='loading-image'>
                                <img src="https://www.wedreviews.co.il/addons/shared_addons/themes/wed_reviews_frontend/img/survey_loading.svg" alt="wedding reviews" />
                            </div>
                            <div className='end-of-loading'>
                                אנחנו רוצים לשמור על מערכת נקייה מזיופים. כדי שהמשוב שכתבת ייקלט יש לאשר את האפליקציה במסך הבא. תודה!
                            </div>

                        </div>
                        <div className='event-exists-container'></div>
                    </div>


                </div>
                <div className="hidden overlay"></div>


            </div>
        </>
    )
}

