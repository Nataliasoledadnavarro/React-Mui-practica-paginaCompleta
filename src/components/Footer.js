import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
const Footer = () => {
    return (

        <footer>
            <Grid container xs={10} sx={{ m: "auto", pt: 3, alignItem: "center", justifyContent: "center" }}>
                <Grid item xs={3} sx={{ display: "flex", flexDirection: "column" }}>
                    <Typography variant="h6">Company</Typography>
                    <Link underline="none" sx={{ fontWeight: "bold", fontSize: 20 }}>Team</Link>
                    <Link underline="none" sx={{ fontWeight: "bold", fontSize: 20 }}>History</Link>
                    <Link underline="none" sx={{ fontWeight: "bold", fontSize: 20 }}>Contact Us</Link>
                    <Link underline="none" sx={{ fontWeight: "bold", fontSize: 20 }}>Locations</Link>
                </Grid>
                <Grid item xs={3} sx={{ display: "flex", flexDirection: "column" }}>
                    <Typography variant="h6">Features</Typography>
                    <Link underline="none" sx={{ fontWeight: "bold", fontSize: 20 }}>Cool stuff</Link>
                    <Link underline="none" sx={{ fontWeight: "bold", fontSize: 20 }}>Random feature</Link>
                    <Link underline="none" sx={{ fontWeight: "bold", fontSize: 20 }}>Team feature</Link>
                    <Link underline="none" sx={{ fontWeight: "bold", fontSize: 20 }}>Developer stuff</Link>
                    <Link underline="none" sx={{ fontWeight: "bold", fontSize: 20 }}>Another one</Link>
                </Grid>
                <Grid item xs={3} sx={{ display: "flex", flexDirection: "column" }}>
                    <Typography variant="h6">Resourses</Typography>
                    <Link underline="none" sx={{ fontWeight: "bold", fontSize: 20 }}>Resourse</Link>
                    <Link underline="none" sx={{ fontWeight: "bold", fontSize: 20 }}>Resourse name</Link>
                    <Link underline="none" sx={{ fontWeight: "bold", fontSize: 20 }}>Another resourse</Link>
                    <Link underline="none" sx={{ fontWeight: "bold", fontSize: 20 }}>Final resourse</Link>
                </Grid>
                <Grid item xs={3} sx={{ display: "flex", flexDirection: "column" }}>
                    <Typography variant="h6">Legal</Typography>
                    <Link underline="none" sx={{ fontWeight: "bold", fontSize: 20 }}>Privacy policy</Link>
                    <Link underline="none" sx={{ fontWeight: "bold", fontSize: 20 }}>Terms of use</Link>
                </Grid>
                <Grid item xs={10} sx={{ display: "flex", alignItem: "center", justifyContent: "center", pt: 5 }}>
                    <typography body2 > Copyright © <Link underline="none" sx={{ fontWeight: "bold", fontSize: 16 }}> Your Website</Link> 2022.</typography>
                </Grid>
            </Grid>
        </footer>



    )
}

export default Footer;