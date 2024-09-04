import PerodentBadges from "./PerodentBadges"
import PerodentHotkeys from "./PerodentHotkeys"

const PerodentContent = () => {
    return (
        <div className='case-content'>
            <div className="text-block-section-wrap">
                <div className="text-block-content container container-border">
                    <div className="heading">About the client</div>
                    <div className="description">
                        <p>
                            Perodent was the internal name given to this project, a custom built tool for a private dental clinic based in Riyadh, Saudi Arabia.
                            Among many services, one important thing the clinic does is charting the periodontal health of its patients in a procedure known as a periodontal chart.
                            This kind of test are extensive and detailed, often taking about an hour and two people to complete.
                        </p>
                        <p>
                            The hygienist or dentist will be probing and checking for many flags in every dental piece, while the assistant inputs the values derived from the examination in the chart form.
                            The form can be difficult to navigate and more importantly, easy to get lost. Discordination between the dentist and the assistant can result in a catastrophe, offsetting all the values and setting back the charting to a checkpoint they know for sure they were in sync.
                            No matter how meticulously they check every field, human error can take place anytime.
                        </p> 
                    </div>
                </div>
            </div>
            <div className="text-block-section-wrap">
                <div className="text-block-content container container-border">
                    <div className="heading">The challenge</div>
                    <div className="description">
                        <p>
                            Perodent's main purpose is redesign and streamline the periodontal charting process, making it faster, cheaper to run, more intuitive to read and populate, and most importantly, it has to be done only by the dentist without interfering with the examination.

                        </p>
                        <p>
                            We were asked by the client to create a figma prototype to test with dentist; and the only conditions were the mentioned above: has to be faster, has to be intuitive and it needs to be performed by one professional insted of the professional and its assistant.
                        </p> 
                    </div>
                </div>
            </div>
            <div className="text-block-section-wrap">
                <div className="text-block-content container container-border">
                    <div className="heading">What we delivered</div>
                    <div className="description">
                        <p>
                            The traditional periodontal chart form sheet has roughly 960 form fields to populate in a A4 format, with little to none visual cues.
                            We had to break down the form into four steps, essentially dictated by the different ways the mouth can be sectioned. This approach prevents the overwhelm that comes from seeing all the information at once without a clear visual entry point. This involves one crucial UX Principle to forms of this characteristics, the Progressive Disclosure.
                        </p>
                        <p>
                            The absolute MVP of this solution is the ability to navigate and populate the whole form with only the keyboard, and more specifically the left side of it. As 90% of the examiners sit to the right of the patient the examination and probing happens mostly with the right hand, leaving the left hand sit in a natural position and free enough for populating the data into the form.
                            As a general rule, keyboard shorcuts also work beautifully boosting the productivity of power users, which completely applies in this scenario.
                        </p>
                    </div>
                    <PerodentHotkeys/>
                </div>
            </div>
            <div className="text-block-section-wrap">
                <div className="text-block-content container container-border">
                    <div className="heading">Measurable outcomes</div>
                    <div className="description">
                        <p>
                            We sucessfully targeted and solved every problem described by the client, improving all the business core KPI's and creating a great user experience.
                            For measuring the product UX we conducted a little survey comparing before and after the design treatment. Our test subject, a dentist friend of the client, rated the "Frustration Index" with 2/10 for our redesign, and 7/10 for the traditional approach.
                        </p>
                        <p>
                            For me it's not only about the business performance metrics, it's also about approaching the design in an user-centric way.
                            Focusing on the second always steers the business to the first, as there's a positive correlation between the two. Lastly, how it impacted the business:
                        </p>
                    </div>
                    <PerodentBadges/>
                </div>
            </div>
        </div>
    )
}

export default PerodentContent