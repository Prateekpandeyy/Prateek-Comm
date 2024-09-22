import React from 'react';
import Layout from '../Layout/Layout';
import "./hero.scss";
import { Typography } from '@mui/material';
import CustomButton from '../common/button/CustomButton';
import Quality from '../Quality/Quality';
const Hero = () => {
    return (
      <Layout>
      <div className='container'>
    <div className='grid hero-grid'>
     <div className='show-info'>
     <Typography variant='h1'>
     Create and sell custom products
     </Typography>
     <ul>
        <li>100% Free to use</li>
        <li>900+ High-Quality Products</li>
        <li>Largest global print network</li>
        </ul>
        <div className='content'>
          <CustomButton>
          Start for Free
          </CustomButton>
          <CustomButton>
       How it works?
          </CustomButton>
        </div>
        <Typography variant='h5' color='#39b75d'>
        Trusted by over 8M sellers around the world
        </Typography>
     </div>

     <div className='show-ecomm'>
     <div class="tenor-gif-embed" data-postid="17799348" data-share-method="host" data-aspect-ratio="1.77778" data-width="100%"><a href="https://tenor.com/view/online-shopping-squatch-dr-squatch-drsquatchcom-dr-squatch-website-gif-17799348">Online Shopping Squatch GIF</a>from <a href="https://tenor.com/search/online+shopping-gifs">Online Shopping GIFs</a></div> 
   
      </div>
    </div>
      </div>
      <Quality />
      </Layout>
    )
}
export default Hero