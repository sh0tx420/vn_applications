import { useState } from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import {
    Typography, Card, Divider, CardContent, Select, TextField, MenuItem,
    Slider, RadioGroup, Radio, FormControl, FormControlLabel, Box
} from "@mui/material";
import { LoadingButton } from "@mui/lab";


export default function Home() {
    const [formdata, setFormdata] = useState({
        discordUser: "",
        steamID: "",
        age: 0,
        readRules: "false",  // why the fuck does react not want it to be a bool
        whyApplying: ""
    });

    const [btnLoad, setBtnLoad] = useState(false)

    /*
    // FUCK HANDLERS
    const wtfHandler = (wtf) => {
        setFormdata(dict => ({...dict, discordUser: wtf.target.value}))
    };
    */

    async function PostDiscord(webhook) {
        const data = {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json"
            },
            "body": {
                "content": "faggot"
            }
        };

        const response = await fetch(webhook, {
            method: "POST",
            mode: "cors",
            body: JSON.stringify(data)
        });

        const json = await response.json();
        return json;
    }

    async function getres() {
        PostDiscord("https://discord.com/api/webhooks/1059216841093955696/DHIzbPvNRdKxmS0X8dxTh3_b9XGK-gKN9YrNOFf7CSIb9TESlyvB6tDngkMnoDha71TO")
        .then(res => {
            return res.body
        })
    }

    return <>
        <Grid2 container justifyContent="center" alignItems="center" marginTop={2} marginX={10}>
            <Card elevation={6} sx={{ width: "100%", px: 2, pb: 2, pt: 1 }}>
                <Typography variant="h3" marginBottom={1}>Staff Application</Typography>
                <Divider />
                <CardContent>

                    <Typography marginBottom={1}>Which server are you applying for?</Typography>
                    <Select labelId="selectServer" value="VoidRP" label="VoidRP" disabled sx={{ mb: 4 }}>
                        <MenuItem value="VoidRP">
                            VoidRP
                        </MenuItem>
                    </Select>

                    <Typography marginBottom={1}>What is your Discord name and tag?</Typography>
                    <TextField placeholder="Username#0000" sx={{ mb: 4 }} onChange={
                        (e) => setFormdata(dict => ({...dict, discordUser: e.target.value}))
                    }/>

                    <Typography marginBottom={1}>What is your Steam ID?</Typography>
                    <TextField placeholder="STEAM_0:0:000000000" sx={{ mb: 4 }} onChange={
                        (e) => setFormdata(dict => ({...dict, steamID: e.target.value}))
                    }/>

                    <Typography marginBottom={1}>What is your age?</Typography>
                    <Slider valueLabelDisplay="auto" sx={{ mb: 4 }} onChange={
                        (e) => setFormdata(dict => ({...dict, age: e.target.value}))
                    }/>

                    <Typography marginBottom={1}>Have you read and understood all of the rules?</Typography>
                    <FormControl sx={{ mb: 4 }}>
                        <RadioGroup onChange={
                            (e) => setFormdata(dict => ({...dict, readRules: e.target.value}))
                        }>
                            <FormControlLabel value={true} control={<Radio/>} label="Yes" />
                            <FormControlLabel value={false} control={<Radio/>} label="No" />
                        </RadioGroup>
                    </FormControl>

                    <Typography marginBottom={1}>Why are you applying to become a staff member on VoidRP?</Typography>
                    <TextField fullWidth multiline sx={{ mb: 4 }} onChange={
                        (e) => setFormdata(dict => ({...dict, whyApplying: e.target.value}))
                    }/>

                </CardContent>

                <LoadingButton loading={btnLoad} variant="contained" onClick={
                    () => getres()
                }>
                    Submit
                </LoadingButton>
            </Card>
        </Grid2>

        <Box mt={10} />
        {JSON.stringify(formdata)}
    </>
}
