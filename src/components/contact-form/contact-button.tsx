import { useEffect, useRef, useState } from "react";

import { Github, Linkedin, MailIcon } from "lucide-react";
import ContactFormModal from "@/components/contact-form/contact-form-modal";
import Link from "next/link";

export default function ContactButton() {
  const refSendBtn = useRef<HTMLButtonElement>(null);

  const [, setIsBtnVisible] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const observerCallback = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    setIsBtnVisible(!entry.isIntersecting);
  };

  useEffect(() => {
    const btn = refSendBtn.current;
    const observer = new IntersectionObserver(
      observerCallback,
    );
    if (btn) observer.observe(btn);
    return () => {
      if (btn) observer.unobserve(btn);
    };
  }, [refSendBtn]);

  return (
    <>


      <div className="flex flex-col gap-6 justify-center items-center">

        <button
          ref={refSendBtn}
          className="inline-flex items-center gap-2 rounded-md bg-background px-3 py-2 text-primary transition-transform duration-150 focus-within:scale-[1.05] hover:scale-[1.05] hover:bg-black hover:text-background"
          onClick={() => setIsOpenModal(true)}
        >
          <MailIcon className="h-6 w-6 sm:h-7 sm:w-7 lg:h-9 lg:w-9" />
          <span className="text-base font-semibold sm:text-lg lg:text-xl">
            Send Message
          </span>
        </button>

        <div className="flex gap-6">
          <div className="bg-white text-primary p-2 rounded-full cursor-pointer hover:scale-110 duration-200">
            <Link href="https://github.com/krishnabakshi2455">
              <Github />
            </Link>
          </div>

          <div className="bg-white text-primary p-2 rounded-full cursor-pointer hover:scale-110 duration-200">
            <Link href="https://www.linkedin.com/in/krishna-bakshi-b905222a7/">
              <Linkedin />
            </Link>
          </div>
        </div>
      </div>

      <ContactFormModal showModal={isOpenModal} setShowModal={setIsOpenModal} />
    </>
  );
}
