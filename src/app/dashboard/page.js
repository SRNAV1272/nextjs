'use client'
import Camera from '@/components/canvas/canvas'
import Canvas from '@/components/trace/trace';
import { Grid, Paper } from '@mui/material'
import React, { useState } from 'react'

function Dashboard() {
    const [coords, setCoords] = useState([])

    function GetData(data) {
        setCoords(data)
    }

    return (
        <>
            <Grid
                container
                p={5}
                justifyContent={'space-around'}
                alignItems={'center'}
            >
                {/* {
                    [1, 2, 3].map(() => {
                        return (

                            <Grid
                                // key={idx}
                                item
                                xs={12}
                                lg={6}
                                p={1}
                                display={'flex'}
                                justifyContent={'center'}
                                alignItems={'center'}
                            >
                                <Paper elevation={5} sx={{ p: 3 }}>
                                    <Camera />
                                </Paper>
                            </Grid>

                        )
                    })
                } */}

                <Grid
                    // key={idx}
                    item
                    xs={12}
                    lg={6}
                    p={1}
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                >
                    <Paper elevation={5} sx={{ p: 3 }}>
                        <Camera GetData={GetData} id={1} />
                    </Paper>
                </Grid>
                <Grid
                    // key={idx}
                    item
                    xs={12}
                    lg={6}
                    p={1}
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                >
                    <Paper elevation={5} sx={{ p: 3 }}>
                        <Canvas coords1={coords} color={'red'} />
                    </Paper>
                </Grid>

                <Grid
                    // key={idx}
                    item
                    xs={12}
                    lg={6}
                    p={1}
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                >
                    <Paper elevation={5} sx={{ p: 3 }}>
                        <Camera GetData={GetData} id={2} />
                    </Paper>
                </Grid>
                <Grid
                    // key={idx}
                    item
                    xs={12}
                    lg={6}
                    p={1}
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                >
                    <Paper elevation={5} sx={{ p: 3 }}>
                        <Camera GetData={GetData} id={3} />
                    </Paper>
                </Grid>
            </Grid>
        </>
    )
}

export default Dashboard
