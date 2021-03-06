import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

// import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
// eslint-disable-next-line
import { Checkbox, Button, IconArrowRight, Help, textStyle, GU } from '@aragon/ui'

import { setRecipient } from '../redux/payment/actions';
import { getRecipient } from '../redux/payment/selectors';
import { getBoxManager } from '../redux/box/selectors';
import { updateMyAccount } from '../redux/contacts/actions';

import RecipientForm from './RecipientForm';
import {BoxLoadingContainer, BoxModal} from './RequireBox';

// const useStyles = makeStyles(() => ({
//   saveInfoRow: {
//     marginBottom: '15px',
//     display: 'flex',
//     alignItems: 'center',
//   },
// }));

const Hint = styled.p`
  ${textStyle('body3')};
  margin-bottom: ${1 * GU}px;
  text-align: center;
  color: #5d6d7b;
`;

function StepRecipient({ onComplete }) {
  // const classes = useStyles();
  const recipient = useSelector(getRecipient);
  const boxManager = useSelector(getBoxManager);
  const dispatch = useDispatch();
  const [saveAccountInfo, setSaveAccountInfo] = useState(false);
  const [showBoxModal, setShowBoxModal] = useState(false);

  async function onSubmit(data) {
    dispatch(setRecipient(data));
    if(saveAccountInfo) {
      await dispatch(updateMyAccount(data));
    }
    onComplete();
  }

// eslint-disable-next-line
  function onClickSaveData(value) {
    if(boxManager) {
      setSaveAccountInfo(!saveAccountInfo);
    } else {
      setShowBoxModal(true);
    }
  }

  return (
    <BoxLoadingContainer>
      <Box width={1}>
        <BoxModal visible={showBoxModal} onClose={() => setShowBoxModal(false)}/>

        <Hint>
          Please provide your bank account informations
        </Hint>

        <RecipientForm
          initialRecipient={recipient}
          onSubmit={onSubmit}
          endComponent={({ submit, hasErrors }) => (
            <>
              {/*<label className={classes.saveInfoRow}>
                <Checkbox
                  checked={saveAccountInfo}
                  onChange={onClickSaveData}
                />
                <Box mx={1}>Save my account information</Box>
                <Help hint="What does that mean ?">
                  Your bank account information can be stored so you don't have to type them again if you come back here.
                  The data is stored encrypted in a decentralized storage, so only you have access to it.
                </Help>
              </label>*/}
              <Button mode="strong" onClick={submit} wide icon={<IconArrowRight/>} label="Next" disabled={hasErrors} />
            </>
          )}
        />
      </Box>
    </BoxLoadingContainer>
  )
}

export default StepRecipient;
