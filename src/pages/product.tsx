import { useParams } from "react-router-dom"

export function Product () {
    const { id } = useParams();

    return (
        <div className="product absolute w-[100vw] h-screen top-0 left-0">
            Страница продукта {id}
        </div>
    )
}