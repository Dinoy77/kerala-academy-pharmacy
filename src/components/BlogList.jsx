import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function useResponsive() {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return width < 768;
}

const IMG = "/assets/images/";

export const blogs = [
  {
    slug: "blog1", image: IMG + "b1.jpg", title: "12 June World Day Against Child Labour", desc: "World Day Against Child Labour, observed on June 12th, holds a special place in the domain of Kerala Academy of Pharmacy. This day highlights the",
    date: "June 12, 2023",
    content: [
      { type: "p", text: "World Day Against Child Labour, observed on June 12th, holds a special place in the domain of Kerala Academy of Pharmacy. This day highlights the importance of enhancing knowledge about child labor, fostering positive attitudes towards child rights, and implementing best practices to eliminate child labor. Increasing awareness about the various forms of child labor, its root causes, and the impact on children's physical and mental development is essential. Promoting positive attitudes involves recognizing children's rights, advocating for their well-being, and creating a supportive environment that encourages education and protects them from exploitation. It is crucial to implement best practices by supporting initiatives that provide educational opportunities, vocational training, and social support systems for children and their families. World Day Against Child Labour calls upon individuals, organizations, and governments to collectively work towards eradicating child labor through knowledge, positive attitudes, and effective practices." },
    ],
  },
  {
    slug: "blog2", image: IMG + "brain.jpg", title: "8 June World Brain Tumour Day", desc: "World Brain Tumour Day, observed on June 8th, holds significant importance for the domain of Kerala Academy of Pharmacy. This day emphasizes the need to",
    date: "June 08, 2023",
    content: [
      { type: "p", text: "World Brain Tumour Day, observed on June 8th, holds significant importance for the domain of Kerala Academy of Pharmacy. This day emphasizes the need to enhance our knowledge about brain tumors, develop positive attitudes towards affected individuals, and implement best practices for their care. By gaining accurate information about brain tumors, we can improve our understanding of their causes, symptoms, and treatment options. Adopting a compassionate attitude towards patients and their families is crucial to provide emotional support and eliminate stigma surrounding brain tumors. Furthermore, implementing best practices involves early detection, prompt medical intervention, and ongoing monitoring for better prognosis. World Brain Tumour Day encourages professionals and communities to work together, fostering a comprehensive approach to brain tumour management based on knowledge, positive attitudes, and effective practices." },
    ],
  },
  {
    slug: "blog3", image: IMG + "b3.jpg", title: "7 June World Food Safety Day", desc: "For the Kerala Academy of Pharmacy (KAP), World Food Safety Day on June 7 holds immense importance as the institution recognizes the critical role of",
    date: "June 08, 2023",
    content: [
      { type: "p", text: "For the Kerala Academy of Pharmacy, World Food Safety Day on June 7 holds immense importance as the institution recognizes the critical role of pharmacists in ensuring safe and high-quality medications. This day provides an opportunity for KAP to emphasize the significance of food safety within the pharmaceutical industry." },
      { type: "p", text: "The academy emphasizes the role of pharmacists in ensuring that medications are free from contaminants and meet stringent quality standards. Students are trained in good manufacturing practices (GMP) and proper handling of pharmaceutical ingredients to minimize the risk of cross-contamination and maintain the integrity of the drug products." },
    ],
  },
  {
    slug: "blog4", image: IMG + "b4.png", title: "The Impact of Technology on Pharmacy Practice: Opportunities and Challenges", desc: "The practice of pharmacy has been transformed by technology, which has created both opportunities and challenges for pharmacists, healthcare providers, and patients. As technology continues",
    date: "May 17, 2023",
    content: [
      { type: "p", text: "The practice of pharmacy has been transformed by technology, which has created both opportunities and challenges for pharmacists, healthcare providers, and patients. As technology continues to advance at a rapid pace, it is important for pharmacy professionals to keep up with these changes and adapt to new ways of working. In this context, the Kerala Academy of Pharmacy plays a critical role in helping pharmacy professionals stay up-to-date with the latest technological developments and prepare for the future." },
      { type: "subheading", text: "Opportunities created by technology in pharmacy practice" },
      { type: "p", text: "One of the key opportunities created by technology in pharmacy practice is the ability to improve patient outcomes and reduce errors. For example, electronic prescribing systems can help to reduce medication errors by providing physicians and pharmacists with accurate, up-to-date medication information. In addition, mobile health applications and telemedicine platforms can provide patients with easier access to healthcare services, improving their health outcomes and quality of life." },
      { type: "p", text: "Another opportunity created by technology is the ability to streamline pharmacy operations and improve efficiency. For example, automation and robotics can help to speed up medication dispensing, while electronic health records can improve communication and coordination between healthcare providers. This can help to reduce costs and improve patient satisfaction." },
      { type: "subheading", text: "Challenges created by technology in pharmacy practice" },
      { type: "p", text: "Despite the many benefits of technology in pharmacy practice, there are also several challenges that need to be addressed. One of the key challenges is the risk of data breaches and cyber-attacks, which can compromise patient privacy and security. In addition, there is a risk that technology may replace human interaction and expertise, leading to a decline in the quality of care." },
      { type: "p", text: "Another challenge is the need for ongoing training and education for pharmacy professionals. As new technologies emerge, pharmacy professionals need to keep up-to-date with the latest developments and learn new skills in order to use these technologies effectively." },
      { type: "subheading", text: "How Kerala Academy of Pharmacy helps in this situation" },
      { type: "p", text: "KAP plays a critical role in helping pharmacy professionals navigate the opportunities and challenges created by technology in pharmacy practice. The academy emphasizes the role of pharmacists in ensuring that medications are free from contaminants and meet stringent quality standards. Students are trained in good manufacturing practices (GMP) and proper handling of pharmaceutical ingredients to minimize the risk of cross-contamination and maintain the integrity of the drug products. One of the key ways that KAP helps is through its curriculum, which includes courses on emerging technologies in pharmacy practice. This helps students and professionals stay up-to-date with the latest trends and developments in pharmacy technology, and equips them with the knowledge and skills needed to leverage technology in their practice." },
      { type: "p", text: "In addition, KAP provides opportunities for students and professionals to engage with technology through its research and innovation programs. These programs encourage students and professionals to develop new technologies and applications that can improve pharmacy practice, and provide them with the resources and support needed to bring their ideas to fruition." },
      { type: "p", text: "Another way that KAP helps pharmacy professionals is through its continuing education programs. These programs provide ongoing training and education for pharmacy professionals, ensuring that they stay up-to-date with the latest developments and are able to use technology effectively in their practice." },
      { type: "p", text: "In conclusion, the impact of technology on pharmacy practice is significant and continuing to grow. While there are challenges associated with technology, there are also many opportunities for improving patient care and streamlining pharmacy operations. KAP plays an important role in helping pharmacy professionals navigate these opportunities and challenges, by providing quality education, training, and research support. By doing so, KAP helps to ensure that pharmacy professionals are equipped to meet the needs of patients and communities in an increasingly technological world." },
    ],
  },

  {
    slug: "blog5", image: IMG + "b5.jpg", title: "The Role of Pharmacists in the Healthcare System: What You Need to Know?", desc: "Pharmacists play a critical role in the healthcare system by ensuring the safe and effective use of medications. They work collaboratively with other healthcare professionals,",
    date: "May 17, 2023",
    content: [
      { type: "p", text: "Pharmacists play a critical role in the healthcare system by ensuring the safe and effective use of medications. They work collaboratively with other healthcare professionals, including physicians, nurses, and other allied health professionals, to optimize medication therapy and improve patient outcomes. In this, we'll explore the role of pharmacists in the healthcare system, their responsibilities, and their impact on patient care." },
      {
        type: "list", items: [
          "Medication Management: One of the most important roles of pharmacists in the healthcare system is medication management. Pharmacists work with patients and other healthcare professionals to ensure that medications are prescribed, dispensed, and used safely and effectively.",
          "Medication Therapy Management (MTM): Pharmacists conduct MTM programs to optimize medication therapy and prevent medication-related problems. This involves reviewing a patient's medication regimen, identifying potential drug interactions, and making recommendations to improve therapy.",
          "Medication Reconciliation: Pharmacists ensure that patients receive the correct medication at the right dose, frequency, and route. They conduct medication reconciliation to compare a patient's current medication regimen with their medication history, identify discrepancies, and resolve any issues.",
          "Adverse Drug Event (ADE) Management: Pharmacists are responsible for monitoring patients for ADEs, identifying potential causes of ADEs, and making recommendations to prevent and manage them.",
          "Patient Counselling: Pharmacists play a crucial role in patient counselling by providing information and education about medications. They help patients understand the purpose of their medication, how to take it, and what to expect.",
          "Medication Counselling: Pharmacists counsel patients on how to take their medication, including dosing instructions, potential side effects, and interactions with other medications.",
          "Disease Management Counselling: Pharmacists provide counselling on disease management strategies, including lifestyle modifications, diet, and exercise.",
          "Immunization Counselling: Pharmacists educate patients about the importance of immunizations, the risks and benefits, and the recommended schedule.",
          "Drug Distribution: Pharmacists are responsible for ensuring the safe and effective distribution of medications.",
          "Prescription Dispensing: Pharmacists dispense prescriptions to patients and provide counselling on how to take the medication.",
          "Compounding: Pharmacists prepare customized medications for patients with specific needs, such as paediatric patients or patients with allergies.",
          "Drug Utilization Review (DUR): Pharmacists conduct DUR to ensure that medications are prescribed and dispensed safely and effectively. This includes reviewing a patient's medication regimen, identifying potential drug interactions, and making recommendations to improve therapy.",
          "Collaborative Practice: Pharmacists work collaboratively with other healthcare professionals to optimize patient care.",
          "Interprofessional Collaboration: Pharmacists collaborate with physicians, nurses, and other healthcare professionals to develop treatment plans and ensure that patients receive comprehensive care.",
          "Medication Management Team: Pharmacists work with other healthcare professionals to form a medication management team, responsible for optimizing medication therapy and improving patient outcomes.",
          "Drug Information Resources: Pharmacists are a valuable resource for drug information. They provide up-to-date information about medications, including dosing, side effects, and drug interactions.",
          "Public Health: Pharmacists play a vital role in public health by promoting healthy lifestyles, preventing disease, and providing access to healthcare services.",
          "Disease Prevention: Pharmacists provide counselling on disease prevention strategies, such as immunizations, healthy lifestyles, and early detection.",
          "Health Promotion: Pharmacists promote healthy lifestyles, including diet, exercise, and smoking cessation.",
          "Access to Healthcare Services: Pharmacists provide access to healthcare services, including medication management, disease management, and immunizations.",
        ]
      },
    ],
  },
  {
    slug: "blog6", image: IMG + "b6.jpg", title: "How to Succeed in Your Pharmacy Program: Tips, Strategies and Exploring Different Career Paths", desc: "(Kerala Academy of Pharmacy placement cell). Pharmacy is a vast field with diverse career paths that range from community pharmacy to clinical pharmacy, research, academia, and industry. Each career path requires",
    date: "May 17, 2023",
    content: [
      { type: "p", text: "The practice of pharmacy has been transformed by technology, which has created both opportunities and challenges for pharmacists, healthcare providers, and patients. As technology continues to advance at a rapid pace, it is important for pharmacy professionals to keep up with these changes and adapt to new ways of working. In this context, the Kerala Academy of Pharmacy plays a critical role in helping pharmacy professionals stay up-to-date with the latest technological developments and prepare for the future." },
      { type: "subheading", text: "Opportunities created by technology in pharmacy practice" },
      { type: "p", text: "One of the key opportunities created by technology in pharmacy practice is the ability to improve patient outcomes and reduce errors. For example, electronic prescribing systems can help to reduce medication errors by providing physicians and pharmacists with accurate, up-to-date medication information. In addition, mobile health applications and telemedicine platforms can provide patients with easier access to healthcare services, improving their health outcomes and quality of life." },
      { type: "p", text: "Another opportunity created by technology is the ability to streamline pharmacy operations and improve efficiency. For example, automation and robotics can help to speed up medication dispensing, while electronic health records can improve communication and coordination between healthcare providers. This can help to reduce costs and improve patient satisfaction." },
      { type: "subheading", text: "Challenges created by technology in pharmacy practice" },
      { type: "p", text: "Despite the many benefits of technology in pharmacy practice, there are also several challenges that need to be addressed. One of the key challenges is the risk of data breaches and cyber-attacks, which can compromise patient privacy and security. In addition, there is a risk that technology may replace human interaction and expertise, leading to a decline in the quality of care." },
      { type: "p", text: "Another challenge is the need for ongoing training and education for pharmacy professionals. As new technologies emerge, pharmacy professionals need to keep up-to-date with the latest developments and learn new skills in order to use these technologies effectively." },
      { type: "subheading", text: "How Kerala Academy of Pharmacy helps in this situation" },
      { type: "p", text: "KAP plays a critical role in helping pharmacy professionals navigate the opportunities and challenges created by technology in pharmacy practice. One of the key ways that KAP helps is through its curriculum, which includes courses on emerging technologies in pharmacy practice. This helps students and professionals stay up-to-date with the latest trends and developments in pharmacy technology, and equips them with the knowledge and skills needed to leverage technology in their practice." },
      { type: "p", text: "In addition, KAP provides opportunities for students and professionals to engage with technology through its research and innovation programs. These programs encourage students and professionals to develop new technologies and applications that can improve pharmacy practice, and provide them with the resources and support needed to bring their ideas to fruition." },
      { type: "p", text: "Another way that KAP helps pharmacy professionals is through its continuing education programs. These programs provide ongoing training and education for pharmacy professionals, ensuring that they stay up-to-date with the latest developments and are able to use technology effectively in their practice." },
      { type: "p", text: "In conclusion, the impact of technology on pharmacy practice is significant and continuing to grow. While there are challenges associated with technology, there are also many opportunities for improving patient care and streamlining pharmacy operations. KAP plays an important role in helping pharmacy professionals navigate these opportunities and challenges, by providing quality education, training, and research support. By doing so, KAP helps to ensure that pharmacy professionals are equipped to meet the needs of patients and communities in an increasingly technological world." },
    ],
  },
  {
    slug: "blog7", image: IMG + "b7.webp", title: "International Nurse's Day — 12th May", desc: "International Nurse's Day is a time to celebrate the hard work and dedication of nurses all over the world. Nurses are an essential part of",
    date: "May 12, 2023",
    content: [
      { type: "p", text: `International Nurse's Day is a time to celebrate the hard work and dedication of nurses all over the world. Nurses are an essential part of the healthcare system and play a vital role in providing care to patients. This year's theme, "Nurses: A voice to lead," recognizes the critical role that nurses play in advocating for patient care and promoting health equity. Kerala Academy of Pharmacy takes this opportunity to thank and acknowledge the invaluable contributions of nurses, who work tirelessly to improve the health and well-being of people in communities everywhere.` },
    ],
  },
  {
    slug: "blog8", image: IMG + "b8.jpg", title: "World Tuberculosis (TB) Day — 24th March", desc: "Tuberculosis is caused by a bacterium called Mycobacterium tuberculosis and primarily affects the lungs, but can also infect other parts of the body. It is",
    date: "March 24, 2023",
    content: [
      { type: "p", text: "Tuberculosis is caused by a bacterium called Mycobacterium tuberculosis and primarily affects the lungs, but can also infect other parts of the body. It is spread through the air when infected individuals cough, sneeze, or talk, making it highly contagious." },
      { type: "p", text: "On World TB Day, observed on March 24th of every year, organizations and communities around the world come together to raise awareness about the disease and promote strategies for prevention and treatment. This includes encouraging people to get tested and seek treatment if they suspect they have TB, advocating for improved access to healthcare services, and supporting research efforts to develop better treatments and a vaccine. By raising awareness and taking action, Kerala Academy of Pharmacy intends to eliminate TB and create a healthier and more equitable world for all." },
    ],
  },

  {
    slug: "blog9", image: IMG + "b9.png", title: "Employee Appreciation Day — 4th March", desc: "Employee Appreciation Day is a time set aside to honour and celebrate the efforts and labor of workers. Every year, it is usually observed on",
    date: "March 4, 2023",
    content: [
      { type: "p", text: "Employee Appreciation Day is a time set aside to honour and celebrate the efforts and labor of workers. Every year, it is usually observed on the first Friday in March. Employers can use the day to express their appreciation for their employees' hard work and devotion. The importance of constructive feedback and encouragement for staff members, which encourages them to go above and beyond, is recognized by Kerala Academy of Pharmacy." },
    ],
  },
  {
    slug: "blog10", image: IMG + "b10.jpg", title: "Self Injury Awareness Day", desc: "On March 1, a grassroots global awareness campaign known as Self-Injury Awareness Day (SIAD) is held annually. Some people choose to be more open about",
    date: "March 1, 2023",
    content: [
      { type: "p", text: `On March 1, a grassroots global awareness campaign known as Self-Injury Awareness Day (SIAD) is held annually. Some people choose to be more open about their own self-injury during this time, as well as in the weeks before and after, and awareness organizations make extra efforts to spread awareness of these topics. Some wear orange awareness ribbons, write "LOVE" on their arms, draw butterflies on their wrists to support "the Butterfly Project," wear beaded bracelets, or wear wristbands to raise awareness of self-harm. Kerala Academy of Pharmacy hopes to educate medical professionals about self-harm and dispel common misconceptions by participating in SIAD.` },
    ],
  },
  {
    slug: "blog11", image: IMG + "b11.png", title: "Rare Disease Day — 28th February", desc: "The celebration of Rare Disease Day, which takes place on the last day of February, aims to improve access to treatment and medical representation for",
    date: "February 28, 2023",
    content: [
      { type: "p", text: "The celebration of Rare Disease Day, which takes place on the last day of February, aims to improve access to treatment and medical representation for people with rare diseases and their families. The day was established in 2008 by the European Organization for Rare Diseases to raise awareness of illnesses that are either not known about or are often ignored. That organization claims that there is insufficient support for individuals with rare diseases and their families, as well as inadequate treatment for many rare diseases; additionally, there had not previously been a day to represent those affected by rare diseases, despite the fact that numerous days were already devoted to people with specific diseases." },
      { type: "p", text: "The rare diseases community is brought into a dialogue by Kerala Academy of Pharmacy, which is beneficial to both parties, to advance research and therapeutic efforts, and share the most recent information about rare diseases with stakeholders." },
    ],
  },
  {
    slug: "blog12", image: IMG + "b12.jpg", title: "National Science Day — 28th February", desc: 'To commemorate the announcement of the discovery of the "Raman Effect," the Indian government, led by then-Prime Minister Rajiv Gandhi, declared February 28 to be',
    date: "February 28, 2023",
    content: [
      { type: "p", text: `To commemorate the announcement of the discovery of the "Raman Effect," the Indian government, led by then-Prime Minister Rajiv Gandhi, declared February 28 to be National Science Day in 1986. In light of India's G20 presidency, this year's event is being held with the theme "Global Science for Global Wellbeing."` },
      { type: "p", text: "The discovery that earned physicist Sir CV Raman his Nobel Prize in 1930 was the Raman Effect. Raman discovered, in a deceptively straightforward experiment, that a portion of the light scattered by a liquid is of a different colour when a stream of light passes through it. In the first seven years after its announcement, this discovery was the subject of over 700 papers, and the scientific community immediately recognized it as ground-breaking. This day is observed by Kerala Academy of Pharmacy to foster growth, new discoveries, and experimentation within the Indian scientific community." },
    ],
  },

  {
    slug: "blog13", image: IMG + "b13.webp", title: "National Deworming Day — 10th February", desc: "The Ministry of Health and Family Welfare created the National Deworming Day. Every year on February 10, the nation's children are encouraged to be worm-free",
    date: "February 10, 2023",
    content: [
      { type: "p", text: "The Ministry of Health and Family Welfare created the National Deworming Day. Every year on February 10, the nation's children are encouraged to be worm-free. The day is observed twice a year in various states and Union Territories where the prevalence of soil-transmitted helminths is higher. This is one of the biggest public health programs in the nation, according to the National Health Portal — in a short amount of time, the initiative hopes to reach a lot of kids. In India, children between the ages of 1 and 14 are at risk of contracting parasitic intestinal worms, also known as Soil Transmitted Helminths. Kerala Academy of Pharmacy stresses the impact on the healthcare system, higher academic achievement and school involvement levels, and potential increases in working-age people's productivity." },
    ],
  },
  {
    slug: "blog14", image: IMG + "b14.png", title: "International Day of Zero Tolerance for Female Genital Mutilation — 6th February", desc: "As part of the UN's efforts to end female genital mutilation, the organization sponsors the International Day of Zero Tolerance for Female Genital Mutilation every",
    date: "February 6, 2023",
    content: [
      { type: "p", text: "As part of the UN's efforts to end female genital mutilation, the organization sponsors the International Day of Zero Tolerance for Female Genital Mutilation every year on February 6. It was initially shown in 2003. A violation of a girl's or woman's human rights, female genital mutilation (FGM) refers to all practices that entail changing or harming the female genitalia for non-medical purposes. It is a severe kind of discrimination against women and girls and reflects ingrained gender inequality. They are also denied their rights to life when the process results in death, as well as their rights to safety, physical integrity, and freedom from torture and other cruel, inhumane, or humiliating treatment." },
      { type: "p", text: "Kerala Academy of Pharmacy believes coordinated efforts that incorporate entire communities and are focused on gender equality and human rights are required. Strong focus on societal discussion and offering communities the ability to work together to end the practice should be placed by these programs. They must also take care of the reproductive and sexual health requirements of women and girls who are impacted by its effects." },
    ],
  },
  {
    slug: "blog15", image: IMG + "b15.jpg", title: "World Cancer Day — 4th February", desc: "On February 4, the world observes World Cancer Day, a day set aside to promote cancer awareness and the prevention, identification, and treatment of the",
    date: "February 4, 2023",
    content: [
      { type: "p", text: `On February 4, the world observes World Cancer Day, a day set aside to promote cancer awareness and the prevention, identification, and treatment of the disease. In order to improve access to high-quality care, screening, early detection, treatment, and palliative care, World Cancer Day aims to raise awareness of cancer as a public health concern. The "close the care gap" campaign aims to raise awareness of the disparities in cancer care and encourage action to advance their redress. Kerala Academy of Pharmacy promotes cancer awareness and early detection since prevention is preferable to treatment.` },
    ],
  },
  {
    slug: "blog16", image: IMG + "b16.jpg", title: "Is B.Pharm a Good Career?", desc: "The field of pharmacy education has come a long way in recent years. In addition, the covid-19 ruthless times of today have demonstrated it more",
    date: "January 3, 2023",
    content: [
      { type: "p", text: "The field of pharmacy education has come a long way in recent years. In addition, the covid-19 ruthless times of today have demonstrated it more clearly. Pharmacy has emerged as a crucial component of the health care system because of the ongoing infectious situation. The industry is making a significant contribution to improving the standard of living, curing diseases, and ensuring the best possible community safety." },
      { type: "p", text: "Good practices in pharmaceutical education have led to the formation of trustworthy and ethical professionals instead of just drug dispensers. India is the 12th largest exporter of medical products worldwide. The pharmacist's role has evolved beyond that of merely dispensing drugs — from being primarily a drug dispenser to medical counsellors, educators, researchers, management experts, and so on. A person with a degree in pharmacy has access to a sea of exciting opportunities. India comes in 14th for value and third for volume in terms of pharmaceutical production. The nation is home to more than 3,000 domestic pharmaceutical manufacturers." },
      { type: "p", text: "The B Pharmacy Degree is a four-year undergraduate program that aims to give students a very thorough education in the pharmaceutical industry. It now focuses on clinical practice, industrial pharmacy, hospital pharmacy, and traditional healing systems, among other areas. It is regarded as one of the most appealing healthcare degrees due to improved professional development, rewards, and professional recognition. B Pharmacy is a career-focused program in India. India's Economic Survey for 2021 predicts a threefold increase in the domestic market over the next ten years. The Indian pharma industry is expected to grow by up to 45 percent by 2025, resulting in the creation of 58,000 new jobs in spite of the industry's growing challenges. After graduation, the student can start their own pharmacy or apply to various government departments. The pharmaceutical industry accounts for roughly 6.6% of the country's total merchandise exports. India had shipped 586.4 million COVID-19 vaccines to 71 countries by May 2021. These exports included grants (81.3 million), commercial exports (339.7 million), and COVAX exports (165.5 million). The United States is the largest market for Indian drugs, which are imported by more than 200 nations worldwide. Worldwide, nonexclusive medications represent 20% of the nation's commodities, making it the biggest supplier." },
      { type: "p", text: "Kerala Academy of Pharmacy assures that there are numerous opportunities for B.Pharm students interested in working abroad, and many Indian businesses and government agencies are hiring B.Pharm students. With this degree, you can work in areas like pharmaceutical engineering, medicinal chemistry, drugs and medicines, and more in the pharmaceutical industry." },
      { type: "p", text: "Kerala Academy of Pharmacy provides the best Pharmacy courses suitable for the changing era. Graduates can work in packaging and marketing, quality control, production, and other departments at pharmaceutical companies. After earning their B.Pharm degree, students who wish to continue their education in pharmacy can enrol in the Master of Pharmacy (M.Pharm) program. Since medication started, pharmacology has existed. As the medical field grows, so does the need for pharmacists. Pharmacists assist patients in getting well on time by utilizing their expertise in ensuring that patients receive their prescribed medications." },
      { type: "p", text: "The pharmaceutical industry has undergone numerous transformations in recent decades, and as a prestigious and dynamic institution, Kerala Academy of Pharmacy gives you the key to your successful pharmacy career. The pharmaceutical industry, on the other hand, has been significantly affected by automated technology and the internet. The way pharmacists carry out their daily responsibilities has been completely transformed by technology. The exact nature of pharmaceutical science means that qualified pharmacists will always be in demand. With the extension of medical services offices, alongside advancements in medical care as a whole, the demand for knowledgeable pharmacists has expanded." },
    ],
  },

  {
    slug: "blog17", image: IMG + "b18.jpg", title: "Opportunities in Pharmacy Industry in the Post-Covid Era", desc: "The pharmacy industry's need has been demonstrated to be of the utmost importance in the wake of Covid-19. The need of the hour is to",
    date: "January 3, 2023",
    content: [
      { type: "p", text: "The pharmacy industry's need has been demonstrated to be of the utmost importance in the wake of Covid-19. The need of the hour is to prepare in advance for any pandemic. Educationists all over the world have been forced to re-evaluate the role education plays in containing a pandemic that has ravaged the entire world. The Pharmacy Council of India (PCI) asserts that the post-COVID period will be highly competitive for the health care industry as a whole and the pharmacy industry in particular. Graduates and researchers in the field of pharmacy will see an alarming rise in job opportunities in the near future." },
      { type: "p", text: "According to Kerala Academy of Pharmacy, the Indian pharmaceutical industry requires an immediate supply of skilled workers in order to remain globally competitive. In order to cultivate a skilled workforce, institutions and colleges that offer pharmacy education ought to be committed to maintaining high standards of education. Pharmacists are essential to the provision of health care, and pharmacies play a significant role in healthcare. In preparing for such a massive pandemic, pharmacists and pharmaceutical institutes play an important role. There are numerous career options in the field of pharmacy. Throughout the pandemic, pharmacy services in a variety of locations have been highlighted." },
      { type: "p", text: "Graduate pharmacists can work on the approval of novel treatments in the regulatory department without compromising the evaluation of the data that backs the proposed treatment. In addition, they might collaborate with the FDA and CDSCO to regulate the drug and cosmetic industries, as well as their manufacturing facilities and distribution channels, with the national regulatory authority. They could also go into the field of hospital pharmacy, where they'd be responsible for ensuring that patients have access to the medicines they need at all times. In temporary emergency Covid-19 hospitals, they can assist in troubleshooting issues with critical care medicines, adjusting workflows to preserve personal protective equipment, and establishing new pharmacy services." },
      { type: "p", text: "One of the most crucial areas in which pharmacy graduates can directly serve society is community pharmacy. The pharmacist working in this space will be engaged with guiding and educating the general population on ways of preventing different sicknesses, giving precise information about drugs, discouraging self-prescription, etc." },
      { type: "p", text: "Drug organizations and clinical device manufacturers utilize B.Pharm graduates and experienced faculty to manage day-to-day activities and quality of formulations. In conclusion, students are being offered lucrative and promising career options in the pharmacy industry. Students should enrol in pharmacy programs at Kerala Academy of Pharmacy because pharmacy graduates have ample job opportunities in both the private and public sectors. They can pursue government positions — for example, hospital pharmacists, government drug distributors, and drug inspectors, among others. In conclusion, graduates can look forward to fulfilling careers in the pharmacy industry, both domestically and internationally." },
    ],
  },
  {
    slug: "blog18", image: IMG + "b19.png", title: "International Volunteer Day for Economic and Social Development — 5th December", desc: "Every year on December 5, the world observes the International Volunteer Day for Economic and Social Development. International Volunteer Day, or IVD for short, is",
    date: "December 5, 2023",
    content: [
      { type: "p", text: "Every year on December 5, the world observes the International Volunteer Day for Economic and Social Development. International Volunteer Day, or IVD for short, is another name for this occasion. In 1985, the United Nations General Assembly established it as a worldwide observance. Volunteerism is practiced by a variety of organizations and individuals on this day. They additionally advance it by encouraging everyone, particularly governments, to support the efforts of volunteerism as well as to recognize volunteerism contributions." },
      { type: "p", text: "New opportunities for the growth of the global economy are presented by the emergence of improved transportation technologies, seaports, airports, and communication routes. The development of intermodal transport, the processing of cargo within the system of international transport corridors, the establishment of multi-profile international transport holdings, and the integration of the transportation industry all play a role in the formation of the global transportation infrastructure." },
      { type: "p", text: "Critical insights are more important than ever as the COVID-19 pandemic and human responses to it shape the future. Progress toward the Sustainable Development Goals (SDGs), as outlined in the 2030 Agenda for Sustainable Development, was mixed even prior to the pandemic. This was the conclusion of several overarching assessments and reports that were released at the end of 2019 and brought together the most recent research and data on progress in economic, environmental, and social sustainability. These reports informed five summits that were held during the forty-fourth session of the United Nations General Assembly. In the case of some targets, progress was encouraging prior to the COVID-19 crisis; in some instances, it was present but insufficient. In yet other instances, the trends were even lagging behind." },
      { type: "p", text: "These reports, taken as a whole, issued dire warnings and demanded immediate action to accelerate progress toward the SDGs and the Paris Agreement on Climate Change, conveying the overall message that business as usual would not be sufficient and that the window of opportunity to act was rapidly closing. In addition, the reports emphasized that vulnerable populations — those in countries in special circumstances, both during and after conflict; migrants, women, elderly people, youth, individuals with disabilities, and others, including indigenous people — remained at risk of being left behind." },
      { type: "p", text: "The pandemic's human tragedy — more than half a million people have died worldwide so far — has created additional obstacles. While mandated restrictions on activities have contributed to the prevention of even more fatalities, they have also resulted in the loss of livelihoods and incomes of those affected, the omission of vaccinations against other infectious diseases, the depletion of mental health, a disproportionate increase in the burden of care work, and an increased risk of domestic violence for women in particular." },
      { type: "p", text: "Kerala Academy of Pharmacy notes that decoupling strategies should include, among other things, encouraging the use of innovative and long-lasting technologies that make better use of natural resources. It would be ideal for this to be supplemented by expansions in asset extraction tax collection to avoid the so-called rebound effect." },
    ],
  },
  {
    slug: "blog19", image: IMG + "b20.jpg", title: "World Computer Literacy Day — 2nd December", desc: "We observe World Computer Literacy Day on December 2. N.I.I.T started the holiday in 2001 as a way to celebrate the company's 20th anniversary and",
    date: "December 2, 2023",
    content: [
      { type: "p", text: "We observe World Computer Literacy Day on December 2. N.I.I.T started the holiday in 2001 as a way to celebrate the company's 20th anniversary and raise computer literacy among women and children, especially." },
      { type: "p", text: "With the realization of digital tools, the significance of education becomes more apparent during the Covid-19 pandemic. In March 2020, a global pandemic was declared as a result of the COVID-19 epidemic. Covid-19, which affects all aspects of life, has resulted in outcomes that necessitate a re-examination of education and training methods. During the pandemic in our country, one of the various measures taken for public health was to stop teaching in person. Emergency applications for distance education have been launched by educational establishments all over the world to make up for the time lost to education as a result of the pandemic. It is common knowledge that lifelong learning can benefit from distance education, and emergency distance education is a necessity in times of crisis." },
      { type: "p", text: "Because of the pandemic, education has been moved to digital platforms. As a result, the idea of digital literacy has become a significant topic of discussion. Specifically, the research aims to demonstrate the significance of digital literacy in the process of distance education, as well as the necessity of digital literacy levels among teachers and students, who are significant stakeholders in education." },
      { type: "p", text: `The abacus, Napier's bones, Pascaline adding machine, and Leibniz Wheel were just a few of the numerous inventions that people used to perform calculations prior to this one. However, the fact that the "difference" engine could solve logarithm tables and was powered by steam set it apart from previous models. Since then, laptops, smartphones, and desktop computers have all undergone a variety of design and improvement processes — in the past, computers could be so large that they occupied an entire room! However, we now have access to all of that scientific technology thanks to modern technology.` },
      { type: "p", text: "In today's world, where information spreads quickly, misleading outcomes for individuals and society are caused by false information — false information that contains false information, low reliability, and false information created for provocation. The creation and dissemination of inaccurate, abusive, and misleading information is the primary factor in the development of internet risks. Digital literacy takes on greater significance in this instance: some ideas come to the forefront in order to survive in the digital society created by the rapid development of digital technologies. One of them is the idea of digital literacy." },
      { type: "p", text: "Kerala Academy of Pharmacy stresses the importance of digital or computer literacy in the health care system. The Telehealth Equity Coalition asserts that community health workers, health coaches, and health navigators are excellent resources for promoting digital health literacy. Patients typically trust these people because they have shared experiences. Community health workers also have training in how to use digital health tools, which gives them both the social capital and technical expertise they need to teach digital health literacy. That is why our institution, KAP, provides students with hands-on experience in digital health literacy and other technologies." },
    ],
  },
  {
    slug: "blog20", image: IMG + "b21.webp", title: "World AIDS Day — December 1", desc: "World AIDS Day has been observed on December 1 every year since 1988 to honour those who have lost their lives to the disease and",
    date: "December 1, 2023",
    content: [
      { type: "p", text: `World AIDS Day has been observed on December 1 every year since 1988 to honour those who have lost their lives to the disease and to raise awareness of the AIDS pandemic brought on by HIV. The theme for World AIDS Day this year is "Rock the Ribbon." The National AIDS Trust is committed to combating HIV-related stigma and discrimination, securing the rights of HIV-positive individuals, and preventing new HIV infections. This year's World AIDS Day is centred on equalizing, which is the theme. Each of us is being urged by UNAIDS to address the disparities that impede AIDS elimination progress. This year's theme joins a growing list of issues that World AIDS Day has brought to people's attention around the world.` },
      { type: "p", text: "Acquired immunodeficiency syndrome, also known as AIDS, is a series of fatal infections brought on by the human immunodeficiency virus, or HIV. HIV attacks and destroys certain white blood cells, which are necessary for the body's immune system. HIV combines with the genetic material of the infected cell and can remain inactive for years. The majority of HIV-infected people are still in good health and can live for years without showing symptoms or with only minor ailments. Although they have HIV, they do not have AIDS." },
      { type: "p", text: "After a variable timeframe, the infection becomes activated and afterward leads progressively to the serious diseases and different circumstances that describe AIDS. AIDS is a fatal illness, despite the fact that there are treatments that can prolong life. The search for a vaccine and, ultimately, a cure continues. However, the only method of control currently available is transmission prevention. HIV targets two groups of white blood cells called CD4+ lymphocytes and monocytes/macrophages. Normally, macrophages and CD4+ cells assist in identifying and eliminating infectious agents that invade a cell and cause disease. The virus kills CD4+ lymphocytes in an HIV-infected person, while the macrophages carry the virus to a number of vital organs as reservoirs." },
      { type: "p", text: `HIV enters the CD4+ lymphocyte after attaching itself to it. The cell produces more HIV as a result of this, but the cell is destroyed as a result. The immune system weakens and is less able to combat viral and bacterial infections as the body's CD4+ cells are depleted. The infected person is more likely to contract a wide range of "opportunistic" infections, like pneumonia caused by Pneumocystis carinii, which rarely strikes healthy people.` },
      { type: "p", text: "HIV-positive individuals are particularly vulnerable to tuberculosis (TB), particularly in regions of the world where both TB and HIV infection are rising at alarming rates. Due to HIV's attack on their immune systems, millions of TB carriers who would have escaped active tuberculosis are now developing the disease. TB also progresses more quickly in HIV-infected individuals and is more likely to result in death if not treated or diagnosed. TB is now the leading cause of death among HIV-positive Africans. People who have HIV are also more likely to develop otherwise uncommon cancers like Kaposi's sarcoma, which is a tumour of the blood vessels or lymphatic vessels. Additionally, HIV may attack the brain, resulting in neuropsychiatric and neurological issues." },
      { type: "p", text: "About half of adults with HIV are likely to develop AIDS within ten years of first becoming infected. The good news is that improved drugs used in early treatment significantly extend AIDS patients' lives." },
      { type: "p", text: "Kerala Academy of Pharmacy spreads adequate awareness about AIDS Day and its importance — increasing the acceptance, accessibility, and quality of HIV treatment, testing, and prevention services to ensure that everyone is served well, and supporting reform of laws, policies, and practices to combat HIV-positive people's prejudice and isolation in important and disadvantaged communities." },
    ],
  },

  {
    slug: "blogh1", image: IMG + "lab.jpeg", title: "Study About Pharmaceutical Chemistry", desc: "The drug discovery and development is the main AIM. The drug discovery and development process is designed to ensure that only those pharmaceutical products that are both safe and effective are brought to market.",
    date: "May 10, 2021",
    content: [
      { type: "p", text: "The drug discovery and development is the main aim. The drug discovery and development process is designed to ensure that only those pharmaceutical products that are both safe and effective are brought to market. The drug discovery process begins with the screening of selected protein (drug target), leading to the identification of a chemical compound with biological activity (hit)." },
      { type: "p", text: "After confirmation of biological activity and chemical feasibility, the hit becomes a lead structure which is improved through lead optimization until it fulfills the criteria for a drug candidate, after clinical trials." },
      { type: "p", text: "The advent of Molecular Biology, coupled with advances in biological screening and synthetic chemistry, has allowed a combination of both knowledge around the receptor and random screening to be used for drug discovery. These include cloning and expressing human receptors and enzyme information that allow high-throughput, automated screening and application of combinatorial chemistry." },
      { type: "p", text: "Substances which are useful in treating diseases may be obtained from several sources — mineral, plants, animals, micro-organism, biotechnological method and synthetic chemicals." },
      { type: "p", text: "There are two distinct fields of pharmaceutical chemistry: synthetic pharmaceuticals and analytical pharmaceuticals. Synthetic pharmaceutical chemists create new drugs and products in the most cost-effective way that produces the least amount of negative side-effect. Analytical pharmaceutical chemists design and apply methods of chemical analysis to a product to ensure that the drug is refined." },
      { type: "subheading", text: "Scope" },
      {
        type: "list", items: [
          "Quality Control — Chemical analysis is done in the quality control department to ensure the quality of raw materials, intermediates, and finished products. The final product is tested to ensure that it is composed of essential components within a pre-defined range.",
          "Development of New Products (Drug Manufacturing) — Analytical chemists also play a role in the development of new products.",
          "Diagnosis (Clinical Pharmacist or Hospital Pharmacist) — Chemical analysis is required in hospitals to diagnose the cause of any illness and to monitor the patient's overall condition.",
          "Farming (Soil Analyst) — Soil analysis is done to know the amount of essential nutrients (nitrogen, phosphorus and potassium) and other trace elements essential for plant growth. The result of this analysis influences the type and quantity of fertilizer to be used.",
          "Chemical Research — The data obtained through analysis with the application of analytical chemistry builds up the foundation of chemical research, as it is used by every chemist, either directly or indirectly.",
          "Medical and Biological Research — It provides information useful for understanding vital processes, which helps develop better quality medicines for curing various diseases.",
        ]
      },
    ],
  },
  {
    slug: "blogh2", image: IMG + "lab2.jpeg", title: "Study About Pharma Practices", desc: "Pharmacy Practice is an interesting branch of pharmacy focused on patient-centred activities. Pharmacy Practice consists of subjects like Pharmacotherapeutics, Clinical Pharmacy, Hospital Pharmacy etc. and",
    date: "May 15, 2021",
    content: [
      { type: "p", text: "Pharmacy Practice is an interesting branch of pharmacy focused on patient-centred activities. Pharmacy Practice consists of subjects like Pharmacotherapeutics, Clinical Pharmacy, Hospital Pharmacy etc. and patient-centred activities like Ward Rounds, Medication History Monitoring, Patient Counselling, Drug Information Services, Adverse Drug Reaction Monitoring etc. After successful completion of Pharmacy Practice one can become a competent, socially responsible pharmacist, who can make a valuable contribution to the patient care area. Scope of Pharmacy Practice lies in the following areas:" },
      {
        type: "list", items: [
          "Clinical Pharmacist",
          "Regulatory Affairs Associate",
          "Academician",
          "Clinical Research Coordinator",
          "Clinical Research Scientist",
          "Patient Safety — Pharmacovigilance Associate in Indian Pharmacopoeia Commission",
          "Technical Data Associate in Pharmacovigilance",
          "Medical Writer",
          "Clinical Data Management Executive",
          "Medical Coder",
        ]
      },
    ],
  },
  {
    slug: "blogh3", image: IMG + "kap2.jpeg", title: "Study About Pharmaceutics", desc: "Pharmaceutics is the discipline of Pharmacy that manages the way toward turning a new chemical entity (NCE) or old drugs into a medicine to be utilized securely and adequately by patients.",
    date: "May 22, 2021",
    content: [
      { type: "p", text: "Pharmaceutics is the discipline of Pharmacy that manages the way toward turning a new chemical entity (NCE) or old drugs into a medicine to be utilized securely and adequately by patients. Pharmaceutics deals with the formulation of a pure drug substance into a dosage form." },
      { type: "subheading", text: "Branches of Pharmaceutics Incorporate" },
      {
        type: "list", items: [
          "Pharmaceutical Formulation",
          "Dispensing Pharmacy",
          "Pharmaceutical Technology",
          "Pharmaceutical Manufacturing",
          "Physical Pharmacy",
          "Biopharmaceutics & Pharmacokinetics",
          "Pharmaceutical Jurisprudence",
        ]
      },
      { type: "p", text: "Pharmaceutics has various career options which therefore make it easier for you to choose based on the area of preference, and the Master of Pharmacy degree in Pharmaceutics has scope in the formulation of drugs, research in formulations and excipients, manufacturing, drug regulatory affairs, as well as in academic sectors like teaching." },
    ],
  },
  {
    slug: "blogh4", image: IMG + "kap3.jpeg", title: "Study About Pharmacognosy and Phytochemistry", desc: "Pharmacognosy deals with the study of Natural Drugs having Therapeutic Value. Pharmacognosy and Phytochemistry is a subject of mere importance since ancient time as it provides natural remedies for diseases with no/less side effects.",
    date: "May 23, 2021",
    content: [
      { type: "p", text: "Pharmacognosy deals with the study of Natural Drugs having Therapeutic Value. Pharmacognosy and Phytochemistry is a subject of great importance since ancient times, as it provides natural remedies for diseases with no or fewer side effects. Herbal medicines are known for their safety and efficacy when compared with the Allopathic system of medicine. Hence the subject Pharmacognosy and Phytochemistry bears an immense scope in the field of medicine." },
      { type: "subheading", text: "Scope of the Subject Relies in Various Sectors Like" },
      {
        type: "list", items: [
          "Research & Development",
          "Herbal Formulations",
          "Regulatory Affairs",
          "Herbal Standardization of Drugs & Drug Products",
          "Academic Field",
          "Quality Assurance & Quality Control",
          "Cosmetic Industries",
          "Tissue Culture & Plant Genetics",
        ]
      },
    ],
  },

  {
    slug: "blogh5", image: IMG + "lab.jpeg", title: "Study About Pharmacology", desc: "Pharmacology is the scientific discipline that studies drugs and their mechanisms by which they alter biological systems. The research areas focused in the Department are Toxicological Studies",
    date: "May 28, 2021",
    content: [
      { type: "p", text: "Pharmacology is the scientific discipline that studies drugs and their mechanisms by which they alter biological systems. The research areas focused in the Department are Toxicological Studies, Neuropharmacological Screening of Herbal Products & Synthetic Drugs. A pharmacology degree can open up careers either in scientific areas like research or drug development, or other fields such as patenting and teaching, including:" },
      {
        type: "list", items: [
          "Academic Researcher",
          "Biomedical Scientist",
          "Clinical Research Associate",
          "Clinical Scientist, Biochemistry",
          "Clinical Scientist, Immunology",
          "Medicinal Chemist",
          "Pharmacologist",
          "Research Scientist, Medical",
          "Scientific Laboratory Technician",
          "Community Pharmacist",
          "Higher Education Lecturer",
          "Medical Science Liaison",
          "Neuroscientist",
          "Patent Attorney",
          "Regulatory Affairs Officer",
          "Science Writer",
          "Toxicologist",
        ]
      },
    ],
  },
  {
    slug: "blogh6", image: IMG + "cls.jpeg", title: "Pharmacopoeia", desc: "Pharmacopoeia is an authenticated compilation, describing the standards of Strength and Purity of Drugs, Medicinal Preparations, Chemicals etc.",
    date: "May 30, 2021",
    content: [
      { type: "p", text: "Pharmacopoeia is an authenticated compilation, describing the standards of Strength and Purity of Drugs, Medicinal Preparations, Chemicals etc., used in a specific country or region. The term Pharmacopoeia originates from the Greek words \"Pharmakon\" meaning \"Drug\" and \"Poeia\" meaning \"to make,\" so — \"Drug-Making.\"" },
      { type: "subheading", text: "Many Countries Have Their Own Pharmacopoeia, Like" },
      {
        type: "list", items: [
          "U.S. Pharmacopoeia",
          "British Pharmacopoeia",
          "European Pharmacopoeia",
          "Indian Pharmacopoeia",
        ]
      },
      { type: "subheading", text: "Indian Pharmacopoeia" },
      { type: "p", text: "In India, at the time of pre-independence, British Pharmacopoeia (BP) was considered the approved reference guide. In 1955, Indian Pharmacopoeia (IP), first edition, was published under the guidance of Dr. B.N. Ghosh. IP was written in English and the drug monographs were scripted in Latin. IP's first edition supplement was published in 1960. In 1966, IP's second edition was published, and its supplement in 1975. The third edition of IP was published in 1985, followed by its addendum in 1989 and 1991." },
      { type: "p", text: "In 1996, the fourth edition was published, followed by its addendum in 2000 and 2002. IP's fifth edition was published in 2007, followed by its addendum in 2008; it has 3 volumes. In 2005, the Indian Pharmacopoeia Commission (IPC) was established, and in 2009, IPC began working as an autonomous institution under the Ministry of Health and Family Welfare, Government of India, located in Ghaziabad, Uttar Pradesh. The main function of IPC is to publish IP and its addendum intermittently. IP's 6th edition was published in 2010, followed by its addendum in 2012 (also 3 volumes). In 2014, the 7th edition of IP was published, with its addendum in 2015. The 8th and current edition of IP was published in 2018, consisting of 4 volumes. Pharmacopoeia acts as a book of reference in laboratories, industries and academic institutions to strengthen the knowledge of aspirants and help them uplift their careers." },
      { type: "p", text: "Prepared by Geethu, Librarian, Kerala Academy of Pharmacy." },
    ],
  },
  {
    slug: "blogh7", image: IMG + "lab2.jpeg", title: "How to Become a Pharmacist", desc: "In India, if you want to become a Pharmacist you need to study D-Pharm (Diploma in Pharmacy). The eligibility for admission to D-Pharm is a pass in 12th STD with",
    date: "September 14, 2021",
    content: [
      { type: "p", text: "In India, if you want to become a Pharmacist you need to study D-Pharm (Diploma in Pharmacy). The eligibility for getting admission to D-Pharm is a pass in 12th STD with Physics, Chemistry, Biology or Mathematics. The major subjects in 12th are Physics and Chemistry, with any of the subject combinations." },
      { type: "p", text: "D-Pharmacy course is also termed as D-Pharm by some people. The D-Pharm course duration is 2 years, where you need to study theory as well as practical. The exam pattern for D-Pharm is annual, and D-Pharmacy is not a very tough program if the student is really interested in becoming a Pharmacist." },
      { type: "p", text: "Once the student has completed the D-Pharmacy course in India, they need to register with the State Pharmacy Council to get the Pharmacy Council Registration Certificate. Using this State Pharmacy Council Registration Certificate, students can apply for a license to start a pharmacy (medical store) with the Drug Control Department — the government authority that takes care of functions related to medicine." },
      { type: "p", text: "D-Pharmacy is one of the easiest, most attractive, job-oriented and relevant courses for a student to build a career. Once the student completes the D-Pharmacy course, they can start earning at least ₹15,000 to ₹25,000 per month as a salary. Once you become a Pharmacist, you are always a Pharmacist. The Pharmacist job is very respectful in our society. D-Pharm is a very good option for both girls and boys, but it gives more power to girl students, as they gain a career in hand which they can use forever." },
      { type: "p", text: "Students who complete D-Pharmacy will get a job easily as a Pharmacist, as there is good demand in our country for medical stores as well as pharmacies in private and government hospitals. D-Pharm holders can apply for jobs in both private and government sectors." },
      { type: "p", text: "A pharmacy can be opened anywhere in India once the student becomes a registered pharmacist. As the demand for medicine usage is increasing, and there is much importance for vaccination in the country, pharmacists always have a role in healthcare." },
      { type: "p", text: "Do you know what areas a D-Pharmacy holder or registered pharmacist can get jobs in?" },
      {
        type: "list", items: [
          "Pharmacist in Government or Private Hospitals",
          "Pharmacy Quality Analyst",
          "Quality Controller",
          "Lab Technician — Pharmacy Colleges",
          "Pharmacy Distributor",
          "Medical Representative",
          "Own Medical Store",
        ]
      },
      { type: "p", text: "There are good opportunities if D-Pharm holders look into higher studies. Once students complete D-Pharm, they can join B-Pharmacy through the Lateral Entry option — at present, they can join the 2nd year of the B-Pharmacy program and complete the course in 3 years. After completing B-Pharmacy, they can also work as a teacher for D-Pharmacy colleges." },
    ],
  },
  {
    slug: "blogh8", image: IMG + "b17.jpg", title: "Why Pharmacy is a Good Career?", desc: "The pharmaceutical industry is not an exception when it comes to how successful its managers are. A pharmaceutical company's success depends on having skilled and creative managers. Some people are born with leadership skills, while others learn to develop them over time.",
    date: "January 3, 2023",
    content: [
      { type: "p", text: "The pharmaceutical industry is not an exception when it comes to how successful its managers are. A pharmaceutical company's success depends on having skilled and creative managers. Some people are born with leadership skills, while others learn to develop them over time. The pharmaceutical industry's senior managers all have a variety of skills and backgrounds, including an MBA." },
      { type: "p", text: `Working in a business-related field like sales and marketing as a college student will help you advance in your career. Pharmaceutical companies are interested in learning about your skills and experiences, whether you are applying for a position in the pharmaceutical sales department or the marketing department. To find a suitable candidate for a position, many pharmaceutical companies also require a "brag book." This is in addition to learning more about the company's products and services. You will study pharmaceutical engineering and medicinal chemistry as a Bachelor of Pharmacy (B.Pharm) student. The choices that are accessible to you once you graduate are almost endless. A few fields are moderately new, while others have a colossal scope. Let's take a look at a few of the most well-liked occupations for B.Pharm graduates. Following graduation from the program, you can work in a variety of fields, some of which are listed below.` },
      { type: "p", text: "You have two options after completing the Bachelor of Pharmacy program: you can work in research or the field. You can pursue a lectureship or choose a career in research that is always growing. A postgraduate certification in the field can lead to master status in a particular field. You can work as a professor or researcher in the pharmaceutical industry if you have a lot of talent. For those with a B.Pharm, there are numerous lucrative options after graduation. One can work as a pharmacist or a drug inspector in both the private and public sectors. Other options include opening a pharmacy store or becoming a medical underwriter. It will be helpful to have some background knowledge in the area of interest, regardless of the career path chosen. You can track down the right career path for you by recognizing your passion." },
      { type: "p", text: "In addition, earning a master's degree in pharmacy has a number of advantages that will assist you in your work. Although it may take some time, you can advance to the position of Area Manager within three years. You can move into a Product Management Team (PMT) after four to seven years. Members of the PMT might also be M.Pharm candidates with a focus on pharmacology. It is also possible for MBA graduates to enter this industry. In the end, you will be in charge of all marketing, sales, and financial matters." },
      { type: "p", text: "You might want to think about working in the pharmaceutical industry after earning a Bachelor of Pharmacy degree. Pharmaceutical professionals will find a plethora of job opportunities in this rapidly expanding field. This area is among the most encouraging areas for analysts in India and is expected to develop dramatically. In addition, many B.Pharm graduates have found employment in the clinical research sector, despite the fact that most positions necessitate additional education. You can make affordable medicines and help the underprivileged, as well as have an impact on the lives of the poor worldwide, in this industry. Your insight into the clinical field will likewise assist you in figuring out the business's nuances and its specialties." },
      { type: "p", text: "Kerala Academy of Pharmacy helps you to be able to earn a higher salary and broaden your career options with a master's degree in pharmacy. However, keep in mind that a B.Pharm degree is only the beginning of your journey." },
    ],
  },
];

