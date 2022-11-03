import { useState } from "react";
import Card from "./card";

function Instruction(){
    const[viewCard, setCard] = useState(true);

return  <div>{viewCard && <Card setCard={setCard}></Card>}</div>
}
export default Instruction;