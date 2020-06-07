import React from 'react';
import {Card,CardContent,Typography,Grid,/* StylesProvider*/} from '@material-ui/core';
import CountUp from 'react-countup';
import CX from "classnames";

import Styles from './cards.module.css'
const cards =({data:{confirmed,deaths,recovered,lastupdate}})=>{

    if(!confirmed){
        return 'Loading...';
    }
    

    return (
        <div className={Styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid  item component={Card} xs={12} md={3} className={CX(Styles.card,Styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">
                            <CountUp 
                                start={0}
                                end={confirmed.value}
                                duration={2.5}
                                separator=','
                            />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastupdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of Active Cases of Covid-19</Typography>
                    </CardContent>
                </Grid>
                <Grid  item component={Card} xs={12} md={3} className={CX(Styles.card,Styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5">
                            <CountUp 
                                start={0}
                                end={recovered.value}
                                duration={2.5}
                                separator=','
                            />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastupdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of recovered Cases of Covid-19</Typography>
                    </CardContent>
                </Grid>
                <Grid  item component={Card} xs={12} md={3} className={CX(Styles.card,Styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5">
                            <CountUp 
                                start={0}
                                end={deaths.value}
                                duration={2.5}
                                separator=','
                            />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastupdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of Deaths of Covid-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}
export default cards