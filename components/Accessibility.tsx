import React from 'react'

export default function Accessibility() {
    return (
        <>
            <ul
                className="flex px-5"
                role="navigation"
                data-acsb-bc="true"
                aria-label="פירורי לחם"
                style={{fontSize: "14px",color: "#989898"}}
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

            <div className='flex flex-col text-sm  px-5' dir='ltr'>
                <h1 className='m-auto font-semibold text-2xl underline' aria-level={1}>
                    Accessibility Statement
                </h1>
                <h2 className="heading" aria-level={3}>
                    Compliance status
                </h2>
                <div>
                    We firmly believe that the internet should be available and accessible to
                    anyone and are committed to providing a website that is accessible to the
                    broadest possible audience, regardless of ability.
                </div>
                <div>
                    To fulfill this, we aim to adhere as strictly as possible to the World Wide
                    Web Consortium’s (W3C) Web Content Accessibility Guidelines 2.1 (WCAG 2.1)
                    at the AA level. These guidelines explain how to make web content accessible
                    to people with a wide array of disabilities. Complying with those guidelines
                    helps us ensure that the website is accessible to blind people, people with
                    motor impairments, visual impairment, cognitive disabilities, and more.
                </div>
                <div>
                    This website utilizes various technologies that are meant to make it as
                    accessible as possible at all times. We utilize an accessibility interface
                    that allows persons with specific disabilities to adjust the website’s UI
                    (user interface) and design it to their personal needs.
                </div>
                <div>
                    Additionally, the website utilizes an AI-based application that runs in the
                    background and optimizes its accessibility level constantly. This
                    application remediates the website’s HTML, adapts its functionality and
                    behavior for screen-readers used by blind users, and for keyboard functions
                    used by individuals with motor impairments.
                </div>
                <div>
                    If you wish to contact the website’s owner please use the website’s form
                </div>
                <h2 className="heading" aria-level={3}>
                    Screen-reader and keyboard navigation
                </h2>
                <div>
                    Our website implements the ARIA attributes (Accessible Rich Internet
                    Applications) technique, alongside various behavioral changes, to ensure
                    blind users visiting with screen-readers can read, comprehend, and enjoy the
                    website’s functions. As soon as a user with a screen-reader enters your
                    site, they immediately receive a prompt to enter the Screen-Reader Profile
                    so they can browse and operate your site effectively. Here’s how our website
                    covers some of the most important screen-reader requirements:
                </div>
                <div>
                    <ol>
                        <li>
                            1. <b>Screen-reader optimization:</b> we run a process that learns the
                            website’s components from top to bottom, to ensure ongoing compliance
                            even when updating the website. In this process, we provide
                            screen-readers with meaningful data using the ARIA set of attributes.
                            For example, we provide accurate form labels; descriptions for
                            actionable icons (social media icons, search icons, cart icons, etc.);
                            validation guidance for form inputs; element roles such as buttons,
                            menus, modal dialogues (popups), and others. Additionally, the
                            background process scans all of the website’s images. It provides an
                            accurate and meaningful image-object-recognition-based description as an
                            ALT (alternate text) tag for images that are not described. It will also
                            extract texts embedded within the image using an OCR (optical character
                            recognition) technology. To turn on screen-reader adjustments at any
                            time, users need only to press the Alt+1 keyboard combination.
                            Screen-reader users also get automatic announcements to turn the
                            Screen-reader mode on as soon as they enter the website. These
                            adjustments are compatible with popular screen readers such as JAWS,
                            NVDA, VoiceOver, and TalkBack.
                        </li>
                        <li>
                            2. <b>Keyboard navigation optimization:</b> The background process also
                            adjusts the website’s HTML and adds various behaviors using JavaScript
                            code to make the website operable by the keyboard. This includes the
                            ability to navigate the website using the Tab and Shift+Tab keys,
                            operate dropdowns with the arrow keys, close them with Esc, trigger
                            buttons and links using the Enter key, navigate between radio and
                            checkbox elements using the arrow keys, and fill them in with the
                            Spacebar or Enter key. Additionally, keyboard users will find
                            content-skip menus available at any time by clicking Alt+2, or as the
                            first element of the site while navigating with the keyboard. The
                            background process also handles triggered popups by moving the keyboard
                            focus towards them as soon as they appear, not allowing the focus to
                            drift outside. Users can also use shortcuts such as “M” (menus), “H”
                            (headings), “F” (forms), “B” (buttons), and “G” (graphics) to jump to
                            specific elements.
                        </li>
                    </ol>
                </div>
                <h2 className="heading" aria-level={3}>
                    Disability profiles supported on our website
                </h2>
                <div>
                    <b>Epilepsy Safe Profile:</b> this profile enables people with epilepsy to
                    safely use the website by eliminating the risk of seizures resulting from
                    flashing or blinking animations and risky color combinations.
                </div>
                <div>
                    <b>Vision Impaired Profile:</b> this profile adjusts the website so that it
                    is accessible to the majority of visual impairments such as Degrading
                    Eyesight, Tunnel Vision, Cataract, Glaucoma, and others.
                </div>
                <div>
                    <b>Cognitive Disability Profile:</b> this profile provides various assistive
                    features to help users with cognitive disabilities such as Autism, Dyslexia,
                    CVA, and others, to focus on the essential elements more easily.
                </div>
                <div>
                    <b>ADHD Friendly Profile:</b> this profile significantly reduces
                    distractions and noise to help people with ADHD, and Neurodevelopmental
                    disorders browse, read, and focus on the essential elements more easily.
                </div>
                <div>
                    <b>Blind Users Profile (Screen-readers):</b> this profile adjusts the
                    website to be compatible with screen-readers such as JAWS, NVDA, VoiceOver,
                    and TalkBack. A screen-reader is installed on the blind user’s computer, and
                    this site is compatible with it.
                </div>
                <div>
                    <b>Keyboard Navigation Profile (Motor-Impaired):</b> this profile enables
                    motor-impaired persons to operate the website using the keyboard Tab,
                    Shift+Tab, and the Enter keys. Users can also use shortcuts such as “M”
                    (menus), “H” (headings), “F” (forms), “B” (buttons), and “G” (graphics) to
                    jump to specific elements.
                </div>
                <h2 className="heading" aria-level={3}>
                    Additional UI, design, and readability adjustments
                </h2>
                <div>
                    <ol>
                        <li>
                            1. <b>Font adjustments</b> users can increase and decrease its size,
                            change its family (type), adjust the spacing, alignment, line height,
                            and more.
                        </li>
                        <li>
                            2. <b>Color adjustments -</b> users can select various color contrast
                            profiles such as light, dark, inverted, and monochrome. Additionally,
                            users can swap color schemes of titles, texts, and backgrounds with over
                            seven different coloring options.
                        </li>
                        <li>
                            3. <b>Animations -</b> epileptic users can stop all running animations
                            with the click of a button. Animations controlled by the interface
                            include videos, GIFs, and CSS flashing transitions.
                        </li>
                        <li>
                            4. <b>Content highlighting -</b> users can choose to emphasize essential
                            elements such as links and titles. They can also choose to highlight
                            focused or hovered elements only.
                        </li>
                        <li>
                            5. <b>Audio muting -</b> users with hearing devices may experience
                            headaches or other issues due to automatic audio playing. This option
                            lets users mute the entire website instantly.
                        </li>
                        <li>
                            6. <b>Cognitive disorders –</b> we utilize a search engine linked to
                            Wikipedia and Wiktionary, allowing people with cognitive disorders to
                            decipher meanings of phrases, initials, slang, and others.
                        </li>
                        <li>
                            7. <b>Additional functions</b> we allow users to change cursor color and
                            size, use a printing mode, enable a virtual keyboard, and many other
                            functions.
                        </li>
                    </ol>
                </div>
                <h2 className="heading" aria-level={3}>
                    Assistive technology and browser compatibility
                </h2>
                <div>
                    We aim to support as many browsers and assistive technologies as possible,
                    so our users can choose the best fitting tools for them, with as few
                    limitations as possible. Therefore, we have worked very hard to be able to
                    support all major systems that comprise over 95% of the user market share,
                    including Google Chrome, Mozilla Firefox, Apple Safari, Opera and Microsoft
                    Edge, JAWS, and NVDA (screen readers), both for Windows and MAC users.
                </div>
                <h2 className="heading" aria-level={3}>
                    Notes, comments, and feedback
                </h2>
                <div>
                    Despite our very best efforts to allow anybody to adjust the website to
                    their needs, there may still be pages or sections that are not fully
                    accessible, are in the process of becoming accessible, or are lacking an
                    adequate technological solution to make them accessible. Still, we are
                    continually improving our accessibility, adding, updating, improving its
                    options and features, and developing and adopting new technologies. All this
                    is meant to reach the optimal level of accessibility following technological
                    advancements. If you wish to contact the website’s owner, please use the
                    website’s form
                </div>
                <h2 className="heading" aria-level={3}>
                    Contact Information:
                </h2>
                <div>
                    Roy Gazit{" "}
                    <a
                        href="mailto:g@wwweddings.co.il"
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
                            לחצו לשליחת אימייל{" "}
                        </span>
                        g@wwweddings.co.il
                    </a>
                </div>
            </div>
        </>

    )
}
