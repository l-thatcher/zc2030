import CarbonCalculator from "../Components/CarbonCalculator";
import styles from "../styles/Calculator.module.css";
import {useState} from "react";
import { Nav} from "react-bootstrap";

export default function Calculator() {

    const [value, setValue] = useState(0);

    // Using json data object for TESTING - This is going to be removed
    const jsonData = {
        Category1: [
            { id: '1', name:`Individual`, category: ['Food', `Transport`, `Energy`], results: [24, 56, 89] }
        ],
        Category2: [
            { id: '2', name:`Business`, category: ['Zoo', `Jungle`, `Forest`], results: [1, 98, 32]  }
        ],
        Category3: [
            { id: '3', name:`Food`, category: ['Football', `Rugby`, `Basketball`], results: [10, 100, 33]  }
        ],
        Category4: [
            { id: '4', name:`Drinks`, category: ['Water', `Vodka`, `Sprite`], results: [95, 100, 100]  }
        ],
        Category5: [
            { id: '5', name:`University`, category: ['Books', `Pencil`, `Rubber`], results: [5, 89, 10]  }
        ]
    };

    // Data with key values
    const data =  Object.keys(jsonData).reduce((accumulator, iterator) => {
        return [...accumulator, ...jsonData[iterator]];
    }, [])

  return (
      <div className={styles.container}>
        <h1 className={styles.h1} data-testid="main_heading">Carbon Calculators</h1>
          <div className="container-md" >
              <div className={styles.containerMargin5}>
                  <div className={styles.main}>
                      <Nav className={styles.nav} onSelect={(e) => setValue(e)} fill variant="tabs" defaultActiveKey={value}>
                          {
                              data.map((name, i) =>
                              <Nav.Item>
                                <Nav.Link className={styles.navItems} eventKey={i}>{data[i].name}</Nav.Link>
                              </Nav.Item>
                              )
                          }
                      </Nav>
                  </div>
              </div>

              <CarbonCalculator data type={data[value].name} category={data[value].category} results={data[value].results}/>

          </div>

      </div>
  )
}
