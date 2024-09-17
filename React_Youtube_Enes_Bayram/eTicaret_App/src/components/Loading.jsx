import * as React from 'react';
import { useSelector } from 'react-redux'; // useSelector, react-redux'dan import edilir
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

function Loading() {
    const loading = useSelector((state) => state.product.loading); // state'den loading bilgisini alır

    return (
        <div>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={loading}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </div>
    );
}

export default Loading;