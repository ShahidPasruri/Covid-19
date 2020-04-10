import React from 'react';
import styles from './Cards.module.css'
import cx from 'classnames';
import {Card,CardContent,Typography,Grid,CircularProgress,Slide} from '@material-ui/core'
import CountUp from 'react-countup';


 const Cards=({data:{confirmed,recovered,deaths,lastUpdate}})=>{

     if(!confirmed){
         return <div className={styles.root}>
         <CircularProgress />
         <CircularProgress color="secondary" />
       </div>;
     }


 

     return(
         
         
         <div className={styles.container}>
         {/* {carding} */}
         

         
             <Grid container spacing={3} justify='center'>

             <Slide direction="up" in={confirmed} mountOnEnter unmountOnExit>
                         
             <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.infected)}>

             <CardContent>
                 <Typography color='textSecondary' gutterBottom>Infected </Typography>
                 <Typography variant='h5' >
                 <CountUp start={0} end={confirmed.value} separator=',' duration={2.5}/>
                  </Typography>
                 <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                 <Typography variant='body2'>Number Of Active Cases Of Covid-19</Typography>
             </CardContent>
             </Grid>
             </Slide>

            
             <Slide direction="up" in={confirmed} mountOnEnter unmountOnExit>
             <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.recoverd)}>
             <CardContent>
                 <Typography color='textSecondary' gutterBottom>Recoverd </Typography>
                 <Typography variant='h5' >
                 <CountUp start={0} end={recovered.value}  separator=',' duration={2.5}/>
                 </Typography>
                 <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                 <Typography variant='body2'>Number Of Recoverd Cases Of Covid-19</Typography>
             </CardContent>
             </Grid>
             </Slide>
             <Slide direction="up" in={confirmed} mountOnEnter unmountOnExit>
             <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.death)}>
             <CardContent>
                 <Typography color='textSecondary' gutterBottom>Death </Typography>
                 <Typography variant='h5' > 
                 <CountUp start={0} end={deaths.value}  separator=',' duration={2.5}/>
                 </Typography>
                 <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                 <Typography variant='body2'>Number Of Deaths Of Covid-19</Typography>
             </CardContent>
             </Grid>
             </Slide>

             </Grid>
             
         </div>
     )
 }

 export default Cards;