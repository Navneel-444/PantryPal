import { useEffect, useState } from "react";
import "./Dashboard.scss"
import axios from "axios";
import Recipe from "../../components/Recipe/Recipe";

export default function DashboardPage() {
    const [plan, setPlan] = useState()

    const getPlan = async () => {
        try {
            const res = await axios.get(`http://localhost:8080/recipes`)
            setPlan(res.data);
        } catch (e) {
            console.error(e)
        }
    };

    useEffect(() => {
        getPlan()
    }, []);


    return (
        <>
            {plan?.map((info) => {
                return (
                    <Recipe item={info} />
                )
            })}
        </>
    )
}