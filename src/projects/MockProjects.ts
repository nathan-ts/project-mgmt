import { Project } from './Project';

export const MOCK_PROJECTS = [
  new Project({
    id: 1,
    name: 'Bytecard',
    description:
      'Bytecard provides software developers, medium and small businesses, and digital nomads with a web based tool that enables significant cost savings.',
    imageUrl: '/assets/placeimg_500_300_arch4.jpg',
    contractTypeId: 1,
    contractSignedOn: '2021-09-28T08:55:03.473Z',
    budget: 31052,
    isActive: false
  }),
  new Project({
    id: 2,
    name: 'Overhold',
    description:
      'Overhold is a great resource for finding out about the value of different investments and how to invest for maximum value.',
    imageUrl: '/assets/placeimg_500_300_arch1.jpg',
    contractTypeId: 5,
    contractSignedOn: '2021-02-01T14:41:06.419Z',
    budget: 28661,
    isActive: true
  }),
  new Project({
    id: 3,
    name: 'Veribet',
    description:
      'Veribet is your direct access to sports betting, racing and card games.',
    imageUrl: '/assets/placeimg_500_300_arch12.jpg',
    contractTypeId: 2,
    contractSignedOn: '2021-10-28T19:03:47.706Z',
    budget: 97541,
    isActive: true
  }),
  new Project({
    id: 4,
    name: 'Vagram',
    description:
      'Vagram is a platform for travel-lovers to plan trips and share experiences.',
    imageUrl: '/assets/placeimg_500_300_arch5.jpg',
    contractTypeId: 6,
    contractSignedOn: '2021-12-30T15:32:08.344Z',
    budget: 31052,
    isActive: false
  }),
  new Project({
    id: 5,
    name: 'Sonair',
    description:
      'Sonair is a medical-grade, portable, non-invasive vaporizer that helps you better manage your asthma and COPD symptoms.',
    imageUrl: '/assets/placeimg_500_300_arch12.jpg',
    contractTypeId: 4,
    contractSignedOn: '2021-01-09T06:15:46.944Z',
    budget: 41068,
    isActive: true
  }),
  new Project({
    id: 6,
    name: 'Tripledex',
    description:
      'Tripledex is a fan-made website that allows players to trade and compete with each other in the world of pokemon.',
    imageUrl: '/assets/placeimg_500_300_arch1.jpg',
    contractTypeId: 2,
    contractSignedOn: '2021-09-01T15:44:36.035Z',
    budget: 91714,
    isActive: false
  })
];
