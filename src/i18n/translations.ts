export type Lang = 'en' | 'hi' | 'pa'

export const langOrder: Lang[] = ['en', 'hi', 'pa']

export const langNames: Record<Lang, string> = {
  en: 'English',
  hi: 'हिन्दी',
  pa: 'ਪੰਜਾਬੀ',
}

const en = {
  nav: {
    about: 'About',
    whatWeDo: 'What We Do',
    getInvolved: 'Get Involved',
    contact: 'Contact',
    donate: 'Donate',
  },
  hero: {
    badge: 'Serving Barotiwala, Himachal Pradesh',
    titleBefore: 'Compassion for every ',
    titleHighlight: 'living being',
    titleAfter: '.',
    intro:
      'For people, for nature, for every living being. Doon Welfare Foundation works across education, welfare, environment, clean water and animal care — bringing kindness to every doorstep.',
    getInvolved: 'Get Involved',
    learnMore: 'Learn More',
  },
  about: {
    eyebrow: 'Who We Are',
    heading: 'A foundation built on care and community.',
    p1: 'Doon Welfare Foundation is a non-profit rooted in the heart of Barotiwala, Himachal Pradesh. We work for people, animals and the environment alike — because lasting change begins with small, sincere acts of kindness toward every living thing.',
    p2: 'Driven entirely by volunteers, we channel every bit of goodwill straight back into the people and place we love.',
    missionLabel: 'Our Mission',
    missionText: 'Uplift every life with dignity and compassion.',
    visionLabel: 'Our Vision',
    visionText: 'A self-reliant, caring community for all.',
  },
  stats: {
    lives: 'Lives touched',
    drives: 'Community drives',
    areas: 'Focus areas',
    volunteer: 'Volunteer heart',
  },
  focus: {
    eyebrow: 'What We Do',
    heading: 'Our focus areas',
    subtitle:
      'Every program is designed to meet a real need in our community — with heart, honesty and lasting impact.',
    items: {
      education: {
        title: 'Education Support',
        desc: 'Financial help, school fees, books, uniforms and scholarships so children from weaker families can keep learning.',
      },
      marriage: {
        title: 'Daughter & Marriage Support',
        desc: 'Dignified assistance to families who cannot afford essential marriage expenses for their daughters, as per our policies.',
      },
      environment: {
        title: 'Environment & Plantation',
        desc: 'Tree plantation, cleanliness drives, water conservation and greener public spaces for a healthier tomorrow.',
      },
      water: {
        title: 'Public Drinking Water',
        desc: 'Installing and maintaining clean drinking-water facilities at schools, community areas and other public places.',
      },
      animal: {
        title: 'Animal Welfare',
        desc: 'Food, shelter, treatment and rescue for stray and abandoned animals — care for the voiceless.',
      },
      relief: {
        title: 'General Welfare & Relief',
        desc: 'A helping hand for disadvantaged people and families in difficult times, and other community-development work.',
      },
    },
  },
  involved: {
    heading: 'Be the reason someone smiles today.',
    intro:
      'Join hands with Doon Welfare Foundation. Whether you give time, resources or your voice — together we can build a brighter tomorrow.',
    volunteerTitle: 'Volunteer',
    volunteerText:
      'Give your time and skills at our drives and camps. Every pair of hands makes a difference.',
    donateTitle: 'Donate',
    donateText:
      'Your contribution funds books, clean water, animal care and relief for those who need it most.',
    partnerTitle: 'Partner',
    partnerText:
      'Bring your organisation on board to widen our reach and deepen our impact together.',
    contactBtn: 'Contact Us to Help',
    callBtn: 'Call {phone}',
  },
  contact: {
    eyebrow: 'Get in Touch',
    heading: 'We’d love to hear from you',
    subtitle:
      'Reach out to volunteer, donate, or simply say hello. Message us on WhatsApp and we’ll reply as soon as we can.',
    cardWhatsapp: 'WhatsApp / Phone',
    cardEmail: 'Email',
    cardAddress: 'Address',
    landmark: 'Landmark: IJ Industries',
    formName: 'Your Name',
    formNamePlaceholder: 'Jane Doe',
    formEmail: 'Email',
    formEmailPlaceholder: 'you@example.com',
    formMessage: 'Message',
    formMessagePlaceholder:
      'How would you like to help, or what can we do for you?',
    submit: 'Send via WhatsApp',
    preferEmail: 'Prefer email?',
    successTitle: 'Thank you!',
    successText:
      'WhatsApp should have opened with your message ready to send. Just tap send and we’ll be in touch.',
    sendAnother: 'Send another message',
    waTitle: 'New enquiry',
    waName: 'Name',
    waEmail: 'Email',
    waMessage: 'Message',
  },
  footer: {
    explore: 'Explore',
    reachUs: 'Reach Us',
    madeWith: 'Made with care for our community.',
  },
  a11y: {
    selectLanguage: 'Select language',
    toggleTheme: 'Toggle light and dark theme',
    home: 'Doon Welfare Foundation home',
  },
}

