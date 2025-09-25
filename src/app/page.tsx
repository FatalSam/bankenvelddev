import Image from "next/image";
import Header from "@/components/header/Header"
import Hero from "@/components/hero/Hero"
import Packages from "@/components/packages/Packages"

import Opening from "@/components/openingdates/opening"


export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header/>

      <Hero/>


      <Packages
          eyebrow="1"
          title="Available Work Packages"
          imageUrl="/hero1.jpg"
          imageAlt="Registration desk"
          imagePosition="right"
          primaryAction={{ label: "View Packages", href: "/SMME_PACKAGE_SEPTEMBER_2025.pdf" }}      
      /> 

      
         <Packages
          eyebrow="2"
          title="Database Registration"
          description="Companies that have not yet registered are invited to submit their details to be included in the BDC Supplier Database. This is the first step to be
              considered for participation.Submit documents to: profiles@bankenvelddev.co.za and clo@bankenvelddev.co.za"
          imageUrl="/hero1.jpg"
          imageAlt="Registration desk"
          imagePosition="right"
          primaryAction={{ label: "Required Documents", href: "/Documents_Required_for_Submission.pdf" }}      
      /> 

        <Packages
          eyebrow="3"
          title="SMME Selection Process"
           description={`a) All SMMEs registered on the database will be filtered according to their
              main/primary area of expertise when specific work packages are
              prepared.
                \n
              b) The filtered SMMEs for each work package will be invited by Jodan
              Construction to attend interviews.`}
          imageUrl="/hero1.jpg"
          imageAlt="Selection process"
          imagePosition="right"
      /> 


           
    




      

     
    </div>
  );
}
