import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Cards from "./Cards";

const infoTarjetas = [{
    plan: "Free",
    precio: 0,
    usuarios: 10,
    gigas: 2,
    soporte: "Email support",
    textButton: "Sign up for free"
},
{
    plan: "Pro",
    precio: 15,
    usuarios: 20,
    gigas: 10,
    soporte: "Priority email support",
    textButton: "Get started"
},
{
    plan: "Enterprise",
    precio: 30,
    usuarios: 50,
    gigas: 30,
    soporte: "Phone & email support",
    textButton: "Contact us"
},
]


const Section = () => {
    return (
        <section>
            <Grid container xs={7} sx={{ m: "auto" }}>
                <Grid item sx={{ m: "auto" }}>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', fontSize: 30, mt: 5 }}>Pricing</Typography>
                </Grid>
                <Grid item>
                    <Typography sx={{ textAlign: 'center', fontWeight: 'bold', fontSize: 24, color: "text.secondary", mt: 2 }}>Quickly build an effective pricing table for your potential customers with this layout. It's built with default MUI components with little customization.</Typography>
                </Grid>
            </Grid>
            <Grid container xs={10} spacing={4} sx={{ m: "auto", mt: 6, display: "flex", alignItems: "flex-end" }}>
                <Cards informacion={infoTarjetas} />
            </Grid>
        </section>

    )
}

export default Section;