export type Dict = typeof en

const hi: Dict = {
  nav: {
    about: 'हमारे बारे में',
    whatWeDo: 'हम क्या करते हैं',
    getInvolved: 'साथ जुड़ें',
    contact: 'संपर्क करें',
    donate: 'दान करें',
  },
  hero: {
    badge: 'बरोटीवाला, हिमाचल प्रदेश की सेवा में',
    titleBefore: 'हर ',
    titleHighlight: 'जीव',
    titleAfter: ' के लिए करुणा।',
    intro:
      'लोगों के लिए, प्रकृति के लिए, हर जीव के लिए। डून वेलफेयर फाउंडेशन शिक्षा, कल्याण, पर्यावरण, स्वच्छ जल और पशु देखभाल में काम करता है — हर द्वार तक करुणा पहुँचाता है।',
    getInvolved: 'साथ जुड़ें',
    learnMore: 'और जानें',
  },
  about: {
    eyebrow: 'हम कौन हैं',
    heading: 'देखभाल और समुदाय पर आधारित एक फाउंडेशन।',
    p1: 'डून वेलफेयर फाउंडेशन बरोटीवाला, हिमाचल प्रदेश के हृदय में बसा एक ग़ैर-लाभकारी संगठन है। हम लोगों, पशुओं और पर्यावरण — सभी के लिए काम करते हैं, क्योंकि स्थायी बदलाव हर जीव के प्रति छोटे-छोटे सच्चे दयालु कार्यों से शुरू होता है।',
    p2: 'पूरी तरह स्वयंसेवकों द्वारा संचालित, हम हर सद्भावना को उन्हीं लोगों और उसी स्थान की ओर लौटाते हैं जिनसे हमें प्रेम है।',
    missionLabel: 'हमारा उद्देश्य',
    missionText: 'हर जीवन को सम्मान और करुणा के साथ ऊपर उठाना।',
    visionLabel: 'हमारा दृष्टिकोण',
    visionText: 'सभी के लिए एक आत्मनिर्भर, स्नेही समुदाय।',
  },
  stats: {
    lives: 'जीवन छुए गए',
    drives: 'सामुदायिक अभियान',
    areas: 'कार्य-क्षेत्र',
    volunteer: 'स्वयंसेवी भावना',
  },
  focus: {
    eyebrow: 'हम क्या करते हैं',
    heading: 'हमारे कार्य-क्षेत्र',
    subtitle:
      'हर कार्यक्रम हमारे समुदाय की किसी वास्तविक ज़रूरत को पूरा करने के लिए बनाया गया है — दिल, ईमानदारी और स्थायी प्रभाव के साथ।',
    items: {
      education: {
        title: 'शिक्षा सहायता',
        desc: 'आर्थिक मदद, स्कूल फीस, किताबें, वर्दी और छात्रवृत्तियाँ ताकि कमज़ोर परिवारों के बच्चे पढ़ते रहें।',
      },
      marriage: {
        title: 'बेटी / विवाह सहायता',
        desc: 'जो परिवार अपनी बेटियों के विवाह का ज़रूरी खर्च नहीं उठा सकते, उन्हें हमारी नीतियों के अनुसार सम्मानजनक सहायता।',
      },
      environment: {
        title: 'पर्यावरण और वृक्षारोपण',
        desc: 'वृक्षारोपण, स्वच्छता अभियान, जल संरक्षण और हरित स्थानों को बेहतर बनाना।',
      },
      water: {
        title: 'सार्वजनिक पेयजल',
        desc: 'स्कूलों, सामुदायिक स्थलों और अन्य सार्वजनिक जगहों पर स्वच्छ पेयजल की व्यवस्था और देखभाल।',
      },
      animal: {
        title: 'पशु कल्याण',
        desc: 'आवारा और बेसहारा पशुओं के लिए भोजन, आश्रय, इलाज और बचाव — बेज़ुबानों की देखभाल।',
      },
      relief: {
        title: 'सामान्य कल्याण और राहत',
        desc: 'कठिन समय में वंचित लोगों और परिवारों के लिए मदद का हाथ, और अन्य सामुदायिक विकास कार्य।',
      },
    },
  },
  involved: {
    heading: 'आज किसी के चेहरे पर मुस्कान की वजह बनें।',
    intro:
      'डून वेलफेयर फाउंडेशन के साथ हाथ मिलाएँ। चाहे आप समय दें, संसाधन दें या अपनी आवाज़ — मिलकर हम एक उज्जवल कल बना सकते हैं।',
    volunteerTitle: 'स्वयंसेवा',
    volunteerText:
      'हमारे अभियानों और शिविरों में अपना समय और कौशल दें। हर मदद मायने रखती है।',
    donateTitle: 'दान',
    donateText:
      'आपका योगदान ज़रूरतमंदों के लिए किताबें, स्वच्छ जल, पशु देखभाल और राहत का सहारा बनता है।',
    partnerTitle: 'साझेदारी',
    partnerText:
      'अपने संगठन को हमारे साथ जोड़ें और मिलकर हमारी पहुँच व प्रभाव को बढ़ाएँ।',
    contactBtn: 'मदद के लिए संपर्क करें',
    callBtn: 'कॉल करें {phone}',
  },
  contact: {
    eyebrow: 'संपर्क में रहें',
    heading: 'हम आपसे सुनना चाहेंगे',
    subtitle:
      'स्वयंसेवा, दान या बस नमस्ते कहने के लिए संपर्क करें। हमें व्हाट्सएप पर संदेश भेजें और हम जल्द से जल्द उत्तर देंगे।',
    cardWhatsapp: 'व्हाट्सएप / फ़ोन',
    cardEmail: 'ईमेल',
    cardAddress: 'पता',
    landmark: 'लैंडमार्क: IJ Industries',
    formName: 'आपका नाम',
    formNamePlaceholder: 'जैसे, प्रिया शर्मा',
    formEmail: 'ईमेल',
    formEmailPlaceholder: 'you@example.com',
    formMessage: 'संदेश',
    formMessagePlaceholder:
      'आप कैसे मदद करना चाहेंगे, या हम आपके लिए क्या कर सकते हैं?',
    submit: 'व्हाट्सएप पर भेजें',
    preferEmail: 'ईमेल पसंद करते हैं?',
    successTitle: 'धन्यवाद!',
    successText:
      'व्हाट्सएप आपके संदेश के साथ खुल गया होगा। बस भेजें दबाएँ और हम संपर्क करेंगे।',
    sendAnother: 'एक और संदेश भेजें',
    waTitle: 'नई पूछताछ',
    waName: 'नाम',
    waEmail: 'ईमेल',
    waMessage: 'संदेश',
  },
  footer: {
    explore: 'एक्सप्लोर',
    reachUs: 'हम तक पहुँचें',
    madeWith: 'प्रेम से हमारे समुदाय के लिए बनाया गया।',
  },
  a11y: {
    selectLanguage: 'भाषा चुनें',
    toggleTheme: 'लाइट और डार्क थीम बदलें',
    home: 'डून वेलफेयर फाउंडेशन होम',
  },
}

