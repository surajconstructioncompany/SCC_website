export type Project = {
  id: string;
  name: string;
  type: string;
  category?: string;
  client: string;
  location: string;
  cost: string;
  scope: string;
  status: "Completed" | "Ongoing";
  description: string;
  /** SEO-optimised title (<=60 chars) shown in Google search results */
  seoTitle: string;
  /** SEO-optimised meta description (<=160 chars) shown in Google search results */
  seoDescription: string;
  image?: string;
  details: {
    commencementDate?: string;
    completionDate?: string;
    equityShare?: string;
    financialInfo?: string;
    executionMode?: string;
    governmentAuthority?: string;
  };
};

export const projects: Project[] = [
  {
    id: "panchkula-zirakpur-flyover",
    image: "/Projects/1.jpg",
    name: "Panchkula\u2013Zirakpur Right-Turning Flyover",
    type: "Construction of 2-Lane Right-Turning Flyover, Junction Improvement & Road Widening",
    category: "Category 3",
    client: "Regional Officer, NHAI, Chandigarh",
    location: "Panchkula, Haryana",
    cost: "\u20b913.91 Cr excluding GST",
    scope:
      "2-lane right-turning flyover from Sector-12A and Industrial Area Phase-I towards Zirakpur over old NH-22 (new NH-05), including junction improvement and widening of at-grade HUDA roads.",
    status: "Completed",
    seoTitle: "Panchkula\u2013Zirakpur Flyover Project | Suraj Construction",
    seoDescription:
      "Suraj Construction built a 2-lane right-turning flyover linking Panchkula to Zirakpur over NH-05 for NHAI, valued at \u20b913.91 Cr, rated Very Good.",
    description:
      "This project involves the construction of a 2-lane right-turning flyover connecting Sector-12A and Industrial Area Phase-I in Panchkula towards Zirakpur, crossing old NH-22, now designated NH-05. The scope also includes junction improvement and widening of at-grade HUDA roads within Panchkula city. The project is being executed in EPC mode for the National Highways Authority of India through its Chandigarh Project Implementation Unit. The contract value is \u20b913.91 crore excluding GST. The documented flyover/viaduct has a total length of 119.150 metres, with the longest span measuring 31 metres. The NHAI work certificate records 97.89% physical progress as of 31 March 2024 and identifies the work as under execution at that point. The certificate also records the quality of work as \u201cVery Good\u201d, with no compensation levied for delay and no arbitration.",
    details: {
      commencementDate: "5 September 2022",
      completionDate: "7 March 2024 (Stipulated)",
      executionMode: "EPC",
      governmentAuthority: "National Highways Authority of India (NHAI)",
    },
  },
  {
    id: "ankhir-chowk-delhi-border",
    image: "/Projects/2.jpg",
    name: "Ankhir Chowk to Delhi Border Road Improvement",
    type: "Improvement & Strengthening of Road",
    category: "Category 3",
    client: "Chief Engineer-I, FMDA, Faridabad",
    location: "Faridabad, Haryana",
    cost: "\u20b921.38 Cr",
    scope:
      "Improvement and strengthening from Ankhir Chowk to Delhi Border, Asset ID 1014, Faridabad, along with other contiguous works under FMDA.",
    status: "Completed",
    seoTitle: "Ankhir Chowk\u2013Delhi Border Road Project | Suraj Construction",
    seoDescription:
      "Road improvement and strengthening from Ankhir Chowk to Delhi Border, Faridabad, executed by Suraj Construction for FMDA at a cost of \u20b921.38 Cr.",
    description:
      "This project involved the improvement and strengthening of the road corridor from Ankhir Chowk to the Delhi Border in Faridabad, Haryana, identified in the project documentation as Asset ID 1014. The work was undertaken for the Faridabad Metropolitan Development Authority through the office of the Chief Engineer-I, FMDA, Faridabad. The documented project cost is \u20b921.38 crore, with Suraj Construction Company recorded with 100% equity shareholding for the project. Work commenced on 25 November 2022, and the project documentation records 15 January 2024 as the date of completion/commissioning. The project forms part of the company's road improvement and strengthening experience in urban infrastructure. The accompanying Chartered Accountant certificate also records payments received against the construction work and confirms that the receipts relate to the applicant's 100% share in the project.",
    details: {
      commencementDate: "25 November 2022",
      completionDate: "15 January 2024",
      equityShare: "100%",
      governmentAuthority: "Faridabad Metropolitan Development Authority (FMDA)",
    },
  },
  {
    id: "datia-unroad-construction",
    image: "/Projects/3.jpg",
    name: "Datia\u2013Unroad Road Construction & External Electrification",
    type: "Road Construction including External Electrification",
    category: "Category 4",
    client: "Executive Engineer 411, PWD, Ashok Nagar",
    location: "Ashok Nagar, Madhya Pradesh",
    cost: "\u20b944.59 Cr",
    scope:
      "Construction of Datia to Unroad, including external electrification work, for a road length of 18.30 km under PWD, Ashok Nagar, Madhya Pradesh.",
    status: "Completed",
    seoTitle: "Datia\u2013Unroad Road Construction, MP | Suraj Construction",
    seoDescription:
      "Suraj Construction built the 18.30 km Datia to Unroad road in Ashok Nagar, MP, with external electrification for PWD at \u20b944.59 Cr.",
    description:
      "This project involved the construction of the Datia to Unroad road in Ashok Nagar, Madhya Pradesh, including external electrification work. The project documentation specifies a road length of 18.30 km and identifies the Executive Engineer 411, PWD, Ashok Nagar, as the authority for which the work was constructed. The recorded project cost is \u20b944.59 crore, with Suraj Construction Company holding 100% equity shareholding in the project. Work commenced on 10 October 2023, and the project documentation records 9 October 2025 as the date of completion. The project represents the company's experience in road construction combined with associated external electrification works under a state Public Works Department. The accompanying Chartered Accountant certificate records payments received for the construction work and confirms the company's 100% share in the project.",
    details: {
      commencementDate: "10 October 2023",
      completionDate: "9 October 2025",
      equityShare: "100%",
      governmentAuthority: "Public Works Department, Madhya Pradesh",
    },
  },
  {
    id: "jhajjar-loharu-nh334b",
    image: "/Projects/4.jpg",
    name: "Jhajjar\u2013Loharu Section of NH-334B",
    type: "Highway Improvement",
    category: "Category 3",
    client: "PIU, NHAI, Bhiwani",
    location: "Haryana",
    cost: "\u20b919.55 Cr",
    scope:
      "Improvement of the Jhajjar\u2013Loharu section of NH-334B from Km 130.770 to Km 228.630, with design chainages 0+000 to 97+864 and an improvement section from Km 135+070 to Km 173+050.",
    status: "Completed",
    seoTitle: "Jhajjar\u2013Loharu NH-334B Improvement | Suraj Construction",
    seoDescription:
      "Highway improvement on the Jhajjar\u2013Loharu section of NH-334B, Haryana, executed by Suraj Construction for NHAI at a contract value of \u20b919.55 Cr.",
    description:
      "This project involved improvement works on the Jhajjar\u2013Loharu section of NH-334B in Haryana. The project documentation identifies the PIU, NHAI, Bhiwani, as the authority for which the work was constructed. The project is described through the highway chainages from Km 130.770 to Km 228.630, with design chainage extending from 0+000 to 97+864. The documentation also identifies an improvement section from Km 135+070 to Km 173+050. The recorded project cost is \u20b919.55 crore, and Suraj Construction Company is recorded with 100% equity shareholding. Work commenced on 28 May 2021 and the project documentation records 15 February 2022 as the completion/commissioning date. The project forms part of the company's experience in improvement works on National Highway infrastructure under NHAI. The supporting Chartered Accountant certificate records \u20b918.68 crore in payments received and confirms the company's 100% share in the project.",
    details: {
      commencementDate: "28 May 2021",
      completionDate: "15 February 2022",
      equityShare: "100%",
      executionMode: "Highway improvement work",
      governmentAuthority: "National Highways Authority of India (NHAI)",
    },
  },
  {
    id: "pindwara-highway-strengthening",
    image: "/Projects/5.jpg",
    name: "Pindwara\u2013Swaroopganj & Pindwara\u2013Udaipur Highway Strengthening",
    type: "Overlay / Strengthening of 4-Lane Highway",
    category: "Category 3",
    client: "Regional Office, NHAI, New Delhi",
    location: "Rajasthan",
    cost: "\u20b995.18 Cr (Revised)",
    scope:
      "Overlay/strengthening of the Pindwara\u2013Swaroopganj section of 4-lane NH-14 (New NH-27) and specified sections of the Pindwara\u2013Udaipur section of 4-lane NH-76 (New NH-27).",
    status: "Completed",
    seoTitle: "Pindwara Highway Strengthening, Rajasthan | Suraj Construction",
    seoDescription:
      "EPC overlay and strengthening of the Pindwara\u2013Swaroopganj & Pindwara\u2013Udaipur NH-27 sections in Rajasthan for NHAI, valued at \u20b995.18 Cr.",
    description:
      "This EPC project involved overlay and strengthening works on specified sections of 4-lane national highways in Rajasthan. The scope covered the Pindwara\u2013Swaroopganj section of NH-14, now NH-27, from Km 248+700 to Km 264+000, and specified sections of the Pindwara\u2013Udaipur section of NH-76, now NH-27. The original contract value was \u20b993.39 crore excluding GST, with a revised contract value of \u20b995.18 crore. Work commenced on 5 July 2024 and the NHAI experience certificate records actual completion on 29 October 2025, within the stated grace period. The certificate records no subcontractor engagement. Major executed quantities included 29,709 m\u00b3 of earthwork, 12,235 m\u00b3 of granular sub-base, 15,294 m\u00b3 of granular base course, 146,932 MT of DBM/CTB and 79,002 MT of SMA/BC wearing course. The works also included 2,362 m\u00b3 of retaining wall, 2,170 m\u00b3 of toe wall, 12 box culvert widenings and 5 pipe culvert widenings.",
    details: {
      commencementDate: "5 July 2024",
      completionDate: "29 October 2025",
      equityShare: "100%",
      executionMode: "EPC",
      governmentAuthority: "National Highways Authority of India (NHAI)",
    },
  },
  {
    id: "shamli-highway-upgradation",
    image: "/Projects/6.jpg",
    name: "Shamli Highway / NH-709 Upgradation",
    type: "Highway Improvement & Upgradation",
    category: "Category 3",
    client: "General Manager (Tech.), NHAI, PIU Baghpat",
    location: "Uttar Pradesh",
    cost: "\u20b9111.55 Cr",
    scope:
      "Improvement and upgradation of highway beginning at its junction with NH-44 at Panipat, connecting Kairana, Shamli, Muzaffarnagar, Mairanpur and Bijnor and terminating at its junction with NH-74 at Kotwali, including the Shamli spur.",
    status: "Completed",
    seoTitle: "Shamli NH-709 Upgradation | Suraj Construction",
    seoDescription:
      "Suraj Construction upgraded the Panipat\u2013Shamli\u2013Kotwali highway corridor (NH-709) in UP, including a 144 m flyover. EPC contract worth \u20b9111.55 Cr for NHAI.",
    description:
      "This project involved the improvement and upgradation of a highway corridor connecting Panipat with Kairana, Shamli, Muzaffarnagar, Mairanpur and Bijnor, terminating at its junction with NH-74 at Kotwali, including the Shamli spur. The project documentation identifies the General Manager (Technical), NHAI, PIU Baghpat, as the authority. The project is recorded as an EPC project with a project cost of \u20b9111.55 crore. The NHAI work-experience certificate documents a 4-lane divided highway and major structural works, including a major flyover of 144 m, a longest span of 42 m, three LVUPs, seven VUPs and one VUP-cum-MNB. The certificate also records open foundations and an RCC/PSC girder superstructure for the major flyover. The project-detail sheet records 3 May 2025 as the completion/commissioning date. The NHAI certificate identifies the executing agency as BGCC\u2013SCC (JV).",
    details: {
      commencementDate: "14 October 2022",
      completionDate: "3 May 2025",
      equityShare: "BGCC\u2013SCC (JV)",
      executionMode: "EPC",
      governmentAuthority: "National Highways Authority of India (NHAI)",
    },
  },
  {
    id: "rewari-shahjahanpur-sh15",
    image: "/Projects/7.jpg",
    name: "Rewari\u2013Shahjahanpur Road \u2014 SH-15",
    type: "Road Widening & Strengthening",
    category: "Category 3",
    client: "HSRDC, Rewari",
    location: "Rewari District, Haryana",
    cost: "\u20b946.19 Cr",
    scope:
      "Widening from 7 m to 10 m between Km 6.42 and Km 22.42, and strengthening between Km 22.42 and Km 26.62 of the existing Rewari\u2013Shahjahanpur Road (SH-15).",
    status: "Completed",
    seoTitle: "Rewari\u2013Shahjahanpur Road SH-15 | Suraj Construction",
    seoDescription:
      "Widening and strengthening of Rewari\u2013Shahjahanpur Road (SH-15), Haryana, completed by Suraj Construction for HSRDC at a value of \u20b946.19 Cr.",
    description:
      "This project involved improvement of the existing Rewari\u2013Shahjahanpur Road, SH-15, in Rewari District, Haryana. The scope consisted of widening the road from 7 metres to 10 metres between Km 6.42 and Km 22.42, together with strengthening works between Km 22.42 and Km 26.62. The project was undertaken for the Haryana State Roads & Bridges Development Corporation Limited through HSRDC Rewari. The agreement value was \u20b946,19,13,611, with the agreement dated 11 February 2022. Work commenced on 21 February 2022, against a stipulated completion date of 31 August 2023. The official project completion certificate states that the work was 100% completed in all respects on 20 August 2023. The certificate records total work done of \u20b948,02,94,991 by M/s Suraj Construction Company. This project demonstrates the company's experience in road widening and strengthening works on an existing state highway corridor.",
    details: {
      commencementDate: "21 February 2022",
      completionDate: "20 August 2023",
      equityShare: "100%",
      executionMode: "Agreement No. 07/R of 2021\u20132022",
      governmentAuthority:
        "Haryana State Roads & Bridges Development Corporation Limited (HSRDC)",
    },
  },
  {
    id: "hisar-dabwali-om",
    image: "/Projects/8.jpg",
    name: "Hisar\u2013Dabwali Section NH-10 / NH-09 \u2014 O&M",
    type: "Operation and Maintenance of four-laning",
    category: "Not specified",
    client: "National Highways Authority of India \u2014 NHAI HQ, Delhi",
    location: "Haryana",
    cost: "\u20b9147.02 Cr",
    scope:
      "Operation and maintenance of the four-laning of the Hisar\u2013Dabwali section of NH-10 (New NH-09), from Km 170.000 to Km 314.660.",
    status: "Ongoing",
    seoTitle: "Hisar\u2013Dabwali NH-09 O&M Project | Suraj Construction",
    seoDescription:
      "Suraj Construction is carrying out O&M of the 144.66 km Hisar\u2013Dabwali section of NH-09, Haryana, under a \u20b9147.02 Cr NHAI PBMC contract.",
    description:
      "This project covers the operation and maintenance of the four-laning of the Hisar\u2013Dabwali section of NH-10, now designated as NH-09, in the state of Haryana. The maintained section extends from Km 170.000 to Km 314.660, covering a total length of 144.66 km. The project has been awarded by the National Highways Authority of India under a Performance Based Maintenance Contract (PBMC). The contract value is \u20b9147.02 crore, with the contract dated 23 December 2024 and commencement recorded as 1 April 2025. The contract period is 60 months, with completion scheduled for 31 March 2030. The ongoing-project statement records \u20b948.45 crore as the value of work remaining to be completed and applies an escalation factor of 1.10. The project represents Suraj Construction Company's ongoing involvement in the operation and maintenance of a major four-lane national highway corridor in Haryana.",
    details: {
      commencementDate: "1 April 2025",
      completionDate: "31 March 2030",
      executionMode: "Performance Based Maintenance Contract (PBMC)",
      governmentAuthority: "National Highways Authority of India",
    },
  },
  {
    id: "dahar-chowk-flyover",
    image: "/Projects/9.jpg",
    name: "Dahar Chowk NH-709 Flyover & Foot Over Bridge",
    type: "Construction of 4-Lane Flyover and Foot Over Bridge",
    category: "Not specified",
    client: "NHAI Regional Office, Chandigarh",
    location: "Haryana",
    cost: "\u20b915.88 Cr",
    scope:
      "Construction of a 4-lane flyover for rectification of the black spot at Km 75.770 (Dahar Chowk) and construction of a FOB at Km 75.087 of NH-709 (Old NH-71A) on the Rohtak\u2013Panipat section.",
    status: "Ongoing",
    seoTitle: "Dahar Chowk NH-709 Flyover & FOB | Suraj Construction",
    seoDescription:
      "Suraj Construction is building a 4-lane flyover and foot over bridge at Dahar Chowk on NH-709, Haryana. An EPC project worth \u20b915.88 Cr for NHAI.",
    description:
      "This project involves the construction of a 4-lane flyover for rectification of a black spot at Km 75.770 at Dahar Chowk and the construction of a Foot Over Bridge at Km 75.087 on NH-709, formerly NH-71A, along the Rohtak\u2013Panipat section in Haryana. The project is being undertaken for the National Highways Authority of India, Regional Office Chandigarh, on an Engineering, Procurement and Construction (EPC) basis. The contract value recorded in the ongoing-project statement is \u20b915.88 crore. The contract was dated 23 September 2025 and has a stipulated period of completion of 12 months. The document records \u20b915.88 crore as the value of work remaining to be completed and an escalation factor of 1.00. The anticipated completion date recorded in the statement is 5 March 2027. The project specifically addresses a black-spot location at Dahar Chowk and includes both a 4-lane flyover and a Foot Over Bridge.",
    details: {
      completionDate: "5 March 2027",
      executionMode: "EPC",
      governmentAuthority: "National Highways Authority of India",
    },
  },
  {
    id: "mundiyar-fee-plaza",
    image: "/Projects/10.png",
    name: "Mundiyar Fee Plaza \u2014 NH-27 Rajasthan",
    type: "Short-Term Improvement and Routine Maintenance",
    category: "Not specified",
    client: "NHAI HQ, Delhi",
    location: "Rajasthan",
    cost: "\u20b963.66 Cr",
    scope:
      "Short-term improvement and routine maintenance of the tolling reach of Mundiyar Fee Plaza from Km 1184+322 to Km 1251+814 on the Baran\u2013Shivpuri section of New NH-27.",
    status: "Ongoing",
    seoTitle: "Mundiyar Fee Plaza NH-27 Maintenance | Suraj Construction",
    seoDescription:
      "Suraj Construction covers short-term improvement and maintenance of the 67.49 km Mundiyar Fee Plaza stretch of NH-27, Rajasthan, under a \u20b963.66 Cr NHAI PBMC contract.",
    description:
      "This project covers short-term improvement and routine maintenance works on the tolling reach of Mundiyar Fee Plaza along the Baran\u2013Shivpuri section of New NH-27 in Rajasthan. The documented section extends from Km 1184+322 to Km 1251+814, covering a total length of 67.492 km. The project has been awarded by the National Highways Authority of India and is being executed under a Performance Based Maintenance Contract (PBMC). The contract value is \u20b963.66 crore, with the contract dated 11 November 2025. The project has a stipulated completion period of 60 months. The ongoing-project statement records the full \u20b963.66 crore as the value of works remaining to be completed and specifies an escalation factor of 1.00. The anticipated completion date recorded in the document is 30 April 2031. The project adds highway maintenance and short-term improvement experience in Rajasthan to the company's ongoing portfolio.",
    details: {
      completionDate: "30 April 2031",
      executionMode: "PBMC",
      governmentAuthority: "National Highways Authority of India",
    },
  },
  {
    id: "safidon-jind-road",
    image: "/Projects/11.jpg",
    name: "Safidon\u2013Jind Road \u2014 SH-14",
    type: "Widening and Strengthening of Road",
    category: "Not specified",
    client: "Executive Engineer, Provincial Division, PWD B&R, Jind",
    location: "Jind District, Haryana",
    cost: "\u20b956.61 Cr",
    scope:
      "Widening and strengthening of Safidon to Jind Road (SH-14) in Jind District under the CRIF Scheme. The document also identifies the work in connection with widening and strengthening of Panipat\u2013Safidon (SH-11) and Safidon\u2013Jind roads under the CRIF Scheme.",
    status: "Ongoing",
    seoTitle: "Safidon\u2013Jind Road SH-14 Widening | Suraj Construction",
    seoDescription:
      "Suraj Construction is widening and strengthening Safidon\u2013Jind Road (SH-14), Haryana, under the CRIF Scheme. PWD contract valued at \u20b956.61 Cr.",
    description:
      "This project involves widening and strengthening works on Safidon to Jind Road (SH-14) in Jind District, Haryana, under the Central Road and Infrastructure Fund (CRIF) Scheme. The project documentation also references the estimate for four-laning, widening and strengthening of the Panipat\u2013Safidon section of SH-11 and the Safidon\u2013Jind section under the same scheme. The work is being undertaken for the Executive Engineer, Provincial Division, PWD Building & Roads, Jind. The contract value recorded in the ongoing-project statement is \u20b956.61 crore. The contract document is Memo No. HEWP/AC-131741 dated 18 February 2026. The stipulated period of completion is 18 months from the appointed date. However, the appointed date had not been declared when the statement was prepared, so an exact completion date is not available in the document. The full \u20b956.61 crore is recorded as the value of work remaining to be completed.",
    details: {
      completionDate: "18 months from appointed date",
      executionMode: "CRIF Scheme",
      governmentAuthority: "Public Works Department, Building & Roads, Haryana",
    },
  },
  {
    id: "old-nh71a-paver",
    image: "/Projects/12.jpg",
    name: "Old NH-71A \u2014 Rohtak Road Paver & Drainage Works",
    type: "Interlocking Paver Block and Side Drain Construction",
    category: "Not specified",
    client: "Executive Engineer Provincial Division-I, Rohtak",
    location: "Rohtak District, Haryana",
    cost: "\u20b913.41 Cr",
    scope:
      "Providing and laying 80 mm thick interlocking paver blocks and construction of side drain from Km 3.110 to Km 4.000 on Old NH-71A (Rajiv Chowk to Vita Milk Plant), Rohtak District, from Gate No. 2 to Khatu Shyam Mandir.",
    status: "Ongoing",
    seoTitle: "Old NH-71A Rohtak Paver & Drain Works | Suraj Construction",
    seoDescription:
      "Suraj Construction is laying interlocking paver blocks and a side drain on Old NH-71A, Rohtak, Haryana, an ongoing \u20b913.41 Cr PWD project.",
    description:
      "This project comprises road-side infrastructure improvement works on Old NH-71A in Rohtak District, Haryana. The scope includes providing and laying 80 mm thick interlocking paver blocks and constructing a side drain along the section from Km 3.110 to Km 4.000 on the Rajiv Chowk to Vita Milk Plant corridor. The documented work extends from Gate No. 2 to Khatu Shyam Mandir. The project is being undertaken for the Executive Engineer, Provincial Division-I, Rohtak, under PWD Building & Roads, Haryana. The contract value is \u20b913.41 crore, with the project recorded under Tender ID 2024_HRY_392400_1 and Memo No. HEWP/AC-90777 dated 6 March 2026. The stipulated completion period is five months from the date of start, while the anticipated completion period is recorded as six months from the date of start. The document does not provide an actual calendar start or completion date, so those should not be added to the website without further documentation.",
    details: {
      completionDate: "5 months from date of start",
      executionMode: "Tender ID \u2013 2024_HRY_392400_1",
      governmentAuthority: "PWD B&R, Haryana",
    },
  },
  {
    id: "6-lane-vup-nh09",
    image: "/Projects/13.jpg",
    name: "6-Lane VUP at Km 264.237 \u2014 Hisar\u2013Dabwali NH-09",
    type: "Construction of 6-Lane Vehicular Underpass (VUP) with Service Road",
    category: "Not specified",
    client: "NHAI Regional Office, Chandigarh",
    location: "Haryana",
    cost: "\u20b912.29 Cr",
    scope:
      "Construction of a 6-lane VUP at Km 264.237 along with a service road in Village Kherika on the Hisar\u2013Dabwali section of NH-9 in Haryana.",
    status: "Ongoing",
    seoTitle: "6-Lane VUP NH-09 Hisar\u2013Dabwali | Suraj Construction",
    seoDescription:
      "Suraj Construction is building a 6-lane vehicular underpass with service road at Km 264.237, Village Kherika, on NH-09, worth \u20b912.29 Cr.",
    description:
      "This project involves the construction of a 6-lane Vehicular Underpass (VUP) at Km 264.237 along with an associated service road in Village Kherika on the Hisar\u2013Dabwali section of NH-9 in Haryana. The work is being undertaken for the National Highways Authority of India, Regional Office Chandigarh, on an EPC basis. The contract value recorded in the ongoing-project statement is \u20b912.29 crore. The contract was dated 22 December 2025 and has a stipulated completion period of 12 months from the appointed date. The document records the entire \u20b912.29 crore as the value of work remaining to be completed. The appointed date had not been declared in the statement, therefore a calendar completion date cannot be established from the supplied document. The project specifically covers the construction of the 6-lane VUP and service road at the identified location in Village Kherika, adding grade-separated road infrastructure to the company's ongoing highway works in Haryana.",
    details: {
      completionDate: "12 months from appointed date",
      executionMode: "EPC",
      governmentAuthority: "National Highways Authority of India",
    },
  },
  {
    id: "tejaji-nagar-balwara",
    image: "/Projects/14.jpg",
    name: "Tejaji Nagar\u2013Balwara Section \u2014 NH-347DG, Madhya Pradesh",
    type: "One-Time Improvement of Existing Highway",
    category: "Not specified",
    client: "NHAI Regional Office, Bhopal",
    location: "Madhya Pradesh",
    cost: "\u20b969.68 Cr",
    scope:
      "One-time improvement of the existing Tejaji Nagar to Balwara section of NH-347DG (Indore to Boregaon Package-II), covering a length of 22.52 km, in Madhya Pradesh.",
    status: "Ongoing",
    seoTitle: "Tejaji Nagar\u2013Balwara NH-347DG, MP | Suraj Construction",
    seoDescription:
      "Suraj Construction is improving the 22.52 km Tejaji Nagar\u2013Balwara stretch of NH-347DG in Madhya Pradesh, an NHAI project valued at \u20b969.68 Cr.",
    description:
      "This project involves one-time improvement works on the existing Tejaji Nagar to Balwara section of NH-347DG, identified as Indore to Boregaon Package-II, in Madhya Pradesh. The documented project length is 22.52 km. The work is being undertaken for the National Highways Authority of India, Regional Office Bhopal, under an item-rate contract. The contract value recorded in the ongoing-project statement is \u20b969.68 crore, with the contract dated 20 July 2026. The stipulated completion period is 12 months from the appointed date. The appointed date had not been declared in the supplied statement, so a calendar start or completion date is not available. The full \u20b969.68 crore is recorded as the value of work remaining to be completed, with an escalation factor of 1.00. The project adds ongoing highway improvement work in Madhya Pradesh to Suraj Construction Company's portfolio and covers a clearly defined 22.52 km section of NH-347DG.",
    details: {
      completionDate: "12 months from appointed date",
      executionMode: "Item Rate Basis",
      governmentAuthority: "National Highways Authority of India",
    },
  },
];
