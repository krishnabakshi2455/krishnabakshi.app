'use client'
import { motion } from "framer-motion";
export default function AnimatedLogo({ className
}:
    {
        className: string
    }
) {
    const anim = {
        fill: "none",
        variants: {
            hidden: {
                strokeDasharray: 300, // Length of the stroke path (can be adjusted)
                strokeDashoffset: 300, // Initially offset the entire stroke
                fillOpacity: 0
            },
            visible: {
                strokeDashoffset: 0, // Animate to fully visible stroke
                transition: {
                    strokeDashoffset: { duration: 2, ease: "easeInOut" }, // Stroke animation duration
                    fillOpacity: { delay: 1, duration: 1 },
                },
                fillOpacity: 1
            },
        }
    }
    return (
        <motion.svg
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 240 66.18"
            initial="hidden"
            animate="visible"
            className={className}
        >
            <defs>
                <style>
                    {`.cls-1{fill:#008ecc;stroke:#008ecc}.cls-2{fill:#38c5dd;stroke:#38c5dd}`}
                </style>
            </defs>
            <motion.path
                className="cls-1"
                d="M8.25 20.30Q8.25 19.45 8.83 18.82Q9.40 18.20 10.20 18.20Q11 18.20 11.40 18.82Q11.80 19.45 11.80 20.40Q11.80 22.55 9.83 24.63Q7.85 26.70 5.55 26.70Q4.05 26.70 3.08 25.57Q2.10 24.45 2.10 22.50Q2.10 19 5.20 16.02Q8.30 13.05 12.30 11.55Q16.30 10.05 19.70 10.05Q22.25 10.05 23.83 11.47Q25.40 12.90 25.40 15.45Q25.40 19.10 23.80 23.65Q25.45 22.55 27.45 22.55Q29.40 22.55 31.05 23.80Q31.90 22.55 32.90 20.42Q33.90 18.30 34.73 16.67Q35.55 15.05 36.63 13.45Q37.70 11.85 39.15 10.97Q40.60 10.10 42.40 10.10Q44.70 10.10 45.83 11.38Q46.95 12.65 46.95 14.60Q46.95 16.65 45.60 18.85Q44.25 21.05 42.40 21.05Q41.60 21.05 41.03 20.47Q40.45 19.90 40.45 19.05Q40.45 18.10 41.05 17.60Q41.65 17.10 42.55 17.10Q43.35 17.10 44.05 17.55Q45 16.30 45 14.55Q45 12.30 43.05 12.30Q41.15 12.30 39.60 13.70Q38.05 15.10 37.18 16.82Q36.30 18.55 34.98 21.22Q33.65 23.90 32.65 25.40Q33.85 27.10 33.85 29.35Q33.85 30.55 33.33 33.30Q32.80 36.05 32.80 37.30Q32.80 39.05 33.80 40.15Q34.80 41.25 36.45 41.25Q39.35 41.25 40.98 39.52Q42.60 37.80 42.60 34.60Q42.60 32.40 40.85 32.40Q40.85 33.65 40.20 34.40Q39.55 35.15 38.60 35.15Q37.65 35.15 37.05 34.52Q36.45 33.90 36.45 33.05Q36.45 31.60 37.45 31.02Q38.45 30.45 40.60 30.45Q42.65 30.45 43.78 31.70Q44.90 32.95 44.90 34.75Q44.90 38.40 42.58 40.90Q40.25 43.40 36 43.40Q33.55 43.40 31.93 41.60Q30.30 39.80 30.30 37.35Q30.30 35.80 30.85 32.88Q31.40 29.95 31.40 28.70Q31.40 28 31.15 27.35Q28.55 29.95 25.50 29.95Q22.65 29.95 22 28Q18.95 34.25 14.53 38.70Q10.10 43.15 6.15 43.35Q3.15 43.35 1.58 41.70Q0 40.05 0 37.60Q0 34.65 2 32.27Q4 29.90 7.15 29.90Q8.85 29.90 10.45 31.20Q12.05 32.50 12.05 34.20Q12.05 35.15 11.53 35.80Q11 36.45 10 36.45Q9.05 36.45 8.48 35.75Q7.90 35.05 7.90 34.05Q7.90 33.10 8.35 32.35Q7.65 32 6.95 32Q5.20 32 3.95 33.83Q2.70 35.65 2.70 37.60Q2.70 39.15 3.53 40.13Q4.35 41.10 6.10 41.10Q8.95 41.10 13 36.90Q17.05 32.70 20.05 26.60Q23.05 20.50 23.05 15.70Q23.05 12.30 19.30 12.30Q16.45 12.30 13 13.80Q9.55 15.30 7 17.85Q4.45 20.40 4.45 23.05Q4.45 24.65 5.55 24.65Q6.50 24.65 7.53 24Q8.55 23.35 9.20 22.15Q8.25 21.45 8.25 20.30M24.10 26.85Q24.10 27.70 25.20 27.70Q27.65 27.70 29.65 25.60Q28.55 24.90 27.25 24.90Q26.05 24.90 25.13 25.43Q24.20 25.95 24.10 26.85ZM52.30 22.25Q53.50 22.25 54.20 22.90Q54.90 23.55 54.90 24.40Q54.90 25.05 54.50 25.47Q54.10 25.90 53.40 25.90Q52.05 25.90 51.30 24.93Q50.55 23.95 50.55 22.20Q50.55 20.20 51.63 18.90Q52.70 17.60 54.75 17.60Q56.00 17.60 57.70 18.67Q59.40 19.75 60.25 19.75Q61.35 19.75 63.05 18.72Q64.75 17.70 65.60 17.60Q66.50 17.60 67 18.02Q67.50 18.45 67.50 19.15Q67.50 20.90 66.15 23.22Q64.80 25.55 63.15 27.55Q61.50 29.55 59.88 32.50Q58.25 35.45 58.25 37.35Q58.25 40.60 61.10 40.60Q62.85 40.60 64.10 39.55Q63.50 39.35 63.00 38.55Q62.50 37.75 62.50 37.05Q62.50 36.10 63.08 35.38Q63.65 34.65 64.60 34.65Q65.55 34.65 66.20 35.35Q66.85 36.05 66.85 37Q66.85 39.65 64.93 41.23Q63.00 42.80 60.70 42.80Q58.45 42.80 57.10 41.30Q55.75 39.80 55.65 37.55Q55.65 35.15 57.15 32.30Q58.65 29.45 61.53 25.52Q64.40 21.60 65.20 20.30Q62.75 22.25 60.25 22.25Q58.55 22.25 56.60 21.13Q54.65 20 54.10 20Q52.50 20 52.30 22.25ZM79.75 4.60Q81.60 4.60 82.80 5.80Q84 7 84 8.85Q84 10.95 82.60 12.20Q81.20 13.45 79.30 13.45Q77.40 13.45 76.20 12.30Q75 11.15 75 9.30Q75 7.45 76.33 6.02Q77.65 4.60 79.75 4.60M79.55 7.15Q78.60 7.15 77.92 7.67Q77.25 8.20 77.25 9.20Q77.25 11 79.30 11Q80.25 11 80.95 10.50Q81.65 10 81.65 9Q81.65 7.15 79.55 7.15M81.70 39.15Q80.40 38.55 80.40 37.20Q80.40 36.25 81.05 35.55Q81.70 34.85 82.70 34.85Q83.65 34.85 84.35 35.60Q85.05 36.35 85.05 37.35Q85.05 39.65 82.50 41.20Q79.95 42.75 77.35 42.75Q75.35 42.75 74.03 41.70Q72.70 40.65 72.70 38.60Q72.70 36.35 74.20 32.67Q75.70 29 77.20 25.68Q78.70 22.35 78.70 21Q78.70 19.70 77.40 19.70Q76.30 19.70 74.67 20.50Q73.05 21.30 72.55 22.10Q73.15 22.30 73.58 22.80Q74 23.30 74 23.95Q74 24.75 73.45 25.35Q72.90 25.95 72.15 25.95Q70.30 25.95 70.30 22.95Q70.30 20.60 72.53 19.10Q74.75 17.60 77.30 17.60Q79 17.60 80.10 18.50Q81.20 19.40 81.20 21.15Q81.20 22.30 79.72 25.60Q78.25 28.90 76.80 32.52Q75.35 36.15 75.35 38.20Q75.35 40.50 77.50 40.50Q80.20 40.50 81.70 39.15ZM99.45 24.80Q99.45 24.05 100.07 23.52Q100.70 23 101.60 23Q102.95 23 103.60 23.50Q104 22.80 104 22.25Q104 21.60 103.60 21.02Q103.20 20.45 102.52 20.05Q101.85 19.65 101 19.42Q100.15 19.20 99.25 19.20Q96.75 19.20 95.07 20.15Q93.40 21.10 93.40 23.35Q93.40 24.70 94.40 25.65Q95.40 26.60 96.88 27.35Q98.35 28.10 100.10 28.82Q101.85 29.55 103.32 30.45Q104.80 31.35 105.80 32.58Q106.80 33.80 106.80 35.60Q106.80 39.35 104.15 41.08Q101.50 42.80 97.15 42.80Q95.60 42.80 94.15 42.35Q92.70 41.90 91.57 41.08Q90.45 40.25 89.77 39.10Q89.10 37.95 89.10 36.50Q89.10 35.30 89.57 34.25Q90.05 33.20 90.90 32.45Q91.75 31.70 92.90 31.27Q94.05 30.85 95.40 30.85Q96.40 30.85 97.13 31.42Q97.85 32 97.85 32.85Q97.85 33.70 97.13 34.27Q96.40 34.85 95.40 34.85Q94.55 34.85 93.72 34.38Q92.90 33.90 92.65 33.25Q91.60 34.40 91.60 36.25Q91.60 37.30 92.07 38.13Q92.55 38.95 93.38 39.50Q94.20 40.05 95.30 40.35Q96.40 40.65 97.60 40.65Q98.90 40.65 100.07 40.33Q101.25 40 102.15 39.40Q103.05 38.80 103.57 37.90Q104.10 37 104.10 35.85Q104.10 34.40 103.10 33.40Q102.10 32.40 100.60 31.60Q99.10 30.80 97.38 30.10Q95.65 29.40 94.15 28.52Q92.65 27.65 91.65 26.55Q90.65 25.45 90.65 23.80Q90.65 22.10 91.32 20.85Q92 19.60 93.17 18.77Q94.35 17.95 95.88 17.57Q97.40 17.20 99.10 17.20Q102.10 17.20 104.07 18.52Q106.05 19.85 106.05 22.60Q106.05 24.10 104.95 25.35Q103.85 26.60 101.90 26.60Q100.90 26.60 100.17 26.13Q99.45 25.65 99.45 24.80ZM110.70 41Q111.70 38.15 112.52 33.10Q113.35 28.05 113.97 23.40Q114.60 18.75 115.45 14.35Q116.30 9.95 117.80 7.27Q119.30 4.60 121.40 4.60Q123.30 4.60 124.30 5.82Q125.30 7.05 125.30 8.35Q125.30 9.45 124.75 10.82Q124.20 12.20 123.47 13.38Q122.75 14.55 121.60 16Q120.45 17.45 119.70 18.30Q118.95 19.15 117.90 20.30Q116.85 21.45 116.75 21.55L116.45 23.90Q118 21.80 120.78 19.92Q123.55 18.05 125.55 18.05Q130.70 18.05 130.70 23.30Q130.70 26.05 128.57 30.38Q126.45 34.70 126.45 36.85Q126.45 40.70 129.40 40.70Q131.15 40.70 132.53 39.38Q133.90 38.05 133.90 36.40Q133.90 35.15 133.15 34.15Q132.95 34.95 132.25 35.67Q131.55 36.40 130.55 36.40Q129.75 36.40 129.25 35.73Q128.75 35.05 128.75 34.25Q128.75 33.20 129.57 32.33Q130.40 31.45 131.95 31.45Q133.65 31.45 134.78 32.92Q135.90 34.40 135.90 36.50Q135.90 39.35 134.07 41.08Q132.25 42.80 129.40 42.80Q126.75 42.80 125.33 41.20Q123.90 39.60 123.90 37.10Q123.90 34.70 126.05 30.38Q128.20 26.05 128.20 23.55Q128.20 20.65 125.35 20.65Q123.50 20.65 120.67 22.75Q117.85 24.85 116 27.45Q114.75 37.70 112.90 42.75Q112.85 42.90 112.50 42.90Q111.70 42.90 111.13 42.55Q110.55 42.20 110.55 41.65Q110.55 41.45 110.70 41M119.30 9.90Q118.10 13.15 117.40 17.40Q119.55 15.15 121.13 12.70Q122.70 10.25 122.70 8.65Q122.70 8 122.35 7.45Q122 6.90 121.35 6.90Q120.40 6.90 119.30 9.90ZM144.10 38.25Q144.10 39.55 142.45 40.45Q143.05 40.70 143.60 40.70Q145.15 40.70 146.80 38.25Q148.45 35.80 149.58 32.50Q150.70 29.20 151.43 26.07Q152.15 22.95 152.15 21.35Q152.15 19 149.65 19Q147.05 19 144.25 21.07Q141.45 23.15 141.45 25.70Q141.45 26.90 142.05 26.90Q142.10 26.90 142.20 26.32Q142.30 25.75 142.75 25.20Q143.20 24.65 144.10 24.65Q144.95 24.65 145.55 25.22Q146.15 25.80 146.15 26.65Q146.15 27.85 145.05 28.50Q143.95 29.15 142.55 29.15Q141.05 29.15 140.03 28.25Q139 27.35 139 25.45Q139 22 142.50 19.30Q146 16.60 149.95 16.60Q154.65 16.60 154.65 21.45Q154.65 21.60 154.55 22.50Q156.30 20.70 158.88 19.32Q161.45 17.95 163.40 17.95Q167.90 17.95 167.90 22.90Q167.90 25.35 166.28 30.42Q164.65 35.50 164.65 37.10Q164.65 38.65 165.75 39.48Q166.85 40.30 168.45 40.30Q170.25 40.30 171.68 39.17Q173.10 38.05 173.10 36.15Q173.10 35.10 172.48 34.52Q171.85 33.95 171 33.95Q170.40 33.95 169.98 34.23Q169.55 34.50 169.55 34.90Q170.40 35.60 170.40 36.70Q170.40 37.55 169.83 38.02Q169.25 38.50 168.50 38.50Q167.70 38.50 167.13 38Q166.55 37.50 166.55 36.60Q166.55 34.75 167.55 33.42Q168.55 32.10 170.80 32.10Q172.60 32.10 173.98 33.33Q175.35 34.55 175.35 36.40Q175.35 39.30 173.25 40.95Q171.15 42.60 168.35 42.60Q165.75 42.60 163.90 41.15Q162.05 39.70 162.05 37.10Q162.05 35 163.75 30.05Q165.45 25.10 165.45 22.80Q165.45 20.50 163.40 20.50Q161.30 20.50 158.48 22.35Q155.65 24.20 153.85 26.30Q153.25 29.05 152.40 31.67Q151.55 34.30 150.33 36.98Q149.10 39.65 147.40 41.30Q145.70 42.95 143.80 42.95Q142.15 42.95 140.83 41.98Q139.50 41 139.50 39.20Q139.50 37.90 140.28 37.20Q141.05 36.50 142.05 36.50Q142.95 36.50 143.53 36.95Q144.10 37.40 144.10 38.25ZM187.60 32.60Q187.05 33.90 185.90 33.90Q185.30 33.90 184.88 33.52Q184.45 33.15 184.45 32.60Q184.45 32 185.10 31.40Q183.80 30.85 183.80 29.95Q183.80 29.40 184.28 29Q184.75 28.60 185.55 28.60Q185.90 28.60 186.10 28.65Q186.20 27.70 186.65 27.15Q187.10 26.60 187.60 26.60Q188.15 26.60 188.60 27.15Q189.05 27.70 189.10 28.65Q189.25 28.60 189.70 28.60Q191.45 28.60 191.45 29.80Q191.45 30.85 190.15 31.40Q190.80 32 190.80 32.60Q190.80 33.15 190.38 33.52Q189.95 33.90 189.35 33.90Q188.15 33.90 187.60 32.60M187.55 31.75Q187.75 32.10 188.40 32.50Q189.05 32.90 189.35 32.90Q189.80 32.90 189.80 32.60Q189.80 31.75 188.55 30.95Q190.45 30.20 190.45 29.95Q190.45 29.60 189.70 29.60L188.15 29.65Q188.00 27.60 187.60 27.60Q187.25 27.60 187.00 29.65Q186.75 29.65 186.50 29.63Q186.25 29.60 186.05 29.60Q184.80 29.60 184.80 29.95Q184.80 30.20 186.70 30.95Q185.45 32.05 185.45 32.60Q185.45 32.90 185.90 32.90Q186.40 32.90 186.90 32.52Q187.40 32.15 187.55 31.75M186.55 42.80Q182.40 42.80 180.15 39.90Q177.90 37 177.90 32.30Q177.90 30.15 178.50 27.75Q179.10 25.35 180.30 22.97Q181.50 20.60 183.70 19.07Q185.90 17.55 188.75 17.55Q192.90 17.55 195.15 20.45Q197.40 23.35 197.40 28.05Q197.40 30.35 196.65 33Q196.40 34.70 196.33 36.42Q196.25 38.15 197.28 39.45Q198.30 40.75 200.40 40.75Q202.55 40.75 203.83 39.35Q205.10 37.95 205.10 36.10Q205.10 34.95 204.43 34.25Q203.75 33.55 202.85 33.55Q201.40 33.55 200.80 35.05Q201.65 35.05 202.23 35.65Q202.80 36.25 202.80 37.10Q202.80 38.10 202.25 38.65Q201.70 39.20 200.95 39.20Q199.95 39.20 199.25 38.45Q198.55 37.70 198.55 36.30Q198.55 34.55 199.70 33.13Q200.85 31.70 202.75 31.70Q204.75 31.70 206.08 32.95Q207.40 34.20 207.40 36.45Q207.40 39.25 205.25 41.05Q203.10 42.85 200.20 42.85Q195.25 42.85 194.25 38.55Q191.30 42.80 186.55 42.80M186.55 40.45Q190.30 40.45 192.63 36.67Q194.95 32.90 194.95 28.45Q194.95 26.95 194.65 25.52Q194.35 24.10 193.68 22.80Q193.00 21.50 191.75 20.70Q190.50 19.90 188.80 19.90Q185.00 19.90 182.65 23.68Q180.30 27.45 180.30 31.90Q180.30 35.30 181.80 37.88Q183.30 40.45 186.55 40.45Z" transform="translate(0 -6.74)"
                {...anim}
            />
            {/* Repeat for other SVG elements */}
        </motion.svg>
    );
};
