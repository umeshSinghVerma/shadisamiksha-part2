import { Input } from '@/components/ui/input'
import Link from 'next/link'
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
                                    <div className="info_more">{`
                                        לקבלת "גולשות לחתונה - הסקר המקיף להתנהגות כלות ברשת" השאירו פרטים
                                        וציינו שאתם מעוניינים לקבל אותו.`}
                                    </div>
                                </div>
                                <div className="form">
                                    <form
                                        id="contact_form"
                                        acceptCharset="utf-8"
                                        className='flex flex-col'
                                    >
                                        <div style={{ height: "53px", marginBottom: "25px", backgroundColor: "#f2f2f2", borderRadius: "6px", maxWidth: "460px" }}></div>
                                        <div>
                                            <input className="name_input text_input" name="name" placeholder="שם" />

                                        </div>
                                        <div>
                                            <input className="phone_input text_input" name="phone" placeholder="טלפון" />

                                        </div>
                                        <div>
                                            <textarea
                                                className="text textarea_input"
                                                name="text"
                                                placeholder="איך אפשר לעזור לך"
                                                defaultValue={""}
                                            />

                                        </div>
                                        <div className="actions-container" style={{ alignItems: "center", justifyContent: "center", display: "flex" }}>
                                            <input className="send_button" type="button" defaultValue="שלח" />
                                            <div className="error_message" />
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="contact_info">
                            <div className="flex flex-col phone_numbers" >
                                <Link rel="nofollow" href="tel:050-4201360">
                                    פרסום | אור 050-4201360
                                </Link>
                                <Link rel="nofollow" href="tel:052-6155310">
                                    שיתופי פעולה | רועי 052-6155310
                                </Link>
                            </div>
                            <div className="email_addresses">
                                <div>
                                    <div>שירות לקוחות ותמיכה:</div>
                                    <div>
                                        <Link
                                            rel="nofollow"
                                            target="_blank"
                                            href="mailto:janna@wedreviews.co.il"
                                        >
                                            {" "}
                                            janna@wedreviews.co.il{" "}
                                        </Link>
                                    </div>
                                    <div>שיתופי פעולה:</div>
                                    <div>
                                        <Link rel="nofollow" target="_blank" href="mailto:or@wedreviews.co.il" >
                                            or@wedreviews.co.il

                                        </Link>


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