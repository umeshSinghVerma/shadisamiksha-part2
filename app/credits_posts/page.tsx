import Photo from '@/components/Photo'
import React from 'react'

const photoData = [
    {
      imageUrl: "https://www.wedreviews.co.il/uploads/default/files/credits_posts/213897953_10226234773878251_2231240478267296904_n_wed_thumb.jpg",
      coupleName: "ניצן וגלעד",
      date: "חתונה בגן פתוח"
    },
    {
      imageUrl: "https://www.wedreviews.co.il/uploads/default/files/credits_posts/80889052_10221749269621091_7627648075569299456_o_wed_thumb.jpg",
      coupleName: "ניצן ורועי",
      date: "מקום התארגנות"
    },
    {
      imageUrl: "https://www.wedreviews.co.il/uploads/default/files/credits_posts/74593549_10157830621794772_3455503559901052928_o_wed_thumb.jpg",
      coupleName: "קארין ואופיר",
      date: "מקום התארגנות"
    },
    {
      imageUrl: "https://www.wedreviews.co.il/uploads/default/files/credits_posts/271869942_10228537670205990_4481067787529923997_n_wed_thumb.jpg",
      coupleName: "גילי ואיתי",
      date: "חתונה בגן פתוח"
    },
    {
      imageUrl: "https://www.wedreviews.co.il/uploads/default/files/credits_posts/184191737_10223380841003558_8365871247580097655_n_wed_thumb.jpg",
      coupleName: "שירה ורון",
      date: "חתונת צהריים"
    },
    {
      imageUrl: "https://www.wedreviews.co.il/uploads/default/files/credits_posts/340760348_231517582859049_3552259639863266206_n_wed_thumb.jpg",
      coupleName: "עדי ושחר",
      date: "חתונה בגן פתוח"
    },
    {
      imageUrl: "https://www.wedreviews.co.il/uploads/default/files/credits_posts/355457353_6239087042852520_4465639580556907374_n_wed_thumb.jpg",
      coupleName: "שירה ולאוניד",
      date: "פוסט מושקע במיוחד"
    },
    {
      imageUrl: "https://www.wedreviews.co.il/uploads/default/files/credits_posts/240996950_10228006710499957_3525380486826726790_n_wed_thumb.jpg",
      coupleName: "יהודית וליאור",
      date: "צלמי הפינצטה"
    },
    {
      imageUrl: "https://www.wedreviews.co.il/uploads/default/files/credits_posts/197752320_10222833633284162_2915410483728005119_n_wed_thumb.jpg",
      coupleName: "שיר ואלון",
      date: "חתונה מול הים"
    },
    {
      imageUrl: "https://www.wedreviews.co.il/uploads/default/files/credits_posts/239536117_10223722600245598_2370804054457578837_n_wed_thumb.jpg",
      coupleName: "טל וטל",
      date: "חתונת DIY"
    },
    {
      imageUrl: "https://www.wedreviews.co.il/uploads/default/files/credits_posts/248502513_10223368092262031_1401770360066167163_n_wed_thumb.jpg",
      coupleName: "שני ואידור",
      date: "צלמי הפינצטה"
    },
    {
      imageUrl: "https://www.wedreviews.co.il/uploads/default/files/credits_posts/80805200_2882748625088669_1783501237136654336_n_(1)_wed_thumb.jpg",
      coupleName: "ספיר וגיא",
      date: "כלה מתולתלת"
    },
    {
      imageUrl: "https://www.wedreviews.co.il/uploads/default/files/credits_posts/299729817_8565528113461013_7591435139407118517_n_wed_thumb.jpg",
      coupleName: "ענבר ושגיב",
      date: "חתונה בגן פתוח"
    },
    {
      imageUrl: "https://www.wedreviews.co.il/uploads/default/files/credits_posts/2019/70923869_10157518914997180_8956386561813905408_o2_wed_thumb.jpg",
      coupleName: "דניאל גולד",
      date: ""
    },
    {
      imageUrl: "https://www.wedreviews.co.il/uploads/default/files/credits_posts/292720621_10228994053940848_5744001089685407301_n_wed_thumb.jpg",
      coupleName: "יהל וטל",
      date: "חתונת צהריים"
    },
    {
      imageUrl: "https://www.wedreviews.co.il/uploads/default/files/credits_posts/184738765_10159194054104288_2196347665229366578_n_wed_thumb.jpg",
      coupleName: "נועה ויוסי",
      date: "פוסט מושקע במיוחד"
    },
    {
      imageUrl: "https://www.wedreviews.co.il/uploads/default/files/credits_posts/131377857_10221933836067720_1488534264417217479_n_wed_thumb.jpg",
      coupleName: "לי-אור ומנור",
      date: "חתונה בגן פתוח"
    },
    {
      imageUrl: "https://www.wedreviews.co.il/uploads/default/files/credits_posts/345431463_261770306227502_5555827717960910192_n_wed_thumb.jpg",
      coupleName: "שובל ואיתן",
      date: "חתונה בגן פתוח"
    },
    {
      imageUrl: "https://www.wedreviews.co.il/uploads/default/files/credits_posts/200346820_3916119275124040_742805586906725759_n_wed_thumb.jpg",
      coupleName: "גל ועמית",
      date: "פוסט מושקע במיוחד"
    },
    {
      imageUrl: "https://www.wedreviews.co.il/uploads/default/files/credits_posts/105032388_10214706568731767_2154468490014875619_o_wed_thumb.jpg",
      coupleName: "יאנה ומקסים",
      date: "חתונה קטנה"
    },
    {
      imageUrl: "https://www.wedreviews.co.il/uploads/default/files/credits_posts/349772447_644720530457347_9111117364532968706_n_wed_thumb.jpg",
      coupleName: "יובל ואהרון",
      date: "חתונה בגן פתוח"
    },
    {
      imageUrl: "https://www.wedreviews.co.il/uploads/default/files/credits_posts/205185690_10224985790142274_6368941156407049467_n_wed_thumb.jpg",
      coupleName: "ירדן וגיא",
      date: "חתונה בשפלה"
    },
    {
      imageUrl: "https://www.wedreviews.co.il/uploads/default/files/credits_posts/204087964_4450405328303677_43650119581559470_n_wed_thumb.jpg",
      coupleName: "יאנה ודניאל",
      date: "חתונה בדרום"
    },
    {
      imageUrl: "https://www.wedreviews.co.il/uploads/default/files/credits_posts/82191980_10157713668839178_6041607946981343232_o_wed_thumb.jpg",
      coupleName: "נופר ושלומי",
      date: "חתונה בשרון"
    }
  ];
   

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
            <div className="tags flex flex-wrap mt-[17px]">
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
