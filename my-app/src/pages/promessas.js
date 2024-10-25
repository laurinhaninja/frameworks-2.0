import Footer from "./modulos/footer";
import Menu from "./modulos/navbar";
import {Container} from "react-bootstrap";
export default function Promessas(){
    var pao = ""
    setTimeout (() => {
        document.title = "Promessa é dívida ";},2000);
    return <> 
    <Menu />
    <Container>
        Promessas()
    </Container>
    <Footer />
    </>
    }
