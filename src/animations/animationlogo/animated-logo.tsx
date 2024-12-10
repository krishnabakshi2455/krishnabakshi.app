import { AnimatePresence, Variants, motion } from "framer-motion";

export default function AnimatedLogo() {
    const iconVariant: Variants = {
        hidden: {
            pathLength: 0,
            fill: "rgba(0, 0, 0, 0)",
        },
        visible: {
            pathLength: 1,
            // Set fill as per your theme
            fill: "#32CD32",
        },
    };


    return (
        <>

            <AnimatePresence>

                <motion.svg
                    viewBox="0 28.100000381469727 26.549999237060547 37.20000457763672"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-full w-full fill-primary stroke-primary"
                >
                    <motion.path
                        d="M26.55 58.60Q25.10 61.60 23.05 63.30Q21 65.00 18.85 65.00Q17.05 65.00 15.90 64.33Q14.75 63.65 13.85 62.38Q12.95 61.10 11.20 58.10L6.70 50.50L4.65 52.95L4.65 63.60L0 65.30L0 29.90L4.65 28.10L4.65 49.30L21.80 29.00L24.85 29.25L9.75 46.90L16.85 58.80Q17.85 60.60 18.65 61.23Q19.45 61.85 20.70 61.80Q21.95 61.80 23.33 60.73Q24.70 59.65 25.70 58.00L26.55 58.60Z"
                        strokeWidth="1"
                        variants={iconVariant}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            default: { duration: 3, ease: "easeInOut" },
                            fill: { duration: 3, ease: [1, 0, 0.8, 1] },
                        }}
                    />

                </motion.svg>
            </AnimatePresence>
        </>
    );
}
