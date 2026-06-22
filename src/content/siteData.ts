export type Schedule = {
  time: string;
  days: string;
  location?: string;
};

export const siteData = {
  schedules: {
    kendo: {
      time: "8:00 à 10:02",
      days: "Lundis et mardis",
      location: "Salle habituelle",
    },
    iaido: {
      time: "10:30 à 12:00",
      days: "Mercredis et jeudis",
      location: "Salle habituelle",
    },
  } as Record<string, Schedule>,

  disciplines: [
    { id: "kendo", name: "Kendo" },
    { id: "iaido", name: "Iaïdo" },
  ],

  contact: {
    address: "Salle de sport, Gare Saint Sauveur, Lille",
    headquarters: "81, rue Pasteur 59155 Faches-Thumesnil",
    mapsUrl: "https://maps.google.com/?q=266+Rue+Camille+Guérin,+59800+Lille",
  },
};

export default siteData;
