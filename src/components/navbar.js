import {AppBar,Toolbar,styled,Typography} from '@mui/material';
import { NavLink } from 'react-router-dom';

const Header = styled(AppBar)`
    background: #ffffff;
`;

const Tabs = styled(NavLink)`
    color: Black;
    font-size: 20px;
    font-family: 'Poppins', cursive;
    margin-right: 40px;
    text-decoration: none;
`;
const Navbar = () =>{
    return(
        <Header position='static'>
            <Toolbar>
                <Typography
                    variant="h4"
                    sx={{
                        mr: 2,
                        display: { md: 'flex' },
                        fontFamily: 'Poppins',
                        fontWeight: 600,
                        letterSpacing: '.2rem',
                        color: 'black',
                        textDecoration: 'none',
                    }}
                >
                    InfoTQ
                </Typography>
                <Tabs to='/'>Home</Tabs>
                <Tabs to='/lis'>AllUsers</Tabs>
                <Tabs to='/reg'>AddUsers</Tabs>
            </Toolbar>
        </Header>
    )
}

export default Navbar;