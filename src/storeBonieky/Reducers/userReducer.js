const initialState = {
  id: '5e8cbc6b53d9b211d4ac5e83',
  name: 'Vinicius Fernandes',
  birth: '1989-12-11T02:00:00.000Z',
  image:
    'https://scontent.fvcp4-1.fna.fbcdn.net/v/t1.0-9/12832417_1041624182578538_49301089320142279_n.jpg?_nc_cat=109&_nc_sid=7aed08&_nc_ohc=z8Vix3Uyq8IAX9ncOQ2&_nc_ht=scontent.fvcp4-1.fna&oh=71cc2a4d2047885c06f6a9deb248d295&oe=5EB33ACC',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_NAME':
      return { ...state, name: action.payload.name };
      break;
  }

  return state;
};
