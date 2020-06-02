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
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 95vw;
    
    
    @media screen  and (min-width: 568px) {
      border-left: none;
      flex-direction: row;
      max-width:850px;
    }

    .PersonCard-container {
      width: 300px;
    }

    .PersonDetails-container {
      border-top: none;
      border: 2px solid ${COLORS.BORDER_COLOR};
      border-top: none;
      padding: ${theme.spacing(1)}px;
     
      @media screen  and (min-width: 568px) {
        border-left: none;
        border-top: 2px solid ${COLORS.BORDER_COLOR};
        width: 500px;
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
