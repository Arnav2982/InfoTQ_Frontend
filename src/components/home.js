import { Typography, styled, Card, CardMedia, CardContent, CardActions, Button, Box, Grid, Container, Link } from "@mui/material";


const Container1 = styled('section')`
    width: 100%;
    margin: 4% auto 0 auto;
    & > div{
        margin-top: 20px;
    }
    font-family: 'Poppins';
`;

const Container2 = styled('section')``;

const Foot = styled(Box)`
    font-family: 'Poppins';
    color: #ffffff;
    background: #0f0c29;
    background: linear-gradient(to right, #24243e, #302b63, #0f0c29);
`;


const Home = () =>{
    return(
        <Container1>
            <Typography variant="h3" sx={{fontFamily: 'Poppins', color: 'white', textAlign: 'center', marginBottom: '3%'}}>Tech Blogs</Typography>
            <Typography variant="h4" sx={{fontFamily: 'Poppins', color: 'white', marginLeft: '50px'}}>Related Posts</Typography>

            <Container2 sx={{display: "flex", justifyContent: "space-between", flexWrap: "wrap"}}>
                <Card sx={{ maxWidth: 345, display: "inline-block", margin: '5% auto 5% auto' }}>
                    <CardMedia
                        component="img"
                        height="220"
                        image="https://i0.wp.com/lhblind.org/wp-content/uploads/2021/09/INL-Exterior-web.jpg?fit=2500%2C2001&ssl=1"
                        alt="green iguana"
                    />
                    <CardContent>
                        
                        <Typography variant="body2" color="text.secondary">
                        Meet Laura Hard, Inland Northwest Lighthouse Advisory Council Chair
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
                <Card sx={{ maxWidth: 345, display: "inline-block", margin: '5% auto 5% auto' }}>
                    <CardMedia
                        component="img"
                        height="220"
                        image="https://i0.wp.com/lhblind.org/wp-content/uploads/2022/07/Portrait-of-Shawn-Dobbs-a-light-skinned-man-wearing-a-blue-suit-and-smiling.jpg?fit=1800%2C1292&ssl=1"
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                        Shawn Dobbs Becomes New VP of Marketing & Public Relations
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </Container2>
        </Container1>
        
    )
}

export default Home;