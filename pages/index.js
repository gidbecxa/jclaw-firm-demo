import HomePage from "../container/HomePage";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>San Francisco Criminal Defense Attorney | Fraud & Sex Crimes Lawyer</title>
        <meta name="title" content="The Law Offices of Jonah Chew" />
        <meta
          name="description"
          content="Call our Bay Area criminal defense attorneys if you're facing A DUI, fraud, sex crime or any criminal defense charge. We'll fight for you so you don't have to!"
        />
        <meta name="keywords" content="  San Francisco Criminal Defense Attorney,  Bay Area Criminal Defense Lawyer,  Criminal Defense Law Firm,  DUI Defense Attorney,  Drug Crimes Defense,  Domestic Violence Defense,  Theft Crimes Lawyer,  White Collar Crime Defense,  Assault and Battery Defense,  Sex Crimes Defense,  Juvenile Crime Defense,  Expungement Lawyer,  Criminal Appeals Attorney,  Federal Criminal Defense,  Probation Violation Defense,  Restraining Order Defense,  Criminal Record Clearing,  California Criminal Law,  SF Criminal Defense,  Best Criminal Lawyer San Francisco,  Affordable Criminal Defense,  24/7 Criminal Defense Attorney,  Free Consultation Criminal Lawyer,  Experienced Criminal Defense,  Trial-Tested Criminal Attorney,  Chew Law Offices" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          name="copyright"
          content="©2025 The Law Offices of Jonah Chew. All Rights Reserved."
        ></meta>
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="author" content="The Law Offices of Jonah Chew" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Intelpik" />
        <meta
          property="og:description"
          content="San Francisco criminal defense attorney William Chew provides aggressive representation for DUI, drug crimes, domestic violence, and felony cases. Trusted trial lawyer with 20+ years experience protecting clients' rights in Bay Area courts."
        />
        <meta property="og:image" content="/images/banner.jpeg" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="The Law Offices of Jonah Chew" />
        <meta
          property="twitter:description"
          content="San Francisco criminal defense attorney William Chew provides aggressive representation for DUI, drug crimes, domestic violence, and felony cases. Trusted trial lawyer with 20+ years experience protecting clients' rights in Bay Area courts."
        />
        <meta property="twitter:image" content="/images/banner.jpeg"></meta>

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
      <HomePage />
    </>
  );
}
