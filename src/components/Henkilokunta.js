import React from 'react';
//import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Card1 from './Card1';
import Card2 from './Card2';

// const useStyles = makeStyles(theme => ({
//     root: {
//       width: '100%',
//       marginTop: theme.spacing(3),
//       overflowX: 'auto',
//     },
//     table: {
//       minWidth: 650,
//     },
//   })); 

function Henkilokunta() {
    return(

        <Grid container justify = "center">
            
        <Card style={ {marginTop: 20, marginBottom: 20 }}>
        
        <h1 style={ {textAlign: "center"}}>KirjaApin henkilökunta esittäytyy</h1>
        
        <Paper>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Nimi</TableCell><TableCell>Titteli</TableCell><TableCell>Email</TableCell>
                    </TableRow>
                </TableHead>
        <TableBody>
                <TableRow>
                        <TableCell>Kristiina Lemmetyinen</TableCell>
                        <TableCell>omistaja</TableCell>
                        <TableCell>kristiina@kirjaapp.fi</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Saskia Oulanka</TableCell>
                        <TableCell>Designer</TableCell>
                        <TableCell>saskia@kirjaapp.fi</TableCell>
                </TableRow>
        </TableBody>
            </Table>
        </Paper>
        </Card>

        <Grid spacing={4} container justify = "center">
        <Grid item xm={6} >
        <Card1/>
        </Grid>
        <Grid item xm={6}>
        <Card2/>
        </Grid>
        </Grid>


        </Grid>
);
}

export default Henkilokunta;