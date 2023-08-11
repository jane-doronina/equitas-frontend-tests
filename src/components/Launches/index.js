import {Grid} from "@mui/material";
import Launch from "../Launch";
import styles from './launches.module.css';

const Launches = ({launches}) =>  {
    return (
        <Grid container spacing={{ xs: 2, md: 3, lg: 4 }}>
            {launches.map((launch) => (
                <Grid key={launch.id} item xs={12} md={6} lg={4}>
                    <Launch props={launch}/>
                </Grid>
            ))}
        </Grid>
    );
}


export default Launches
