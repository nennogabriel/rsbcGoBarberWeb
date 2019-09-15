import React, { useState, useMemo } from 'react';
import { format, subDays, addDays } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import { Container, Time } from './styles';

export default function Dashboard() {
  const [date, setDate] = useState(new Date());

  const dateFormatted = useMemo(
    () => format(date, "d 'de' MMMM", { locale: pt }),
    [date]
  );

  function handlePrevDate() {
    setDate(subDays(date, 1));
  }

  function handleNextDate() {
    setDate(addDays(date, 1));
  }

  return (
    <Container>
      <header>
        <button type="button" onClick={handlePrevDate}>
          <MdChevronLeft size={36} color="#fff" />
        </button>
        <strong>{dateFormatted}</strong>
        <button type="button" onClick={handleNextDate}>
          <MdChevronRight size={36} color="#fff" />
        </button>
      </header>
      <ul>
        <Time past>
          <strong>08:00</strong>
          <span>Diego Fernandes</span>
        </Time>
        <Time avaliable>
          <strong>09:00</strong>
          <span>em aberto</span>
        </Time>
        <Time>
          <strong>10:00</strong>
          <span>Diego Fernandes</span>
        </Time>
        <Time>
          <strong>11:00</strong>
          <span>Diego Fernandes</span>
        </Time>
      </ul>
    </Container>
  );
}
