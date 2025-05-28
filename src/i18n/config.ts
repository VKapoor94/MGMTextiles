import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      home: 'Home',
      about: 'About Us',
      services: 'Services',
      products: {
        "title": "Products",
        "intro": {
          "title": "High-Quality Industrial Fabrics",
          "description": "At MGM Textiles, we produce high-quality industrial fabrics — designed for high-performance applications across multiple industries.",
          "scrim": "Scrim fabric is a lightweight, open-weave reinforcement fabric made from polyester spun, filament, fiberglass or synthetic fibers. It is engineered to provide strength, dimensional stability and resistance to heat, chemicals & abrasion.",
          "industries": " Used as a structural support layer, scrim fabric enhances durability in composite materials, filter systems, coated fabrics, insulation products and more — making it a critical component across heavy industries like filtration, cement, automotive and marine.",
          "nonwoven": ""
        },
        "range": {
          "title": "Our Product Range",
          "polyesterMultifilament": {
            "title": "Polyester Multifilament Scrim",
            "features": "• Designed for non-woven needle felt applications\n• Enhances fabric durability and performance\n• Ideal for high-stress industrial uses"
          },
          "spunPolyester": {
            "title": "Spun Polyester Scrim",
            "features": "• Needle-felt non-woven scrim fabric\n• Offers high strength and structural support\n• Used for reinforcement purposes"
          },
          "strobel": {
            "title": "Strobel Scrim Fabric",
            "features": "• Specialized light weight scrim fabric used in shoe lining in the footwear industry\n• Provides support, comfort and helps maintain shape."
          },
          "hose": {
            "title": "Hose Fabric",
            "features": "• Fabric used to provide strength and for  reinforcement purposes in various industries\n• Designed for high pressure and  heavy-duty applications"
          }
        }
      },
      industries: 'Industries',
      contacttext: 'Contact Us',
      contact: {
        title: 'Get in Touch',
        address: {
          title: 'Address',
          content: 'Plot No – 1626/2, GIDC Sarigam, Bhilad, District Valsad, Gujarat – 396155',
          viewOnMap: 'View on Map'
        },
        contactInfo: {
          title: 'Contact Information',
          email: 'mgmtex2324@gmail.com',
          phone1: '+91 9867739947',
          phone2: '+91 9967589957'
        },
        businessHours: {
          title: 'Business Hours',
          weekdays: 'Monday - Friday: 9:00 AM - 6:00 PM',
          saturday: 'Saturday: 9:00 AM - 2:00 PM'
        },
        form: {
          title: 'Send us a Message',
          name: 'Name',
          email: 'Email',
          subject: 'Subject',
          message: 'Message',
          sendButton: 'Send Message',
          phone: 'Phone Number',
          phoneRequired: 'Phone number is required',
          phoneInvalid: 'Invalid phone number'
        }
      },
      slider: {
        technicalFabrics: 'Filtration industry',
        qualityControl: 'Marine Industry',
        customSolutions: 'Cement industry',
        description: 'Leading manufacturer of industrial textile solutions'
      },
      welcome: {
        title: 'Welcome to MGM Textiles',
        subtitle: 'Leading Manufacturer of Industrial Textile Solutions',
        description: 'We are committed to providing high-quality textile solutions for various industries. Our expertise in technical fabrics and innovative manufacturing processes sets us apart in the industry.'
      },
      serviceSection: {
        title: 'Our Services',
        weavingExcellence: {
          title: 'Weaving Excellence',
          description: 'Using latest technology machines and modern techniques, we produce high-performance fabrics that meet the demanding industrial standards.'
        },
        customJobWork: {
          title: 'Custom Job Work',
          description: 'We provide flexible and tailored weaving solutions designed to meet your specific requirements.'
        },
        endToEndSupport: {
          title: 'End to End Support',
          description: 'From material selection to final delivery, we offer a seamless experience.'
        }
      },
      industrySection: {
        title: 'Industries We Serve',
        automotive: {
          title: 'Automotive',
          description: '•	Used as a backing material for car seats, carpet, upholstery and door panels providing strength and preventing deformation\n',
          properties: '•	Offers high durability, flexibility and form stability in automotive components.\n',
          applications: ''
        },
          filtration: {
            "title": "Filtration",
            "description": "• Acts as a support layer in filter media (air, liquid, and bag filters).\n",
            "properties": "•	Provides strength, dimensional stability, and protection during high-pressure operations and cleaning cycles.\n",
            "applications": ""
              },
        cement:{
          "title": "Cement",
          "description": "•	Used as reinforcement in filter bags and dust collection systems.\n",
          "properties": "•	Adds strength and crack resistance in cementitious boards or panels.\n",
          "applications": "•	Serves as backing in protective sheeting and thermal/acoustic insulation.\n"
        },
        marine:{
          "title": "Marine",
          "description": "•	Used as reinforcement in marine batteries to enhance the overall performance and lifespan of the battery system\n",
          "properties": "•	Withstands harsh conditions: saltwater, heat, vibration and chemical exposure.\n",
          "applications": "• Provides structural support, durability and protection in demanding marine environments"
        }      
      },
      footer: {
        companyInfo: {
          title: 'Company Information',
          description: 'MGM Textiles is a leading manufacturer of industrial textile solutions, providing high-quality products and services to various industries.'
        },
        quickLinks: {
          title: 'Quick Links',
          home: 'Home',
          about: 'About Us',
          services: 'Services',
          industries: 'Industries',
          contact: 'Contact'
        },
        contactInfo: {
          title: 'Contact Information',
          address: 'Plot No – 1626/2, GIDC Sarigam, Bhilad, District Valsad, Gujarat – 396155',
          viewOnMap: 'View on Map',
          email: 'mgmtex2324@gmail.com',
          phone1: '+91 9867739947',
          phone2: '+91 9967589957'
        },
        businessHours: {
          title: 'Business Hours',
          weekdays: 'Monday - Friday: 9:00 AM - 6:00 PM',
          saturday: 'Saturday: 9:00 AM - 2:00 PM'
        }
      }
    }
  },
  hi: {
    translation: {
      home: 'होम',
      about: 'हमारे बारे में',
      services: 'हमारी सेवाएं',
      products: 'हमारे उत्पाद',
      industries: 'हमारे उद्योग',
      contacttext: 'संपर्क करें',
      contact: {
        title: 'संपर्क करें',
        address: {
          title: 'पता',
          content: 'प्लॉट नंबर - 1626, केमिकल जोन, जीआईडीसी सरीगाम, भिलाड, जिला वलसाड, गुजरात - 396155',
          viewOnMap: 'मैप पर देखें'
        },
        contactInfo: {
          title: 'संपर्क जानकारी',
          email: 'mgmtex2324@gmail.com',
          phone1: '+91 9867739947',
          phone2: '+91 9967589957'
        },
        businessHours: {
          title: 'कार्य समय',
          weekdays: 'सोमवार - शुक्रवार: सुबह 9:00 - शाम 6:00',
          saturday: 'शनिवार: सुबह 9:00 - दोपहर 2:00'
        },
        form: {
          title: 'हमें संदेश भेजें',
          name: 'नाम',
          email: 'ईमेल',
          subject: 'विषय',
          message: 'संदेश',
          sendButton: 'संदेश भेजें',
          phone: 'फोन नंबर',
          phoneRequired: 'फोन नंबर आवश्यक है',
          phoneInvalid: 'फोन नंबर अमान्य है'
        }
      },
      slider: {
        technicalFabrics: 'तकनीकी कपड़े',
        qualityControl: 'गुणवत्ता नियंत्रण',
        customSolutions: 'कस्टम समाधान',
        description: 'औद्योगिक टेक्सटाइल समाधानों के अग्रणी निर्माता'
      },
      welcome: {
        title: 'MGM टेक्सटाइल्स में आपका स्वागत है',
        subtitle: 'औद्योगिक टेक्सटाइल समाधानों के अग्रणी निर्माता',
        description: 'हम विभिन्न उद्योगों के लिए उच्च गुणवत्ता वाले टेक्सटाइल समाधान प्रदान करने के लिए प्रतिबद्ध हैं। तकनीकी कपड़ों और नवीन विनिर्माण प्रक्रियाओं में हमारी विशेषज्ञता हमें उद्योग में अलग बनाती है।'
      },
      serviceSection: {
        title: 'हमारी सेवाएं',
        weavingExcellence: {
          title: 'बुनाई उत्कृष्टता',
          description: 'नवीनतम तकनीकी मशीनों और आधुनिक तकनीकों का उपयोग करके, हम उच्च-प्रदर्शन वाले कपड़े का उत्पादन करते हैं जो मांग वाले औद्योगिक मानकों को पूरा करते हैं।'
        },
        customJobWork: {
          title: 'कस्टम जॉब वर्क',
          description: 'हम आपकी विशिष्ट आवश्यकताओं को पूरा करने के लिए लचीले और अनुकूलित बुनाई समाधान प्रदान करते हैं।'
        },
        endToEndSupport: {
          title: 'एंड टू एंड सपोर्ट',
          description: 'सामग्री चयन से लेकर अंतिम डिलीवरी तक, हम एक निर्बाध अनुभव प्रदान करते हैं।'
        }
      },
      industrySection: {
        title: 'हमारे उद्योग',
        automotive: {
          "title": "ऑटोमोेटिव उद्योग",
          "description": "• सीट बेल्ट, एयरबैग, सीटिंग फैब्रिक और अन्य ऑटोमोेटिव घटकों के लिए डिज़ाइन किए गए कपड़े।\n",
          "properties": "• उच्च घर्षण प्रतिरोध, यूवी संरक्षण, हल्का लेकिन मजबूत और टिकाऊ।\n",
          "applications": "• बुने और बिना बुने कपड़े की संरचनाओं में उपलब्ध।"
        }
        ,
        filtration: {
          "title": "निस्यंदन उद्योग",
          "description": "• स्क्रिम फैब्रिक का उपयोग फिल्टर बैग, फिल्टर प्रेस, वैक्यूम बेल्ट फिल्टर और धूल संग्रहण प्रणालियों में किया जाता है।",
          "properties": "• उच्च छिद्रता और उत्कृष्ट वायु पारगम्यता।",
          "applications": "• दीर्घकालिक स्थायित्व के लिए स्थिर रासायनिक प्रतिरोध।\n• उपकरणों, कर्मचारियों और कार्य परिवेश की आवश्यक सुरक्षा प्रदान करता है।"
        },
        cement: {
          "title": "सीमेंट उद्योग",
          "description": "• कंक्रीट सुदृढ़ीकरण, फिल्टर बैग, रबर होज़ और बेल्टिंग फैब्रिक में उपयोग किए जाने वाले कपड़े।\n",
          "properties": "• अत्यधिक टिकाऊ, रासायनिक प्रतिरोधी और तेजी से सूखने वाले।\n",
          "applications": "• पॉलिएस्टर फाइबर कंक्रीट की सतह को बेहतर बनाते हैं, जिससे पानी और गंदगी के प्रवेश को रोका जा सकता है।\n"
        },
        marine:
        {
          "title": "समुद्री उद्योग",
          "description": "• समुद्री बैटरी कवर और सुरक्षात्मक समुद्री उपकरणों के लिए विशेष स्क्रिम फैब्रिक का उपयोग।\n",
          "properties": "• उत्कृष्ट खारे पानी का प्रतिरोध और यूवी स्थिरता।\n",
          "applications": "• कठोर समुद्री परिस्थितियों में दीर्घकालिक टिकाऊपन के लिए डिज़ाइन किया गया।"
        }
        
        
        
      },
      footer: {
        companyInfo: {
          title: 'कंपनी की जानकारी',
          description: 'MGM टेक्सटाइल्स औद्योगिक टेक्सटाइल समाधानों का एक अग्रणी निर्माता है, जो विभिन्न उद्योगों को उच्च गुणवत्ता वाले उत्पाद और सेवाएं प्रदान करता है।'
        },
        quickLinks: {
          title: 'त्वरित लिंक',
          home: 'होम',
          about: 'हमारे बारे में',
          services: 'सेवाएं',
          industries: 'उद्योग',
          contact: 'संपर्क'
        },
        contactInfo: {
          title: 'संपर्क जानकारी',
          address: 'प्लॉट नंबर - 1626, केमिकल जोन, जीआईडीसी सरीगाम, भिलाड, जिला वलसाड, गुजरात - 396155',
          email: 'mgmtex2324@gmail.com',
          phone1: '+91 9867739947',
          phone2: '+91 9967589957'
        },
        businessHours: {
          title: 'कार्य समय',
          weekdays: 'सोमवार - शुक्रवार: सुबह 9:00 - शाम 6:00',
          saturday: 'शनिवार: सुबह 9:00 - दोपहर 2:00'
        }
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n; 