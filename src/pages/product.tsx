import { useParams } from "react-router-dom"

export function Product () {
    const { id } = useParams();

    console.log("id: ", id);
    return (
        <>This is page of product {id} </>
    )
}