const pa: Dict = {
  nav: {
    about: 'ਸਾਡੇ ਬਾਰੇ',
    whatWeDo: 'ਅਸੀਂ ਕੀ ਕਰਦੇ ਹਾਂ',
    getInvolved: 'ਨਾਲ ਜੁੜੋ',
    contact: 'ਸੰਪਰਕ ਕਰੋ',
    donate: 'ਦਾਨ ਕਰੋ',
  },
  hero: {
    badge: 'ਬਰੋਟੀਵਾਲਾ, ਹਿਮਾਚਲ ਪ੍ਰਦੇਸ਼ ਦੀ ਸੇਵਾ ਵਿੱਚ',
    titleBefore: 'ਹਰ ',
    titleHighlight: 'ਜੀਵ',
    titleAfter: ' ਲਈ ਦਇਆ।',
    intro:
      'ਲੋਕਾਂ ਲਈ, ਕੁਦਰਤ ਲਈ, ਹਰ ਜੀਵ ਲਈ। ਡੂਨ ਵੈਲਫੇਅਰ ਫਾਊਂਡੇਸ਼ਨ ਸਿੱਖਿਆ, ਭਲਾਈ, ਵਾਤਾਵਰਨ, ਸਾਫ਼ ਪਾਣੀ ਅਤੇ ਪਸ਼ੂ ਦੇਖਭਾਲ ਵਿੱਚ ਕੰਮ ਕਰਦੀ ਹੈ — ਹਰ ਦਰ ਤੱਕ ਦਇਆ ਪਹੁੰਚਾਉਂਦੀ ਹੈ।',
    getInvolved: 'ਨਾਲ ਜੁੜੋ',
    learnMore: 'ਹੋਰ ਜਾਣੋ',
  },
  about: {
    eyebrow: 'ਅਸੀਂ ਕੌਣ ਹਾਂ',
    heading: 'ਦੇਖਭਾਲ ਅਤੇ ਭਾਈਚਾਰੇ ’ਤੇ ਟਿਕੀ ਇੱਕ ਫਾਊਂਡੇਸ਼ਨ।',
    p1: 'ਡੂਨ ਵੈਲਫੇਅਰ ਫਾਊਂਡੇਸ਼ਨ ਬਰੋਟੀਵਾਲਾ, ਹਿਮਾਚਲ ਪ੍ਰਦੇਸ਼ ਦੇ ਦਿਲ ਵਿੱਚ ਵਸੀ ਇੱਕ ਗ਼ੈਰ-ਮੁਨਾਫ਼ਾ ਸੰਸਥਾ ਹੈ। ਅਸੀਂ ਲੋਕਾਂ, ਪਸ਼ੂਆਂ ਅਤੇ ਵਾਤਾਵਰਨ — ਸਭ ਲਈ ਕੰਮ ਕਰਦੇ ਹਾਂ, ਕਿਉਂਕਿ ਸਥਾਈ ਬਦਲਾਅ ਹਰ ਜੀਵ ਪ੍ਰਤੀ ਛੋਟੇ, ਸੱਚੇ ਦਇਆ ਦੇ ਕੰਮਾਂ ਤੋਂ ਸ਼ੁਰੂ ਹੁੰਦਾ ਹੈ।',
    p2: 'ਪੂਰੀ ਤਰ੍ਹਾਂ ਵਲੰਟੀਅਰਾਂ ਦੁਆਰਾ ਚਲਾਈ ਜਾਂਦੀ, ਅਸੀਂ ਹਰ ਭਲਾਈ ਨੂੰ ਉਹਨਾਂ ਲੋਕਾਂ ਅਤੇ ਉਸ ਥਾਂ ਵੱਲ ਮੋੜਦੇ ਹਾਂ ਜਿਨ੍ਹਾਂ ਨੂੰ ਅਸੀਂ ਪਿਆਰ ਕਰਦੇ ਹਾਂ।',
    missionLabel: 'ਸਾਡਾ ਮਿਸ਼ਨ',
    missionText: 'ਹਰ ਜ਼ਿੰਦਗੀ ਨੂੰ ਇੱਜ਼ਤ ਅਤੇ ਦਇਆ ਨਾਲ ਉੱਪਰ ਚੁੱਕਣਾ।',
    visionLabel: 'ਸਾਡੀ ਦ੍ਰਿਸ਼ਟੀ',
    visionText: 'ਸਭ ਲਈ ਇੱਕ ਆਤਮ-ਨਿਰਭਰ, ਪਿਆਰ ਭਰਿਆ ਭਾਈਚਾਰਾ।',
  },
  stats: {
    lives: 'ਛੂਹੀਆਂ ਜ਼ਿੰਦਗੀਆਂ',
    drives: 'ਭਾਈਚਾਰਕ ਮੁਹਿੰਮਾਂ',
    areas: 'ਕੰਮ ਦੇ ਖੇਤਰ',
    volunteer: 'ਵਲੰਟੀਅਰ ਦਿਲ',
  },
  focus: {
    eyebrow: 'ਅਸੀਂ ਕੀ ਕਰਦੇ ਹਾਂ',
    heading: 'ਸਾਡੇ ਕੰਮ ਦੇ ਖੇਤਰ',
    subtitle:
      'ਹਰ ਪ੍ਰੋਗਰਾਮ ਸਾਡੇ ਭਾਈਚਾਰੇ ਦੀ ਕਿਸੇ ਅਸਲ ਲੋੜ ਨੂੰ ਪੂਰਾ ਕਰਨ ਲਈ ਬਣਾਇਆ ਗਿਆ ਹੈ — ਦਿਲ, ਇਮਾਨਦਾਰੀ ਅਤੇ ਸਥਾਈ ਅਸਰ ਨਾਲ।',
    items: {
      education: {
        title: 'ਸਿੱਖਿਆ ਸਹਾਇਤਾ',
        desc: 'ਆਰਥਿਕ ਮਦਦ, ਸਕੂਲ ਫੀਸ, ਕਿਤਾਬਾਂ, ਵਰਦੀਆਂ ਅਤੇ ਵਜ਼ੀਫ਼ੇ ਤਾਂ ਜੋ ਕਮਜ਼ੋਰ ਪਰਿਵਾਰਾਂ ਦੇ ਬੱਚੇ ਪੜ੍ਹਦੇ ਰਹਿਣ।',
      },
      marriage: {
        title: 'ਧੀ / ਵਿਆਹ ਸਹਾਇਤਾ',
        desc: 'ਜੋ ਪਰਿਵਾਰ ਆਪਣੀਆਂ ਧੀਆਂ ਦੇ ਵਿਆਹ ਦਾ ਜ਼ਰੂਰੀ ਖ਼ਰਚ ਨਹੀਂ ਚੁੱਕ ਸਕਦੇ, ਉਨ੍ਹਾਂ ਨੂੰ ਸਾਡੀਆਂ ਨੀਤੀਆਂ ਅਨੁਸਾਰ ਇੱਜ਼ਤ ਭਰੀ ਸਹਾਇਤਾ।',
      },
      environment: {
        title: 'ਵਾਤਾਵਰਨ ਅਤੇ ਰੁੱਖ ਲਾਉਣਾ',
        desc: 'ਰੁੱਖ ਲਾਉਣ, ਸਫ਼ਾਈ ਮੁਹਿੰਮਾਂ, ਪਾਣੀ ਦੀ ਸੰਭਾਲ ਅਤੇ ਹਰੀਆਂ ਥਾਵਾਂ ਨੂੰ ਬਿਹਤਰ ਬਣਾਉਣਾ।',
      },
      water: {
        title: 'ਜਨਤਕ ਪੀਣ ਵਾਲਾ ਪਾਣੀ',
        desc: 'ਸਕੂਲਾਂ, ਭਾਈਚਾਰਕ ਥਾਵਾਂ ਅਤੇ ਹੋਰ ਜਨਤਕ ਥਾਵਾਂ ’ਤੇ ਸਾਫ਼ ਪੀਣ ਵਾਲੇ ਪਾਣੀ ਦਾ ਪ੍ਰਬੰਧ ਅਤੇ ਸੰਭਾਲ।',
      },
      animal: {
        title: 'ਪਸ਼ੂ ਭਲਾਈ',
        desc: 'ਅਵਾਰਾ ਤੇ ਬੇਸਹਾਰਾ ਪਸ਼ੂਆਂ ਲਈ ਭੋਜਨ, ਆਸਰਾ, ਇਲਾਜ ਅਤੇ ਬਚਾਅ — ਬੇਜ਼ੁਬਾਨਾਂ ਦੀ ਦੇਖਭਾਲ।',
      },
      relief: {
        title: 'ਆਮ ਭਲਾਈ ਅਤੇ ਰਾਹਤ',
        desc: 'ਔਖੇ ਵੇਲੇ ਵਾਂਝੇ ਲੋਕਾਂ ਤੇ ਪਰਿਵਾਰਾਂ ਲਈ ਮਦਦ ਦਾ ਹੱਥ, ਅਤੇ ਹੋਰ ਭਾਈਚਾਰਕ ਵਿਕਾਸ ਦੇ ਕੰਮ।',
      },
    },
  },
  involved: {
    heading: 'ਅੱਜ ਕਿਸੇ ਦੇ ਚਿਹਰੇ ’ਤੇ ਮੁਸਕਾਨ ਦੀ ਵਜ੍ਹਾ ਬਣੋ।',
    intro:
      'ਡੂਨ ਵੈਲਫੇਅਰ ਫਾਊਂਡੇਸ਼ਨ ਨਾਲ ਹੱਥ ਮਿਲਾਓ। ਭਾਵੇਂ ਤੁਸੀਂ ਸਮਾਂ ਦਿਓ, ਸਾਧਨ ਦਿਓ ਜਾਂ ਆਪਣੀ ਆਵਾਜ਼ — ਮਿਲ ਕੇ ਅਸੀਂ ਇੱਕ ਰੌਸ਼ਨ ਭਵਿੱਖ ਬਣਾ ਸਕਦੇ ਹਾਂ।',
    volunteerTitle: 'ਵਲੰਟੀਅਰ',
    volunteerText:
      'ਸਾਡੀਆਂ ਮੁਹਿੰਮਾਂ ਅਤੇ ਕੈਂਪਾਂ ਵਿੱਚ ਆਪਣਾ ਸਮਾਂ ਅਤੇ ਹੁਨਰ ਦਿਓ। ਹਰ ਮਦਦ ਮਾਇਨੇ ਰੱਖਦੀ ਹੈ।',
    donateTitle: 'ਦਾਨ',
    donateText:
      'ਤੁਹਾਡਾ ਯੋਗਦਾਨ ਲੋੜਵੰਦਾਂ ਲਈ ਕਿਤਾਬਾਂ, ਸਾਫ਼ ਪਾਣੀ, ਪਸ਼ੂ ਦੇਖਭਾਲ ਅਤੇ ਰਾਹਤ ਦਾ ਸਹਾਰਾ ਬਣਦਾ ਹੈ।',
    partnerTitle: 'ਭਾਈਵਾਲੀ',
    partnerText:
      'ਆਪਣੀ ਸੰਸਥਾ ਨੂੰ ਸਾਡੇ ਨਾਲ ਜੋੜੋ ਅਤੇ ਮਿਲ ਕੇ ਸਾਡੀ ਪਹੁੰਚ ਤੇ ਅਸਰ ਵਧਾਓ।',
    contactBtn: 'ਮਦਦ ਲਈ ਸੰਪਰਕ ਕਰੋ',
    callBtn: 'ਕਾਲ ਕਰੋ {phone}',
  },
  contact: {
    eyebrow: 'ਸੰਪਰਕ ਵਿੱਚ ਰਹੋ',
    heading: 'ਅਸੀਂ ਤੁਹਾਡੇ ਤੋਂ ਸੁਣਨਾ ਚਾਹਾਂਗੇ',
    subtitle:
      'ਵਲੰਟੀਅਰ, ਦਾਨ ਜਾਂ ਸਿਰਫ਼ ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ ਕਹਿਣ ਲਈ ਸੰਪਰਕ ਕਰੋ। ਸਾਨੂੰ ਵਟਸਐਪ ’ਤੇ ਸੁਨੇਹਾ ਭੇਜੋ ਅਤੇ ਅਸੀਂ ਜਲਦੀ ਜਵਾਬ ਦੇਵਾਂਗੇ।',
    cardWhatsapp: 'ਵਟਸਐਪ / ਫ਼ੋਨ',
    cardEmail: 'ਈਮੇਲ',
    cardAddress: 'ਪਤਾ',
    landmark: 'ਲੈਂਡਮਾਰਕ: IJ Industries',
    formName: 'ਤੁਹਾਡਾ ਨਾਮ',
    formNamePlaceholder: 'ਜਿਵੇਂ, ਪ੍ਰੀਆ ਸ਼ਰਮਾ',
    formEmail: 'ਈਮੇਲ',
    formEmailPlaceholder: 'you@example.com',
    formMessage: 'ਸੁਨੇਹਾ',
    formMessagePlaceholder:
      'ਤੁਸੀਂ ਕਿਵੇਂ ਮਦਦ ਕਰਨਾ ਚਾਹੋਗੇ, ਜਾਂ ਅਸੀਂ ਤੁਹਾਡੇ ਲਈ ਕੀ ਕਰ ਸਕਦੇ ਹਾਂ?',
    submit: 'ਵਟਸਐਪ ’ਤੇ ਭੇਜੋ',
    preferEmail: 'ਈਮੇਲ ਪਸੰਦ ਹੈ?',
    successTitle: 'ਧੰਨਵਾਦ!',
    successText:
      'ਵਟਸਐਪ ਤੁਹਾਡੇ ਸੁਨੇਹੇ ਨਾਲ ਖੁੱਲ੍ਹ ਗਿਆ ਹੋਵੇਗਾ। ਬੱਸ ਭੇਜੋ ਦਬਾਓ ਅਤੇ ਅਸੀਂ ਸੰਪਰਕ ਕਰਾਂਗੇ।',
    sendAnother: 'ਇੱਕ ਹੋਰ ਸੁਨੇਹਾ ਭੇਜੋ',
    waTitle: 'ਨਵੀਂ ਪੁੱਛਗਿੱਛ',
    waName: 'ਨਾਮ',
    waEmail: 'ਈਮੇਲ',
    waMessage: 'ਸੁਨੇਹਾ',
  },
  footer: {
    explore: 'ਪੜਚੋਲ ਕਰੋ',
    reachUs: 'ਸਾਡੇ ਤੱਕ ਪਹੁੰਚੋ',
    madeWith: 'ਪਿਆਰ ਨਾਲ ਸਾਡੇ ਭਾਈਚਾਰੇ ਲਈ ਬਣਾਇਆ ਗਿਆ।',
  },
  a11y: {
    selectLanguage: 'ਭਾਸ਼ਾ ਚੁਣੋ',
    toggleTheme: 'ਲਾਈਟ ਅਤੇ ਡਾਰਕ ਥੀਮ ਬਦਲੋ',
    home: 'ਡੂਨ ਵੈਲਫੇਅਰ ਫਾਊਂਡੇਸ਼ਨ ਹੋਮ',
  },
}

export const translations: Record<Lang, Dict> = { en, hi, pa }
