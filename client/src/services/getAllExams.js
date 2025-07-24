import React from 'react'

import { allExams as getAllExams } from '../data/mocks/exams';

const loginId = localStorage.getItem('loginId') || '';

export const allExams = getAllExams.find((data) => data.teacherId === loginId);
