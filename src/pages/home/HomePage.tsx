import React, {ReactElement} from 'react';
import {Box, Button, Chip, Typography} from '@mui/material';
import {ReactTyped} from 'react-typed';
import theme from "../../theme";
import './BackgroundShapes.css';
import {FaDatabase, FaEnvelope, FaFire, FaGithub, FaLinkedin, FaStackOverflow} from 'react-icons/fa';
import {SiDart, SiFlutter} from 'react-icons/si';
import {FaXTwitter} from "react-icons/fa6";
import AnimatedButton from "../../components/AnimatedButton";
import {Link} from "react-router-dom";

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
            minHeight="100vh"
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

const AboutMeSection = () => (
    <Box
        component="section"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        position="relative"
    >
        <div className="polygon3"></div>
        <div className="polygon4"></div>
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
                <AnimatedButton text={"LEARN MORE"} link={"/about"}/>
            </Box>
        </Box>


    </Box>
);


interface ProjectCardProps {
    image: string;
    title: string;
    description: string;
    technologies: string[];
    link: string;
    backgroundColor: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
                                                     image,
                                                     title,
                                                     description,
                                                     technologies,
                                                     link,
                                                     backgroundColor,
                                                 }) => (
    <Link to={link} style={{textDecoration: 'none', flex: 1}}>
        <Box
            bgcolor={backgroundColor}
            borderRadius="8px"
            padding="16px"
            width="100%"
            height="400px"
            display="flex"
            flexDirection="column"
            alignItems="center"
            textAlign="center"
            gap="8px"
            style={{cursor: 'pointer'}} // No direct `cursor` prop, so style is used
        >
            <Box
                component="img"
                src={image}
                alt={title}
                width="100%"
                height="150px"
                borderRadius="8px"
                sx={{objectFit: 'cover'}}
            />
            <Typography
                variant="h5"
                noWrap
                overflow="hidden"
                textOverflow="ellipsis"
                width="100%"
                align='left'
                color={theme.palette.background.default}
            >
                {title}
            </Typography>
            <Box textAlign="left" width="100%">
                <Typography
                    variant="body1"
                    overflow="hidden"
                    textOverflow="ellipsis"
                    display="-webkit-box"
                    align="left"
                    textAlign={"left"}
                    sx={{
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                    }}
                    color={theme.palette.background.default}
                >
                    {description}
                </Typography>
            </Box>
            <Box
                display="flex"
                gap="4px"
                justifyContent="center"
                overflow="hidden"
                flexWrap="wrap"
                marginTop="auto"
            >
                {technologies.map((tech, index) => (
                    <Chip key={index} label={tech}/>
                ))}
            </Box>
        </Box>
    </Link>
);

const SeeMyWorkSection = () => (
    <Box
        component="section"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        position="relative"
        padding="4rem 2rem"
        mt={32}
        mb={16}
    >
        <div className="polygon7"></div>
        <div className="polygon5"></div>
        <Typography variant="h4" gutterBottom>
            See My Work
        </Typography>
        <Box
            display="flex"
            gap={4}
            justifyContent="space-between"
            width="60%"
            maxWidth="1200px"
            mt={4}
            flexWrap="wrap"
        >
            <ProjectCard
                image="/project1.jpg"
                title="Project 1"
                description="Brief description of Project 1 lorem ipsum papapa mamama and this is long text ablablaa."
                technologies={['React', 'TypeScript', 'Material UI']}
                link="/portfolio/project1"
                backgroundColor="#f0f8ff"
            />
            <ProjectCard
                image="/project2.jpg"
                title="Project 2"
                description="Brief description"
                technologies={['Flutter', 'Firebase']}
                link="/portfolio/project2"
                backgroundColor="#fffaf0"
            />
            <ProjectCard
                image="/project3.jpg"
                title="Project 3"
                description="Brief description of Project 3."
                technologies={['Dart', 'SQL', 'GitHub']}
                link="/portfolio/project3"
                backgroundColor="#f5f5dc"
            />
        </Box>
        <Box mt={4} width="60%" display="flex" justifyContent="flex-end">
            <AnimatedButton text="GO TO PORTFOLIO" link="/portfolio"/>
        </Box>

    </Box>
);

const ContactSection = () => (
    <Box
        component="section"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        maxWidth="80%"
        mx="auto"
        textAlign="center"
        mt={32}
        mb={32}
    >
        <Typography variant="h2" color="secondary.main" gutterBottom>
            Want to work together?
        </Typography>
        <Button
            variant="contained"
            color="primary"
            sx={{
                mt: 2,
                typography: 'h5',
                color: theme.palette.secondary.light,
                fontWeight: 'regular',
            }}
        >
            Contact Me
        </Button>
    </Box>
);

const HomePage = () => {
    return (
        <Box>
            <IntroductionSection/>
            <AboutMeSection/>
            <SeeMyWorkSection/>
            <ContactSection/>
        </Box>
    );
}


export default HomePage;
