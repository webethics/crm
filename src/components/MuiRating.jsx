import React from 'react'
import { useState } from 'react';
import { Box, FormControlLabel, Rating } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';

const MuiRating = () => {
   const [rating, setRating] = useState(null);
   const [ratingHover, setRatingHover] = useState(null);

   const handleRating = (e) => {
      setRating(+e.target.value);
   }
   const handleRatingTextOnHover = (e) => {
      setRating(+e.target.value);
   }

   const labels = {
      0.5: 'Useless',
      1: 'Useless+',
      1.5: 'Poor',
      2: 'Poor+',
      2.5: 'Ok',
      3: 'Ok+',
      3.5: 'Good',
      4: 'Good+',
      4.5: 'Excellent',
      5: 'Excellent+',
   };

   function getLabelText(rating) {
      return `${rating} Star${rating !== 1 ? 's' : ''}, ${labels[rating]}`;
   }

   const customIcons = {
      1: {
         icon: <SentimentVeryDissatisfiedIcon color="error" />,
         label: 'Very Dissatisfied',
      },
      2: {
         icon: <SentimentDissatisfiedIcon color="error" />,
         label: 'Dissatisfied',
      },
      3: {
         icon: <SentimentSatisfiedIcon color="warning" />,
         label: 'Neutral',
      },
      4: {
         icon: <SentimentSatisfiedAltIcon color="success" />,
         label: 'Satisfied',
      },
      5: {
         icon: <SentimentVerySatisfiedIcon color="success" />,
         label: 'Very Satisfied',
      },
   };

   function IconContainer(props) {
      const { value, ...other } = props;
      return <span {...other}>{customIcons[value].icon}</span>;
   }

   console.log(rating);
   return (
      <>
         <Box spacing={2} direction="column">
            <FormControlLabel control={<Rating value={rating} onChange={handleRating} size="medium" color="success" />} />
            <FormControlLabel control={<Rating value={rating} onChange={handleRating} precision={0.5} />} />
            <FormControlLabel control={<Rating value={rating} onChange={handleRating} icon={<FavoriteIcon />} emptyIcon={<FavoriteBorderIcon />} />} />
            <FormControlLabel control={<Rating value={rating} onChange={handleRating} readOnly />} label="Read Only When a user see an another user rating" />
            <FormControlLabel control={<Rating value={rating} onChange={handleRating} highlightSelectedOnly />} />
            <FormControlLabel control={<Rating value={ratingHover} getLabelText={getLabelText} onChange={handleRating} onChangeActive={(e, newHover) => setRatingHover(newHover)} precision={0.5} />} />
            <FormControlLabel control={<Rating value={rating} onChange={handleRating} max={10} />} />
            {rating !== null && (
               <Box sx={{ ml: 2 }}>{labels[ratingHover !== -1 ? ratingHover : rating]}</Box>
            )}

         </Box>
         <Box spacing={3}>
            <FormControlLabel control={<Rating value={rating} onChange={handleRating}
               IconContainerComponent={IconContainer}
               getLabelText={(value) => customIcons[value].label}
            />} />
         </Box>
      </>
   )
}

export default MuiRating;