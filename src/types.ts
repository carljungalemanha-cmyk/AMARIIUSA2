export type ServiceCategory = 'all' | 'faciais' | 'corporais' | 'laser' | 'consulta';

export type Language = 'pt' | 'en';

export interface ServiceItem {
  id: string;
  category: 'faciais' | 'corporais' | 'laser' | 'consulta';
  duration: string;
  price: {
    pt: string;
    en: string;
  };
  originalPrice?: string;
  name: {
    pt: string;
    en: string;
  };
  description: {
    pt: string;
    en: string;
  };
  benefits: {
    pt: string[];
    en: string[];
  };
  image: string;
  badge?: {
    pt: string;
    en: string;
  };
}
