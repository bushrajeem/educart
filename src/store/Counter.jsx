
import { useCounterContext } from "./Counter.Store";

export const Counter = () => {
const {count, setCount} = useCounterContext();

    return(
        <div className="h-screen bg-gray-200 flex justify-center items-center">
            <div className="w-[400bpx] h-[200px] bg-white border-[1px]">
                <h1>Count: {count}</h1>
                <div className="flex justify-center gap-3 mt-5">
                    <button
                    onClick={() => setCount(count + 1)}
                    className="bg-primary text-white px-3 py-1">Increament</button>
                    <button
                    onClick={() => setCount(count - 1)}
                    className="bg-primary text-white px-3 py-1">decrement</button> 
                </div>
                hello
            </div>
        </div>
    )
}