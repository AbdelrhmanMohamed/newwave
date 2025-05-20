// "use client";

// import Link from "next/link";
// import { Facebook, Instagram, Linkedin, ArrowUp, Loader2 } from "lucide-react";
// import { useQuery } from "@tanstack/react-query";

// // Types for our footer data
// export interface FooterData {
//   company: {
//     name: string;
//     description: string;
//   };
//   contact: {
//     address: string;
//     city: string;
//     state: string;
//     country: string;
//     zip: string;
//     phone: string;
//     email: string;
//     workingHours: string;
//   };
//   services: string[];
//   navigation: {
//     name: string;
//     href: string;
//   }[];
//   socialMedia: {
//     platform: string;
//     href: string;
//   }[];
//   copyright: string;
// }

// export default function Footer() {
//   const { data, isLoading, error } = useQuery({
//     queryKey: ["footerData"],
//     queryFn: fetchFooterData,
//   });

//   const footerData = data as FooterData;

//   return (
//     <footer className="bg-[#121212] text-gray-300">
//       <div className="container mx-auto px-4 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {/* Logo and About */}
//           <div>
//             <div className="flex items-center mb-6">
//               <div className="h-2 w-2 bg-white rounded-full mr-1"></div>
//               <span className="text-2xl font-bold">
//                 <span className="text-red-500">
//                   {footerData.company.name.substring(0, 3)}
//                 </span>
//                 <span className="text-white">
//                   {footerData.company.name.substring(3)}
//                 </span>
//               </span>
//               <div className="h-2 w-2 bg-red-500 rounded-full ml-1"></div>
//             </div>
//             <p className="text-sm mb-8">{footerData.company.description}</p>
//             <div className="flex items-center">
//               <div className="h-[1px] bg-gray-700 flex-grow mr-4"></div>
//               <div className="h-2 w-2 bg-red-500 rounded-full mr-2"></div>
//               <span className="text-xl font-medium text-white">Subscribe</span>
//             </div>
//           </div>

//           {/* Contact Us */}
//           <div>
//             <h3 className="text-2xl font-medium text-white mb-6">Contact Us</h3>
//             <div className="space-y-4">
//               <p className="text-sm">
//                 No: {footerData.contact.address},
//                 <br />
//                 {footerData.contact.city}, {footerData.contact.state},{" "}
//                 {footerData.contact.country} {footerData.contact.zip}
//               </p>
//               <p className="text-sm">Phone : {footerData.contact.phone}</p>
//               <p className="text-sm">Mail : {footerData.contact.email}</p>
//               <p className="text-sm">
//                 Working Hours : {footerData.contact.workingHours}
//               </p>
//             </div>
//           </div>

//           {/* Services */}
//           <div>
//             <h3 className="text-2xl font-medium text-white mb-6">Services</h3>
//             <div className="space-y-4">
//               {footerData.services.map((service, index) => (
//                 <p key={index} className="text-sm">
//                   {service}
//                 </p>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Navigation */}
//       <div className="border-t border-gray-800">
//         <div className="container mx-auto px-4 py-6">
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <div className="flex space-x-8 mb-4 md:mb-0">
//               {footerData.navigation.map((item, index) => (
//                 <Link
//                   key={index}
//                   href={item.href}
//                   className="text-sm hover:text-white transition-colors"
//                 >
//                   {item.name}
//                 </Link>
//               ))}
//             </div>

//             <div className="flex items-center space-x-4">
//               <div className="flex space-x-4 mr-8">
//                 {footerData.socialMedia.map((social, index) => {
//                   const Icon = getSocialIcon(social.platform);
//                   return (
//                     <Link
//                       key={index}
//                       href={social.href}
//                       className="h-8 w-8 rounded-full border border-gray-700 flex items-center justify-center hover:border-white transition-colors"
//                     >
//                       <Icon size={16} />
//                     </Link>
//                   );
//                 })}
//               </div>
//               <p className="text-xs">{footerData.copyright}</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Back to top button */}
//       <div className="fixed bottom-6 right-6">
//         <Link
//           href="#top"
//           className="h-10 w-10 bg-red-500 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-red-600 transition-colors"
//         >
//           <ArrowUp size={20} />
//         </Link>
//       </div>
//     </footer>
//   );
// }

// // Helper function to get the appropriate social media icon
// function getSocialIcon(platform: string) {
//   switch (platform.toLowerCase()) {
//     case "linkedin":
//       return Linkedin;
//     case "facebook":
//       return Facebook;
//     case "instagram":
//       return Instagram;
//     default:
//       return Linkedin;
//   }
// }

import React from "react";

export default function Footer() {
  return <div>Footer</div>;
}
