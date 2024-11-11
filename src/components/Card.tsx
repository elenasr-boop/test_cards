import { characterType } from "../types/characterType";

type CardProps = {
    card: characterType;
}

export function Card ({ card }: CardProps) {
    return (
        <div className="w-[180px] h-[215px] gap-3 flex flex-col border-[3px] border-solid border-[#CD63FF] p-4 text-ellipsis rounded-2xl">
            <p className="overflow-hidden whitespace-nowrap text-ellipsis">{card.name}</p>
            <img src={card.image} alt={card.name} className="w-36 h-36 object-cover rounded-full"/>
        </div>
    )
}