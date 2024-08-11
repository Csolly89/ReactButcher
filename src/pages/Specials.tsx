const dailies = [
    {
        day: "Monday" ,
        deal:  "20% off all ground meats, including beef, pork, and chicken. Perfect for making burgers, meatballs, or sauces.",
    },
    {
        day: "Tuesday" ,
        deal: "Buy one get one 50% off on premium steaks like ribeye or filet mignon. Ideal for a special dinner or grilling.",
    },
    {
        day: "Wednesday" ,
        deal: "15% off all wild game meats, such as venison, elk, or boar. Great for those looking to try something different.",
    },
    {
        day: "Thursday" ,
        deal:   "10% off on bulk purchases of sausages and deli meats. A good deal for stocking up for parties or quick meals.",
    },
    {
        day: "Friday" ,
        deal:   "25% off all roasts, including beef, pork, and lamb. Perfect for preparing a big family meal or weekend feast."
    },
]

function Specials() {
    return (
        <div>
        <div className='flex flex-row justify-center gap-5 flex-1 mr-[10rem]'>
                        {dailies.map(d => (
                            <div>
                            <h1>{d.day}</h1>
                            <p> {d.deal} </p>
                            </div>
                        ))}
                    </div>
        </div>
    );
}

export default Specials;