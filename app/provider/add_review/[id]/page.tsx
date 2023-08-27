
import React from 'react'

export default function page() {


    const breadcrumbs_1 = {
        fontSize: '14px',
        color: '#989898',
        display: 'flex',
        // justifyContent: 'center',
        flexShrink: 0,
        padding: '20px',
        width: '100%',
        margin: '35px auto 50px',
        maxWidth: '1440px'
    }
    const items = [
        { link: '/', text: 'דף הבית' },
        { link: '/event/category/153251', text: 'מקום לאירוע' },
        { link: '/event/category/153251/240732', text: 'גני אירועים בשרון' },
        { link: '../stories/154693', text: 'עדן - גן האירועים' },
        { link: '', text: 'הוספת המלצה' },
    ];
    const ListItem = ({ link, text }: { link: string, text: string }) => (
        <li>
            <span>›</span> <a href={link}>{text}</a>
        </li>
    );


    return (
        <>
            <div>
                <ul style={breadcrumbs_1}>
                    {items.map((item, index) => (
                        <ListItem key={index} link={item.link} text={item.text} />
                    ))}
                </ul>

                <div className="add-review-container provider-section">
                    <div className="add-review" style={{ gap: '2em' }}>
                        <div className="right-side">
                            <div className="provider-fixed-container">
                                <img
                                    className="provider-photo"
                                    src="https://www.wedreviews.co.il/uploads/default/files/logos/EDEN_final_logo2.jpg"
                                    title="לוגו"
                                    alt="לוגו"
                                />
                                <link
                                    href="https://www.wedreviews.co.il/uploads/default/files/logos/EDEN_final_logo2.jpg"
                                    itemProp="image"
                                />
                                <div className="supplier-total-reviews">727 ממליצים</div>
                                <div className="add-review">
                                    {/* <a href={154693}/>
            
            <i className="icon-plus" title="הוסיפו המלצה" /> הוסיפו המלצה{" "}
          </a> */}
                                </div>
                            </div>
                        </div>
                        <div className="left-side">
                            <div className="survey">
                                <form
                                    id="add-review-form"
                                    action="/supplier/survey_results/154693"
                                    method="post"
                                    acceptCharset="utf-8"
                                >
                                    <input
                                        className="hidden-input replier-type-hidden"
                                        type="hidden"
                                        defaultValue="bride"
                                        name="replier"
                                    />
                                    <input
                                        className="event-id"
                                        type="hidden"
                                        defaultValue={0}
                                        name="e_id"
                                    />
                                    <input
                                        className="location"
                                        type="hidden"
                                        defaultValue="עדן - גן האירועים"
                                        name="event_location"
                                        autoComplete="off"
                                    />
                                    <div className="header">
                                        <h1>הוספת המלצה</h1>
                                        <div>
                                            מזל טוב! אתם אחרי חתונה מהחלומות ואנחנו בטוחים שיש לכם הרבה
                                            מסקנות. נשמח לשמוע את המלצתכם על עדן - גן האירועים
                                        </div>
                                    </div>
                                    <div className="event-details">
                                        <div>
                                            <input
                                                className="location form-input"
                                                defaultValue="עדן - גן האירועים"
                                                disabled={false}
                                                autoComplete="off"
                                            />
                                            <input className="form-input placeholder-input" disabled={false} />
                                        </div>
                                        <div className="event-date-type">
                                            <div className="input-date form-input">
                                                <input
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
                                            <input
                                                className="event-type"
                                                type="hidden"
                                                defaultValue={1}
                                                name="event_type"
                                            />
                                            <div className="event-type-select-container custom-select-container">
                                                <div className="event-type-select custom-select">
                                                    <span className="arrow-down">
                                                        <i className="icon-down" />
                                                    </span>
                                                    <div className="event-type-option custom-option" data-id={1}>
                                                        חתונה
                                                    </div>
                                                    <div
                                                        className="hidden event-type-option custom-option"
                                                        data-id={2}
                                                    >
                                                        אירוע עסקי
                                                    </div>
                                                    <div
                                                        className="hidden event-type-option custom-option"
                                                        data-id={3}
                                                    >
                                                        בר מצווה
                                                    </div>
                                                    <div
                                                        className="hidden event-type-option custom-option"
                                                        data-id={4}
                                                    >
                                                        בת מצווה
                                                    </div>
                                                    <div
                                                        className="hidden event-type-option custom-option"
                                                        data-id={5}
                                                    >
                                                        יום הולדת
                                                    </div>
                                                    <div
                                                        className="hidden event-type-option custom-option"
                                                        data-id={6}
                                                    >
                                                        ברית
                                                    </div>
                                                    <div
                                                        className="hidden event-type-option custom-option"
                                                        data-id={7}
                                                    >
                                                        בריתה
                                                    </div>
                                                    <div
                                                        className="hidden event-type-option custom-option"
                                                        data-id={8}
                                                    >
                                                        אפליקציה
                                                    </div>
                                                    <div
                                                        className="hidden event-type-option custom-option"
                                                        data-id={9}
                                                    >
                                                        איפור ערב
                                                    </div>
                                                    <div
                                                        className="hidden event-type-option custom-option"
                                                        data-id={10}
                                                    >
                                                        שיעור איפור פרטי
                                                    </div>
                                                    <div
                                                        className="hidden event-type-option custom-option"
                                                        data-id={11}
                                                    >
                                                        שמלת ערב
                                                    </div>
                                                    <div
                                                        className="hidden event-type-option custom-option"
                                                        data-id={12}
                                                    >
                                                        סדנת איפור
                                                    </div>
                                                    <div
                                                        className="hidden event-type-option custom-option"
                                                        data-id={13}
                                                    >
                                                        חינה
                                                    </div>
                                                    <div
                                                        className="hidden event-type-option custom-option"
                                                        data-id={14}
                                                    >
                                                        אירוע פרטי
                                                    </div>
                                                    <div
                                                        className="hidden event-type-option custom-option"
                                                        data-id={15}
                                                    >
                                                        אירוסין
                                                    </div>
                                                    <div
                                                        className="hidden event-type-option custom-option"
                                                        data-id={16}
                                                    >
                                                        צילומי סטודיו
                                                    </div>
                                                    <div
                                                        className="hidden event-type-option custom-option"
                                                        data-id={17}
                                                    >
                                                        טראש דה דראס
                                                    </div>
                                                    <div
                                                        className="hidden event-type-option custom-option"
                                                        data-id={18}
                                                    >
                                                        צילומי זוגיות
                                                    </div>
                                                    <div
                                                        className="hidden event-type-option custom-option"
                                                        data-id={19}
                                                    >
                                                        צילומי תדמית
                                                    </div>
                                                    <div
                                                        className="hidden event-type-option custom-option"
                                                        data-id={20}
                                                    >
                                                        צילומי אוכל ואווירה
                                                    </div>
                                                    <div
                                                        className="hidden event-type-option custom-option"
                                                        data-id={21}
                                                    >
                                                        {`צילומי יח"צ `}                                                    </div>
                                                    <div
                                                        className="hidden event-type-option custom-option"
                                                        data-id={22}
                                                    >
                                                        שיער ערב
                                                    </div>
                                                    <div
                                                        className="hidden event-type-option custom-option"
                                                        data-id={23}
                                                    >
                                                        מלווה
                                                    </div>
                                                    <div
                                                        className="hidden event-type-option custom-option"
                                                        data-id={24}
                                                    >
                                                        איפור ושיער
                                                    </div>
                                                    <div
                                                        className="hidden event-type-option custom-option"
                                                        data-id={25}
                                                    >
                                                        VR
                                                    </div>
                                                    <div
                                                        className="hidden event-type-option custom-option"
                                                        data-id={26}
                                                    >
                                                        סדנת שיער
                                                    </div>
                                                </div>
                                                <input className="form-input placeholder-input" disabled={false} />
                                            </div>
                                        </div>
                                        <div>
                                            <input
                                                className="bride-name form-input"
                                                name="bride_name"
                                                placeholder="שם הכלה / החתן"
                                            />
                                            <input
                                                className="groom-name form-input"
                                                name="groom_name"
                                                placeholder="שם החתן / הכלה"
                                            />
                                        </div>
                                        <div className="replier-type-container">
                                            <div>מי אני?</div>
                                            <div
                                                className="replier-type bride active"
                                                data-replier-type="bride"
                                            >
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
                                    <div className="survey-form">
                                        <input
                                            className="hidden-input survey-question-hidden"
                                            type="hidden"
                                            data-question-id={26}
                                            defaultValue={0}
                                            name="question_26"
                                        />
                                        <div className="question">
                                            <div className="question-text">
                                                איך הייתם מגדירים את השירות שקיבלתם מאיתנו לאורך התהליך?
                                            </div>
                                            <div className="answer-container">
                                                <div
                                                    className="answer"
                                                    data-question-id={26}
                                                    data-answer-id={96}
                                                >
                                                    <div className="tick" />
                                                    <i className="icon-active-bar">
                                                        {" "}
                                                        <span className="path1" /> <span className="path2" />{" "}
                                                    </i>{" "}
                                                    מקצועי
                                                </div>
                                                <div
                                                    className="answer"
                                                    data-question-id={26}
                                                    data-answer-id={97}
                                                >
                                                    <div className="tick" />
                                                    <i className="icon-active-bar">
                                                        {" "}
                                                        <span className="path1" /> <span className="path2" />{" "}
                                                    </i>{" "}
                                                    סבלני
                                                </div>
                                                <div
                                                    className="answer"
                                                    data-question-id={26}
                                                    data-answer-id={98}
                                                >
                                                    <div className="tick" />
                                                    <i className="icon-active-bar">
                                                        {" "}
                                                        <span className="path1" /> <span className="path2" />{" "}
                                                    </i>{" "}
                                                    אישי מאד
                                                </div>
                                                <div
                                                    className="answer"
                                                    data-question-id={26}
                                                    data-answer-id={99}
                                                >
                                                    <div className="tick" />
                                                    <i className="icon-active-bar">
                                                        {" "}
                                                        <span className="path1" /> <span className="path2" />{" "}
                                                    </i>{" "}
                                                    הוגן
                                                </div>
                                                <div
                                                    className="answer"
                                                    data-question-id={26}
                                                    data-answer-id={100}
                                                >
                                                    <div className="tick" />
                                                    <i className="icon-active-bar">
                                                        {" "}
                                                        <span className="path1" /> <span className="path2" />{" "}
                                                    </i>{" "}
                                                    לא משהו מיוחד
                                                </div>
                                            </div>
                                            <div className="separator" />
                                        </div>
                                        <input
                                            className="hidden-input survey-question-hidden"
                                            type="hidden"
                                            data-question-id={31}
                                            defaultValue={0}
                                            name="question_31"
                                        />
                                        <div className="question">
                                            <div className="question-text">מה הציון שאתם נותנים לנו?</div>
                                            <div className="answer-container">
                                                <div
                                                    className="answer"
                                                    data-question-id={31}
                                                    data-answer-id={118}
                                                >
                                                    <div className="tick" />
                                                    <i className="icon-active-bar">
                                                        {" "}
                                                        <span className="path1" /> <span className="path2" />{" "}
                                                    </i>{" "}
                                                    10- מעולה
                                                </div>
                                                <div
                                                    className="answer"
                                                    data-question-id={31}
                                                    data-answer-id={119}
                                                >
                                                    <div className="tick" />
                                                    <i className="icon-active-bar">
                                                        {" "}
                                                        <span className="path1" /> <span className="path2" />{" "}
                                                    </i>{" "}
                                                    9- מצוין
                                                </div>
                                                <div
                                                    className="answer"
                                                    data-question-id={31}
                                                    data-answer-id={120}
                                                >
                                                    <div className="tick" />
                                                    <i className="icon-active-bar">
                                                        {" "}
                                                        <span className="path1" /> <span className="path2" />{" "}
                                                    </i>{" "}
                                                    8- טוב
                                                </div>
                                                <div
                                                    className="answer"
                                                    data-question-id={31}
                                                    data-answer-id={121}
                                                >
                                                    <div className="tick" />
                                                    <i className="icon-active-bar">
                                                        {" "}
                                                        <span className="path1" /> <span className="path2" />{" "}
                                                    </i>{" "}
                                                    7-עובר
                                                </div>
                                                <div
                                                    className="answer"
                                                    data-question-id={31}
                                                    data-answer-id={122}
                                                >
                                                    <div className="tick" />
                                                    <i className="icon-active-bar">
                                                        {" "}
                                                        <span className="path1" /> <span className="path2" />{" "}
                                                    </i>{" "}
                                                    6- נכשל
                                                </div>
                                            </div>
                                            <div className="separator" />
                                        </div>
                                        <input
                                            className="hidden-input survey-question-hidden"
                                            type="hidden"
                                            data-question-id={44}
                                            defaultValue={0}
                                            name="question_44"
                                        />
                                        <div className="question">
                                            <div className="question-text">
                                                מה הסיבה העיקרית שבגללה בחרתם בנו ?
                                            </div>
                                            <div className="answer-container">
                                                <div
                                                    className="answer"
                                                    data-question-id={44}
                                                    data-answer-id={177}
                                                >
                                                    <div className="tick" />
                                                    <i className="icon-active-bar">
                                                        {" "}
                                                        <span className="path1" /> <span className="path2" />{" "}
                                                    </i>{" "}
                                                    הייחודיות
                                                </div>
                                                <div
                                                    className="answer"
                                                    data-question-id={44}
                                                    data-answer-id={178}
                                                >
                                                    <div className="tick" />
                                                    <i className="icon-active-bar">
                                                        {" "}
                                                        <span className="path1" /> <span className="path2" />{" "}
                                                    </i>{" "}
                                                    האנשים/הצוות
                                                </div>
                                                <div
                                                    className="answer"
                                                    data-question-id={44}
                                                    data-answer-id={179}
                                                >
                                                    <div className="tick" />
                                                    <i className="icon-active-bar">
                                                        {" "}
                                                        <span className="path1" /> <span className="path2" />{" "}
                                                    </i>{" "}
                                                    תחושת בטן
                                                </div>
                                                <div
                                                    className="answer"
                                                    data-question-id={44}
                                                    data-answer-id={180}
                                                >
                                                    <div className="tick" />
                                                    <i className="icon-active-bar">
                                                        {" "}
                                                        <span className="path1" /> <span className="path2" />{" "}
                                                    </i>{" "}
                                                    המחיר
                                                </div>
                                                <div
                                                    className="answer"
                                                    data-question-id={44}
                                                    data-answer-id={181}
                                                >
                                                    <div className="tick" />
                                                    <i className="icon-active-bar">
                                                        {" "}
                                                        <span className="path1" /> <span className="path2" />{" "}
                                                    </i>{" "}
                                                    הכל ביחד
                                                </div>
                                            </div>
                                            <div className="separator" />
                                        </div>
                                        <input
                                            className="hidden-input survey-question-hidden"
                                            type="hidden"
                                            data-question-id={45}
                                            defaultValue={0}
                                            name="question_45"
                                        />
                                        <div className="question">
                                            <div className="question-text">
                                                איך הייתה ההתנהלות שלנו ביום/במהלך האירוע?
                                            </div>
                                            <div className="answer-container">
                                                <div
                                                    className="answer"
                                                    data-question-id={45}
                                                    data-answer-id={182}
                                                >
                                                    <div className="tick" />
                                                    <i className="icon-active-bar">
                                                        {" "}
                                                        <span className="path1" /> <span className="path2" />{" "}
                                                    </i>{" "}
                                                    מקצועית
                                                </div>
                                                <div
                                                    className="answer"
                                                    data-question-id={45}
                                                    data-answer-id={183}
                                                >
                                                    <div className="tick" />
                                                    <i className="icon-active-bar">
                                                        {" "}
                                                        <span className="path1" /> <span className="path2" />{" "}
                                                    </i>{" "}
                                                    אדיבה מאד
                                                </div>
                                                <div
                                                    className="answer"
                                                    data-question-id={45}
                                                    data-answer-id={184}
                                                >
                                                    <div className="tick" />
                                                    <i className="icon-active-bar">
                                                        {" "}
                                                        <span className="path1" /> <span className="path2" />{" "}
                                                    </i>{" "}
                                                    מלאה תשומת לב
                                                </div>
                                                <div
                                                    className="answer"
                                                    data-question-id={45}
                                                    data-answer-id={185}
                                                >
                                                    <div className="tick" />
                                                    <i className="icon-active-bar">
                                                        {" "}
                                                        <span className="path1" /> <span className="path2" />{" "}
                                                    </i>{" "}
                                                    ציפינו ליותר
                                                </div>
                                                <div
                                                    className="answer"
                                                    data-question-id={45}
                                                    data-answer-id={186}
                                                >
                                                    <div className="tick" />
                                                    <i className="icon-active-bar">
                                                        {" "}
                                                        <span className="path1" /> <span className="path2" />{" "}
                                                    </i>{" "}
                                                    בדיוק כפי שהובטח
                                                </div>
                                            </div>
                                            <div className="separator" />
                                        </div>
                                        <input
                                            className="hidden-input survey-question-hidden"
                                            type="hidden"
                                            data-question-id={816}
                                            defaultValue={0}
                                            name="question_816"
                                        />
                                        <div className="question">
                                            <div className="question-text">
                                                מה היו הפידבקים שקיבלתם מן האורחים על האוכל שלנו?
                                            </div>
                                            <div className="answer-container">
                                                <div
                                                    className="answer"
                                                    data-question-id={816}
                                                    data-answer-id={3568}
                                                >
                                                    <div className="tick" />
                                                    <i className="icon-active-bar">
                                                        {" "}
                                                        <span className="path1" /> <span className="path2" />{" "}
                                                    </i>{" "}
                                                    מחמאות בלי סוף
                                                </div>
                                                <div
                                                    className="answer"
                                                    data-question-id={816}
                                                    data-answer-id={3569}
                                                >
                                                    <div className="tick" />
                                                    <i className="icon-active-bar">
                                                        {" "}
                                                        <span className="path1" /> <span className="path2" />{" "}
                                                    </i>{" "}
                                                    נהנו מהאוכל
                                                </div>
                                                <div
                                                    className="answer"
                                                    data-question-id={816}
                                                    data-answer-id={3570}
                                                >
                                                    <div className="tick" />
                                                    <i className="icon-active-bar">
                                                        {" "}
                                                        <span className="path1" /> <span className="path2" />{" "}
                                                    </i>{" "}
                                                    אמרו שהאוכל היה בסדר
                                                </div>
                                                <div
                                                    className="answer"
                                                    data-question-id={816}
                                                    data-answer-id={3571}
                                                >
                                                    <div className="tick" />
                                                    <i className="icon-active-bar">
                                                        {" "}
                                                        <span className="path1" /> <span className="path2" />{" "}
                                                    </i>{" "}
                                                    לא נהנו מהאוכל
                                                </div>
                                                <div
                                                    className="answer"
                                                    data-question-id={816}
                                                    data-answer-id={3572}
                                                >
                                                    <div className="tick" />
                                                    <i className="icon-active-bar">
                                                        {" "}
                                                        <span className="path1" /> <span className="path2" />{" "}
                                                    </i>{" "}
                                                    פידבק שלילי
                                                </div>
                                            </div>
                                            <div className="separator" />
                                        </div>
                                        <div className="question">
                                            <div className="question-text">
                                                כתבו כאן את חוות דעתכם והמלצה על עדן - גן האירועים
                                            </div>
                                            <div className="answer reply-text-container">
                                                <textarea
                                                    className="reply-text"
                                                    name="reply_text"
                                                    defaultValue={""}
                                                />
                                            </div>
                                        </div>
                                        <div className="question allow-images-container">
                                            <input
                                                className="allow-images-use-checkbox"
                                                type="hidden"
                                                defaultValue={1}
                                                name="allow_images_use"
                                            />
                                            <div className="allow-images-button">
                                                <i className="icon-agree active" />
                                            </div>
                                            <div>
                                                אני מאשר/ת לנותני שירות שהשתתפו באירוע להציג תמונות ווידאו
                                                מהאירוע לצד ההמלצה ובאתר וודריביוז וכלות אורבניות.
                                            </div>
                                        </div>
                                        <div className="error" />
                                        <div className="submit-button-container" style={{ marginBottom: "4em" }}>
                                            <input type="button" defaultValue="שגרו את ההמלצה" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="hidden loading-popup">
                            <div className="loading-image">
                                <img
                                    src="/addons/shared_addons/themes/wed_reviews_frontend/img/survey_loading.svg"
                                    alt=""
                                />
                            </div>
                            <div className="end-of-loading">
                                אנחנו רוצים לשמור על מערכת נקייה מזיופים. כדי שהמשוב שכתבת ייקלט יש לאשר
                                את האפליקציה במסך הבא. תודה!
                            </div>
                        </div>
                        <div className="hidden event-exists-container" />
                    </div>
                    <div className="hidden overlay" />
                    {/* <link
                        href="/addons/shared_addons/themes/wed_reviews_main_site_v2/css/the-datepicker.css"
                        rel="stylesheet"
                        // onload="this.media='all'"
                        media="all"
                    />
                    <link
                        href="/addons/shared_addons/themes/wed_reviews_main_site_v2/css/auto-complete.css"
                        rel="stylesheet"
                        // onload="this.media='all'"
                        media="all"
                    /> */}
                </div>


            </div>
        </>
    )
}

