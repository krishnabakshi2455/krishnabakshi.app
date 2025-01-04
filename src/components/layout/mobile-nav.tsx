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
                <Button variant="ghost" size="icon" className="lg:hidden bg-transparent" aria-label="Mobile menu button">
                    <MenuIcon className="!h-6 !w-6 text-primary" />
                </Button>
            </SheetTrigger>

            {/* Mobile Menu Content */}
            <SheetContent side="left">
                <div className="flex flex-col gap-20 ">
                    {/* Static Navigation Links */}
                    <Button
                        variant="ghost"
                        className="w-full justify-start text-2xl font-semibold text-primary md:hidden bg-transparent"
                    >
                        <Link href="/" className='text-primary'>Home</Link>
                    </Button>

                    <Collapsible>
                        <CollapsibleTrigger className={`w-full`} asChild>
                            <Button
                                variant="ghost"
                                className={`flex w-full justify-between text-2xl font-semibold text-primary bg-transparent`}
                            >
                                <Link href={Routes.about}> About Me</Link>
                            </Button>
                        </CollapsibleTrigger>

                    </Collapsible>

                    <Button
                        variant="ghost"
                        className="w-full justify-start text-2xl font-semibold text-primary md:hidden bg-transparent"
                    >
                        <Link href={Routes.projects}>Projects</Link>
                    </Button>
                </div>
            </SheetContent>
        </Sheet>
    );
}
