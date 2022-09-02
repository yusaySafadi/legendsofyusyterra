import 'dotenv/config'
import fetch from "node-fetch";
import express, { response } from "express";
import cors from "cors";


const PORT = 5000;
const app = express();
let allData;

app.use(cors());
const corsOptions ={
    origin: "http://localhost:3000"
};
const globalsEndpoint = "https://dd.b.pvp.net/latest/core/en_us/data/globals-en_us.json";
const requestEndpoint = "https://dd.b.pvp.net/latest/set1/en_us/data/set1-en_us.json";


app.get('/getData',cors(corsOptions), async(req, res) =>{
    
    
    const filtered = allData.filter(card => card.collectible === true).sort((card1, card2) => {
        if(card1.cost === card2.cost){
            if (card1.name < card2.name) {
                return -1;
            }
            if (card1.name > card2.name) {
                return 1;
            }
            return 0;
        }
        return card1.cost - card2.cost;
    });
    res.json(filtered);
    
    //res.json(filtered);
})
app.get("/matchHistory/:gameName/:tagLine",cors(corsOptions), async(req, res) =>{
    
    const user= await fetch(`https://europe.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${req.params.gameName}/${req.params.tagLine}?api_key=${process.env.API_KEY}`,{
        method:'GET'
    }).then(response => response.json());
    
    
    const matches = await fetch(`https://europe.api.riotgames.com/lor/match/v1/matches/by-puuid/${user.puuid}/ids?api_key=${process.env.API_KEY}`,{
        method:'GET'
    }).then(response => response.json());
    res.json(matches);
    
    
    
})
app.listen(PORT,()=>{
    let allSets;
    let mergedSets;
    const fetchOptions = {
        method:'GET'
    }
    const globalsResponse =  fetch(globalsEndpoint,fetchOptions).then(res=> {
        
        return res.json()}).then(async(globalData)=>{ 
           
        allSets = globalData.sets.filter(set => set.name !=="Events");
        
        mergedSets = await Promise.all(
            allSets.map((s,index) => {
               console.log(s);
           return fetch(`https://dd.b.pvp.net/latest/${s.nameRef.toLowerCase()}/en_us/data/${s.nameRef.toLowerCase()}-en_us.json`,fetchOptions).then(msg =>{
           return msg.json()})
        
        }))
        allData = mergedSets.flat(1);
        
       ;
    })
    /*const response = await fetch(requestEndpoint, fetchOptions);
    const r = await response.json();
    const filtered = r.filter(card => card.collectible === true).sort((card1, card2) => {
        return card1.cost - card2.cost;
    });*/
    console.log(`Server listening at http://localhost:${PORT}`);
});

