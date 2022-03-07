import {useState} from "react";
import {Card, Nav} from "react-bootstrap";
import {buildStyles, CircularProgressbar} from "react-circular-progressbar";
// import {}
import "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
function CreateProjectCard(cardItem) {
    const variant = "primary";
    const idx = 0;
    return (

        // A card contains:
        // Project Image [class: ProjectBanner] cardItem.projectImage
        // Company Logo - cardItem.companyLogo
        // Cost Per Tonne - cardItem.cpt
        // Project Name - cardItem.projectName
        // Project Location - cardItem.projectLocation
        // Total Supply - cardItem.totalSupply
        // % of Supply sold - cardItem.percentageSold TODO: review where percentage is calculated
        // Button linked to its page - cardItem.projectInfoLink

        // This is used to map json of cards
        // [
        //
        // ].map((variant, idx) => (


// Basic example of a react-bootstrap card
        <Card
            bg={variant.toLowerCase()}
            key={idx}
            text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
            style={{ width: '18rem' }}
            className="mb-2"
        >
            <Card.Header>{cardItem.projectName}</Card.Header>
            <Card.Body>
                <Card.Title>{variant} Card Title </Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk
                    of the card's content.
                </Card.Text>
            </Card.Body>
        </Card>
    );

}

export default function Projects() {
    return (
        <CreateProjectCard projectImage={"Card 1"}
                           companyLogo={"https://www.chevening.org/wp-content/uploads/2019/07/Cardiff-University-logo-300x167.png"}
                           cpt={"£60"}
                           projectName={"Breccon Wind Farm"}
                           projectLocation={"Primary"}
                           totalSupply={"100"}
                           percentageSold={"10"}
                           projectInfoLink={"https://www.google.com"}
        />

    );


}

