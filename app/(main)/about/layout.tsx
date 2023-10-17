import { Children } from "@/types";
import { APP_NAME } from "@/utils/constants";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: `About | ${APP_NAME}`,
    description: 'Our organization, Starlit, is driven by a profound vision to make a meaningful and positive impact on the lives of every child. With a passionate commitment to this vision, our mission is to comprehensively address the educational, physical, and emotional needs of children. Our overarching objective is to extend a helping hand and support the less privileged members of our society, transcending boundaries of age, gender, religion, and race.',
    icons: { icon: '/images/logos/favicon.ico' }
  }

export default function AboutLayout({children}: Children) {
    return (
        <>
            
            {children}
        </>
    )
}