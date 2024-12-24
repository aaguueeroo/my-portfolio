import {Box, Button} from "@mui/material";
import {FaArrowRight} from "react-icons/fa";

const AnimatedButton = ({ text, link }: { text: string; link: string }) => (
    <Box display="flex" justifyContent="flex-end" sx={{ height: '40px' }}>
        <Button
            variant="text"
            color="primary"
            disableFocusRipple={true}
            disableRipple={true}
            endIcon={<FaArrowRight />}
            href={link}
            sx={{
                fontFamily: 'JetBrains Mono',
                fontSize: '1.2rem',
                textTransform: 'none',
                transition: 'font-size 0.2s ease-in-out',
                '&:hover': {
                    fontSize: '1.25rem',
                    backgroundColor: 'transparent',
                    '& .MuiButton-endIcon': {
                        animation: 'bounce 0.4s ease-in-out infinite',
                    },
                },
                '@keyframes bounce': {
                    '0%, 100%': {
                        transform: 'translateX(0)',
                    },
                    '50%': {
                        transform: 'translateX(4px)',
                    },
                },
            }}
        >
            {text}
        </Button>
    </Box>
);

export default AnimatedButton;
