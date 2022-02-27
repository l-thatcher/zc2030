import CarbonCalculator from "../Components/CarbonCalculator"
import styles from "../styles/Calculator.module.css"

export default function Calculator() {

    // Using json data object for TESTING - This is going to be removed
    const jsonData = {
        Category1: [
            { id: '1', name:`Individual`, category: ['Food', `Transport`, `Energy`], results: [14, 56, 89] }
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

          {
              data.map((type, i) =>
                  <CarbonCalculator data={data[i].name} id={i} category={data[i].category} results={data[i].results}/>
              )
          }

      </div>
  )
}
