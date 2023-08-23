import Photo from '@/components/Photo'
import React from 'react'

const photoData = [
    {
        imageUrl: "https://www.wedreviews.co.il/uploads/default/files/credits_posts/81500110_10213009893317106_5526315848324612096_n_wed_thumb.jpg",
        coupleName: "ספיר ולידור",
        date: "מקום התארגנות"
    },
    {
        imageUrl: "https://www.wedreviews.co.il/uploads/default/files/credits_posts/81500110_10213009893317106_5526315848324612096_n_wed_thumb.jpg",
        coupleName: "ספיר ולידור",
        date: "מקום התארגנות"
    },
    {
        imageUrl: "https://www.wedreviews.co.il/uploads/default/files/credits_posts/81500110_10213009893317106_5526315848324612096_n_wed_thumb.jpg",
        coupleName: "ספיר ולידור",
        date: "מקום התארגנות"
    },
    {
        imageUrl: "https://www.wedreviews.co.il/uploads/default/files/credits_posts/81500110_10213009893317106_5526315848324612096_n_wed_thumb.jpg",
        coupleName: "ספיר ולידור",
        date: "מקום התארגנות"
    },
    {
        imageUrl: "https://www.wedreviews.co.il/uploads/default/files/credits_posts/81500110_10213009893317106_5526315848324612096_n_wed_thumb.jpg",
        coupleName: "ספיר ולידור",
        date: "מקום התארגנות"
    },
    {
        imageUrl: "https://www.wedreviews.co.il/uploads/default/files/credits_posts/81500110_10213009893317106_5526315848324612096_n_wed_thumb.jpg",
        coupleName: "ספיר ולידור",
        date: "מקום התארגנות"
    },
    {
        imageUrl: "https://www.wedreviews.co.il/uploads/default/files/credits_posts/81500110_10213009893317106_5526315848324612096_n_wed_thumb.jpg",
        coupleName: "ספיר ולידור",
        date: "מקום התארגנות"
    },
    {
        imageUrl: "https://www.wedreviews.co.il/uploads/default/files/credits_posts/81500110_10213009893317106_5526315848324612096_n_wed_thumb.jpg",
        coupleName: "ספיר ולידור",
        date: "מקום התארגנות"
    },
    {
        imageUrl: "https://www.wedreviews.co.il/uploads/default/files/credits_posts/81500110_10213009893317106_5526315848324612096_n_wed_thumb.jpg",
        coupleName: "ספיר ולידור",
        date: "מקום התארגנות"
    },
    {
        imageUrl: "https://www.wedreviews.co.il/uploads/default/files/credits_posts/81500110_10213009893317106_5526315848324612096_n_wed_thumb.jpg",
        coupleName: "ספיר ולידור",
        date: "מקום התארגנות"
    },
    {
        imageUrl: "https://www.wedreviews.co.il/uploads/default/files/credits_posts/81500110_10213009893317106_5526315848324612096_n_wed_thumb.jpg",
        coupleName: "ספיר ולידור",
        date: "מקום התארגנות"
    },
    {
        imageUrl: "https://www.wedreviews.co.il/uploads/default/files/credits_posts/81500110_10213009893317106_5526315848324612096_n_wed_thumb.jpg",
        coupleName: "ספיר ולידור",
        date: "מקום התארגנות"
    },
    {
        imageUrl: "https://www.wedreviews.co.il/uploads/default/files/credits_posts/81500110_10213009893317106_5526315848324612096_n_wed_thumb.jpg",
        coupleName: "ספיר ולידור",
        date: "מקום התארגנות"
    },
    {
        imageUrl: "https://www.wedreviews.co.il/uploads/default/files/credits_posts/81500110_10213009893317106_5526315848324612096_n_wed_thumb.jpg",
        coupleName: "ספיר ולידור",
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
                    <span>›</span> <span>  פוסט קרדיטים כלות אורבניות </span>
                </li>
            </ul>
            <div className='flex flex-col gap-3'>
                <div className='w-full text-center font-extrabold text-2xl'>
                    פוסט קרדיטים
                </div>
                <div className='flex mb-6 flex-col md:flex-row w-full justify-center items-center gap-2 h-[30px]'>
                    <div className='h-full md:block hidden'>
                        <img src="/urban_brides_logo.png" alt="" className='h-full' />
                    </div>
                    <div className='text-center text-2xl w-min whitespace-nowrap '>
                        בשיתוף הקבוצה של כלות אורבניות
                    </div>
                    <div className='h-full '>
                        <img src="/urban_brides_logo.png" alt="" className='h-full' />
                    </div>
                </div>
            </div>
            <div className="disclaimer_text">
                הקבוצה הסודית של כלות אורבניות היא הקהילה הכי משמעותית שקיימת כיום לכלות
                בישראל. אחד הדברים הנפלאים ביותר בה הוא פוסט הקרדיטים, אותו מעלות כלות מיד
                לאחר האירוע, וכולל המלצות על בעלי המקצוע שלקחו בו חלק. בכך הן מאפשרות לחברות
                אחרות בקבוצה לקבל בקלות מידע חשוב לקראת החתונה שלהן. שיתוף הפעולה בין
                וודריביוז לכלות אורבניות מאפשר לכן לראשונה לראות את הפוסטים הללו בצורה הכי
                נוחה ונגישה, ולפי הקטגוריות שאתן מחפשות. שנתחיל?
            </div>
            <div className='w-full flex justify-center items-center my-5'>
                <div className="flex bg-[#f2f2f2] text-gray rounded-full text-xs px-5 w-[336px] h-[45px] items-center">
                    <input type="text" placeholder='חפשו ממליצים על...' className='outline-none bg-transparent flex-grow' />
                    <img src="/searchicon.svg" alt="" className='h-[80%] mt-2' />
                </div>
            </div>
            <div className="tags flex flex-wrap">
                <div
                    className="tag"
                    data-acsb-clickable="true"
                    data-acsb-navigable="true"
                    data-acsb-now-navigable="true"
                >
                    <a href="/credits_posts/?tag=%D7%97%D7%AA%D7%95%D7%A0%D7%94+%D7%A7%D7%98%D7%A0%D7%94">חתונה קטנה</a>
                </div>
                <div
                    className="tag"
                    data-acsb-clickable="true"
                    data-acsb-navigable="true"
                    data-acsb-now-navigable="true"
                >
                    {" "}
                    <a href="/credits_posts/?tag=%D7%97%D7%AA%D7%95%D7%A0%D7%94+%D7%91%D7%91%D7%99%D7%AA"
                    >חתונה בבית{" "}</a>
                </div>{" "}
                <div
                    className="tag"
                    data-acsb-clickable="true"
                    data-acsb-navigable="true"
                    data-acsb-now-navigable="true"
                >

                    <a href="/credits_posts/?tag=%D7%97%D7%AA%D7%95%D7%A0%D7%94+%D7%91%D7%97%D7%95%22%D7%9C"
                    >{`חתונה בחו"ל`}</a>
                </div>{" "}
                <div
                    className="tag"
                    data-acsb-clickable="true"
                    data-acsb-navigable="true"
                    data-acsb-now-navigable="true"
                >
                    {" "}
                    <a href="/credits_posts/?tag=%D7%97%D7%AA%D7%95%D7%A0%D7%AA+%D7%A9%D7%98%D7%97">חתונת שטח{" "}</a>
                </div>{" "}
                <div
                    className="tag"
                    data-acsb-clickable="true"
                    data-acsb-navigable="true"
                    data-acsb-now-navigable="true"
                >
                    {" "}
                    <a href="/credits_posts/?tag=%D7%97%D7%AA%D7%95%D7%A0%D7%94+%D7%9E%D7%95%D7%9C+%D7%94%D7%99%D7%9D">חתונה מול הים{" "}</a>
                </div>{" "}
                <div
                    className="tag"
                    data-acsb-clickable="true"
                    data-acsb-navigable="true"
                    data-acsb-now-navigable="true"
                >
                    {" "}
                    <a href="/credits_posts/?tag=%D7%97%D7%AA%D7%95%D7%A0%D7%95%D7%AA+%D7%92%D7%90%D7%95%D7%AA"
                    >חתונות גאות{" "}</a>
                </div>{" "}
                <div
                    className="tag"
                    data-acsb-clickable="true"
                    data-acsb-navigable="true"
                    data-acsb-now-navigable="true"
                >
                    {" "}
                    <a href="/credits_posts/?tag=%D7%97%D7%AA%D7%95%D7%A0%D7%AA+%D7%A7%D7%95%D7%A8%D7%95%D7%A0%D7%94">חתונת קורונה{" "}</a>
                </div>{" "}
                <div
                    className="tag"
                    data-acsb-clickable="true"
                    data-acsb-navigable="true"
                    data-acsb-now-navigable="true"
                >
                    {" "}
                    <a href="/credits_posts/?tag=%D7%9B%D7%9C%D7%94+%D7%9E%D7%AA%D7%95%D7%9C%D7%AA%D7%9C%D7%AA">כלה מתולתלת{" "}</a>
                </div>{" "}
                <div
                    className="tag"
                    data-acsb-clickable="true"
                    data-acsb-navigable="true"
                    data-acsb-now-navigable="true"
                >
                    {" "}
                    <a href="/credits_posts/?tag=%D7%97%D7%AA%D7%95%D7%A0%D7%AA+DIY"
                    >חתונת DIY{" "}</a>
                </div>{" "}
                <div
                    className="tag"
                    data-acsb-clickable="true"
                    data-acsb-navigable="true"
                    data-acsb-now-navigable="true"
                >
                    {" "}
                    <a href="/credits_posts/?tag=%D7%97%D7%AA%D7%95%D7%A0%D7%AA+%D7%A6%D7%94%D7%A8%D7%99%D7%99%D7%9D"
                    >חתונת צהריים{" "}</a>
                </div>{" "}
                <div
                    className="tag"
                    data-acsb-clickable="true"
                    data-acsb-navigable="true"
                    data-acsb-now-navigable="true"
                >
                    {" "}
                    <a href="/credits_posts/?tag=%D7%97%D7%AA%D7%95%D7%A0%D7%AA+%D7%A7%D7%95%D7%A0%D7%A1%D7%A4%D7%98">חתונת קונספט{" "}</a>
                </div>{" "}
                <div
                    className="tag"
                    data-acsb-clickable="true"
                    data-acsb-navigable="true"
                    data-acsb-now-navigable="true"
                >
                    {" "}
                    <a href="/credits_posts/?tag=%D7%9E%D7%A7%D7%95%D7%9D+%D7%94%D7%AA%D7%90%D7%A8%D7%92%D7%A0%D7%95%D7%AA">מקום התארגנות{" "}</a>
                </div>{" "}
                <div
                    className="tag"
                    data-acsb-clickable="true"
                    data-acsb-navigable="true"
                    data-acsb-now-navigable="true"
                >
                    {" "}
                    <a href="/credits_posts/?tag=%D7%97%D7%AA%D7%95%D7%A0%D7%94+%D7%91%D7%AA%D7%9C+%D7%90%D7%91%D7%99%D7%91">חתונה בתל אביב{" "}</a>
                </div>{" "}
                <div
                    className="tag"
                    data-acsb-clickable="true"
                    data-acsb-navigable="true"
                    data-acsb-now-navigable="true"
                >
                    {" "}
                    <a href="/credits_posts/?tag=%D7%A6%D7%9C%D7%9E%D7%99+%D7%94%D7%A4%D7%99%D7%A0%D7%A6%D7%98%D7%94">צלמי הפינצטה{" "}</a>
                </div>{" "}
                <div
                    className="tag"
                    data-acsb-clickable="true"
                    data-acsb-navigable="true"
                    data-acsb-now-navigable="true"
                >
                    {" "}
                    <a href="/credits_posts/?tag=%D7%97%D7%AA%D7%95%D7%A0%D7%94+%D7%91%D7%A9%D7%A8%D7%95%D7%9F"
                    >חתונה בשרון{" "}</a>
                </div>{" "}
                <div
                    className="tag"
                    data-acsb-clickable="true"
                    data-acsb-navigable="true"
                    data-acsb-now-navigable="true"
                >
                    {" "}
                    <a href="/credits_posts/?tag=%D7%97%D7%AA%D7%95%D7%A0%D7%94+%D7%91%D7%A6%D7%A4%D7%95%D7%9F"
                    >חתונה בצפון{" "}</a>
                </div>{" "}
                <div
                    className="tag"
                    data-acsb-clickable="true"
                    data-acsb-navigable="true"
                    data-acsb-now-navigable="true"
                >
                    {" "}
                    <a href="/credits_posts/?tag=%D7%92%D7%A0%D7%99+%D7%90%D7%99%D7%A8%D7%95%D7%A2%D7%99%D7%9D+%D7%91%D7%99%D7%A8%D7%95%D7%A9%D7%9C%D7%99%D7%9D+%D7%95%D7%94%D7%A1%D7%91%D7%99%D7%91%D7%94">גני אירועים בירושלים והסביבה{" "}</a>
                </div>{" "}
                <div
                    className="tag"
                    data-acsb-clickable="true"
                    data-acsb-navigable="true"
                    data-acsb-now-navigable="true"
                >
                    {" "}
                    <a href="/credits_posts/?tag=%D7%97%D7%AA%D7%95%D7%A0%D7%94+%D7%91%D7%9E%D7%A8%D7%9B%D7%96">חתונה במרכז{" "}</a>
                </div>{" "}
                <div
                    className="tag"
                    data-acsb-clickable="true"
                    data-acsb-navigable="true"
                    data-acsb-now-navigable="true"
                >
                    {" "}
                    <a href="/credits_posts/?tag=%D7%97%D7%AA%D7%95%D7%A0%D7%94+%D7%91%D7%92%D7%9F+%D7%A4%D7%AA%D7%95%D7%97">חתונה בגן פתוח{" "}</a>
                </div>{" "}
                <div
                    className="tag"
                    data-acsb-clickable="true"
                    data-acsb-navigable="true"
                    data-acsb-now-navigable="true"
                >
                    {" "}
                    <a href="/credits_posts/?tag=%D7%A4%D7%95%D7%A1%D7%98+%D7%9E%D7%95%D7%A9%D7%A7%D7%A2+%D7%91%D7%9E%D7%99%D7%95%D7%97%D7%93">פוסט מושקע במיוחד{" "}</a>
                </div>{" "}
                <div
                    className="tag"
                    data-acsb-clickable="true"
                    data-acsb-navigable="true"
                    data-acsb-now-navigable="true"
                >
                    {" "}
                    <a href="/credits_posts/?tag=%D7%A7%D7%A6%D7%A8+%D7%95%D7%9C%D7%A2%D7%A0%D7%99%D7%99%D7%9F">קצר ולעניין{" "}</a>
                </div>{" "}
                <div
                    className="tag"
                    data-acsb-clickable="true"
                    data-acsb-navigable="true"
                    data-acsb-now-navigable="true"
                >
                    {" "}
                    <a href="/credits_posts/?tag=%D7%A9%D7%9E%D7%9C%D7%95%D7%AA+%D7%A9%D7%A8%D7%95%D7%95%D7%9C+%D7%90%D7%A8%D7%95%D7%9A">שמלות שרוול ארוך{" "}</a>
                </div>
            </div>
            <div className='flex flex-wrap w-full justify-center mb-20'>
                {
                    photoData.map((photo, key) => {
                        return (
                            <div key={key}>
                                <Photo imageUrl={photo.imageUrl} date={photo.date} coupleName={photo.coupleName} />
                            </div>
                        )
                    })
                }
            </div>
            <div className="font-bold text-left underline">
                <a
                    className="next"
                    href="/credits_posts?page=1"
                    data-acsb-clickable="true"
                    data-acsb-navigable="true"
                    data-acsb-now-navigable="true"
                    aria-current="page"
                >
                    {" "}
                    לדף הבא{" "}
                </a>
            </div>



        </div>
    )
}
