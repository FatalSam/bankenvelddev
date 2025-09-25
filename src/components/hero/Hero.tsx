"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden h-[500px]">
      {/* Background Image */}
      <Image
        src="/hero3.webp"
        alt="Global technology background"
        fill
        priority
        className="object-cover object-center z-0"
      />


      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 mt-20">
        <div className="grid items-center gap-10 py-8 md:py-10 lg:py-12">
          <div className="text-center">
            {/* Eyebrow */}
            {/* <p className="mb-4 text-[14px] font-semibold uppercase tracking-wider text-white/90">
              Bankenveld
            </p> */}

            {/* Title */}
            <h1 className="text-xl font-extrabold tracking-tight text-white" style={{ fontSize: '26px' }}>
              NOTICE TO THE REGION E BUSINESS COMMUNITY
            </h1>

            {/* Subtitle
            
            Following the Region E business briefing held on the 09 July 2025 at Malboro
Community Hall. As the appointed civil contractor, Jodan is committed to creating
local employment opportunities as part of its ongoing project in the Bankenveld
District City (BDC) project.
            */}
            <p className="mt-6 max-w-3xl text-lg leading-7 text-white/90 mx-auto" style={{ fontSize: '16px' }}>
              Following the Region E business briefing held on the 09 July 2025 at Malboro
              Community Hall. As the appointed civil contractor, Jodan is committed to creating
              local employment opportunities as part of its ongoing project in the Bankenveld
              District City (BDC) project.
            </p>

            <p className="mt-6 max-w-3xl text-lg leading-7 text-white/90 mx-auto" style={{ fontSize: '16px' }}>
             <br /> We hereby invite interested Region E businesses to apply for the following available work packages.<br />Please see below link for the work packages:
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
