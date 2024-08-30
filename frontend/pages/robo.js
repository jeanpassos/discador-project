import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  TextField, Button, Grid, Typography, Table, TableHead, TableRow, TableCell, TableBody,
  FormControl, InputLabel, Select, MenuItem, Checkbox, ListItemText, Chip, TablePagination
} from '@mui/material';

const daysOfWeek = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];

const Robo = () => {
  const [number, setNumber] = useState('');
  const [callsPerMinute, setCallsPerMinute] = useState('');
  const [startTime, setStartTime] = useState('');
  const [stopTime, setStopTime] = useState('');
  const [startDays, setStartDays] = useState([]);
  const [stopDays, setStopDays] = useState([]);
  const [log, setLog] = useState([]);
  const [activeNumbers, setActiveNumbers] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleStart = () => {
    const newLog = {
      number,
      callsPerMinute,
      startTime,
      stopTime,
      startDays: startDays.join(', '),
      stopDays: stopDays.join(', '),
      status: 'Iniciado'
    };
    setLog([...log, newLog]);
    setActiveNumbers([...activeNumbers, number]);
  };

  const handleStop = (num) => {
    setLog(prevLog =>
      prevLog.map(entry =>
        entry.number === num ? { ...entry, status: 'Parado' } : entry
      )
    );
    setActiveNumbers(activeNumbers.filter(activeNumber => activeNumber !== num));
  };

  const handleSelectStartDays = (event) => {
    const value = event.target.value;
    setStartDays(typeof value === 'string' ? value.split(',') : value);
  };

  const handleSelectStopDays = (event) => {
    const value = event.target.value;
    setStopDays(typeof value === 'string' ? value.split(',') : value);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}>
      <Navbar />
      <div style={{ display: 'flex', flexGrow: 1 }}>
        <Sidebar />
        <div style={{ flexGrow: 1, padding: '20px', display: 'flex', flexDirection: 'column' }}>
          <Typography variant="h4" gutterBottom>
            Robo - Discador Automático
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                label="Número"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                label="Ligações por Minuto"
                value={callsPerMinute}
                onChange={(e) => setCallsPerMinute(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                label="Iniciar"
                type="time"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                label="Parar"
                type="time"
                value={stopTime}
                onChange={(e) => setStopTime(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <FormControl fullWidth>
                <InputLabel>Iniciar em Dias</InputLabel>
                <Select
                  multiple
                  value={startDays}
                  onChange={handleSelectStartDays}
                  renderValue={(selected) => selected.join(', ')}
                >
                  {daysOfWeek.map((day) => (
                    <MenuItem key={day} value={day}>
                      <Checkbox checked={startDays.indexOf(day) > -1} />
                      <ListItemText primary={day} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <FormControl fullWidth>
                <InputLabel>Parar em Dias</InputLabel>
                <Select
                  multiple
                  value={stopDays}
                  onChange={handleSelectStopDays}
                  renderValue={(selected) => selected.join(', ')}
                >
                  {daysOfWeek.map((day) => (
                    <MenuItem key={day} value={day}>
                      <Checkbox checked={stopDays.indexOf(day) > -1} />
                      <ListItemText primary={day} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container spacing={2} style={{ marginTop: '20px' }}>
            <Grid item>
              <Button variant="contained" color="primary" onClick={handleStart}>
                Iniciar
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" color="secondary" onClick={() => handleStop(number)}>
                Parar
              </Button>
            </Grid>
          </Grid>
          <div style={{ marginTop: '40px', flexGrow: 1 }}>
            <Typography variant="h5" gutterBottom>
              Números Ativos
            </Typography>
            <div>
              {activeNumbers.map((num, index) => (
                <Chip
                  key={index}
                  label={num}
                  color="primary"
                  onDelete={() => handleStop(num)}
                  style={{ margin: '5px' }}
                />
              ))}
            </div>
          </div>
          <div style={{ marginTop: '40px', flexGrow: 1 }}>
            <Typography variant="h5" gutterBottom>
              Análise de Ligações
            </Typography>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Número</TableCell>
                  <TableCell>Ligações por Minuto</TableCell>
                  <TableCell>Início</TableCell>
                  <TableCell>Parada</TableCell>
                  <TableCell>Dias de Início</TableCell>
                  <TableCell>Dias de Parada</TableCell>
                  <TableCell>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {log.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((entry, index) => (
                  <TableRow key={index}>
                    <TableCell>{entry.number}</TableCell>
                    <TableCell>{entry.callsPerMinute}</TableCell>
                    <TableCell>{entry.startTime}</TableCell>
                    <TableCell>{entry.stopTime}</TableCell>
                    <TableCell>{entry.startDays}</TableCell>
                    <TableCell>{entry.stopDays}</TableCell>
                    <TableCell>{entry.status}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <TablePagination
              component="div"
              count={log.length}
              page={page}
              onPageChange={handleChangePage}
              rowsPerPage={rowsPerPage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Robo;
