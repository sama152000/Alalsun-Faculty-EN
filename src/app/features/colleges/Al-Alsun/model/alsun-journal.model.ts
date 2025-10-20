export interface AlAlsunJournal {
  id: string;
  name: string;
  shortName: string;
  description: string;
  image: string;
  icon: string;
  establishedDate: string;
  category: string;
  route: string;
  contact: {
    website: string;
    email: string;
  };
  details: {
    mission: string;
    specifications: {
      label: string;
      value: string;
      icon: string;
    }[];
    editorialBoard: {
      id: string;
      name: string;
      position: string;
      role: string;
      affiliation: string;
    }[];
  };
}