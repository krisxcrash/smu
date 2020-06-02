/** @jsx jsx */

import React from 'react';
import { css, jsx } from '@emotion/core';
import cn from 'classnames';
import { useTheme } from '@material-ui/core/styles';

import PersonCard from './PersonCard';
import { Account } from '../App';
import PersonDetails from './PersonDetails';
import { COLORS } from '../colors';

type Props = {
  className?: string;
  accountData: Account;
};

const Person: React.FC<Props> = props => {
  const { className = '', accountData } = props;
  const theme = useTheme();
  const style = css`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    @media screen  and (min-width: 768px) {
      flex-direction: row;
    }

    .Person {
      width: 850px;
    }

    .PersonCard-container {
      width: 300px;
    }

    .PersonDetails-container {
      padding: ${theme.spacing(1)}px;
      border: 2px solid ${COLORS.BORDER_COLOR};
      border-top: none;
     
      @media screen  and (min-width: 768px) {
        width: 500px;
        border-left: none;
        border-top: 2px solid ${COLORS.BORDER_COLOR};

    }

    }
  `;

  return (
    <div className={cn(className, 'Person')} css={style}>
      <div className="PersonCard-container">
        <PersonCard accountData={accountData} />
      </div>
      <div className="PersonDetails-container">
        <PersonDetails accountData={accountData} />
      </div>
    </div>
  )
};

export default Person;
