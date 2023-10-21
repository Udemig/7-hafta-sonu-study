export const options = {
  method: 'GET',
  url: 'https://flight-radar1.p.rapidapi.com/flights/list-in-boundary',
  params: {
    bl_lat: '34.02369',
    bl_lng: '27.406082',
    tr_lat: '42.970403',
    tr_lng: '44.761821',
    limit: '300',
  },
  headers: {
    'X-RapidAPI-Key':
      '590bbb98ebmsh246acde1e679fadp1431f3jsn27f3c5b7de13',
    'X-RapidAPI-Host': 'flight-radar1.p.rapidapi.com',
  },
};

export const options2 = {
  headers: {
    'X-RapidAPI-Key':
      '590bbb98ebmsh246acde1e679fadp1431f3jsn27f3c5b7de13',
    'X-RapidAPI-Host': 'flight-radar1.p.rapidapi.com',
  },
};
