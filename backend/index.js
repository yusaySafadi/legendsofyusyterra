import 'dotenv/config'
import fetch from "node-fetch";
import express from "express";
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

app.listen(PORT,()=>{
    let allSets;
    let mergedSets;
    const fetchOptions = {
        method:'GET'
    }
    const globalsResponse =  fetch(globalsEndpoint,fetchOptions).then(res=> res.json()).then(async(globalData)=>{
        allSets = globalData.sets.filter(set => set.name !== "Events");
        mergedSets = await Promise.all(
            allSets.map((s,index) => {
            return fetch(`https://dd.b.pvp.net/latest/set${index+1}/en_us/data/set${index+1}-en_us.json`,fetchOptions).then(msg =>msg.json())
        
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

