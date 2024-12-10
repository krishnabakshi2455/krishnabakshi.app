import { useState, useEffect } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu as MenuIcon } from 'lucide-react';
import { Collapsible, CollapsibleTrigger } from '@/components/ui/collapsible';
import Link from '@/components/layout/custom-link';
import Routes from '@/lib/Route';
import { usePathname } from 'next/navigation';


export default function MobileNav() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setOpen(false);
    }, [pathname]);


    return (
        <Sheet open={open} onOpenChange={setOpen}>
            {/* Mobile Menu Trigger Button */}
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Mobile menu button">
                    <MenuIcon className="!h-6 !w-6" />
                </Button>
            </SheetTrigger>

            {/* Mobile Menu Content */}
            <SheetContent side="left">
                <div className="flex flex-col gap-7">
                    {/* Static Navigation Links */}
                    <Button
                        variant="ghost"
                        className="w-full justify-start text-[18px] text-primary md:hidden"
                    >
                        <Link href="/" className='text-primary'>Home</Link>
                    </Button>

                    <Collapsible>
                        <CollapsibleTrigger className={`w-full`} asChild>
                            <Button
                                variant="ghost"
                                className={`flex w-full justify-between text-[18px] text-[#32CD32]`}
                            >
                                <Link href={Routes.about}> About Me</Link>
                            </Button>
                        </CollapsibleTrigger>

                    </Collapsible>

                    <Button
                        variant="ghost"
                        className="w-full justify-start text-[18px] text-[#32CD32] md:hidden"
                    >
                        <Link href={Routes.about}>Projects</Link>
                    </Button>

                    <Button
                        variant="ghost"
                        className="w-full justify-start text-[18px] text-[#32CD32] md:hidden "
                    >
                        <Link href="/contact">Blogs</Link>
                    </Button>
                </div>
            </SheetContent>
        </Sheet>
    );
}
