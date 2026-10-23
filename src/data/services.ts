import { ServiceItem } from '../types';

export const SPA_LOGO_URL = 'https://i.ibb.co/6JnD0NvZ/Improve-photo-quality-2-K-20261023071533.webp';

export const WHATSAPP_NUMBER = '17816927644';
export const WHATSAPP_DISPLAY = '+1 (781) 692-7644';

export function getWhatsAppBookingUrl(service?: ServiceItem | null, language: 'pt' | 'en' = 'pt'): string {
  let message = '';
  if (service) {
    if (language === 'pt') {
      message = `Olá Amarii Beauty Spa! Gostaria de agendar o serviço: ${service.name.pt} (${service.duration} - ${service.price.pt}).`;
    } else {
      message = `Hello Amarii Beauty Spa! I would like to schedule an appointment for: ${service.name.en} (${service.duration} - ${service.price.en}).`;
    }
  } else {
    if (language === 'pt') {
      message = `Olá Amarii Beauty Spa! Gostaria de agendar um horário.`;
    } else {
      message = `Hello Amarii Beauty Spa! I would like to schedule an appointment.`;
    }
  }
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const FACIAL_IMG = '/src/assets/images/spa_facial_treatment_1792775883680.jpg';
export const BODY_IMG = '/src/assets/images/spa_body_wellness_1792775884468.jpg';
export const LASER_IMG = '/src/assets/images/spa_laser_technology_1792775884956.jpg';
export const CONSULT_IMG = '/src/assets/images/spa_consultation_skin_1792775884824.jpg';

export const SERVICES: ServiceItem[] = [
  // 1. Aqua Star
  {
    id: 'aqua-star',
    category: 'faciais',
    duration: '60 min',
    price: {
      pt: '$99.90',
      en: '$99.90',
    },
    originalPrice: '$149.90',
    name: {
      pt: 'Aqua Star (lançamento)',
      en: 'Aqua Star (New Launch)',
    },
    description: {
      pt: '10 tratamentos em 1 para uma pele mais limpa, hidratada e radiante, personalizado conforme a necessidade da sua pele.',
      en: '10 treatments in 1 for cleaner, hydrated, and radiant skin, customized to your skin\'s unique needs.',
    },
    benefits: {
      pt: [
        '10 etapas avançadas em uma única sessão',
        'Limpeza profunda e hidratação simultânea',
        'Efeito glow imediato sem irritação ou tempo de recuperação',
      ],
      en: [
        '10 synergistic facial steps in a single session',
        'Simultaneous deep cleansing and intense hydration',
        'Immediate glass glow with zero irritation or downtime',
      ],
    },
    image: 'https://i.ibb.co/vCd02g17/Remove-text-and-black-machine-2-K-20261023080652-convertido-de-webp.webp',
    badge: {
      pt: 'Lançamento',
      en: 'New Launch',
    },
  },

  // 2. Limpeza de Pele Profunda
  {
    id: 'limpeza-de-pele-profunda',
    category: 'faciais',
    duration: '90 min',
    price: {
      pt: '$120',
      en: '$120',
    },
    name: {
      pt: 'Limpeza de Pele Profunda',
      en: 'Deep Cleansing Facial',
    },
    description: {
      pt: 'Limpa profundamente, com vapor de ozônio e alta frequência, máscara personalizada e finalização com cremes, séruns e protetor solar. Pele fresca e radiante.',
      en: 'Deeply purifies with ozone steam and high frequency, custom mask, and finishes with active creams, serums, and sunscreen. Fresh and glowing skin.',
    },
    benefits: {
      pt: [
        'Remoção delicada e completa de cravos e impurezas',
        'Ação bactericida e cicatrizante com alta frequência',
        'Máscara calmante e nutrição celular com séruns premium',
      ],
      en: [
        'Gentle and thorough extraction of blackheads & impurities',
        'Antibacterial and healing ozone & high frequency therapy',
        'Soothing mask with deep cellular serum infusion',
      ],
    },
    image: 'https://i.ibb.co/zWg8kWZQ/Captura-de-tela-2026-10-23-080736-convertido-de-png.webp',
  },

  // 3. Dermaplaning
  {
    id: 'dermaplaning',
    category: 'faciais',
    duration: '45 min',
    price: {
      pt: '$70',
      en: '$70',
    },
    name: {
      pt: 'Dermaplaning',
      en: 'Dermaplaning Exfoliation',
    },
    description: {
      pt: 'Esfolia a superfície da pele, remove os pelos finos (vellus) e melhora a absorção dos produtos de skincare.',
      en: 'Exfoliates the skin surface, removes fine vellus hair (peach fuzz), and improves skincare product absorption.',
    },
    benefits: {
      pt: [
        'Textura aveludada e ultra macia ao toque',
        'Potencializa a absorção e eficácia dos cosméticos',
        'Acabamento impecável e uniforme para maquiagem',
      ],
      en: [
        'Velvety, ultra-smooth texture instantly',
        'Maximizes penetration and efficacy of skincare products',
        'Flawless, seamless finish for everyday makeup',
      ],
    },
    image: 'https://i.ibb.co/Q3rHjd3m/Captura-de-tela-2026-10-23-080844-convertido-de-png.webp',
  },

  // 4. Facial Iluminador com Vitamina C
  {
    id: 'facial-iluminador-vitamina-c',
    category: 'faciais',
    duration: '60 min',
    price: {
      pt: '$90',
      en: '$90',
    },
    name: {
      pt: 'Facial Iluminador com Vitamina C',
      en: 'Vitamin C Brightening Facial',
    },
    description: {
      pt: 'Foco em pigmentação, aspecto opaco e tom irregular, proporcionando uma tez visivelmente luminosa e revitalizada.',
      en: 'Targets pigmentation, dullness, and uneven skin tone, providing a visibly radiant and revitalized complexion.',
    },
    benefits: {
      pt: [
        'Uniformização gradual de manchas e tom irregular',
        'Poderosa ação antioxidante que combate radicais livres',
        'Revitalização instantânea para peles cansadas ou opacas',
      ],
      en: [
        'Gradual tone evening and hyperpigmentation defense',
        'Potent antioxidant protection against environmental stress',
        'Instant radiance and vitality for dull or fatigued skin',
      ],
    },
    image: 'https://i.ibb.co/jv6hxqVm/Captura-de-tela-2026-10-23-080930-convertido-de-png.webp',
  },

  // 5. Glass Peel LHA LA
  {
    id: 'glass-peel-lha-la',
    category: 'faciais',
    duration: '60 min',
    price: {
      pt: '$180',
      en: '$180',
    },
    name: {
      pt: 'Glass Peel LHA LA',
      en: 'Glass Peel LHA LA',
    },
    description: {
      pt: 'Peeling de nova geração inspirado nos rituais coreanos, para o "efeito pele de vidro": poros, oleosidade e tom mais uniforme, geralmente sem descamação agressiva e sem tempo de recuperação.',
      en: 'Next-generation peeling inspired by Korean beauty rituals for the "glass skin" effect: refined pores, oil balance, and even tone, typically with no harsh peeling and zero downtime.',
    },
    benefits: {
      pt: [
        'Brilho espelhado característico da pele de vidro coreana',
        'Refinamento imediato dos poros e controle do sebo',
        'Sem descamação agressiva e sem interromper sua rotina',
      ],
      en: [
        'Signature mirror-like Korean glass skin radiance',
        'Immediate pore tightening and gentle oil balancing',
        'No aggressive peeling and zero social downtime',
      ],
    },
    image: 'https://i.ibb.co/hxWvbXnz/Captura-de-tela-2026-10-23-081046-convertido-de-png-1.webp',
  },

  // 6. Facial Firmlift
  {
    id: 'facial-firmlift',
    category: 'faciais',
    duration: '60 min',
    price: {
      pt: '$90',
      en: '$90',
    },
    name: {
      pt: 'Facial Firmlift',
      en: 'Firmlift Facial',
    },
    description: {
      pt: 'Séruns potentes, cremes e máscaras para estimular colágeno e elasticidade, com efeito lifting e pele mais firme.',
      en: 'Potent serums, creams, and masks to stimulate collagen and elasticity, delivering an uplifting effect and firmer skin.',
    },
    benefits: {
      pt: [
        'Efeito tensor lifting visível logo após a sessão',
        'Estímulo das fibras de colágeno e sustentação dérmica',
        'Suavização perceptível de linhas de expressão finas',
      ],
      en: [
        'Noticeable lifting and tightening contour effect',
        'Stimulates dermal collagen synthesis and elastic fibers',
        'Visibly softens fine expression lines',
      ],
    },
    image: 'https://i.ibb.co/CKYW60Vs/Captura-de-tela-2026-10-23-082401-convertido-de-png.webp',
  },

  // 7. Facial para Acne
  {
    id: 'facial-para-acne',
    category: 'faciais',
    duration: '60 min',
    price: {
      pt: '$90',
      en: '$90',
    },
    name: {
      pt: 'Facial para Acne',
      en: 'Acne Clarifying Facial',
    },
    description: {
      pt: 'Remove pontos negros e impurezas, ajuda a controlar a oleosidade e inflamação, purificando e acalmando os poros.',
      en: 'Removes blackheads and impurities, helps regulate sebum production and inflammation, purifying and soothing pores.',
    },
    benefits: {
      pt: [
        'Desobstrução seletiva dos poros congestionados',
        'Redução imediata da vermelhidão e alívio inflamatório',
        'Equilíbrio duradouro do microbioma e oleosidade',
      ],
      en: [
        'Targeted clearing of clogged, congested pores',
        'Immediate reduction of redness and inflammation',
        'Restores microbiome balance and controls excess shine',
      ],
    },
    image: 'https://i.ibb.co/0R6FJNRW/Captura-de-tela-2026-10-23-082608-convertido-de-png.webp',
  },

  // 8. Hyaluronic Glow Facial
  {
    id: 'hyaluronic-glow-facial',
    category: 'faciais',
    duration: '60 min',
    price: {
      pt: '$90',
      en: '$90',
    },
    name: {
      pt: 'Hyaluronic Glow Facial',
      en: 'Hyaluronic Glow Facial',
    },
    description: {
      pt: 'Limpeza focada em hidratação profunda com ácido hialurônico: pele macia, preenchida, revigorada e radiante.',
      en: 'Cleansing focused on deep hydration with hyaluronic acid: soft, plumped, invigorated, and radiant skin.',
    },
    benefits: {
      pt: [
        'Infusão hídrica em multicamadas dérmicas',
        'Aparência preenchida e sedosa (efeito plump)',
        'Restaura a elasticidade e viço natural da pele desidratada',
      ],
      en: [
        'Multi-layer dermal moisture infusion',
        'Supple, plump, and bouncy skin texture',
        'Restores elasticity and natural radiance to dehydrated skin',
      ],
    },
    image: 'https://i.ibb.co/DPhrpgz0/Captura-de-tela-2026-10-23-083002-convertido-de-png.webp',
  },

  // 9. Drenagem Linfática Facial com Gua Sha
  {
    id: 'drenagem-linfatica-gua-sha',
    category: 'faciais',
    duration: '45 min',
    price: {
      pt: '$80',
      en: '$80',
    },
    name: {
      pt: 'Drenagem Linfática Facial com Gua Sha',
      en: 'Gua Sha Facial Lymphatic Drainage',
    },
    description: {
      pt: 'Técnica suave que estimula a circulação e reduz o inchaço, promovendo contorno mais definido e viço natural.',
      en: 'Gentle technique that stimulates circulation and reduces puffiness, promoting sculptured contours and natural vitality.',
    },
    benefits: {
      pt: [
        'Desinchaço visível da região dos olhos e contorno facial',
        'Definição elegante da mandíbula e maçãs do rosto',
        'Alívio de tensões musculares faciais e oxigenação tecidual',
      ],
      en: [
        'Visible depuffing of eye bags and facial contour',
        'Sculpts jawline and cheekbone definition',
        'Releases facial tension and boosts tissue oxygenation',
      ],
    },
    image: 'https://i.ibb.co/ksT59Tqv/Captura-de-tela-2026-10-23-083137-convertido-de-png.webp',
  },

  // 10. Microneedling RF
  {
    id: 'microneedling-rf',
    category: 'faciais',
    duration: '60 min',
    price: {
      pt: '$210',
      en: '$210',
    },
    name: {
      pt: 'Microneedling RF',
      en: 'RF Microneedling',
    },
    description: {
      pt: 'Microagulhamento com radiofrequência para estimular colágeno, suavizar linhas finas e melhorar a firmeza e a textura da pele.',
      en: 'Radiofrequency microneedling to stimulate collagen, smooth fine lines, and enhance skin firmness and texture.',
    },
    benefits: {
      pt: [
        'Potente renovação celular e indução de novo colágeno',
        'Atenuação comprovada de cicatrizes de acne e poros abertos',
        'Firmeza estrutural profunda e textura refinada',
      ],
      en: [
        'Powerful cellular renewal and neo-collagenesis',
        'Significantly softens acne scars and enlarged pores',
        'Deep structural skin tightening and refined texture',
      ],
    },
    image: 'https://i.ibb.co/p6th2YGB/Captura-de-tela-2026-10-23-083320-convertido-de-png.webp',
  },

  // 11. Hydragloss (labial)
  {
    id: 'hydragloss-labial',
    category: 'faciais',
    duration: '60 min',
    price: {
      pt: '$80',
      en: '$80',
    },
    name: {
      pt: 'Hydragloss (labial)',
      en: 'Hydragloss Lip Glow',
    },
    description: {
      pt: 'Hidrata profundamente e realça o brilho natural dos lábios, deixando-os macios, sedosos e rejuvenescidos.',
      en: 'Deeply hydrates and enhances the natural radiance of lips, leaving them soft, velvety, and rejuvenated.',
    },
    benefits: {
      pt: [
        'Eliminação do ressecamento e rachaduras labiais',
        'Realce da cor natural saudável e brilho acetinado',
        'Sensação de lábios mais volumosos e rejuvenescidos',
      ],
      en: [
        'Relieves dryness and micro-fissures on lips',
        'Enhances natural rosy tint with a satin shine',
        'Subtle plumping appearance and rejuvenated texture',
      ],
    },
    image: 'https://i.ibb.co/h1C1Mnc5/Captura-de-tela-2026-10-23-083603-convertido-de-png.webp',
  },

  // 12. Terapia para Crescimento Capilar
  {
    id: 'terapia-crescimento-capilar',
    category: 'faciais',
    duration: '60 min',
    price: {
      pt: '$150',
      en: '$150',
    },
    name: {
      pt: 'Terapia para Crescimento Capilar',
      en: 'Hair Growth Therapy',
    },
    description: {
      pt: 'Terapia voltada ao estímulo e fortalecimento do folículo capilar, indicada após avaliação personalizada.',
      en: 'Therapy aimed at stimulating and strengthening hair follicles, recommended after personalized evaluation.',
    },
    benefits: {
      pt: [
        'Estímulo intensivo da microcirculação no couro cabeludo',
        'Nutrição direta na raiz capilar para fortalecimento dos fios',
        'Apoio eficaz na redução da queda e aumento da densidade',
      ],
      en: [
        'Intensive scalp microcirculation stimulation',
        'Direct nutrient delivery to hair roots and follicles',
        'Helps reduce thinning and promotes stronger strands',
      ],
    },
    image: 'https://i.ibb.co/8Dhnghwp/Captura-de-tela-2026-10-23-083702-convertido-de-png.webp',
  },

  // 13. Pink Touch
  {
    id: 'pink-touch',
    category: 'faciais',
    duration: '40 min',
    price: {
      pt: '$120',
      en: '$120',
    },
    name: {
      pt: 'Pink Touch',
      en: 'Pink Touch',
    },
    description: {
      pt: 'Tratamento estético delicado e não invasivo para atenuação de manchas escuras em zonas íntimas, indicado após avaliação.',
      en: 'Delicate and non-invasive aesthetic treatment to lighten dark spots in intimate areas, recommended after consultation.',
    },
    benefits: {
      pt: [
        'Procedimento suave, não invasivo e confortável',
        'Clareamento gradual e seguro de áreas escurecidas',
        'Recuperação da uniformidade e toque macio da pele',
      ],
      en: [
        'Gentle, non-invasive, and comfortable procedure',
        'Safe and gradual tone brightening for delicate zones',
        'Restores skin softness and uniform coloration',
      ],
    },
    image: 'https://i.ibb.co/39dzGmJm/Captura-de-tela-2026-10-23-083759-convertido-de-png.webp',
  },

  // 14. Escape Tranquilidade
  {
    id: 'escape-tranquilidade',
    category: 'corporais',
    duration: '60 min',
    price: {
      pt: '$90',
      en: '$90',
    },
    name: {
      pt: 'Escape Tranquilidade',
      en: 'Tranquility Escape Ritual',
    },
    description: {
      pt: 'Refúgio relaxante com óleos essenciais, esfoliante renovador para os pés e vela morna para relaxamento profundo e hidratação.',
      en: 'Relaxing sanctuary with essential oils, renewing foot exfoliation, and warm candle massage for deep relaxation and hydration.',
    },
    benefits: {
      pt: [
        'Alívio imediato do estresse e da tensão acumulada',
        'Esfoliação podal renovadora com hidratação de vela morna',
        'Aromaterapia equilibrante que acalma a mente e o corpo',
      ],
      en: [
        'Immediate physical tension and stress relief',
        'Revitalizing foot exfoliation with nourishing warm candle oils',
        'Balancing aromatherapy to calm both mind and body',
      ],
    },
    image: 'https://i.ibb.co/84B0VSc1/Captura-de-tela-2026-10-23-083850-convertido-de-png.webp',
  },

  // 15. Limpeza das Costas
  {
    id: 'limpeza-das-costas',
    category: 'corporais',
    duration: '60 min',
    price: {
      pt: '$140',
      en: '$140',
    },
    name: {
      pt: 'Limpeza das Costas',
      en: 'Deep Back Cleansing',
    },
    description: {
      pt: 'Limpeza profunda que esfolia, desintoxica e hidrata, cuidando de poros obstruídos, acne e ressecamento na região dorsal.',
      en: 'Deep purifying back treatment that exfoliates, detoxifies, and hydrates, addressing clogged pores, acne, and dryness on the back.',
    },
    benefits: {
      pt: [
        'Esfoliação e extração cuidadosa de cravos e impurezas',
        'Ação purificante contra acne corporal e oleosidade dorsal',
        'Hidratação profunda que deixa a pele lisa e uniforme',
      ],
      en: [
        'Thorough exfoliation and gentle extraction of back impurities',
        'Purifying action against body acne and excess oil',
        'Deep hydration leaving back skin smooth and even-toned',
      ],
    },
    image: 'https://i.ibb.co/k6ycyBW6/Captura-de-tela-2026-10-23-083952-convertido-de-png.webp',
  },

  // 16. Massagem com Pedras Quentes
  {
    id: 'massagem-pedras-quentes',
    category: 'corporais',
    duration: '60 min',
    price: {
      pt: '$120',
      en: '$120',
    },
    name: {
      pt: 'Massagem com Pedras Quentes',
      en: 'Hot Stone Massage',
    },
    description: {
      pt: 'Pedras vulcânicas aquecidas em pontos energéticos para relaxamento profundo, alívio de tensões musculares e circulação.',
      en: 'Warmed volcanic stones placed on energy points for deep relaxation, muscle tension release, and enhanced blood flow.',
    },
    benefits: {
      pt: [
        'O calor das pedras vulcânicas atua profundamente nos músculos',
        'Dissolve nós de tensão nas costas, ombros e pescoço',
        'Estimula a circulação sanguínea e promove sono reparador',
      ],
      en: [
        'Volcanic heat penetrates deeply into muscular tissues',
        'Dissolves chronic tension in back, shoulders, and neck',
        'Stimulates blood circulation and encourages restorative sleep',
      ],
    },
    image: 'https://i.ibb.co/1GZ7930w/Captura-de-tela-2026-10-23-084058-convertido-de-png.webp',
  },

  // 17. Bodysculpt (remodelação corporal)
  {
    id: 'bodysculpt',
    category: 'corporais',
    duration: '60 min',
    price: {
      pt: '$90',
      en: '$90',
    },
    name: {
      pt: 'Bodysculpt (remodelação corporal)',
      en: 'Bodysculpt (Body Contouring)',
    },
    description: {
      pt: 'Combina ultrassom, vacuoterapia e radiofrequência, voltado a gordura localizada, celulite e flacidez, para pele mais lisa e firme. Resultados variam.',
      en: 'Combines ultrasound, vacuotherapy, and radiofrequency targeting localized fat, cellulite, and skin laxity for smoother, firmer contours. Results vary.',
    },
    benefits: {
      pt: [
        'Tecnologia tripla: ultrassom, sucção e radiofrequência',
        'Melhora visível no aspecto da celulite e contorno corporal',
        'Ativação da drenagem linfática e firmeza da pele',
      ],
      en: [
        'Triple technology: ultrasound, vacuotherapy & RF',
        'Noticeable improvement in skin laxity and cellulite appearance',
        'Enhances lymphatic drainage and contour firmness',
      ],
    },
    image: 'https://i.ibb.co/rKGp8JWS/Captura-de-tela-2026-10-23-084209-convertido-de-png.webp',
  },

  // 18. Massagem Modeladora Detox
  {
    id: 'massagem-modeladora-detox',
    category: 'corporais',
    duration: '60 min',
    price: {
      pt: '$110',
      en: '$110',
    },
    name: {
      pt: 'Massagem Modeladora Detox',
      en: 'Detox Sculpting Massage',
    },
    description: {
      pt: 'Terapia suave e potente que ajuda a reduzir o inchaço e aumentar a circulação, deixando o corpo mais leve e equilibrado.',
      en: 'Gentle yet powerful sculpting therapy that helps reduce swelling and boost circulation, leaving the body lighter and balanced.',
    },
    benefits: {
      pt: [
        'Drenagem efetiva de líquidos retidos e toxinas corporais',
        'Estimula o metabolismo local e o contorno da silhueta',
        'Sensação imediata de corpo leve, desinchado e descansado',
      ],
      en: [
        'Effective drainage of retained fluids and metabolic toxins',
        'Stimulates local circulation and sculpts silhouette lines',
        'Immediate sensation of a lighter, depuffed body',
      ],
    },
    image: 'https://i.ibb.co/1JdrKQ8h/Captura-de-tela-2026-10-23-084242-convertido-de-png.webp',
  },

  // 19. Manta Térmica Infravermelha
  {
    id: 'manta-termica-infravermelha',
    category: 'corporais',
    duration: '30 min',
    price: {
      pt: '$40',
      en: '$40',
    },
    name: {
      pt: 'Manta Térmica Infravermelha',
      en: 'Infrared Thermal Sauna Blanket',
    },
    description: {
      pt: 'Calor infravermelho que promove relaxamento profundo e transpiração desintoxicante. Ótimo complemento para rotinas de bem-estar.',
      en: 'Infrared heat that promotes deep muscle relaxation and detoxifying perspiration. An excellent complement to wellness routines.',
    },
    benefits: {
      pt: [
        'Termoterapia que estimula o gasto calórico e transpiração',
        'Eliminação de toxinas e redução da retenção de líquidos',
        'Alívio de dores musculares e fadiga física crônica',
      ],
      en: [
        'Thermocare stimulating caloric expenditure & perspiration',
        'Flushes out accumulated toxins and reduces water weight',
        'Relieves chronic muscle aches and joint soreness',
      ],
    },
    image: 'https://i.ibb.co/1fQKNNpt/Captura-de-tela-2026-10-23-084354-convertido-de-png.webp',
  },

  // 20. Pacote 3 Áreas
  {
    id: 'pacote-3-areas',
    category: 'laser',
    duration: '60 min',
    price: {
      pt: '$150',
      en: '$150',
    },
    name: {
      pt: 'Pacote 3 Áreas',
      en: '3-Area Laser Package',
    },
    description: {
      pt: 'Escolha 3 áreas por preço fixo e vantajoso, economizando até 50% ou mais em relação aos tratamentos individuais.',
      en: 'Choose any 3 areas for a fixed, advantageous price, saving up to 50% or more compared to individual treatments.',
    },
    benefits: {
      pt: [
        'Economia de até 50% ou mais comparado às sessões avulsas',
        'Liberdade para escolher as 3 áreas que mais incomodam você',
        'Tratamento completo realizado com rapidez no mesmo dia',
      ],
      en: [
        'Save up to 50% or more versus individual area rates',
        'Total flexibility to pick your top 3 priority areas',
        'Complete high-efficiency treatment performed in one visit',
      ],
    },
    image: 'https://i.ibb.co/dwwJvm1C/Captura-de-tela-2026-10-23-085703-convertido-de-png.webp',
    badge: {
      pt: 'Melhor Custo-Benefício',
      en: 'Best Value',
    },
  },

  // 21. Área Extra Pequena
  {
    id: 'area-extra-pequena',
    category: 'laser',
    duration: '15 min',
    price: {
      pt: 'A partir de $30',
      en: 'From $30',
    },
    name: {
      pt: 'Área Extra Pequena',
      en: 'Extra Small Laser Area',
    },
    description: {
      pt: 'Buço, queixo, patilhas, dedos das mãos ou dedos dos pés.',
      en: 'Upper lip, chin, sideburns, fingers, or toes.',
    },
    benefits: {
      pt: [
        'Sessão ultrarrápida de 15 minutos que cabe na sua rotina',
        'Eliminação precisa e segura de pelos indesejados no rosto ou mãos',
        'Pele lisa sem cortes ou manchas causadas por lâminas e pinças',
      ],
      en: [
        'Ultra-quick 15-minute appointment fitting into any schedule',
        'Precise removal of unwanted facial or finger/toe hairs',
        'Smooth skin without razor burns or hyperpigmentation',
      ],
    },
    image: 'https://i.ibb.co/ZR3ZjCbb/Captura-de-tela-2026-10-23-085803-convertido-de-png.webp',
  },

  // 22. Área Pequena
  {
    id: 'area-pequena',
    category: 'laser',
    duration: '20 min',
    price: {
      pt: '$70',
      en: '$70',
    },
    name: {
      pt: 'Área Pequena',
      en: 'Small Laser Area',
    },
    description: {
      pt: 'Axilas, linha do abdômen (linha alba), nuca, patilhas ou linha do biquíni.',
      en: 'Underarms, linea alba (stomach line), back of neck, sideburns, or bikini line.',
    },
    benefits: {
      pt: [
        'Perfeito para axilas ou contorno do biquíni',
        'Elimina a foliculite crônica e clareia a região com o tempo',
        'Liberdade diária sem preocupação com depilações frequentes',
      ],
      en: [
        'Ideal for underarms or bikini contours',
        'Eliminates chronic folliculitis and visibly brightens shadowed skin',
        'Effortless everyday freedom from recurring shaving routines',
      ],
    },
    image: 'https://i.ibb.co/N2H7yPbh/Captura-de-tela-2026-10-23-085851-convertido-de-png.webp',
  },

  // 23. Área Média
  {
    id: 'area-media',
    category: 'laser',
    duration: '30 min',
    price: {
      pt: '$90',
      en: '$90',
    },
    name: {
      pt: 'Área Média',
      en: 'Medium Laser Area',
    },
    description: {
      pt: 'Rosto completo, virilha completa (Brazilian), abdômen, ombros, peito superior, meio braço, meia coxa ou glúteos.',
      en: 'Full face, Brazilian bikini, abdomen, shoulders, upper chest, half arm, half leg, or buttocks.',
    },
    benefits: {
      pt: [
        'Cobertura ideal para áreas altamente procuradas como virilha completa',
        'Redução progressiva e definitiva da espessura dos pelos',
        'Pele extremamente macia, uniforme e sem irritações',
      ],
      en: [
        'Top choice for popular zones including Brazilian & full face',
        'Progressive, permanent reduction of hair density',
        'Extremely soft, smooth skin free of shaving bumps',
      ],
    },
    image: 'https://i.ibb.co/7JL6c0rQ/Captura-de-tela-2026-10-23-090038-convertido-de-png.webp',
  },

  // 24. Áreas Grandes
  {
    id: 'areas-grandes',
    category: 'laser',
    duration: '40 min',
    price: {
      pt: '$120',
      en: '$120',
    },
    name: {
      pt: 'Áreas Grandes',
      en: 'Large Laser Area',
    },
    description: {
      pt: 'Pernas inteiras, costas inteiras, combo peito + abdômen completo ou braços inteiros.',
      en: 'Full legs, full back, complete chest + abdomen combo, or full arms.',
    },
    benefits: {
      pt: [
        'Cobertura completa de pernas inteiras, costas ou braços',
        'Ponteira ampla e resfriada para um tratamento ágil e confortável',
        'Acaba com os pelos encravados em grandes extensões corporais',
      ],
      en: [
        'Comprehensive full legs, full back, or arm coverage',
        'Broad contact-cooled handpiece for fast and comfortable sessions',
        'Puts an end to ingrown hairs across broad body areas',
      ],
    },
    image: 'https://i.ibb.co/SX9mdH4V/Captura-de-tela-2026-10-23-090136-convertido-de-png.webp',
  },

  // 25. Corpo Inteiro
  {
    id: 'corpo-inteiro',
    category: 'laser',
    duration: '90+ min',
    price: {
      pt: 'A partir de $249.90',
      en: 'From $249.90',
    },
    name: {
      pt: 'Corpo Inteiro',
      en: 'Full Body Laser Experience',
    },
    description: {
      pt: 'Tratamento completo para até 6 áreas personalizadas, com máximo conforto e acompanhamento profissional.',
      en: 'Comprehensive treatment for up to 6 personalized areas, with ultimate comfort and dedicated professional care.',
    },
    benefits: {
      pt: [
        'Tratamento VIP completo cobrindo até 6 áreas personalizadas',
        'Máxima economia e aproveitamento do seu tempo',
        'Acompanhamento e suporte exclusivo durante todo o ciclo',
      ],
      en: [
        'VIP comprehensive treatment covering up to 6 custom areas',
        'Maximum value and time-efficiency across sessions',
        'Dedicated care and monitoring throughout your hair-free journey',
      ],
    },
    image: 'https://i.ibb.co/C5wDgnJH/Captura-de-tela-2026-10-23-090341-convertido-de-png.webp',
    badge: {
      pt: 'Experiência Completa',
      en: 'Complete Experience',
    },
  },

  // 27. Consulta & Avaliação Personalizada
  {
    id: 'consulta-avaliacao-personalizada',
    category: 'consulta',
    duration: '30 min',
    price: {
      pt: '$0',
      en: '$0',
    },
    name: {
      pt: 'Consulta & Avaliação Personalizada',
      en: 'Personalized Consultation & Assessment',
    },
    description: {
      pt: 'Avaliação personalizada para analisar necessidades, objetivos e condições da pele ou do corpo, criando um plano de tratamento seguro e eficaz.',
      en: 'Personalized evaluation to analyze your unique needs, goals, and skin or body condition, creating a safe and effective tailored treatment plan.',
    },
    benefits: {
      pt: [
        'Análise aprofundada do fototipo, tipo de pele e histórico individual',
        'Criação de um protocolo de tratamentos sob medida para seus objetivos',
        'Sem custo e sem compromisso para você iniciar sua jornada com segurança',
      ],
      en: [
        'In-depth analysis of skin type, phototype, and individual needs',
        'Custom treatment protocol crafted specifically for your goals',
        'Free of charge and zero-obligation to begin your journey with peace of mind',
      ],
    },
    image: CONSULT_IMG,
    badge: {
      pt: 'Gratuita',
      en: 'Complimentary',
    },
  },
];

export const CATEGORIES = [
  { id: 'all', pt: 'Todos os Serviços', en: 'All Services' },
  { id: 'faciais', pt: 'Tratamentos Faciais', en: 'Facial Treatments' },
  { id: 'corporais', pt: 'Tratamentos Corporais', en: 'Body Treatments' },
  { id: 'laser', pt: 'Depilação a Laser', en: 'Laser Hair Removal' },
  { id: 'consulta', pt: 'Consulta & Avaliação', en: 'Consultation' },
] as const;

export const UI_TRANSLATIONS = {
  pt: {
    brandSubtitle: 'Beauty Spa',
    heroWelcome: 'Bem-vinda ao Amarii Beauty Spa',
    heroSubtitle: 'Seu momento de cuidado começa aqui.',
    heroParagraph: 'Descubra tratamentos faciais, corporais e depilação a laser pensados para cuidar da sua pele, valorizar sua beleza e proporcionar uma experiência de bem-estar personalizada.',
    viewAllServices: 'Ver Todos os Serviços',
    bookMyTime: 'Agendar meu horário',
    allServicesCount: 'serviços disponíveis',
    bookButton: 'Agendar',
    originalPricePrefix: 'De ',
    benefitsTitle: 'Benefícios principais:',
    disclaimer: '* Todos os tratamentos são precedidos de avaliação. Os resultados variam de pessoa para pessoa.',
    freeBadge: 'Gratuito',
    spaLocation: 'Ambiente aconchegante, higiênico e privativo para o seu momento de paz e bem-estar.',
    directWhatsApp: 'Agendamento direto via WhatsApp:',
  },
  en: {
    brandSubtitle: 'Beauty Spa',
    heroWelcome: 'Welcome to Amarii Beauty Spa',
    heroSubtitle: 'Your moment of care begins here.',
    heroParagraph: 'Discover facial treatments, body wellness, and laser hair removal crafted to care for your skin, enhance your natural beauty, and deliver a personalized well-being experience.',
    viewAllServices: 'View All Services',
    bookMyTime: 'Book My Appointment',
    allServicesCount: 'available services',
    bookButton: 'Book Now',
    originalPricePrefix: 'Was ',
    benefitsTitle: 'Key Benefits:',
    disclaimer: '* All treatments are preceded by an individualized evaluation. Results may vary from person to person.',
    freeBadge: 'Complimentary',
    spaLocation: 'Cozy, serene, and private aesthetic environment for your total relaxation.',
    directWhatsApp: 'Direct WhatsApp booking:',
  },
};

