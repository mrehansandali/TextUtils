import React from 'react'

export default function About(props) {

    return (
        <div className='container'>
            <h1 className={`bg-${props.mode} text-${props.mode==="dark"?"light": "dark"}`}>About Us</h1>
            <div className="accordion accordion-flush " id="accordionFlushExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                        <button className={`accordion-button collapsed bg-${props.mode} text-${props.mode==="dark"?"light": "dark"}`} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Contact
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className={`accordion-body bg-${props.mode} text-${props.mode==="dark"?"light": "dark"}`}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo">
                        <button className={`accordion-button collapsed bg-${props.mode} text-${props.mode==="dark"?"light": "dark"}`} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            Website
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div className={`accordion-body bg-${props.mode} text-${props.mode==="dark"?"light": "dark"}`}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
