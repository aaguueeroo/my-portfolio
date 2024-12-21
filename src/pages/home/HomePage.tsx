import React, {ReactElement} from 'react';
import {Box, Button, Chip, Typography} from '@mui/material';
import {ReactTyped} from 'react-typed';
import theme from "../../theme";
import './BackgroundShapes.css';
import {FaArrowRight, FaDatabase, FaEnvelope, FaFire, FaGithub, FaLinkedin, FaStackOverflow} from 'react-icons/fa';
import {SiDart, SiFlutter} from 'react-icons/si';
import {FaXTwitter} from "react-icons/fa6";

const SocialIcon = ({href, icon: Icon}: { href: string; icon: React.ElementType; size?: number }) => (
    <a href={href} target="_blank" rel="noopener noreferrer">
        <Icon size={24} style={{color: theme.palette.secondary.main}}/>
    </a>
);

const SocialIcons = () => (
    <Box display="flex" justifyContent="left" alignItems="center" gap={3}>
        <SocialIcon href="mailto:hi@juliaaguero.com" icon={FaEnvelope}/>
        <SocialIcon href="https://www.linkedin.com/in/julia-aguero-fraguas/" icon={FaLinkedin}/>
        <SocialIcon href="https://github.com/aaguueeroo" icon={FaGithub}/>
        <SocialIcon href="https://stackoverflow.com/users/17681687/jagüero" icon={FaStackOverflow}/>
        <SocialIcon href="https://twitter.com/aaguueeroo" icon={FaXTwitter}/>
    </Box>
);
const IntroductionSection = () => {
    return (
        <Box
            component="section"
            height="100vh"
            display="flex"
            alignItems="center"
            justifyContent="center"
            position={"relative"}
        >
            <div className="polygon1"></div>
            <div className="polygon2"></div>

            <Box maxWidth="700px" width="50%">
                <Typography variant="h4" gutterBottom style={{fontWeight: "normal"}}>
                    Hi, I'm Julia
                </Typography>
                <Typography variant="h2" component="h2">
                    <span style={{fontFamily: 'Abel, sans-serif'}}>I do </span>
                    <ReactTyped
                        strings={['mobile development', 'frontend', 'backend', 'design', 'UX', 'project management']}
                        typeSpeed={100}
                        backSpeed={50}
                        backDelay={1000}
                        startDelay={500}
                        loop
                        showCursor
                        style={{
                            fontFamily: 'Anton, sans-serif', // Replace with your desired font
                            fontSize: '3rem', // Adjust the size as needed
                            color: theme.palette.primary.main, // Replace with your desired color (e.g., primary color)
                        }}
                    />
                </Typography>
                <Box mt={5}>
                    <SocialIcons/>
                </Box>
            </Box>
        </Box>
    );
};

interface SkillChipProps {
    icon: ReactElement;
    label: string;
}

const SkillChip: React.FC<SkillChipProps> = ({icon, label}) => (
    <Chip
        icon={icon}
        label={label}
        variant="outlined"
        color="secondary"
    />
);

const LearnMoreButton = () => (
    <Box display="flex" alignItems="center">
        <Button
            variant="text"
            color="primary"
            endIcon={<FaArrowRight />}
            disableFocusRipple={true}
            disableRipple={true}
            sx={{
                fontFamily: 'JetBrains Mono',
                fontSize: '1.2rem',
                textTransform: 'none',
                '&:hover': {
                    backgroundColor: 'transparent',
                    '& .MuiSvgIcon-root': {
                        transform: 'translateX(5px)',
                        transition: 'transform 0.2s ease-in-out',
                    },
                },
                ml: 'auto', // Aligns button to the right
            }}
        >
            LEARN MORE
        </Button>
    </Box>
);

const AboutMeSection = () => (
    <Box
        component="section"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        position="relative"
        height="100vh"
    >
        <Typography variant="h4" gutterBottom>About Me</Typography>
        <Box
            display="flex"
            justifyContent="center"
            alignItems="flex-start"
            maxWidth="1000px"
            width="60%"
            mt={4}
        >
            <Box flex="0 0 30%" maxWidth="300px" mr={4}>
                <img
                    src="/path-to-your-image.jpg"
                    alt="About Me"
                    style={{width: '100%', borderRadius: '10px'}}
                />
            </Box>
            <Box flex="1">
                <Typography variant="h5" gutterBottom>
                    Title about me
                </Typography>
                <Typography variant="body1">
                    Maiestatismoderatius vero nonumy suspendisse mi pericula purus conceptam cum iriure ludus vivamus.
                    Meaassueverit menandri nonumes voluptaria dicit torquent sit posidonium vestibulum ornare tortor cum
                    simul. Adipiscingviderer ex vero epicuri facilis deserunt patrioque vitae. Rectequeparturient
                    natoque interpretaris persecuti menandri maximus convallis maecenas conceptam percipit debet urna
                    sententiae nisi porta petentium adversarium saperet urbanitas. Suscipitan massa et vitae agam simul
                    affert aliquam eget suas pertinacia aenean proin turpis interesset habitasse maiestatis inani
                    efficitur. Hasmoderatius fringilla iaculis.
                </Typography>
                <Box display="flex" gap={2} flexWrap="wrap" mt={2}>
                    <SkillChip icon={<SiFlutter/>} label="Flutter"/>
                    <SkillChip icon={<SiDart/>} label="Dart"/>
                    <SkillChip icon={<FaFire/>} label="Firebase"/>
                    <SkillChip icon={<FaDatabase/>} label="SQL"/>
                    <SkillChip icon={<FaGithub/>} label="GitHub"/>
                </Box>
                <LearnMoreButton/>
            </Box>
        </Box>


    </Box>
);


const HomePage = () => {
    return (
        <Box>
            <IntroductionSection/>
            <AboutMeSection/>
        </Box>
    );

}

export default HomePage;
