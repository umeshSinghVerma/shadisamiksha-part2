import { Input } from '@/components/ui/input'
import React from 'react'



export default function page() {
    return (
        <>
            <div className='main-container_contact_us'>
                <ul className="breadcrumbs">
                    <li>
                        <a href="/">דף הבית</a>
                    </li>
                    <li>
                        <span>›</span> <span> צרו קשר </span>
                    </li>
                </ul>

                <div className="general-page">
                    <div className="contact-us">
                        <div className="contact_us_form">
                            <h1>צרו קשר</h1>
                            <div>
                                <div className="info">
                                    <div>איך נוכל לעזור לכם?</div>
                                    <div>מלאו את הטופס ואנחנו כבר חוזרים אליכם.</div>
                                    <div className="info_more">
                                        לקבלת "גולשות לחתונה - הסקר המקיף להתנהגות כלות ברשת" השאירו פרטים
                                        וציינו שאתם מעוניינים לקבל אותו.
                                    </div>
                                </div>
                                <div className="form">
                                    <form
                                        method="post"
                                        id="contact_form"
                                        action="contact_us"
                                        acceptCharset="utf-8"
                                    >
                                        <div className="user-type-select-container custom-select-container">
                                            <div className="user-type-select custom-select">
                                                <span className="arrow-down">
                                                    <i className="icon-down" />
                                                </span>
                                                <input
                                                    className="user-type"
                                                    name="user_type"
                                                    type="hidden"
                                                    defaultValue="wedding_field"
                                                />
                                                <div
                                                    className="user-type-option custom-option"
                                                    data-id="wedding_field"
                                                >
                                                    אני מתחום החתונות
                                                </div>
                                                <div
                                                    className="hidden user-type-option custom-option"
                                                    data-id="bride"
                                                >
                                                    אני כלה
                                                </div>
                                                <div
                                                    className="hidden user-type-option custom-option"
                                                    data-id="groom"
                                                >
                                                    אני חתן
                                                </div>
                                            </div>
                                            <input className="form-input placeholder-input" disabled={false} />
                                        </div>
                                        <div>
                                            <input
                                                className="name_input text_input"
                                                name="name"
                                                placeholder="שם"
                                            />
                                        </div>
                                        <div>
                                            <input
                                                className="phone_input text_input"
                                                name="phone"
                                                placeholder="טלפון"
                                            />
                                        </div>
                                        <div>
                                            <input
                                                className="email_input text_input"
                                                name="email"
                                                placeholder="אימייל"
                                            />
                                        </div>
                                        <div>
                                            <textarea
                                                className="text textarea_input"
                                                name="text"
                                                placeholder="איך אפשר לעזור לך"
                                                defaultValue={""}
                                            />
                                        </div>
                                        <div className="actions-container">
                                            <input className="send_button" type="button" defaultValue="שלח" />
                                            <div className="error_message" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="contact_info">
                            <div className="phone_numbers">
                                <a rel="nofollow" href="tel:050-4201360">
                                    פרסום | אור 050-4201360
                                </a>{" "}
                                <a rel="nofollow" href="tel:052-6155310">
                                    שיתופי פעולה | רועי 052-6155310
                                </a>
                            </div>
                            <div className="email_addresses">
                                <div>
                                    <div>שירות לקוחות ותמיכה:</div>
                                    <div>
                                        <a
                                            rel="nofollow"
                                            target="_blank"
                                            href="mailto:janna@wedreviews.co.il"
                                        >
                                            {" "}
                                            janna@wedreviews.co.il{" "}
                                        </a>
                                    </div>
                                    <div>שיתופי פעולה:</div>
                                    <div>
                                        <a rel="nofollow" target="_blank" href="mailto:or@wedreviews.co.il">
                                            {" "}
                                            or@wedreviews.co.il{" "}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}