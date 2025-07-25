import React from 'react'

import { allExams as getAllExams } from '../data/mocks/exams';

const loginId = localStorage.getItem('loginId') || '';

export const allExams = getAllExams.filter((data) => data.teacherId === loginId);

// console.log(`getAllExams -> loginId = `, loginId);
// console.log(`getAllExams -> allExams = `, allExams);