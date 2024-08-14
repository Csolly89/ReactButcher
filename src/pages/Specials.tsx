const dailies = [
    {
        day: "Veterans Monday" ,
        deal:  "20% off the entire shop for all veterans.",
    },
    {
        day: "Beefing Tuesday" ,
        deal: "Buy one get one 50% off on premium steaks like ribeye or filet mignon. Ideal for a special dinner or grilling.",
    },
    {
        day: "Grilling Wednesday" ,
        deal: "15% off all pork chop's .",
    },
    {
        day: "Lean Thursday" ,
        deal:   "10% off on Chicken products. A good deal for stocking up for parties or quick meals.",
    },
    {
        day: "BBq Friday" ,
        deal:   "25% off all roasts & ribs, including beef and pork products. Perfect for preparing a big family meal or weekend feast."
    },
]

function Specials() {
    return (
        <div className="ml-[6rem]">
        <div className='flex flex-row justify-center gap-5 flex-1 '>
                        {dailies.map(d => (
                            <div key={d.day}>
                            <h1>{d.day}</h1>
                            <p> {d.deal} </p>
                            </div>
                        ))}
                    </div>
        </div>
    );
}

export default Specials;