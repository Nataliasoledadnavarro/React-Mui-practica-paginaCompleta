import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';



const Cards = ({ informacion }) => {
    const cards = informacion.map((card) => {
        const heightHeader = card.plan === "Pro" ? 60 : 40
        return (
            <Grid item xs={4}>
                <Card sx={{ width: "100%", boxShadow: 3 }}>
                    <CardHeader title={card.plan} sx={{ height: heightHeader, bgcolor: "#E7EBF0", color: "primary.main", textAlign: "center" }} action={card.plan === "Pro" && <StarBorderIcon sx={{ color: "text.primary" }} />}
                        subheader={card.plan === "Pro" && "Most Popular"}>
                    </CardHeader>
                    <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                        <Box sx={{ display: "flex" }}><Typography sx={{ fontSize: 36 }}>$ {card.precio}</Typography> <Typography sx={{ fontSize: 20, color: "text.secondary", display: "flex", alignItems: "flex-end", mb: 1 }}>/mo</Typography></Box>
                        <Typography fontSize="18" fontWeight="bold">{card.usuarios} users included</Typography>
                        <Typography fontSize="18" fontWeight="bold">{card.gigas} GB of storage</Typography>
                        <Typography fontSize="18" fontWeight="bold">Help center access</Typography>
                        <Typography fontSize="18" fontWeight="bold">{card.soporte}</Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant={card.plan === "Pro" ? "contained" : "outlined"} sx={{ width: "95%", m: "auto", textTransform: 'lowercase', fontWeight: "bold" }}>{card.textButton}</Button>
                    </CardActions>
                </Card>
            </Grid>
        )
    })
    return (

        cards
    )
}

export default Cards;