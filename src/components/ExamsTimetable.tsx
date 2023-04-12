import { FC } from 'react'
import { classes } from '../styles/utils';
import { LVIV_TIMEZONE } from '../utils/date';
import { ExamsTimetableItem } from '../utils/types';
import styles from './ExamsTimetable.module.scss';
import TimetableLink from './TimetableLink';

type OwnProps = {
  exams: ExamsTimetableItem[]
}

const ExamsTimetable: FC<OwnProps> = ({exams}) => {

  const compareDates = (a: ExamsTimetableItem, b: ExamsTimetableItem) => 
      a.date.getTime() - b.date.getTime();

  const isSameDay = (a: Date, b: Date) => 
      a.getDate() === b.getDate() && a.getMonth() === b.getMonth() && a.getFullYear() === b.getFullYear();

  return (
    <div className={styles.exams}>
      {exams?.sort(compareDates).map((exam, index) => (
        <div key={index} className={classes(isSameDay(exam.date, new Date()) && styles.active)}>
          <div>
            <p>{exam.date.toLocaleString("uk-UA", {timeZone: LVIV_TIMEZONE, weekday: "long", day: "numeric", month: "long"})}</p>
            <p>{exam.number} пара</p>
          </div>
          <h3>{exam.subject}</h3>
          <div>
            <p>{exam.lecturer.trim().replace(/,$/, '')}</p>
            <TimetableLink urls={exam.urls} type={'lab'} />
          </div>
        </div>
      ))}
    </div>
  )
};

export default ExamsTimetable;