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
import Accessibility from '@/components/Accessibility'

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
      <Accessibility/>
    </div>
  )
}
