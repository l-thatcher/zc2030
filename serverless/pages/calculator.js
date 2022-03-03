import styles from "../styles/Calculator.module.css";
import {getCalculatorInputs, getCalculatorTypes} from "../services/CalculatorService";
import ListOfCalculators from "../Components/calculators/ListOfCalculators";

export default function Calculator(props) {

    // const [value, setValue] = useState(0);
    // const [types, setTypes] = useState();
    // const [inputs, setInputs] = useState();
    //
    // // GET API calls
    // const getCalculators = () => {
    //
    //     // Calls getCalculatorTypes service
    //     getCalculatorTypes().then((async res => {
    //             const data = await res.data
    //             setTypes(data);
    //             {
    //                 data.map((type, i) => (
    //                     getCalculatorData(type.id, i)
    //                 ))
    //             }
    //         }
    //     ))
    //         .catch((error) => {
    //             console.log(error)
    //         })
    // }
    //
    // const getCalculatorData = (id) => {
    //
    //     // Calls getCalculatorInputs service
    //     getCalculatorInputs(id).then((async res => {
    //             const data = await res.data
    //             setInputs(data);
    //         }
    //     ))
    //         .catch((error) => {
    //             console.log(error)
    //         })
    // }
    //
    // // UseEffect
    // useEffect(() => {
    //
    //     // Call getApplication
    //     getCalculators();
    //
    // }, [])
    //
    // // console.log(types);
    // // console.log(types[0].name);
    // // console.log(inputs);
    //
    // Using json data object for TESTING - This is going to be removed
    const jsonData = {
        Category1: [
            {
                id: "1",
                name: `Individual`,
                category: ["Food", `Transport`, `Energy`],
                results: [24, 56, 89],
            },
        ],
        Category2: [
            {
                id: "2",
                name: `Business`,
                category: ["Zoo", `Jungle`, `Forest`],
                results: [1, 98, 32],
            },
        ],
        Category3: [
            {
                id: "3",
                name: `Food`,
                category: ["Football", `Rugby`, `Basketball`],
                results: [10, 100, 33],
            },
        ],
        Category4: [
            {
                id: "4",
                name: `Drinks`,
                category: ["Water", `Vodka`, `Sprite`],
                results: [95, 100, 100],
            },
        ],
        Category5: [
            {
                id: "5",
                name: `University`,
                category: ["Books", `Pencil`, `Rubber`],
                results: [5, 89, 10],
            },
        ],
    };

    // Data with key values
    const data = Object.keys(jsonData).reduce((accumulator, iterator) => {
        return [...accumulator, ...jsonData[iterator]];
    }, []);

    return (
        <div className={styles.container}>
            <h1 className={styles.h1} data-testid="main_heading">
                Carbon Calculators
            </h1>
            <div className="container-md">
                <ListOfCalculators inputs={props.inputs} types={props.types}/>
            </div>
        </div>
    );
}
