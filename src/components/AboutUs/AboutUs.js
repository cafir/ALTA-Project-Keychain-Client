import React, {useState} from "react";
import { Collapse, Typography } from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import useStyles from "./styles";
import Logo from "../../images/logoKeychain.png"
import Logos from "../../images/logos.png"
import Reza from "../../images/reza.jpg"
import Zaki from "../../images/zaki.jpg"
import Lazu from "../../images/lazu.jpeg"

const AboutUs = () => {
    const classes = useStyles();
    const [openA, setOpenA] = useState(false)
    const [openB, setOpenB] = useState(false)
    const [openC, setOpenC] = useState(false)

    const handleClickA = () => {
        setOpenA(!openA);
    }
    const handleClickB = () => {
        setOpenB(!openB);
    }
    const handleClickC = () => {
        setOpenC(!openC);
    }

    return (
        <div className={classes.aboutUs}>
            <div>
                <Typography className={classes.titleAboutUs}>About Us</Typography>
            </div>
            <div onClick={handleClickA} className={classes.dropDown}>
                <div>
                    <Typography className={classes.titleSubAboutUs}>About KeyChain</Typography>
                </div>
                <div onClick={handleClickA} className={classes.arrow}>
                    {openA ? <ExpandLess /> : <ExpandMore />}
                </div>
            </div>
            <Collapse in={openA} timeout="auto" unmountOnExit>
                <div className={classes.isi}>
                    <Typography><b>History</b><br/>2020 <br/>The idea of ​​KeyChain stems from the difficulty of our founder (Reza) 
                    in managing the number of digital accounts he has. As we know and feel, nowadays human life 
                    cannot be separated from the digital world which requires having many platforms to support 
                    daily needs.<br/><br/>
                    September 2021<br/>
                    Reza took boot camp at Alterra Academy and focused on learning front-end engineering, 
                    at the end of the lecture the boot camp participants were required to make a final project, 
                    at that moment the idea of ​​"KeyChain" was born as a solution to Reza's difficulties in managing 
                    his digital accounts.<br/><br/>
                    8 November 2021<br/>
                    Then, the idea was presented and heard by Zaki and Lazzue, who were then interested in 
                    the idea and decided to join. Then, the “KeyChain Developer Team” was formed, combining 
                    the expertise of each member. Reza, who is an initiator and expert in MERN technology 
                    (MongoDB, Express, React.js, and Node.js), Zaki, who is an expert in user interface and 
                    refactoring into the web, and Lazzue who holds user experience in research, communication, 
                    and copywriting. The three members also mastered the basics of front-end development 
                    taught at Alterra Academy.<br/><br/>
                    23 November 2021<br/>
                    In a short time and good collaboration, the KeyChain Developer Team, successfully launched 
                    KeyChain. Various features continue to be developed to date.<br/><br/>
                    <b>Mission</b><br/>
                    “To protect your account from loss by accessing one place you can trust”
                    </Typography>
                </div>
            </Collapse>

            <div onClick={handleClickB} className={classes.dropDown}>
                <div>
                    <Typography className={classes.titleSubAboutUs}>Brand Identity</Typography>
                </div>
                <div onClick={handleClickB} className={classes.arrow}>
                    {openB ? <ExpandLess /> : <ExpandMore />}
                </div>
            </div>
            <Collapse in={openB} timeout="auto" unmountOnExit>
                <div className={classes.isi}>
                    <div className={classes.aboutCol}>
                        <Typography><b>KeyChain Logo</b></Typography>
                        <img className={classes.logo} src={Logo} alt="logo"/>
                        <Typography><br/>As a keychain, the KeyChain logo is a symbol of practicality, a handy device, 
                            used for many places, and safe for its users. This logo was created by Lazzue, 
                            inspired by keys and chains, which we often use in our daily life, that philosophy 
                            can now be applied to the KeyChain.<br/><br/>
                        </Typography>
                        <Typography><b>KeyChain Logo (Separated)</b></Typography>
                        <img className={classes.logo} src={Logos} alt="logos"/>
                        <Typography><br/>The main KeyChain logo is a combination of 3 keys stacked into one unit, 
                            symbolizing the KeyChain developed by 3 people (Reza, Zaki, and Lazu). 
                            Each key symbolizes its own philosophy: 
                        </Typography>
                        <div className={classes.isi}>
                            <Typography className={classes.blueKey}>
                                The Blue key, symbolizes security and serenity. 
                                It is hoped that users can calmly store their passwords in the KeyChain without 
                                fear of forgetting them.
                            </Typography>
                            <Typography className={classes.blackKey}>
                                The Black key, symbolizes solidity. 
                                It is hoped that KeyChain will become a solid app and consistent service over time.
                            </Typography>
                            <Typography className={classes.redKey}>
                                The Red key, symbolizes the future and innovation. We are committed to continuing 
                                to innovate and look to the future with the KeyChain development in a better direction.
                            </Typography>
                        </div>
                    </div>
                </div>
            </Collapse>

            <div onClick={handleClickC} className={classes.dropDown}>
                <div>
                    <Typography className={classes.titleSubAboutUs}>Our Awesome Team</Typography>
                </div>
                <div onClick={handleClickC} className={classes.arrow}>
                    {openC ? <ExpandLess /> : <ExpandMore />}
                </div>
            </div>
            <Collapse in={openC} timeout="auto" unmountOnExit>
                <div className={classes.isiTeam}>
                    <div className={classes.groupPhoto}>
                        <img className={classes.photo} src={Reza} alt="reza"/>
                        <Typography>
                            Muhammad Reza Firhan or also known as ecafirhan, is a front-end developer, 
                            mastering HTML, CSS, JavaScript, and React.js. Besides his expertise in front-end, 
                            he is also skilled in back-end and database, he also mastered Express, MySQL, 
                            PostgreSQL, MongoDB. Besides Alterra Academy, he has also taken Bachelor of Material 
                            Science at Brawijaya University and Back-End Engineer Trainee from Gojek.
                        </Typography>
                    </div>
                    <div className={classes.groupPhoto}>
                        <img className={classes.photo} src={Lazu} alt="lazu"/>
                        <Typography>
                            Lazuardi Pradipta Kasidyan or Lazzue is a front-end developer, mastering HTML, 
                            CSS, JavaScript, and React.js, besides that he also learned Python. 
                            Apart from his expertise in front-end development, he is also a graduate of 
                            Political Science from the University of Indonesia, has expertise in copywriting and 
                            research on user experience.
                        </Typography>
                    </div>
                    <div className={classes.groupPhoto}>
                        <img className={classes.photo} src={Zaki} alt="zaki"/>
                        <Typography>
                            Ahmad Zaki Waliuddin Hutomo is the best graduate of Informatics Engineering from the 
                            Potential Utama University of Medan. Besides mastering the front-end (HTML, CSS, JavaScript, and 
                            React.js) he also mastered user interface design using the Figma application.
                        </Typography>
                    </div>
                </div>
            </Collapse>
        </div>
    )   
}

export default AboutUs;