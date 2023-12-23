import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box'
export default function Home() {
    // Buat useState buat nampung dataProduct
    const [dataProduct, setDataProduct] = useState([])
    const [isDataLoading, setIsDataLoading] = useState(false)

    // Buat function untuk manggil data Product
    async function fetchProduct() {
        await axios.get("https://fakestoreapi.com/products").then((res) => {
            setDataProduct(res.data)
            console.log(res.data)
        }).catch((err) => console.log(err))
    }

    // Untuk panggil data pertama kali load page
    useEffect(() => {
        fetchProduct()
    }, [])

    return (
        <>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'end'
            }}>
                <span style={{
                    fontSize: 26,

                }}>Hello, Dio</span>
                <span style={{
                    fontSize: 18,
                    cursor: 'pointer',
                    color: 'grey'
                }}>Logout</span>
            </Box>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {dataProduct.map((e, i) => (
                    <>
                        <Grid item xs={6}>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                padding: 5
                            }}>
                                <img src={e.image} width={80} height={80} />
                                <span style={{
                                    marginTop: '30px',
                                    fontSize: 22,
                                    fontWeight: 'bold'
                                }}>{e.title}</span>
                                <span style={{
                                    marginTop: '10px',
                                    fontSize: 20,
                                    color: 'grey'
                                }}>
                                    {e.description}
                                </span>
                                <span style={{
                                    marginTop: '15px',
                                    textAlign: 'end'
                                }}>${e.price}</span>
                            </Box>
                        </Grid>
                    </>
                ))}
            </Grid>
        </>
    )
}