export default function BlogList() {
  const isMobile = useResponsive();
  const styles = getStyles(isMobile);

  return (
    <div style={styles.page}>
      {/* Hero */}
      <section style={styles.hero}>
        <div style={styles.heroOverlay} />
        <div style={styles.heroContent}>
          <div style={styles.eyebrow}>Read & Learn</div>
          <h1 style={styles.heroHeading}>Our Blogs</h1>
        </div>
      </section>

      {/* Grid */}
      <section style={styles.section}>
        <div style={styles.grid}>
          {blogs.map((b) => (
            <div style={styles.card} key={b.slug}>
              <div
                style={{ ...styles.cardImage, backgroundImage: `url("${b.image}")` }}
              />
              <div style={styles.cardBody}>
                <h3 style={styles.cardTitle}>{b.title}</h3>
                <p style={styles.cardDesc}>{b.desc}</p>
                <Link to={`/blogs/${b.slug}`} style={styles.readMore}>
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

const getStyles = (isMobile) => ({
  page: { fontFamily: "system-ui, sans-serif", color: "#24211f" },

  hero: {
    position: "relative",
    height: isMobile ? "180px" : "260px",
    backgroundImage: `url("${IMG}blog.jpg")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  heroOverlay: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(0deg, rgba(58,20,24,0.85), rgba(58,20,24,0.35))",
  },
  heroContent: {
    position: "relative",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: "#f8ecc9",
  },
  heroHeading: { fontSize: isMobile ? "24px" : "34px", margin: 0 },
  eyebrow: {
    fontSize: "11px",
    letterSpacing: "0.12em",
    color: "#c9a227",
    textTransform: "uppercase",
    marginBottom: "8px",
    fontWeight: 600,
  },

  section: {
    padding: isMobile ? "28px 20px" : "48px 40px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr" : "repeat(4, 1fr)",
    gap: isMobile ? "18px" : "22px",
  },
  card: {
    background: "#fff",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 4px 20px rgba(58,20,24,0.07)",
    display: "flex",
    flexDirection: "column",
  },
  cardImage: {
    width: "100%",
    height: "150px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "#ece6d8",
  },
  cardBody: {
    padding: "16px",
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
  cardTitle: {
    fontSize: "14px",
    color: "#3a1418",
    marginBottom: "8px",
    lineHeight: 1.35,
  },
  cardDesc: {
    fontSize: "12.5px",
    color: "#6b625a",
    lineHeight: 1.6,
    marginBottom: "14px",
    flex: 1,
  },
  readMore: {
    alignSelf: "flex-start",
    fontSize: "12.5px",
    fontWeight: 600,
    color: "#fff",
    background: "#6b1f27",
    padding: "7px 16px",
    borderRadius: "6px",
    textDecoration: "none",
  },
});