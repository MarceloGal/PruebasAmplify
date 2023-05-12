import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";

export default function ListaDinamicaForm () {
    const { control, handleSubmit } = useForm();

    const [fruitOptions, setFruitOptions] = useState(["apple", "banana", "pear"]);
    const [colorOptions, setColorOptions] = useState(["red", "green"]);

    const handleFruitChange = (selectedFruit) => {
    if (selectedFruit === "apple") {
        setColorOptions(["red", "green"]);
    } else if (selectedFruit === "banana") {
        setColorOptions(["yellow"]);
    } else {
        setColorOptions([]);
    }
    };

    useEffect(() => {
    setFruitOptions(["apple", "banana", "pear"]);
    }, []);

    const onSubmit = (data) => {
        console.log(data);
        // navigate("/cotizacion2");
    }

    return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="fruit">Fruit:</label>

        <Controller
        name="fruit"
        control={control}
        defaultValue=""
        render={({ field: { onChange } }) => (
            <select onChange={(e) => {
                onChange(e);
                handleFruitChange(e.target.value);
            }}>
            {fruitOptions.map((option) => (
                <option key={option} value={option}>
                {option}
                </option>
            ))}
            </select>
        )}
        />

        <label htmlFor="color">Color:</label>
        <Controller
        name="color"
        control={control}
        defaultValue=""
        render={({ field }) => (
            <select {...field}>
            {colorOptions.map((option) => (
                <option key={option} value={option}>
                {option}
                </option>
            ))}
            </select>
        )}
        />
        
        <button type="submit">Submit</button>
    </form>
    );
}