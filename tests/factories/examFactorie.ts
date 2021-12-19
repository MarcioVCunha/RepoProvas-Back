/* eslint-disable import/no-extraneous-dependencies */
import faker from 'faker';

export default function createExam() {
  return {
    name: '2021.1',
    teacherId: 1,
    classId: 1,
    type: 'P1',
    link: faker.internet.url(),
  };
}
