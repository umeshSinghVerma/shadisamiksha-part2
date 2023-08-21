'use client'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Image from 'next/image'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useContext, useRef, useEffect } from 'react'
import { SidebarContext } from '@/context/sidebarContext'
import Link from 'next/link'

export default function Home() {
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const { isOpenSideBar, setIsOpenSidebar } = useContext<any>(SidebarContext);

  useEffect(() => {
    // Function to handle clicks outside the emoji picker
    const handleOutsideClick = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setIsOpenSidebar(false);
      }
    };

    // Add event listener when the emoji picker is open
    if (isOpenSideBar) {
      document.addEventListener('mousedown', handleOutsideClick);
    }

    // Remove event listener on unmount and when the picker is closed
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpenSideBar]);

  return (
    <div>
      <div className="sticky top-0"><Header /></div>
      <div
        className={`overlay ${isOpenSideBar ? 'block' : 'hidden'}`}
        onClick={() => { setIsOpenSidebar(!isOpenSideBar) }}
      ></div>
      {isOpenSideBar && (
        <div className="sidebar bg-white w-60 p-4">
          <div className='h-10 flex items-end'>
            <div>
              <img src="/searchicon.svg" alt="" className='h-[28px]' />
            </div>
            <div className='border-b border-b-gray-400 flex items-end'>
              <input type="text" placeholder='חיפוש באתר' />
            </div>
          </div>
          <div dir='ltr'>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger> מקום לאירוע </AccordionTrigger>
                <AccordionContent>
                  <ul dir='rtl'>
                    <li>
                      <a href="153251/240731">גני אירועים במרכז</a>
                    </li>
                    <li>
                      <a href="153251/240732">גני אירועים בשרון</a>
                    </li>
                    <li>
                      <a href="153251/240733">גני אירועים בשפלה</a>
                    </li>
                    <li>
                      <a href="153251/240734">גני אירועים בתל אביב</a>
                    </li>
                    <li>
                      <a href="153251/240735">גני אירועים בדרום</a>
                    </li>
                    <li>
                      <a href="153251/240736">גני אירועים בצפון</a>
                    </li>
                    <li>
                      <a href="153251/240737">גני אירועים בירושלים והסביבה</a>
                    </li>
                    <li>
                      <a href="153251/240738">גני אירועים בעמק חפר</a>
                    </li>
                    <li>
                      <a href="153251/240739">גני אירועים בקיסריה</a>
                    </li>
                    <li>
                      <a href="153251/240740">מקומות לחתונה קטנה</a>
                    </li>
                    <li>
                      <a href="153251/240741">אולמות אירועים במרכז</a>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div dir='ltr'>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger> עיצוב והפקה</AccordionTrigger>
                <AccordionContent>
                  <ul dir='rtl'>
                    <li>
                      <a
                        href={"153269"}
                        data-acsb-clickable="true"
                        data-acsb-navigable="true"
                        data-acsb-now-navigable="false"
                        tabIndex={-1}
                      >
                        קייטרינג | שירותי בר
                      </a>
                    </li>
                    <li>
                      <a
                        href={"187802"}
                        data-acsb-clickable="true"
                        data-acsb-navigable="true"
                        data-acsb-now-navigable="false"
                        tabIndex={-1}
                      >
                        עיצוב אירועים | סידור פרחים
                      </a>
                    </li>
                    <li>
                      <a
                        href={"153447"}
                        data-acsb-clickable="true"
                        data-acsb-navigable="true"
                        data-acsb-now-navigable="false"
                        tabIndex={-1}
                      >
                        הפקת אירועים
                      </a>
                    </li>
                    <li>
                      <a
                        href={"187804"}
                        data-acsb-clickable="true"
                        data-acsb-navigable="true"
                        data-acsb-now-navigable="false"
                        tabIndex={-1}
                      >
                        ניהול אירוע | אישורי הגעה
                      </a>
                    </li>
                    <li>
                      <a
                        href={"153257"}
                        data-acsb-clickable="true"
                        data-acsb-navigable="true"
                        data-acsb-now-navigable="false"
                        tabIndex={-1}
                      >
                        הזמנות לחתונה | מיתוג
                      </a>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <Link href={"/"}>מעצבי שמלות כלה</Link>
          <div dir='ltr'>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger> נותני שירות לחתונה</AccordionTrigger>
                <AccordionContent>
                  <ul dir='rtl'>
                    <li>
                      <a
                        href="event/category/153263"
                        data-acsb-clickable="true"
                        data-acsb-navigable="true"
                        data-acsb-now-navigable="false"
                        tabIndex={-1}
                      >
                        צילום סטילס
                      </a>
                    </li>
                    <li>
                      <a
                        href="event/category/187806"
                        data-acsb-clickable="true"
                        data-acsb-navigable="true"
                        data-acsb-now-navigable="false"
                        tabIndex={-1}
                      >
                        צילום ועריכת וידאו
                      </a>
                    </li>
                    <li>
                      <a
                        href="event/category/153277"
                        data-acsb-clickable="true"
                        data-acsb-navigable="true"
                        data-acsb-now-navigable="false"
                        tabIndex={-1}
                      >
                        איפור
                      </a>
                    </li>
                    <li>
                      <a
                        href="event/category/153275"
                        data-acsb-clickable="true"
                        data-acsb-navigable="true"
                        data-acsb-now-navigable="false"
                        tabIndex={-1}
                      >
                        עיצוב שיער
                      </a>
                    </li>
                    <li>
                      <a
                        href="event/category/153265"
                        data-acsb-clickable="true"
                        data-acsb-navigable="true"
                        data-acsb-now-navigable="false"
                        tabIndex={-1}
                      >
                        {`די ג'יי לחתונה`}
                      </a>
                    </li>
                    <li>
                      <a
                        href="event/category/187807"
                        data-acsb-clickable="true"
                        data-acsb-navigable="true"
                        data-acsb-now-navigable="false"
                        tabIndex={-1}
                      >
                        הופעות חיות
                      </a>
                    </li>
                    <li>
                      <a
                        href="event/category/153255"
                        data-acsb-clickable="true"
                        data-acsb-navigable="true"
                        data-acsb-now-navigable="false"
                        tabIndex={-1}
                      >
                        אטרקציות לחתונה
                      </a>
                    </li>
                    <li>
                      <a
                        href="event/category/187805"
                        data-acsb-clickable="true"
                        data-acsb-navigable="true"
                        data-acsb-now-navigable="false"
                        tabIndex={-1}
                      >
                        רב לחתונה
                      </a>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div dir='ltr'>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger> חתן וכלה</AccordionTrigger>
                <AccordionContent>
                  <ul dir='rtl'>
                    <li>
                      <a
                        href="event/category/187793"
                        data-acsb-clickable="true"
                        data-acsb-navigable="true"
                        data-acsb-now-navigable="false"
                        tabIndex={-1}
                      >
                        טבעות
                      </a>
                    </li>
                    <li>
                      <a
                        href="event/category/187809"
                        data-acsb-clickable="true"
                        data-acsb-navigable="true"
                        data-acsb-now-navigable="false"
                        tabIndex={-1}
                      >
                        ליל כלולות | התארגנות לחתונה
                      </a>
                    </li>
                    <li>
                      <a
                        href="event/category/153253"
                        data-acsb-clickable="true"
                        data-acsb-navigable="true"
                        data-acsb-now-navigable="false"
                        tabIndex={-1}
                      >
                        לחתן
                      </a>
                    </li>
                    <li>
                      <a
                        href="event/category/187808"
                        data-acsb-clickable="true"
                        data-acsb-navigable="true"
                        data-acsb-now-navigable="false"
                        tabIndex={-1}
                      >
                        תכשיטים ואקססוריז
                      </a>
                    </li>
                    <li>
                      <a
                        href="event/category/187810"
                        data-acsb-clickable="true"
                        data-acsb-navigable="true"
                        data-acsb-now-navigable="false"
                        tabIndex={-1}
                      >
                        מסיבת רווקות
                      </a>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <Link href={"/"} className='text-[#ca7f9d]'>פוסט קרדיטים כלות אורבניות</Link>
        </div>
      )}
      <Footer />
    </div>
  )
}
