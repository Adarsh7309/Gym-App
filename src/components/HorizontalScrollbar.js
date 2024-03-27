import React , {useContext}from 'react'
import { Box, Typography} from '@mui/material';
import BodyPart from './BodyPart';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import ExerciseCard from './ExerciseCard';

import RightArrowIcon from '../assets/assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/assets/icons/left-arrow.png';
import Loader from './Loader';

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};
const HorizontalScrollbar = ({ data, bodyPart, setBodyPart, isBodyPart }) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item) => (
        <Box 
          key={item.id || item}
          itemID={item.id || item}
          title={item.id || item}
          m="0 40px" 
        >
          {isBodyPart? <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />:<ExerciseCard exercise={item}/>}
        </Box>
      )
      )}
    </ScrollMenu>
  ) 
}

export default HorizontalScrollbar


