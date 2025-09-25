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
          imageUrl="/workpackage.webp"
          imageAlt="Work packages"
          imagePosition="right"
          primaryAction={{ label: "View Packages", href: "/SMME_PACKAGE_SEPTEMBER_2025.pdf" }}      
      /> 

      
         <Packages
          eyebrow="2"
          title="Database Registration"
          description="Companies that have not yet registered are invited to submit their details to be included in the BDC Supplier Database. This is the first step to be
              considered for participation.Submit documents to: profiles@bankenvelddev.co.za and clo@bankenvelddev.co.za"
          imageUrl="/register2.jpg"
          imageAlt="Registration desk"
          imagePosition="right"
          primaryAction={{ label: "Required Documents", href: "/Documents_Required_for_Submission.pdf" }}      
      /> 

        <Packages
          eyebrow="3"
          title="SMME Selection Process"
           description={`<ul class="space-y-3">
              <li><strong>a)</strong> All SMMEs registered on the database will be filtered according to their main/primary area of expertise when specific work packages are prepared.</li>
              <li><strong>b)</strong> The filtered SMMEs for each work package will be invited by Jodan Construction to attend interviews.</li>
              <li><strong>c)</strong> SMME's will be selected based on the answers and knowledge demonstrated in the interview for their relevant work package. Company profiles and work experience will be taken into account and the required SMME's will be selected for the intended works packages. These SMME's will then be invited to a costing session to explain the calculations for the rate Breakdowns for their relevant work package.</li>
              <li><strong>d)</strong> Should there be any changes to the quantities and/or specifications of a work package, these will be communicated either during the interview stage or through the distribution of an updated work package schedule, depending on the nature and extent of the changes (e.g., Joburg Water finalising detailed designs).</li>
              <li><strong>e)</strong> Once the above process has been concluded, the contractor will select an SMME (or multiple SMMEs, as applicable) in line with the requirements of the work package. The selected SMMEs will then enter into agreements with the contractor, and further details regarding commencement of work will be provided.</li>
            </ul>
            <br><br>
            <p><strong>Any uncertainties regarding this process may be raised with the offices of the CLO and LDO at Bankenveld District City.</strong></p>`}
          containerClassName="mb-16"
      /> 


           
    




      

     
    </div>
  );
}
