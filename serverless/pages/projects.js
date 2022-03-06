import {useState} from "react";
import {Nav} from "react-bootstrap";




function CreateProjectCard(cardItem) {
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


        <div className="CardContainer">

            <img className="ProjectBanner"
                 src={cardItem.projectImage}/>

            <img className="CompanyLogo"
                 src={cardItem.companyLogo}/>

            <p className="CPTText">
                {cardItem.cpt}</p>

            <p className="ProjectNameText">
                {cardItem.projectName}</p>

            <p className="ProjectLocationText">
                {cardItem.projectLocation}</p>

            <p className="TotalSupplyText">
                {cardItem.totalSupply}</p>

            <p className="PercentageSoldText">
                {cardItem.percentageSold}</p>

            <button className="InfoButton"
                    href={cardItem.projectInfoLink}></button>






        </div>

    );
}

export default function Projects() {
    return (
        <div>
            <CreateProjectCard projectImage={"Card 1"}
                               companyLogo={"https://www.chevening.org/wp-content/uploads/2019/07/Cardiff-University-logo-300x167.png"}
                               cpt={"£60"}
                               projectName={"Breccon Wind Farm"}
                               projectLocation={"Breccon"}
                               totalSupply={"100"}
                               percentageSold={"10"}
                               projectInfoLink={"https://www.google.com"}
            />

            {/*<CreateProjectCard name="Card 2" />*/}
            {/*<CreateProjectCard name="Card 3" />*/}
        </div>
    );
}

