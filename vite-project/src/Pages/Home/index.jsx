import { useContext } from "react";
import { ShopContext } from "../../Context";
import Card from "../../Components/Card";
function Home() {
    const {items} = useContext(ShopContext)
        return (
        <>
        <h1 className="font-semibold text-lg mb-5">Home</h1>
        <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 md:p-6 md:m-0">
        {items?.map((item) => (
        <Card
        key={item.id}
        data={item}
        />
        ))}
        </section>
        </>
    )
}

export default Home
