
import '../css/index.css'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function Loading() {

    return (
        <>
            <div style={{
                display: 'flex',
                width: '100%',
                height: '100vh',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Box className="loadingContainer" display={'flex'}>
                    <CircularProgress />
                    <span>Aguarde...</span>
                </Box>
            </div>
        </>
    );
}

export default Loading;