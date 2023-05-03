import CircularProgress from '@mui/material/CircularProgress';
<<<<<<< HEAD
import Box from '@mui/material/Box';
=======
>>>>>>> a2dbde25b22bb771f1c093b4327f2ec5effa789a
import styled from 'styled-components';

// สร้าง Commponent
const Wrapper = styled.div`
    position: relative;
    height: 100vh;

    & > .loading__container {
        display: flex;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`;

export function Spinner() {
    return (
        <Wrapper>
            <div className='loading__container'>
                <CircularProgress />
            </div>
        </Wrapper>
    );
}
<<<<<<< HEAD

{
    /* <Box
                sx={{
                    display: 'flex',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: `translate(-${50}% , -${50}%)`,
                }}
            >

			</Box> */
}
=======
>>>>>>> a2dbde25b22bb771f1c093b4327f2ec5effa789a
